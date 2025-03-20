"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import { Heart, ShoppingCart, Search, SlidersHorizontal, X } from "lucide-react" 
import { GetProducts } from "@/api/api"

// Định nghĩa kiểu dữ liệu chính xác
type Product = {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  features: string[]
  specifications: {
    weight: string
    origin: string
    holdLevel: string
    shineLevel: string
  }
  slug: string
  isNew: boolean
  isBestSeller: boolean
}

interface ProductGridProps {
  category: string
}

export default function ProductGrid({ category }: ProductGridProps) {
  const [getProducts, setGetProducts] = useState<Product[]>([])
  const [sortBy, setSortBy] = useState("newest")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [showFilters, setShowFilters] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecs, setSelectedSpecs] = useState<{
    holdLevel: string[];
    shineLevel: string[];
  }>({
    holdLevel: [],
    shineLevel: []
  })
  const router = useRouter()

  // Giá trị min và max của sản phẩm
  const priceStats = useMemo(() => {
    if (getProducts.length === 0) return { min: 0, max: 1000 };
    const prices = getProducts.map(p => p.price);
    return {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices))
    };
  }, [getProducts]);

  useEffect(() => {
    setPriceRange([priceStats.min, priceStats.max]);
  }, [priceStats]);

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const data = await GetProducts()
        if (isMounted) setGetProducts(data)
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error)
      }
    }
    fetchData()

    return () => {
      isMounted = false
    }
  }, [])

  // Định dạng giá tiền theo mẫu: 365,000 đ
  const formatPrice = (price: number) => {
    return (
      <div className="flex items-baseline">
        <span className="text-lg font-bold">{price.toLocaleString('vi-VN')}</span>
        <span className="text-lg font-bold ml-1">đ</span>
      </div>
    );
  };

  // Lấy tất cả các giá trị độ giữ nếp và độ bóng có trong sản phẩm
  const allSpecOptions = useMemo(() => {
    const holdLevels = new Set<string>();
    const shineLevels = new Set<string>();
    
    getProducts.forEach(product => {
      if (product.specifications?.holdLevel) {
        holdLevels.add(product.specifications.holdLevel);
      }
      if (product.specifications?.shineLevel) {
        shineLevels.add(product.specifications.shineLevel);
      }
    });
    
    return {
      holdLevels: Array.from(holdLevels),
      shineLevels: Array.from(shineLevels)
    };
  }, [getProducts]);

  // Toggle chức năng chọn thông số kỹ thuật
  const toggleSpecFilter = (type: 'holdLevel' | 'shineLevel', value: string) => {
    setSelectedSpecs(prev => {
      const currentValues = [...prev[type]];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [type]: currentValues.filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [type]: [...currentValues, value]
        };
      }
    });
  };

  // Lọc sản phẩm thông qua nhiều điều kiện
  const filteredProducts = useMemo(() => {
    return getProducts.filter(product => {
      // Lọc theo danh mục
      const categoryMatch = category === "all" || product.category === category;
      
      // Lọc theo giá
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Lọc theo từ khóa tìm kiếm
      const searchMatch = !searchTerm || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Lọc theo thông số kỹ thuật
      const holdLevelMatch = selectedSpecs.holdLevel.length === 0 || 
        (product.specifications?.holdLevel && selectedSpecs.holdLevel.includes(product.specifications.holdLevel));
      
      const shineLevelMatch = selectedSpecs.shineLevel.length === 0 || 
        (product.specifications?.shineLevel && selectedSpecs.shineLevel.includes(product.specifications.shineLevel));
      
      return categoryMatch && priceMatch && searchMatch && holdLevelMatch && shineLevelMatch;
    });
  }, [category, getProducts, priceRange, searchTerm, selectedSpecs]);

  // Sắp xếp sản phẩm
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.id - a.id; // Giả sử ID cao hơn là mới hơn
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "discount":
          const discountA = a.originalPrice ? a.originalPrice - a.price : 0;
          const discountB = b.originalPrice ? b.originalPrice - b.price : 0;
          return discountB - discountA;
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  // Tính toán % giảm giá
  const calculateDiscount = (originalPrice?: number, price?: number) => {
    if (!originalPrice || !price || originalPrice <= price) return null;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="relative">
      {/* Thanh tìm kiếm */}
      <div className="sticky top-0 z-10 bg-white pb-4 border-b mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          <div className="relative w-full sm:w-96">
            <Input
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            {searchTerm && (
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchTerm("")}
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Button 
              variant="outline" 
              className={`flex items-center gap-2 ${showFilters ? 'bg-orange-100 text-orange-700 border-orange-300' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={16} />
              <span>Bộ lọc</span>
              {(priceRange[0] > priceStats.min || priceRange[1] < priceStats.max || 
                selectedSpecs.holdLevel.length > 0 || selectedSpecs.shineLevel.length > 0) && (
                <Badge variant="secondary" className="ml-2 bg-orange-500 text-white">
                  {selectedSpecs.holdLevel.length + selectedSpecs.shineLevel.length + 
                    (priceRange[0] > priceStats.min || priceRange[1] < priceStats.max ? 1 : 0)}
                </Badge>
              )}
            </Button>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sắp xếp theo" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="newest">Mới nhất</SelectItem>
                <SelectItem value="price-asc">Giá tăng dần</SelectItem>
                <SelectItem value="price-desc">Giá giảm dần</SelectItem>
                <SelectItem value="name-asc">Tên A-Z</SelectItem>
                <SelectItem value="name-desc">Tên Z-A</SelectItem>
                <SelectItem value="discount">Giảm giá nhiều</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Bộ lọc mở rộng */}
        {showFilters && (
          <div className="bg-gray-50 p-4 rounded-lg mb-4 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Lọc theo giá */}
              <div>
                <h3 className="font-medium mb-3">Khoảng giá ({priceRange[0].toLocaleString('vi-VN')} đ - {priceRange[1].toLocaleString('vi-VN')} đ)</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[priceStats.min, priceStats.max]}
                    value={[priceRange[0], priceRange[1]]}
                    min={priceStats.min}
                    max={priceStats.max}
                    step={10}
                    onValueChange={(value) => setPriceRange([value[0], value[1]])}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{priceStats.min.toLocaleString('vi-VN')} đ</span>
                    <span>{priceStats.max.toLocaleString('vi-VN')} đ</span>
                  </div>
                </div>
              </div>
              
              {/* Lọc theo độ giữ nếp */}
              <div>
                <h3 className="font-medium mb-3">Độ giữ nếp</h3>
                <div className="flex flex-wrap gap-2">
                  {allSpecOptions.holdLevels.map(level => (
                    <Badge 
                      key={level}
                      variant={selectedSpecs.holdLevel.includes(level) ? "default" : "outline"}
                      className={`cursor-pointer ${selectedSpecs.holdLevel.includes(level) ? 'bg-orange-500 hover:bg-orange-600' : 'hover:bg-orange-100'}`}
                      onClick={() => toggleSpecFilter('holdLevel', level)}
                    >
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Lọc theo độ bóng */}
              <div>
                <h3 className="font-medium mb-3">Độ bóng</h3>
                <div className="flex flex-wrap gap-2">
                  {allSpecOptions.shineLevels.map(level => (
                    <Badge 
                      key={level}
                      variant={selectedSpecs.shineLevel.includes(level) ? "default" : "outline"}
                      className={`cursor-pointer ${selectedSpecs.shineLevel.includes(level) ? 'bg-orange-500 hover:bg-orange-600' : 'hover:bg-orange-100'}`}
                      onClick={() => toggleSpecFilter('shineLevel', level)}
                    >
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Nút reset bộ lọc */}
            <div className="flex justify-end mt-4">
              <Button 
                variant="outline" 
                className="text-gray-600"
                onClick={() => {
                  setPriceRange([priceStats.min, priceStats.max]);
                  setSelectedSpecs({ holdLevel: [], shineLevel: [] });
                  setSearchTerm("");
                }}
              >
                Xóa bộ lọc
              </Button>
            </div>
          </div>
        )}
        
        {/* Hiển thị số lượng sản phẩm */}
        <div className="text-sm text-gray-600">
          Hiển thị {sortedProducts.length} sản phẩm {category !== "all" ? `trong danh mục "${category}"` : ""}
        </div>
      </div>
      
      {/* Lưới sản phẩm */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id}>
              <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Ảnh sản phẩm */}
                  <div 
                    className="relative aspect-square cursor-pointer overflow-hidden" 
                    onClick={() => router.push(`/stone/${product.id}`)}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-full"
                    />

                    {/* Nhãn giảm giá */}
                    {product.originalPrice && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center">
                        -{calculateDiscount(product.originalPrice, product.price)}%
                      </div>
                    )}

                    {/* Badges */}
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      {product.isNew && (
                        <div className="bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-full">NEW</div>
                      )}
                      {product.isBestSeller && (
                        <div className="bg-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-full">BEST SELLER</div>
                      )}
                    </div>
                    
                    {/* Quick actions overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="rounded-full bg-white hover:bg-orange-50 text-gray-800 hover:text-orange-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Thêm vào yêu thích - implement later
                        }}
                      >
                        <Heart size={18} />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="rounded-full bg-white hover:bg-orange-50 text-gray-800 hover:text-orange-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Quick view - implement later
                        }}
                      >
                        <Search size={18} />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Product content */}
                  <div className="p-4 flex flex-col flex-grow">
                    {/* Category */}
                    <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                    
                    {/* Name */}
                    <h3 
                      className="font-medium mb-2 group-hover:text-orange-500 transition-colors line-clamp-2 cursor-pointer"
                      onClick={() => router.push(`/stone/${product.id}`)}
                    >
                      {product.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.description}</p>
                    
                    <div className="mt-auto">
                      {/* Specs */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.specifications?.holdLevel && (
                          <div className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                            <span className="font-medium">Giữ nếp:</span> {product.specifications.holdLevel}
                          </div>
                        )}
                        {product.specifications?.shineLevel && (
                          <div className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                            <span className="font-medium">Bóng:</span> {product.specifications.shineLevel}
                          </div>
                        )}
                      </div>
                      
                      {/* Price and add to cart */}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <div className="flex items-baseline gap-2">
                            <div className="text-red-600 font-medium">
                              {formatPrice(product.price)}
                            </div>
                            {product.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">
                                {product.originalPrice.toLocaleString('vi-VN')} đ
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <Button 
                          size="sm" 
                          className="rounded-full bg-orange-500 hover:bg-orange-600 text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Thêm vào giỏ hàng - implement later
                          }}
                        >
                          <ShoppingCart size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <div className="text-5xl mb-4">😕</div>
          <h3 className="text-xl font-medium mb-2">Không tìm thấy sản phẩm nào</h3>
          <p className="text-gray-600 mb-6">Vui lòng thử lại với bộ lọc khác</p>
          <Button 
            onClick={() => {
              setPriceRange([priceStats.min, priceStats.max]);
              setSelectedSpecs({ holdLevel: [], shineLevel: [] });
              setSearchTerm("");
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Xóa bộ lọc
          </Button>
        </div>
      )}
    </div>
  )
}