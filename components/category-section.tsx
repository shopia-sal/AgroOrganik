import Link from "next/link"
import Image from "next/image"
import { Leaf, Bug, Sprout, Wrench, ChevronRight, Sparkles, Star } from 'lucide-react'

function getCategoryIcon(categoryId: string) {
  switch (categoryId) {
    case "pupuk_organik":
      return <Leaf className="w-6 h-6" />
    case "biopestisida":
      return <Bug className="w-6 h-6" />
    case "bibit_organik":
      return <Sprout className="w-6 h-6" />
    case "alat_pertanian":
      return <Wrench className="w-6 h-6" />
    default:
      return <Leaf className="w-6 h-6" />
  }
}

function getCategoryGradient(categoryId: string) {
  switch (categoryId) {
    case "pupuk_organik":
      return {
        primary: "from-green-500 via-emerald-500 to-green-600",
        secondary: "from-green-100 to-emerald-100",
        accent: "from-green-50 to-emerald-50",
        text: "text-green-700",
        border: "border-green-200"
      }
    case "biopestisida":
      return {
        primary: "from-red-500 via-rose-500 to-red-600",
        secondary: "from-red-100 to-rose-100",
        accent: "from-red-50 to-rose-50",
        text: "text-red-700",
        border: "border-red-200"
      }
    case "bibit_organik":
      return {
        primary: "from-emerald-500 via-teal-500 to-emerald-600",
        secondary: "from-emerald-100 to-teal-100",
        accent: "from-emerald-50 to-teal-50",
        text: "text-emerald-700",
        border: "border-emerald-200"
      }
    case "alat_pertanian":
      return {
        primary: "from-amber-500 via-yellow-500 to-amber-600",
        secondary: "from-amber-100 to-yellow-100",
        accent: "from-amber-50 to-yellow-50",
        text: "text-amber-700",
        border: "border-amber-200"
      }
    default:
      return {
        primary: "from-green-500 via-emerald-500 to-green-600",
        secondary: "from-green-100 to-emerald-100",
        accent: "from-green-50 to-emerald-50",
        text: "text-green-700",
        border: "border-green-200"
      }
  }
}

export default function CategorySection({ category }) {
  const colors = getCategoryGradient(category.id)

  return (
    <Link
      href={`/products?category=${category.id}`}
      className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2"
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 opacity-30">
        <div className={`w-full h-full rounded-full bg-gradient-to-br ${colors.secondary} group-hover:scale-125 transition-transform duration-700`}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-4 right-8 w-2 h-2 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500 delay-100"></div>
      <div className="absolute top-8 right-12 w-1 h-1 bg-gradient-to-r from-green-300 to-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500 delay-300"></div>

      {/* Image container with enhanced effects */}
      <div className="relative w-full aspect-square overflow-hidden">
        {/* Image overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500 z-10"></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.primary} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
        
        <Image
          src={category.image || `/placeholder.svg?height=400&width=400&text=${encodeURIComponent(category.name)}`}
          alt={category.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

        {/* Enhanced category badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-lg border ${colors.border} group-hover:bg-white group-hover:shadow-xl transition-all duration-300`}>
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.primary} animate-pulse`}></div>
            <span className={`text-xs font-semibold ${colors.text}`}>{category.name}</span>
          </div>
        </div>

        {/* Quality indicator */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-yellow-100/95 backdrop-blur-md border border-yellow-200">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-medium text-yellow-700">Premium</span>
          </div>
        </div>
      </div>

      {/* Enhanced content section */}
      <div className="relative p-6 flex-1 flex flex-col">
        {/* Floating icon with enhanced design */}
        <div className="absolute -top-10 right-6 z-30">
          <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${colors.primary} flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            {/* Icon glow effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.primary} blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
            <div className="relative text-white drop-shadow-lg">
              {getCategoryIcon(category.id)}
            </div>
            
            {/* Sparkle effect */}
            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Content with enhanced typography */}
        <div className="mt-6">
          <h3 className={`text-xl font-bold text-gray-800 mb-3 group-hover:${colors.text.replace('text-', 'text-')} transition-colors duration-300`}>
            {category.name}
          </h3>

          <p className="text-sm text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            Produk {category.name} berkualitas tinggi dengan sertifikasi organik dan standar internasional
          </p>
        </div>

        {/* Enhanced call-to-action */}
        <div className="mt-auto">
          {/* Decorative line */}
          <div className={`w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4 group-hover:via-gray-300 transition-colors duration-300`}></div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className={`text-sm font-semibold ${colors.text} group-hover:text-opacity-80 transition-all duration-300`}>
                Lihat Produk
              </span>
              <span className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                Tersedia {Math.floor(Math.random() * 20) + 5}+ item
              </span>
            </div>
            
            <div className="relative">
              {/* Button with enhanced effects */}
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.primary} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
              
              {/* Ripple effect */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.primary} opacity-0 group-hover:opacity-30 animate-ping`}></div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.primary} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </Link>
  )
}
