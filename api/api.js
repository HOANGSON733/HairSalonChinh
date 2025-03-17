import axios from 'axios';

const API_URL = "http://localhost:5000"; // Thêm `const` và sửa dấu `=` đúng

export const GetBlogs = async () => {
    try {
        const response = await axios.get(`${API_URL}/blogs`);
        return response.data.data; // Trả về `data` thay vì toàn bộ `AxiosResponse`
    } catch (error) {
        console.error("Lỗi khi lấy blogs:", error);
        return []; // Trả về mảng rỗng để tránh lỗi `undefined`
    }
};

export const GetService = async () => {
    try {
        const response = await axios.get(`${API_URL}/services`);
        return response.data.data; // Trả về `data` thay vì toàn bộ `AxiosResponse`
    } catch (error) {
        console.error("Lỗi khi lấy service:", error);
        return []; // Trả về mảng rỗng để tránh lỗi `undefined`
    }
};

export const GetProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data.data;
    } catch (error) {
        console.log("Lỗi trong API", error);
    }
};



export const GetDetailBlog = async (id) => {
    try {
      if (!id) {
        throw new Error("id không hợp lệ!");
      }
      console.log("Fetching blog with id:", id); // Debug id
      const response = await axios.get(`${API_URL}/blogs/${id}`);
      console.log("API response:", response.data);
      if (response.status === 200 && response.data && response.data.data) {
        
        return response.data.data;
      } else {
        console.warn("Dữ liệu trả về không hợp lệ:", response);
        return null;
      }
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết blog:", error);
      return null;
    }
  };



export const GetDetail = async (category, slug) => {
    try {
        const response = await axios.get(`${API_URL}/detail/${category}/${slug}`);
        return response.data.data;
    } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
        return null; // Trả về null để tránh lỗi `undefined`
    }
};

export const GetGallery = async () => {
    try {
        const response = await axios.get(`${API_URL}/gallery`);
        return response.data.data;
    } catch (error) {
        console.error("Lỗi khi lấy gallery:", error);
        return [];
    }
}
