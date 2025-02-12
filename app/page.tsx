import TopBanner from "@/components/top-banner"
import Navbar from "@/components/navbar"
import HeroSlider from "@/components/hero-slider"
import ServicePackages from "@/components/service-packages"
import ProductShowcase from "@/components/product-showcase"
import BlogSection from "@/components/blog-section"
import HotHairstyles from "@/components/hot-hairstyles"
import CelebrityVisits from "@/components/celebrity-visits"
import LookbookCarousel from "@/components/lookbook-carousel"
import VideoSection from "@/components/video-section"
import YoutubeBanner from "@/components/youtube-banner"
import BenefitsSection from "@/components/benefits-section"
import CommitmentSection from "@/components/commitment-section"
import StoreLocations from "@/components/store-locations"
import MainFooter from "@/components/main-footer"

export default function Home() {
  return (
    <main>
      {/* <TopBanner />
      <Navbar /> */}
      <HeroSlider />
      <ServicePackages />
      <ProductShowcase />
      <BlogSection />
      <HotHairstyles />
      <CelebrityVisits />
      <LookbookCarousel />
      <VideoSection />
      <YoutubeBanner />
      <BenefitsSection />
      <CommitmentSection />
      {/* <StoreLocations /> */}
    </main>
  )
}

