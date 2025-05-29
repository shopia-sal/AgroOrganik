import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Shield, Award, Sparkles, Star } from "lucide-react"
import { Sprout } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#0a1f0f] via-[#0d2818] to-[#1a4d2e] overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-green-400/30 to-emerald-600/20 blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-yellow-400/20 to-green-500/30 blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500/10 to-green-400/10 blur-[80px]"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)] bg-[length:100px_100px]"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-green-400/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-yellow-300/80 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-emerald-400/70 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white space-y-8">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-green-900/60 to-emerald-900/40 border border-green-400/40 rounded-full backdrop-blur-sm shadow-lg shadow-green-900/30">
              <span className="mr-3 text-green-300 animate-pulse">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="text-sm font-medium text-green-100 tracking-wide uppercase">
                We Are Producing Natural Product
              </span>
            </div>

            {/* Enhanced Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white drop-shadow-lg">Produk AgroOrganik</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-yellow-300 to-emerald-400 animate-pulse">
                &
              </span>
              <br />
              <span className="text-white drop-shadow-lg">Biopestisida Berkualitas</span>
            </h1>

            {/* Enhanced Description */}
            <div className="relative">
              <p className="text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed backdrop-blur-sm">
                Temukan produk agroorganik dan biopestisida lokal terbaik dengan sertifikasi dan rating kualitas dari
                lembaga terpercaya untuk hasil pertanian yang lebih sehat dan berkelanjutan.
              </p>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-transparent rounded-full"></div>
            </div>

            {/* Enhanced Feature Badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-900/50 to-emerald-900/30 px-4 py-2 rounded-full border border-green-400/30 backdrop-blur-sm shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <Shield className="w-4 h-4 text-green-300" />
                <span className="text-sm text-green-100 font-medium">100% Organik</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-900/50 to-amber-900/30 px-4 py-2 rounded-full border border-yellow-400/30 backdrop-blur-sm shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
                <Award className="w-4 h-4 text-yellow-300" />
                <span className="text-sm text-yellow-100 font-medium">Tersertifikasi</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-900/50 to-green-900/30 px-4 py-2 rounded-full border border-emerald-400/30 backdrop-blur-sm shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                <Leaf className="w-4 h-4 text-emerald-300" />
                <span className="text-sm text-emerald-100 font-medium">Ramah Lingkungan</span>
              </div>
            </div>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 hover:from-green-500 hover:via-emerald-500 hover:to-green-400 text-white font-semibold rounded-full px-8 py-6 text-base shadow-xl shadow-green-900/40 border border-green-400/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30"
              >
                <Link href="/products" className="flex items-center gap-2">
                  Jelajahi Product{" "}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="border border-yellow-400/40 text-yellow-100 bg-gradient-to-r from-yellow-900/20 to-amber-900/10 hover:from-yellow-600/30 hover:to-amber-600/20 hover:text-yellow-50 font-semibold rounded-full px-8 py-6 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-yellow-500/20 hover:scale-105"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Pelajari Lebih Lanjut{" "}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Enhanced main container with multiple layers */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 via-emerald-500/10 to-green-600/20 blur-xl animate-pulse"></div>

                {/* Main product container */}
                <div className="relative w-[100%] h-[100%] rounded-full bg-gradient-to-br from-green-500/30 via-emerald-600/20 to-green-800/30 border-2 border-green-400/20 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                  {/* Inner gradient ring */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-400/10 to-transparent border border-green-300/10"></div>

                  <Image
                    src="/main-image.png"
                    alt="Produk AgroOrganik"
                    width={400}
                    height={400}
                    className="object-contain p-8 relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Enhanced floating cards */}
              <div className="absolute top-0 left-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg p-4 rounded-3xl border border-white/30 shadow-2xl transform -translate-x-1/4 -translate-y-1/4 w-36 h-36 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-green-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <Sprout className="w-8 h-8 text-green-600" />
                </div>
                <span className="text-xs text-white font-medium">Biopestisida</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>

              <div className="absolute bottom-0 right-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg p-4 rounded-3xl border border-white/30 shadow-2xl transform translate-x-1/4 translate-y-1/4 w-36 h-36 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-yellow-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <Leaf className="w-8 h-8 text-yellow-600" />
                </div>
                <span className="text-xs text-white font-medium">AgroOrganik</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>

              {/* Additional decorative elements */}
              <div className="absolute top-1/4 right-0 transform translate-x-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-green-500/10 rounded-full backdrop-blur-sm border border-emerald-300/20 flex items-center justify-center">
                  <Star className="w-8 h-8 text-emerald-300 animate-spin" style={{ animationDuration: "8s" }} />
                </div>
              </div>

              <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-500/10 rounded-full backdrop-blur-sm border border-yellow-300/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
