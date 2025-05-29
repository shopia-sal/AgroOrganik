"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Leaf,
  CircleDollarSign,
  ChevronDown,
  ChevronUp,
  X,
  RefreshCw,
  ShieldCheck,
  Check,
  Sparkles,
  Filter,
  Star,
  Award,
} from "lucide-react"

export default function FilterSidebar({
  categories,
  certifications,
  selectedCategories,
  selectedCertifications,
  priceRange,
  setPriceRange,
  handleCategoryChange,
  handleCertificationChange,
  clearAllFilters,
  maxPrice = 1000000,
  className = "",
}) {
  const [openSections, setOpenSections] = useState({
    categories: true,
    certifications: true,
    price: true,
  })

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const activeFiltersCount =
    selectedCategories.length + selectedCertifications.length + (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0)

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Enhanced Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 via-green-50 to-emerald-50 p-6 border border-green-100">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200/30 to-emerald-200/20 rounded-full -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-300/20 to-green-200/10 rounded-full -ml-8 -mb-8"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-lg">
                <Filter className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Filter Produk</h3>
                <p className="text-sm text-gray-600">Temukan produk sesuai kebutuhan</p>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="flex items-center gap-2">
                <Badge className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full shadow-md">
                  {activeFiltersCount} Filter
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-green-700 hover:text-green-800 hover:bg-green-100 h-8 px-3 rounded-full transition-all duration-200"
                >
                  <RefreshCw className="h-3.5 w-3.5 mr-1" />
                  Reset
                </Button>
              </div>
            )}
          </div>

          {/* Enhanced Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Filter Aktif:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((catId) => {
                  const category = categories.find((c) => c.id === catId)
                  return (
                    <Badge
                      key={`cat-${catId}`}
                      variant="outline"
                      className="bg-white/80 backdrop-blur-sm text-green-700 border-green-200 hover:bg-green-50 py-2 pl-3 pr-2 rounded-full shadow-sm transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full overflow-hidden bg-green-100 flex-shrink-0">
                          <Image
                            src={category?.image || "/placeholder.svg?height=16&width=16"}
                            alt=""
                            width={16}
                            height={16}
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs font-medium">{category?.name}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 rounded-full hover:bg-green-200/50 transition-colors duration-200"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            handleCategoryChange(catId)
                          }}
                        >
                          <X className="h-2.5 w-2.5" />
                        </Button>
                      </div>
                    </Badge>
                  )
                })}
                {selectedCertifications.map((certId) => {
                  const cert = certifications.find((c) => c.id === certId)
                  return (
                    <Badge
                      key={`cert-${certId}`}
                      variant="outline"
                      className="bg-white/80 backdrop-blur-sm text-blue-700 border-blue-200 hover:bg-blue-50 py-2 pl-3 pr-2 rounded-full shadow-sm transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-3 w-3 text-blue-600" />
                        <span className="text-xs font-medium">{cert?.name}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 rounded-full hover:bg-blue-200/50 transition-colors duration-200"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            handleCertificationChange(certId)
                          }}
                        >
                          <X className="h-2.5 w-2.5" />
                        </Button>
                      </div>
                    </Badge>
                  )
                })}
                {(priceRange[0] > 0 || priceRange[1] < maxPrice) && (
                  <Badge
                    variant="outline"
                    className="bg-white/80 backdrop-blur-sm text-yellow-700 border-yellow-200 hover:bg-yellow-50 py-2 pl-3 pr-2 rounded-full shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <CircleDollarSign className="h-3 w-3 text-yellow-600" />
                      <span className="text-xs font-medium">
                        Rp{priceRange[0].toLocaleString()} - Rp{priceRange[1].toLocaleString()}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 rounded-full hover:bg-yellow-200/50 transition-colors duration-200"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setPriceRange([0, maxPrice])
                        }}
                      >
                        <X className="h-2.5 w-2.5" />
                      </Button>
                    </div>
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Categories Section */}
      <Collapsible open={openSections.categories} onOpenChange={() => toggleSection("categories")}>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between p-4 cursor-pointer group hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-all duration-200">
                  <Leaf className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-200">
                    Kategori Produk
                  </h4>
                  <p className="text-sm text-gray-500">Pilih kategori yang diinginkan</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {selectedCategories.length > 0 && (
                  <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    {selectedCategories.length}
                  </Badge>
                )}
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0 hover:bg-green-100 rounded-full">
                  {openSections.categories ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-4 pb-4">
              <Separator className="mb-4 bg-gray-100" />
              <div className="space-y-2 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                      selectedCategories.includes(category.id)
                        ? "bg-green-50 border border-green-200 shadow-sm"
                        : "hover:bg-gray-50 border border-transparent"
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                      className="text-green-600 border-green-300 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                    />
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-sm">
                        <Image
                          src={category.image || "/placeholder.svg?height=40&width=40"}
                          alt={category.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <Label
                          htmlFor={`category-${category.id}`}
                          className="font-medium text-sm cursor-pointer hover:text-green-700 transition-colors duration-200 line-clamp-1"
                        >
                          {category.name}
                        </Label>
                        <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{category.description}</p>
                      </div>
                    </div>
                    {selectedCategories.includes(category.id) && (
                      <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>

      {/* Enhanced Certifications Section */}
      <Collapsible open={openSections.certifications} onOpenChange={() => toggleSection("certifications")}>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between p-4 cursor-pointer group hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-200">
                  <ShieldCheck className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    Sertifikasi
                  </h4>
                  <p className="text-sm text-gray-500">Pilih sertifikasi yang diperlukan</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {selectedCertifications.length > 0 && (
                  <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                    {selectedCertifications.length}
                  </Badge>
                )}
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0 hover:bg-blue-100 rounded-full">
                  {openSections.certifications ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-4 pb-4">
              <Separator className="mb-4 bg-gray-100" />
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className={`group relative flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      selectedCertifications.includes(cert.id)
                        ? "border-blue-300 bg-blue-50 shadow-md ring-2 ring-blue-200/50"
                        : "border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm"
                    }`}
                    onClick={() => handleCertificationChange(cert.id)}
                  >
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white shadow-sm">
                      <Image
                        src={cert.logo || "/placeholder.svg?height=48&width=48"}
                        alt={cert.name}
                        width={48}
                        height={48}
                        className="object-contain p-1"
                      />
                      {selectedCertifications.includes(cert.id) && (
                        <div className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full p-1 shadow-md">
                          <Check className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <span className="text-xs font-medium text-gray-900 line-clamp-2">{cert.name}</span>
                      {selectedCertifications.includes(cert.id) && (
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <Award className="h-3 w-3 text-blue-600" />
                          <span className="text-xs text-blue-600 font-medium">Dipilih</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>

      {/* Enhanced Price Range Section */}
      <Collapsible open={openSections.price} onOpenChange={() => toggleSection("price")}>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between p-4 cursor-pointer group hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center group-hover:from-yellow-200 group-hover:to-yellow-300 transition-all duration-200">
                  <CircleDollarSign className="h-5 w-5 text-yellow-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors duration-200">
                    Rentang Harga
                  </h4>
                  <p className="text-sm text-gray-500">Atur budget sesuai kebutuhan</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {(priceRange[0] > 0 || priceRange[1] < maxPrice) && (
                  <Badge className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Custom</Badge>
                )}
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0 hover:bg-yellow-100 rounded-full">
                  {openSections.price ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-4 pb-4">
              <Separator className="mb-6 bg-gray-100" />
              <div className="space-y-6">
                {/* Price Display */}
                <div className="flex justify-between items-center gap-4">
                  <div className="flex-1 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4 text-center">
                    <div className="text-xs text-green-700 font-medium mb-1">Minimum</div>
                    <div className="text-lg font-bold text-green-800">Rp{priceRange[0].toLocaleString()}</div>
                  </div>
                  <div className="w-8 h-px bg-gradient-to-r from-green-300 to-green-400"></div>
                  <div className="flex-1 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4 text-center">
                    <div className="text-xs text-green-700 font-medium mb-1">Maksimum</div>
                    <div className="text-lg font-bold text-green-800">Rp{priceRange[1].toLocaleString()}</div>
                  </div>
                </div>

                {/* Enhanced Slider */}
                <div className="px-2">
                  <Slider
                    defaultValue={[0, maxPrice]}
                    max={maxPrice}
                    step={10000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="[&>span]:bg-gradient-to-r [&>span]:from-green-500 [&>span]:to-green-600 [&>span]:h-2 [&>span]:rounded-full [&>span]:shadow-sm"
                  />
                </div>

                {/* Enhanced Preset Buttons */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">Preset Populer:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 50000, label: "< 50rb", color: "green" },
                      { value: 100000, label: "< 100rb", color: "blue" },
                      { value: 250000, label: "< 250rb", color: "purple" },
                      { value: maxPrice, label: "Semua", color: "gray" },
                    ].map((preset) => (
                      <Button
                        key={preset.value}
                        variant="outline"
                        size="sm"
                        className={`text-xs h-10 rounded-xl transition-all duration-200 ${
                          priceRange[1] === preset.value
                            ? "bg-green-50 border-green-300 text-green-700 shadow-md ring-2 ring-green-200/50"
                            : "border-gray-200 hover:border-green-300 hover:bg-green-50"
                        }`}
                        onClick={() => setPriceRange([0, preset.value])}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              preset.color === "green"
                                ? "bg-green-500"
                                : preset.color === "blue"
                                  ? "bg-blue-500"
                                  : preset.color === "purple"
                                    ? "bg-purple-500"
                                    : "bg-gray-500"
                            }`}
                          ></div>
                          <span className="font-medium">{preset.label}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>

      {/* Enhanced Apply Button */}
      <div className="pt-2">
        <Button className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
          <Filter className="h-4 w-4 mr-2" />
          Terapkan Filter ({activeFiltersCount})
        </Button>
      </div>
    </div>
  )
}
