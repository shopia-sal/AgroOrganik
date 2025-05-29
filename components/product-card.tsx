"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Star, ShoppingCart, Plus, Check, Leaf, Sparkles, Award} from 'lucide-react'
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [isAdding, setIsAdding] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setIsAdding(true)

    // Simulate a small delay for the animation
    setTimeout(() => {
      addToCart(product, 1)
      toast({
        title: "Produk ditambahkan",
        description: `${product.name} telah ditambahkan ke keranjang.`,
      })
      setIsAdding(false)
    }, 500)
  }

  const handleLike = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  // Calculate discount percentage if not provided but originalPrice exists
  const discountPercentage =
    product.discount || (product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0)

  return (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl
      ${
        product.featured
          ? "ring-2 ring-green-400 shadow-xl shadow-green-100/50 bg-gradient-to-br from-white to-green-50/30"
          : "border border-gray-100 hover:shadow-xl shadow-lg"
      }`}
    >
      <Link href={`/products/${product.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">Lihat detail {product.name}</span>
      </Link>

      {/* Enhanced Featured badge */}
      {product.featured && (
        <div className="absolute -right-12 top-8 z-20 rotate-45 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-white py-2 px-12 text-xs font-bold shadow-lg border-2 border-yellow-300">
          <div className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>UNGGULAN</span>
          </div>
        </div>
      )}

      {/* Product Image with enhanced effects */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)] bg-[length:20px_20px]"></div>
        </div>

        <div className="absolute inset-0 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1">
          <Image
            src={product.image || "/placeholder.svg?height=300&width=300&text=No+Image"}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500" />
        </div>

        {/* Enhanced discount badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1 shadow-xl border-2 border-red-400/50">
              <span>-{discountPercentage}%</span>
              <Sparkles className="w-3 h-3" />
            </div>
          </div>
        )}

        {/* Enhanced quick add button */}
        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          <Button
            size="sm"
            className={`rounded-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-xl border-2 border-green-400/50 ${
              isAdding ? "scale-90" : "scale-100"
            } transition-all duration-200 backdrop-blur-md`}
            onClick={handleAddToCart}
          >
            {isAdding ? (
              <Check className="h-4 w-4 mr-1" />
            ) : (
              <Plus className="h-4 w-4 mr-1" />
            )}
            <span className="text-xs font-medium">Keranjang</span>
          </Button>
        </div>

        {/* Enhanced certifications */}
        {product.certifications?.length > 0 && (
          <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-1">
            {product.certifications?.slice(0, 2).map((cert) => (
              <Badge
                key={cert}
                variant="outline"
                className="bg-white/95 backdrop-blur-md text-[10px] px-2 py-1 font-medium text-gray-700 flex items-center gap-1 border-green-200 shadow-lg"
              >
                <ShieldCheck className="h-2.5 w-2.5 text-green-600" />
                {cert}
              </Badge>
            ))}
          </div>
        )}

        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/0 via-green-400/0 to-green-300/0 group-hover:from-green-500/10 group-hover:via-green-400/5 group-hover:to-green-300/10 transition-all duration-500"></div>
      </div>

      {/* Enhanced Product Info */}
      <div className="p-5 relative">
        {/* Decorative line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>

        {/* Category with enhanced styling */}
        {product.category && (
          <div className="mb-2">
            <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
              <Leaf className="h-3 w-3 text-green-500" />
              {product.category}
            </span>
          </div>
        )}

        {/* Enhanced product name */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[2.5rem] group-hover:text-green-700 transition-colors duration-300 text-base">
          {product.name}
        </h3>

        {/* Enhanced ratings */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 transition-colors duration-200 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1 font-medium">
              ({product.reviewCount || 0})
            </span>
          </div>

          {/* Quality indicator */}
          {product.rating >= 4.5 && (
            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-100 rounded-full">
              <Award className="h-3 w-3 text-yellow-600" />
              <span className="text-xs text-yellow-700 font-medium">Top Rated</span>
            </div>
          )}
        </div>

        {/* Enhanced price section */}
        <div className="mt-4 flex items-end justify-between">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900">
                Rp{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  Rp{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {product.unit && (
              <span className="text-xs text-gray-500 mt-1">per {product.unit}</span>
            )}
          </div>

          {/* Enhanced cart button */}
          <Button
            size="icon"
            variant="ghost"
            className="z-20 relative h-10 w-10 rounded-full bg-gradient-to-br from-green-50 to-emerald-50 text-green-700 hover:from-green-100 hover:to-emerald-100 hover:text-green-800 border border-green-200 shadow-md hover:shadow-lg transition-all duration-300"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Tambahkan ke keranjang</span>
          </Button>
        </div>
      </div>

      {/* Enhanced bottom accent for featured products */}
      {product.featured && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500"></div>
      )}

      {/* Floating particles for featured products */}
      {product.featured && (
        <>
          <div className="absolute top-1/4 left-4 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500 delay-200"></div>
          <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500 delay-400"></div>
        </>
      )}
    </div>
  )
}
