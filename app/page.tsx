import Link from "next/link"
import ProductCard from "@/components/product-card"
import WhyChooseUs from "@/components/why-choose-us"
import CategorySection from "@/components/category-section"
import HeroSection from "@/components/hero-section"
import { getFeaturedProducts, getCategories } from "@/lib/data"
import {
  Leaf,
  Star,
  ChevronRight,
  Shield,
  Award,
  CheckCircle,
  BadgeCheck,
  Sparkles,
  TrendingUp,
  Crown,
  Globe,
  Target,
  Verified,
} from "lucide-react"

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  const categories = getCategories()

  return (
    <main className="flex-1">
      <HeroSection />

      {/* Enhanced Categories Section */}
      <section className="relative py-20 bg-gradient-to-b from-green-50 via-white to-gray-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium mb-6 shadow-lg border border-green-200">
              <Leaf className="w-4 h-4 mr-2" />
              <span>Kategori Produk</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Temukan Produk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Sesuai Kebutuhan
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Kami menyediakan berbagai kategori produk organik berkualitas untuk kebutuhan pertanian Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {categories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Products Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Enhanced background with multiple layers */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50/30"></div>

          {/* Decorative patterns */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.1)_0%,transparent_50%)] bg-[length:100px_100px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.1)_0%,transparent_50%)] bg-[length:80px_80px]"></div>
          </div>

          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-green-200/40 to-emerald-300/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-green-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-200/30 to-green-300/20 rounded-full blur-xl animate-pulse delay-500"></div>

          {/* Geometric shapes */}
          <div className="absolute top-32 right-1/4 w-16 h-16 border border-green-200/30 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-12 h-12 border border-emerald-200/40 rounded-full"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Enhanced section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              {/* Enhanced badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 via-yellow-50 to-orange-100 text-yellow-800 text-sm font-medium mb-6 shadow-lg border border-yellow-200">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <div className="absolute inset-0 animate-ping">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-75" />
                    </div>
                  </div>
                  <span>Produk Unggulan</span>
                  <Crown className="w-4 h-4 text-yellow-600" />
                </div>
              </div>

              {/* Enhanced title */}
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                Produk{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-700">
                  Terbaik Kami
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Koleksi produk pilihan dengan kualitas terbaik, sertifikasi lengkap, dan rating tertinggi dari pelanggan
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">100% Organik</div>
                    <div className="text-xs text-gray-500">Tersertifikasi</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Rating 4.8+</div>
                    <div className="text-xs text-gray-500">Kepuasan tinggi</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="mt-8 md:mt-0">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1"
              >
                <span>Lihat Semua Produk</span>
                <div className="flex items-center gap-1">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>

          {/* Enhanced product grid */}
          <div className="relative">
            {/* Grid background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-transparent to-emerald-50/50 rounded-3xl"></div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 p-8">
              {featuredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="transform transition-all duration-500"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-green-200 rounded-tl-lg"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-emerald-200 rounded-tr-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-green-200 rounded-bl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-emerald-200 rounded-br-lg"></div>
          </div>

          {/* Bottom section with additional info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-600">Produk baru ditambahkan setiap minggu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Certification Partners Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Enhanced background with sophisticated layers */}
        <div className="absolute inset-0">
          {/* Primary gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900"></div>

          {/* Secondary overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-green-800/50 via-transparent to-blue-900/30"></div>

          {/* Animated mesh gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.3)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.2)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
          </div>

          {/* Dynamic floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-green-400/20 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-green-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>

          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="certification-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="white" opacity="0.3" />
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#certification-grid)" />
            </svg>
          </div>

          {/* Accent lines with animation */}
          <div className="absolute top-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent"></div>
          <div className="absolute top-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
          <div className="absolute bottom-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        </div>

        <div className="relative container px-4 md:px-6 z-10">
          {/* Enhanced section header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            {/* Premium badge */}
            <div className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-green-900/60 to-emerald-900/40 backdrop-blur-xl rounded-full border border-green-400/30 text-green-200 text-sm font-medium mb-8 shadow-2xl">
              <div className="relative">
                <BadgeCheck className="w-5 h-5" />
                <div className="absolute inset-0 animate-ping">
                  <BadgeCheck className="w-5 h-5 opacity-75" />
                </div>
              </div>
              <span>Kualitas Terjamin</span>
              <Verified className="w-5 h-5 text-green-300" />
            </div>

            {/* Enhanced title with gradient text */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">Lembaga Sertifikasi</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-cyan-300">
                Terpercaya
              </span>
            </h2>

            <p className="text-green-100/90 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Produk kami telah mendapatkan sertifikasi dari lembaga-lembaga terkemuka internasional yang menjamin
              kualitas, keamanan, dan standar organik tertinggi
            </p>

            {/* Enhanced stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-1">15+</div>
                <div className="text-sm text-green-200/80">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300 mb-1">100%</div>
                <div className="text-sm text-green-200/80">Produk Tersertifikasi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300 mb-1">50K+</div>
                <div className="text-sm text-green-200/80">Petani Terpercaya</div>
              </div>
            </div>
          </div>

          {/* Enhanced trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                text: "Produk Tersertifikasi",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Award className="w-6 h-6" />,
                text: "Standar Internasional",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                text: "Teruji Laboratorium",
                color: "from-blue-500 to-cyan-500",
              },
              { icon: <Globe className="w-6 h-6" />, text: "Diakui Global", color: "from-purple-500 to-pink-500" },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced certification showcase */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central achievement circle */}
            <div className="relative mx-auto w-64 h-64 mb-12 md:mb-0 md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-30">
              {/* Outer glow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-500/20 rounded-full blur-xl animate-pulse"></div>

              {/* Main circle */}
              <div className="absolute inset-4 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center border-4 border-green-200/50">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <Verified className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-green-700 font-bold text-2xl mb-2">100%</div>
                  <div className="text-green-800 font-semibold text-sm mb-1">Produk Organik</div>
                  <div className="text-green-600 text-xs">Tersertifikasi Resmi</div>
                </div>
              </div>

              {/* Rotating border */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-green-300/50 animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>
            </div>

            {/* Enhanced certification grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                {
                  src: "/certification/logo-organik.png",
                  alt: "Organik Indonesia",
                  desc: "Sertifikasi Organik",
                  year: "2020",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  src: "/certification/logo-sucofindo.png",
                  alt: "Sucofindo",
                  desc: "Pengujian Kualitas",
                  year: "2019",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  src: "/certification/logo-bpom.png",
                  alt: "BPOM",
                  desc: "Keamanan Produk",
                  year: "2021",
                  color: "from-red-500 to-pink-500",
                },
                {
                  src: "/certification/logo-pertanian.png",
                  alt: "Kementerian Pertanian",
                  desc: "Standar Pertanian",
                  year: "2018",
                  color: "from-yellow-500 to-orange-500",
                },
              ].map((cert, index) => (
                <div key={index} className="flex flex-col items-center group">
                  {/* Enhanced certification card */}
                  <div className="relative bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full aspect-square flex items-center justify-center transition-all duration-700 hover:shadow-3xl hover:shadow-green-900/30 overflow-hidden border border-white/30 group-hover:scale-105 group-hover:-translate-y-2">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-3xl`}></div>
                    </div>

                    {/* Floating decorative elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-green-100/60 to-emerald-200/40 rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"></div>

                    {/* Logo */}
                    <img
                      src={cert.src || "/placeholder.svg?height=120&width=200"}
                      alt={cert.alt}
                      className="max-h-[60%] max-w-[60%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110 drop-shadow-lg"
                    />

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full"></div>

                    {/* Year badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                      {cert.year}
                    </div>

                    {/* Description badge */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 flex items-center gap-2 shadow-lg">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                      <span>{cert.desc}</span>
                    </div>
                  </div>

                  {/* Enhanced title */}
                  <div className="mt-6 text-center">
                    <h3 className="text-green-200 font-semibold text-base mb-1 group-hover:text-green-100 transition-colors duration-300">
                      {cert.alt}
                    </h3>
                    <p className="text-green-300/70 text-sm">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced bottom section */}
          <div className="mt-24 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-green-100/90 text-lg mb-8 leading-relaxed">
                Kami berkomitmen untuk menyediakan produk organik berkualitas tinggi yang telah melalui proses
                sertifikasi ketat dari lembaga-lembaga terpercaya internasional
              </p>

              {/* Call to action */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/certifications"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1"
                >
                  <span>Lihat Semua Sertifikat</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/quality"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 border border-white/20 hover:border-white/30"
                >
                  <Target className="w-4 h-4" />
                  <span>Standar Kualitas</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -left-32 top-1/4 w-64 h-64 border border-green-400/20 rounded-full"></div>
          <div className="absolute -right-24 bottom-1/4 w-32 h-32 border border-emerald-400/20 rounded-full"></div>
          <div className="absolute top-20 right-1/4 w-16 h-16 border border-cyan-400/30 rounded-full"></div>
        </div>
      </section>

      {/* why choose us */}
      <WhyChooseUs />
    </main>
  )
}
