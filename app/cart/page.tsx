"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import {
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  CreditCard,
  Clock,
  Leaf,
  ChevronLeft,
  Plus,
  Minus,
  RefreshCw,
  CheckCircle,
  Lock,
  Gift,
  Sparkles,
} from "lucide-react"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const { toast } = useToast()
  const router = useRouter()
  const [couponCode, setCouponCode] = useState("")
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 500000 ? 0 : subtotal > 0 ? 15000 : 0
  const discount = 0 // Will be calculated based on coupon code
  const total = subtotal + shipping - discount

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return
    updateQuantity(productId, newQuantity)
  }

  const handleRemove = (productId) => {
    removeFromCart(productId)
    toast({
      title: "✨ Produk dihapus",
      description: "Produk telah dihapus dari keranjang belanja Anda.",
    })
  }

  const applyCoupon = () => {
    if (!couponCode) return

    setIsApplyingCoupon(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Kode kupon tidak valid",
        description: "Kode kupon yang Anda masukkan tidak valid atau telah kadaluarsa.",
        variant: "destructive",
      })
      setIsApplyingCoupon(false)
    }, 1000)

    // If coupon is valid, would update discount state here
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: "Keranjang kosong",
        description: "Tambahkan produk ke keranjang sebelum melanjutkan ke pembayaran.",
        variant: "destructive",
      })
      return
    }

    console.log("Navigating to checkout, cart items:", cart.length)
    // Gunakan Next.js router untuk navigasi yang lebih baik
    router.push("/checkout")
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <main className="flex-1 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <motion.div variants={fadeIn}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-bold mb-4">
                <ShoppingBag className="w-4 h-4 mr-2" />
                KERANJANG BELANJA
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-800 mb-2">
                Keranjang{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Belanja
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                {cart.length > 0 ? `${cart.length} produk organik pilihan Anda` : "Keranjang belanja Anda kosong"}
              </p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-green-200 text-green-700 hover:bg-green-50 font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Lanjutkan Belanja
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        {cart.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Items */}
              <motion.div variants={fadeIn}>
                <Card className="overflow-hidden border-0 shadow-lg bg-white">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-4">
                      <div className="grid grid-cols-12 gap-4 items-center text-sm font-semibold text-green-800">
                        <div className="col-span-6 md:col-span-7">Produk</div>
                        <div className="col-span-2 text-center">Harga</div>
                        <div className="col-span-2 text-center">Jumlah</div>
                        <div className="col-span-2 md:col-span-1 text-right">Aksi</div>
                      </div>
                    </div>

                    <div className="divide-y divide-gray-100">
                      {cart.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-6 py-6 grid grid-cols-12 gap-4 items-center hover:bg-green-50/50 transition-colors"
                        >
                          <div className="col-span-6 md:col-span-7 flex items-center gap-4">
                            <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-green-100 bg-gradient-to-br from-green-50 to-white shadow-sm">
                              <Image
                                src={item.image || "/placeholder.svg?height=80&width=80"}
                                alt={item.name}
                                fill
                                className="object-cover p-1"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-800 hover:text-green-600 transition-colors">
                                <Link href={`/products/${item.id}`} className="hover:underline">
                                  {item.name}
                                </Link>
                              </h3>
                              <div className="text-sm text-gray-500 mt-1">{item.unit && <span>{item.unit}</span>}</div>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {item.certifications?.slice(0, 2).map((cert) => (
                                  <Badge
                                    key={cert}
                                    variant="outline"
                                    className="bg-green-50 text-green-700 border-green-200 text-xs px-2 py-1 rounded-full flex items-center gap-1"
                                  >
                                    <ShieldCheck className="h-3 w-3" />
                                    {cert}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="col-span-2 text-center font-semibold text-gray-800">
                            Rp{item.price.toLocaleString()}
                          </div>

                          <div className="col-span-2 flex justify-center">
                            <div className="flex items-center border-2 border-green-200 rounded-full overflow-hidden bg-white shadow-sm">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full text-green-600 hover:text-green-700 hover:bg-green-50"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-semibold text-gray-800">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full text-green-600 hover:text-green-700 hover:bg-green-50"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>

                          <div className="col-span-2 md:col-span-1 flex justify-end">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50"
                              onClick={() => handleRemove(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recommended Products */}
              <motion.div variants={fadeIn}>
                <Card className="border-0 shadow-lg overflow-hidden bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-yellow-500" />
                        Rekomendasi untuk Anda
                      </h3>
                      <Link href="/products" className="text-green-600 hover:text-green-700 text-sm font-semibold">
                        Lihat Semua
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group">
                          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-white border-2 border-green-100 mb-3 shadow-sm">
                            <Image
                              src={`/placeholder.svg?height=200&width=200&text=Produk+${i}`}
                              alt={`Produk Rekomendasi ${i}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300 p-2"
                            />
                            <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Button
                                size="sm"
                                className="bg-white text-green-700 hover:bg-green-50 rounded-full text-xs px-4 shadow-lg"
                              >
                                + Tambah
                              </Button>
                            </div>
                          </div>
                          <h4 className="font-semibold text-sm text-gray-800 line-clamp-1">Produk Organik {i}</h4>
                          <p className="text-green-600 text-sm font-semibold mt-1">Rp120.000</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Actions */}
              <motion.div variants={fadeIn} className="flex justify-between items-center">
                <Button
                  variant="outline"
                  className="border-2 border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-800 rounded-full px-6"
                  onClick={clearCart}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Kosongkan Keranjang
                </Button>
                <div className="text-sm text-gray-500">Harga belum termasuk pajak (jika berlaku)</div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <motion.div variants={fadeIn}>
                <Card className="border-0 shadow-lg overflow-hidden bg-white">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <Gift className="h-6 w-6 text-green-600" />
                      Ringkasan Pesanan
                    </h2>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold text-gray-800">Rp{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pengiriman</span>
                        <span className="font-semibold text-gray-800">
                          {shipping > 0 ? (
                            `Rp${shipping.toLocaleString()}`
                          ) : (
                            <span className="text-green-600 font-bold">Gratis</span>
                          )}
                        </span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Diskon</span>
                          <span className="font-semibold">-Rp{discount.toLocaleString()}</span>
                        </div>
                      )}
                      <Separator className="my-4 bg-gray-200" />
                      <div className="flex justify-between">
                        <span className="font-bold text-gray-800">Total</span>
                        <span className="font-bold text-2xl text-green-600">Rp{total.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Masukkan kode kupon"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="rounded-full border-2 border-green-200 focus:border-green-400 focus:ring-green-400 bg-white"
                        />
                        <Button
                          variant="outline"
                          className="rounded-full border-2 border-green-200 hover:bg-green-50 hover:text-green-700 text-green-600"
                          onClick={applyCoupon}
                          disabled={isApplyingCoupon}
                        >
                          {isApplyingCoupon ? "Memeriksa..." : "Terapkan"}
                        </Button>
                      </div>

                      <Button
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={handleCheckout}
                      >
                        Lanjutkan ke Pembayaran
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <ShieldCheck className="h-4 w-4 text-green-600" />
                        </div>
                        <span>Transaksi aman & terenkripsi</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Truck className="h-4 w-4 text-blue-600" />
                        </div>
                        <span>Pengiriman cepat ke seluruh Indonesia</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <Leaf className="h-4 w-4 text-yellow-600" />
                        </div>
                        <span>100% produk organik tersertifikasi</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Payment Methods */}
              <motion.div variants={fadeIn}>
                <Card className="border-0 shadow-lg overflow-hidden bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-green-600" />
                      Metode Pembayaran
                    </h3>
                    <div className="grid grid-cols-5 gap-2">
                      {["VISA", "MC", "BCA", "BNI", "BRI", "MANDIRI", "OVO", "GOPAY", "DANA", "QRIS"].map((method) => (
                        <div
                          key={method}
                          className="border-2 border-gray-200 rounded-xl p-2 h-12 flex items-center justify-center bg-white hover:border-green-400 hover:shadow-sm transition-all cursor-pointer"
                        >
                          <span className="text-xs font-semibold text-gray-700">{method}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                      <Lock className="h-3 w-3" />
                      <span>Pembayaran aman dengan enkripsi SSL</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Shipping Info */}
              <motion.div variants={fadeIn}>
                <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Truck className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">Informasi Pengiriman</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Estimasi pengiriman 2-5 hari kerja tergantung lokasi Anda.
                        </p>
                        <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                          <CheckCircle className="h-4 w-4" />
                          <span>Gratis ongkir untuk pembelian di atas Rp500.000</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-8 shadow-lg">
                    <ShoppingBag className="h-16 w-16 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">Keranjang Belanja Kosong</h2>
                  <p className="text-gray-600 max-w-md mx-auto mb-8 text-lg">
                    Anda belum menambahkan produk ke keranjang belanja. Jelajahi produk-produk berkualitas kami dan
                    temukan yang sesuai dengan kebutuhan Anda.
                  </p>
                  <div className="space-y-6">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href="/products">
                        Jelajahi Produk
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span>Produk Organik Berkualitas</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                        </div>
                        <span>Tersertifikasi Resmi</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-yellow-600" />
                        </div>
                        <span>Pengiriman Cepat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Trust Badges */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Produk Tersertifikasi",
                  description: "Semua produk telah melalui proses sertifikasi ketat",
                  color: "from-green-100 to-emerald-100",
                  iconColor: "text-green-600",
                },
                {
                  icon: Truck,
                  title: "Pengiriman Cepat",
                  description: "Dikirim langsung dari petani ke rumah Anda",
                  color: "from-blue-100 to-cyan-100",
                  iconColor: "text-blue-600",
                },
                {
                  icon: CreditCard,
                  title: "Pembayaran Aman",
                  description: "Berbagai metode pembayaran yang aman",
                  color: "from-purple-100 to-pink-100",
                  iconColor: "text-purple-600",
                },
                {
                  icon: Clock,
                  title: "Layanan Pelanggan",
                  description: "Dukungan pelanggan 7 hari seminggu",
                  color: "from-yellow-100 to-orange-100",
                  iconColor: "text-yellow-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${item.color} p-3 rounded-2xl shadow-sm`}>
                        <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
