"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import ProductCard from "@/components/product-card"
import FilterSidebar from "./filter-sidebar"
import { getAllProducts, getCategories, getCertifications } from "@/lib/data"
import {
  Search,
  SlidersHorizontal,
  X,
  Star,
  ArrowUpDown,
  LayoutGrid,
  List,
  Filter,
  Sparkles,
  TrendingUp,
  Tag,
  Leaf,
  Award,
  ShoppingBag,
  Target,
  CheckCircle,
  Shield,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function ProductsPage() {
  const allProducts = getAllProducts()
  const categories = getCategories()
  const certifications = getCertifications()

  const [products, setProducts] = useState(allProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedCertifications, setSelectedCertifications] = useState([])
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [sortBy, setSortBy] = useState("featured")
  const [isFiltersVisible, setIsFiltersVisible] = useState(true)
  const [viewMode, setViewMode] = useState("grid")
  const [activeTab, setActiveTab] = useState("all")

  const maxPrice = Math.max(...allProducts.map((product) => product.price))

  // Filter products based on selected filters
  useEffect(() => {
    let filtered = allProducts

    if (activeTab === "featured") {
      filtered = filtered.filter((product) => product.featured)
    } else if (activeTab === "discounted") {
      filtered = filtered.filter((product) => product.originalPrice && product.originalPrice > product.price)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category))
    }

    if (selectedCertifications.length > 0) {
      filtered = filtered.filter((product) =>
        product.certifications.some((cert) => selectedCertifications.includes(cert)),
      )
    }

    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        break
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    setProducts(filtered)
  }, [searchTerm, selectedCategories, selectedCertifications, priceRange, sortBy, allProducts, activeTab])

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleCertificationChange = (certification) => {
    setSelectedCertifications((prev) =>
      prev.includes(certification) ? prev.filter((c) => c !== certification) : [...prev, certification],
    )
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedCertifications([])
    setPriceRange([0, maxPrice])
    setSearchTerm("")
    setActiveTab("all")
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (selectedCategories.length > 0) count += selectedCategories.length
    if (selectedCertifications.length > 0) count += selectedCertifications.length
    if (priceRange[0] > 0 || priceRange[1] < maxPrice) count += 1
    return count
  }

  const activeFiltersCount = getActiveFiltersCount()

  return (
    <main className="flex-1 bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 bg-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-100/50 rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-emerald-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-yellow-100/60 rounded-full blur-xl"></div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)] bg-[length:60px_60px]"></div>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced badge */}
            <div className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-8 shadow-sm">
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span>Koleksi Produk Organik Terlengkap</span>
              <Sparkles className="w-4 h-4 text-green-600" />
            </div>

            {/* Enhanced title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-gray-900">Semua Produk</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-700">
                Organik Berkualitas
              </span>
            </h1>

            {/* Enhanced description */}
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Jelajahi koleksi lengkap produk organik premium dengan{" "}
                <span className="font-semibold text-green-700">sertifikasi resmi</span> dan{" "}
                <span className="font-semibold text-green-700">rating kualitas tinggi</span> untuk mendukung pertanian
                berkelanjutan dan hasil panen yang optimal.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-100 shadow-sm">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700 font-medium">100% Tersertifikasi</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-100 shadow-sm">
                  <Award className="w-4 h-4 text-yellow-600" />
                  <span className="text-gray-700 font-medium">Rating 4.8+ Bintang</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-100 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 font-medium">Kualitas Terjamin</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">{allProducts.length}+</div>
                <div className="text-sm text-gray-500">Produk Tersedia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">15+</div>
                <div className="text-sm text-gray-500">Kategori Produk</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">10K+</div>
                <div className="text-sm text-gray-500">Petani Terpercaya</div>
              </div>
            </div>

            {/* Quick filter tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                {
                  id: "all",
                  label: "Semua Produk",
                  icon: <LayoutGrid className="w-4 h-4" />,
                  count: allProducts.length,
                },
                {
                  id: "featured",
                  label: "Unggulan",
                  icon: <Star className="w-4 h-4" />,
                  count: allProducts.filter((p) => p.featured).length,
                },
                {
                  id: "discounted",
                  label: "Diskon",
                  icon: <Tag className="w-4 h-4" />,
                  count: allProducts.filter((p) => p.originalPrice && p.originalPrice > p.price).length,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-green-600 text-white shadow-lg shadow-green-600/25"
                      : "bg-white text-gray-600 border border-gray-200 hover:bg-green-50 hover:text-green-700 hover:border-green-200"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <Badge
                    className={`ml-1 ${activeTab === tab.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"}`}
                  >
                    {tab.count}
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 pb-16">
        {/* Enhanced Search and Controls */}
        <div className="relative mb-8">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Enhanced Search */}
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600">
                  <Search className="h-5 w-5" />
                </div>
                <Input
                  placeholder="Cari produk organik, biopestisida, pupuk, bibit..."
                  className="pl-12 pr-12 h-12 border-green-200/50 focus-visible:ring-green-500 bg-white/80 backdrop-blur-sm rounded-xl text-base placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 hover:bg-green-100 rounded-full"
                    onClick={() => setSearchTerm("")}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
                {/* Search suggestions */}
                {searchTerm && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-40 overflow-y-auto">
                    <div className="p-2">
                      <div className="text-xs text-gray-500 px-3 py-2">Saran pencarian:</div>
                      {["pupuk organik", "biopestisida", "bibit unggul", "alat pertanian"].map((suggestion) => (
                        <button
                          key={suggestion}
                          className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setSearchTerm(suggestion)}
                        >
                          <Search className="h-3 w-3 inline mr-2 text-gray-400" />
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Controls */}
              <div className="flex flex-wrap gap-3">
                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[240px] h-12 border-green-200/50 bg-white/80 backdrop-blur-sm rounded-xl">
                    <div className="flex items-center">
                      <ArrowUpDown className="mr-2 h-4 w-4 text-green-600" />
                      <SelectValue placeholder="Urutkan" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-xl border-green-100 rounded-xl">
                    <SelectItem value="featured">
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4 text-yellow-500" />
                        <span className="text-green-600">Produk Unggulan</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="price-low">
                      <div className="flex items-center">
                        <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-green-600">Harga: Rendah ke Tinggi</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="price-high">
                      <div className="flex items-center">
                        <TrendingUp className="mr-2 h-4 w-4 text-red-500 rotate-180" />
                        <span className="text-green-600">Harga: Tinggi ke Rendah</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="rating">
                      <div className="flex items-center">
                        <Award className="mr-2 h-4 w-4 text-yellow-500" />
                        <span className="text-green-600">Rating Tertinggi</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="newest">
                      <div className="flex items-center">
                        <Sparkles className="mr-2 h-4 w-4 text-blue-500" />
                        <span className="text-green-600">Produk Terbaru</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl p-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-10 w-10 rounded-lg transition-all duration-200 ${
                      viewMode === "grid"
                        ? "bg-white text-green-700 shadow-sm"
                        : "text-gray-600 hover:text-green-700 hover:bg-white/50"
                    }`}
                    onClick={() => setViewMode("grid")}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-10 w-10 rounded-lg transition-all duration-200 ${
                      viewMode === "list"
                        ? "bg-white text-green-700 shadow-sm"
                        : "text-gray-600 hover:text-green-700 hover:bg-white/50"
                    }`}
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="lg:hidden relative h-12 text-green-600 border-green-200/50 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-green-50"
                    >
                      <Filter className="h-4 w-4 mr-2 text-green-600" />
                      Filter
                      {activeFiltersCount > 0 && (
                        <Badge className="absolute -top-2 -right-2 bg-green-600 text-green-600 h-6 w-6 p-0 flex items-center justify-center rounded-full text-xs">
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[320px] bg-white/95 backdrop-blur-xl border-green-100">
                    <div className="py-4">
                      <FilterSidebar
                        categories={categories}
                        certifications={certifications}
                        selectedCategories={selectedCategories}
                        selectedCertifications={selectedCertifications}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        handleCategoryChange={handleCategoryChange}
                        handleCertificationChange={handleCertificationChange}
                        clearAllFilters={clearAllFilters}
                        maxPrice={maxPrice}
                      />
                    </div>
                    <SheetClose asChild>
                      <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 h-12 rounded-xl">
                        Terapkan Filter
                      </Button>
                    </SheetClose>
                  </SheetContent>
                </Sheet>

                {/* Desktop Filter Toggle */}
                <Button
                  variant="outline"
                  className="hidden lg:flex h-12 text-green-600 border-green-200/50 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-green-50"
                  onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2 text-green-600" />
                  {isFiltersVisible ? "Sembunyikan Filter" : "Tampilkan Filter"}
                  {activeFiltersCount > 0 && (
                    <Badge className="ml-2 bg-green-600 text-white h-5 w-5 p-0 flex items-center justify-center rounded-full text-xs">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>

            {/* Active Filters Display */}
            {activeFiltersCount > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Filter aktif:</span>
                  </div>
                  {selectedCategories.map((category) => (
                    <Badge
                      key={category}
                      variant="secondary"
                      className="bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer rounded-full px-3 py-1"
                      onClick={() => handleCategoryChange(category)}
                    >
                      <Leaf className="h-3 w-3 mr-1" />
                      {category}
                      <X className="h-3 w-3 ml-1" />
                    </Badge>
                  ))}
                  {selectedCertifications.map((cert) => (
                    <Badge
                      key={cert}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer rounded-full px-3 py-1"
                      onClick={() => handleCertificationChange(cert)}
                    >
                      <Shield className="h-3 w-3 mr-1" />
                      {cert}
                      <X className="h-3 w-3 ml-1" />
                    </Badge>
                  ))}
                  {(priceRange[0] > 0 || priceRange[1] < maxPrice) && (
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 cursor-pointer rounded-full px-3 py-1"
                      onClick={() => setPriceRange([0, maxPrice])}
                    >
                      Rp{priceRange[0].toLocaleString()} - Rp{priceRange[1].toLocaleString()}
                      <X className="h-3 w-3 ml-1" />
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full px-3"
                  >
                    <X className="h-3 w-3 mr-1" />
                    Hapus semua
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Desktop Sidebar */}
          {isFiltersVisible && (
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-xl sticky top-24">
                <FilterSidebar
                  categories={categories}
                  certifications={certifications}
                  selectedCategories={selectedCategories}
                  selectedCertifications={selectedCertifications}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  handleCategoryChange={handleCategoryChange}
                  handleCertificationChange={handleCertificationChange}
                  clearAllFilters={clearAllFilters}
                  maxPrice={maxPrice}
                />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {products.length > 0 ? (
              <>
                <div className="mb-4 text-sm text-gray-500">
                  Menampilkan {products.length} dari {allProducts.length} produk
                </div>
                <div
                  className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}
                >
                  {products.map((product) => (
                    <div key={product.id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-green-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <Search className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Tidak ada produk yang ditemukan</h3>
                <p className="text-muted-foreground mb-6">Coba ubah filter pencarian Anda</p>
                <Button variant="outline" onClick={clearAllFilters} className="border-green-200">
                  Hapus semua filter
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
