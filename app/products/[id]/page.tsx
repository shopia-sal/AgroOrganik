"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Truck, ShieldCheck, Leaf } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/lib/data"
import ProductCard from "@/components/product-card"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"

export default function ProductPage({ params }) {
  const { id } = params
  const product = getProductById(id)
  const relatedProducts = getRelatedProducts(id)
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="container px-4 md:px-6 py-12 text-center bg-white">
        <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
        <p className="mb-6">Produk yang Anda cari tidak tersedia atau telah dihapus.</p>
        <Button asChild variant="default">
          <a href="/products">Kembali ke Daftar Produk</a>
        </Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    toast({
      title: "Produk ditambahkan ke keranjang",
      description: `${quantity} x ${product.name} telah ditambahkan ke keranjang belanja Anda.`,
    })
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <main className="flex-1 py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-sm border border-gray-100">
              <Image
                src={product.image || "/placeholder.svg?height=600&width=600"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-lg border border-gray-100 shadow-sm hover:border-gray-300 transition-all cursor-pointer"
                >
                  <Image
                    src={`/placeholder.svg?height=150&width=150&text=Image ${i}`}
                    alt={`Product image ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} ulasan)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="text-3xl font-bold text-gray-900">Rp{product.price.toLocaleString()}</div>
              {product.originalPrice && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-gray-500 line-through">Rp{product.originalPrice.toLocaleString()}</span>
                  <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">
                    Hemat {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                </div>
              )}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert) => (
                <Badge
                  key={cert}
                  variant="secondary"
                  className="flex items-center gap-1 bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {cert}
                </Badge>
              ))}
            </div>

            {/* Quality Rating */}
            <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
              <h3 className="font-semibold flex items-center gap-2 text-emerald-800">
                <Leaf className="h-5 w-5 text-emerald-600" />
                Rating Kualitas
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Kandungan Organik</span>
                  <div className="w-40 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${product.qualityRatings.organic}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{product.qualityRatings.organic}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Efektivitas</span>
                  <div className="w-40 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${product.qualityRatings.effectiveness}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{product.qualityRatings.effectiveness}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Keamanan</span>
                  <div className="w-40 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${product.qualityRatings.safety}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{product.qualityRatings.safety}%</span>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="rounded-none h-12 w-12"
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={increaseQuantity} className="rounded-none h-12 w-12">
                  +
                </Button>
              </div>
              <Button className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700" onClick={handleAddToCart}>
                Tambahkan ke Keranjang
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <Truck className="h-5 w-5 text-emerald-600" />
              <span>Pengiriman ke seluruh Indonesia</span>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16 bg-white rounded-xl border border-gray-100 shadow-sm">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-50 rounded-t-xl border-b border-gray-100">
              <TabsTrigger value="description" className="py-4 data-[state=active]:bg-white">
                Deskripsi
              </TabsTrigger>
              <TabsTrigger value="specifications" className="py-4 data-[state=active]:bg-white">
                Spesifikasi
              </TabsTrigger>
              <TabsTrigger value="reviews" className="py-4 data-[state=active]:bg-white">
                Ulasan
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-6 rounded-b-xl">
              <div className="prose max-w-none text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tentang Produk</h3>
                <p>{product.description}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel
                  ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
                  ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Nulla facilisi.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Manfaat</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ramah lingkungan dan aman bagi ekosistem</li>
                  <li>Meningkatkan kesuburan tanah secara alami</li>
                  <li>Bebas dari bahan kimia berbahaya</li>
                  <li>Hasil panen lebih sehat dan berkualitas</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Cara Penggunaan</h3>
                <p>
                  Ikuti petunjuk penggunaan yang tertera pada kemasan. Untuk hasil optimal, gunakan secara rutin sesuai
                  dengan jadwal yang direkomendasikan.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="p-6 rounded-b-xl">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Informasi Produk</h3>
                    <div className="grid grid-cols-2 gap-y-3 text-sm">
                      <span className="text-gray-600">Berat</span>
                      <span className="font-medium text-gray-900">{product.weight} kg</span>
                      <span className="text-gray-600">Dimensi</span>
                      <span className="font-medium text-gray-900">{product.dimensions}</span>
                      <span className="text-gray-600">Produsen</span>
                      <span className="font-medium text-gray-900">{product.manufacturer}</span>
                      <span className="text-gray-600">Tanggal Produksi</span>
                      <span className="font-medium text-gray-900">{product.productionDate}</span>
                      <span className="text-gray-600">Masa Simpan</span>
                      <span className="font-medium text-gray-900">{product.shelfLife}</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Komposisi</h3>
                    <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
                      {product.ingredients?.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-900">Sertifikasi</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {product.certifications.map((cert) => (
                      <div
                        key={cert}
                        className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-all"
                      >
                        <div className="w-14 h-14 mx-auto mb-3 bg-emerald-100 rounded-full flex items-center justify-center">
                          <ShieldCheck className="h-7 w-7 text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-6 rounded-b-xl">
              <div className="space-y-8">
                <div className="flex items-center gap-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">{product.rating}</div>
                    <div className="flex mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{product.reviewCount} ulasan</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const percentage = Math.round(
                        ((product.ratingDistribution?.[star] || 0) / product.reviewCount) * 100,
                      )
                      return (
                        <div key={star} className="flex items-center gap-3">
                          <span className="text-sm w-6 font-medium text-gray-700">{star}</span>
                          <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                          <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${percentage}%` }}></div>
                          </div>
                          <span className="text-sm w-10 font-medium text-gray-700">{percentage}%</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Review List */}
                <div className="space-y-6">
                  {product.reviews?.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-medium">
                            {review.author.charAt(0)}
                          </div>
                          <span className="font-medium text-gray-900">{review.author}</span>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">{review.date}</div>
                      <p className="mt-3 text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Produk Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
