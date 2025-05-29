"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import {
  CheckCircle,
  ChevronLeft,
  CreditCard,
  Truck,
  MapPin,
  Phone,
  Mail,
  User,
  Home,
  Clock,
  ShieldCheck,
  Lock,
  AlertCircle,
  Copy,
  Download,
  Share2,
  ArrowRight,
  Wallet,
  CreditCardIcon,
  Banknote,
  Package,
  Gift,
} from "lucide-react"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const { toast } = useToast()
  const [orderComplete, setOrderComplete] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [orderNumber, setOrderNumber] = useState("AGO12345")

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 500000 ? 0 : subtotal > 0 ? 15000 : 0
  const tax = Math.round(subtotal * 0.11) // 11% tax
  const total = subtotal + shipping + tax

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    province: "",
    notes: "",
    paymentMethod: "bank_transfer",
    shippingMethod: "regular",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (cart.length === 0) {
      toast({
        title: "Keranjang kosong",
        description: "Tambahkan produk ke keranjang sebelum melanjutkan ke pembayaran.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Validate form
    const requiredFields = ["fullName", "email", "phone", "address", "city", "postalCode", "province"]
    const emptyFields = requiredFields.filter((field) => !formData[field])

    if (emptyFields.length > 0) {
      toast({
        title: "Form belum lengkap",
        description: "Harap lengkapi semua field yang diperlukan.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Process order
    try {
      // Simulate API call
      setTimeout(() => {
        setOrderComplete(true)
        clearCart()
        setIsLoading(false)
        // Generate random order number
        setOrderNumber(`AGO${Math.floor(10000 + Math.random() * 90000)}`)
        toast({
          title: "🎉 Pesanan berhasil!",
          description: "Pesanan Anda telah berhasil diproses dan sedang disiapkan untuk pengiriman.",
        })
      }, 1500)
    } catch (error) {
      console.error("Error processing order:", error)
      toast({
        title: "Terjadi kesalahan",
        description: "Gagal memproses pesanan. Silakan coba lagi.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
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

  // Redirect to cart if cart is empty
  if (cart.length === 0 && !orderComplete) {
    return (
      <main className="flex-1 bg-white min-h-screen py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-8 shadow-lg">
                    <Package className="h-16 w-16 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">Keranjang Belanja Kosong</h2>
                  <p className="text-gray-600 max-w-md mx-auto mb-8 text-lg">
                    Anda belum menambahkan produk ke keranjang belanja. Jelajahi produk-produk berkualitas kami dan
                    temukan yang sesuai dengan kebutuhan Anda.
                  </p>
                  <div className="space-y-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href="/products">
                        Jelajahi Produk
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    )
  }

  if (orderComplete) {
    return (
      <main className="flex-1 bg-white min-h-screen py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center justify-center text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-8 shadow-lg"
                  >
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl font-bold text-gray-800 mb-3"
                  >
                    🎉 Pesanan Berhasil!
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 max-w-md mx-auto text-lg"
                  >
                    Terima kasih telah berbelanja di AgroOrganik. Pesanan Anda telah berhasil diproses dan sedang
                    disiapkan untuk pengiriman.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-green-200"
                >
                  <div>
                    <p className="text-sm text-green-700 font-semibold mb-1">Nomor Pesanan</p>
                    <h2 className="text-3xl font-bold text-green-800">#{orderNumber}</h2>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-2 border-green-300 text-green-700 hover:bg-green-100"
                      onClick={() => {
                        navigator.clipboard.writeText(orderNumber)
                        toast({
                          title: "✅ Nomor pesanan disalin",
                          description: "Nomor pesanan telah disalin ke clipboard.",
                        })
                      }}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Salin
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-2 border-green-300 text-green-700 hover:bg-green-100"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Invoice
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-2 border-green-300 text-green-700 hover:bg-green-100"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Bagikan
                    </Button>
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Card className="border-2 border-green-100 shadow-sm bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-green-600" />
                          </div>
                          <h3 className="font-bold text-lg text-gray-800">Detail Pengiriman</h3>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Nama</span>
                            <span className="font-semibold text-gray-800">{formData.fullName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Alamat</span>
                            <span className="font-semibold text-gray-800 text-right">{formData.address}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Kota</span>
                            <span className="font-semibold text-gray-800">{formData.city}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Provinsi</span>
                            <span className="font-semibold text-gray-800">
                              {formData.province.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Kode Pos</span>
                            <span className="font-semibold text-gray-800">{formData.postalCode}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Telepon</span>
                            <span className="font-semibold text-gray-800">{formData.phone}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Metode Pengiriman</span>
                            <span className="font-semibold text-gray-800 capitalize">
                              {formData.shippingMethod.replace("_", " ")}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Card className="border-2 border-green-100 shadow-sm bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-lg text-gray-800">Metode Pembayaran</h3>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Metode</span>
                            <span className="font-semibold text-gray-800 capitalize">
                              {formData.paymentMethod.replace("_", " ")}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Status</span>
                            <span className="font-semibold text-yellow-600">Menunggu Pembayaran</span>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
                          <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            Instruksi Pembayaran
                          </h4>
                          <div className="space-y-3 text-sm text-yellow-700">
                            <p>
                              Silakan transfer ke rekening berikut sebesar{" "}
                              <span className="font-bold">Rp{total.toLocaleString()}</span> dalam 24 jam:
                            </p>
                            <div className="bg-white p-4 rounded-lg border-2 border-yellow-200">
                              <div className="flex justify-between mb-2">
                                <span>Bank</span>
                                <span className="font-semibold">BCA</span>
                              </div>
                              <div className="flex justify-between mb-2">
                                <span>No. Rekening</span>
                                <span className="font-semibold">1234567890</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Atas Nama</span>
                                <span className="font-semibold">PT AgroOrganik Indonesia</span>
                              </div>
                            </div>
                            <p className="text-xs">
                              Setelah melakukan pembayaran, pesanan Anda akan diproses dalam 1x24 jam.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-8 bg-white"
                >
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-4">
                    <h3 className="font-bold text-gray-800">Ringkasan Pesanan</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-green-100 bg-gradient-to-br from-green-50 to-white">
                            <Image
                              src={item.image || "/placeholder.svg?height=64&width=64"}
                              alt={item.name}
                              fill
                              className="object-cover p-1"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-sm text-gray-500">
                                {item.quantity} x Rp{item.price.toLocaleString()}
                              </span>
                              <span className="font-semibold text-gray-800">
                                Rp{(item.price * item.quantity).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4 bg-gray-200" />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold text-gray-800">Rp{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pengiriman</span>
                        <span className="font-semibold text-gray-800">
                          {shipping > 0 ? `Rp${shipping.toLocaleString()}` : "Gratis"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pajak (11%)</span>
                        <span className="font-semibold text-gray-800">Rp{tax.toLocaleString()}</span>
                      </div>
                      <Separator className="my-3 bg-gray-200" />
                      <div className="flex justify-between">
                        <span className="font-bold text-gray-800">Total</span>
                        <span className="font-bold text-2xl text-green-600">Rp{total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-2 border-gray-300 hover:bg-gray-50 hover:text-gray-800 px-8 py-6"
                  >
                    <Link href="/account/orders">
                      <Package className="mr-2 h-5 w-5" />
                      Lihat Pesanan Saya
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6"
                  >
                    <Link href="/products">
                      Lanjutkan Belanja
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    )
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
                <CreditCard className="w-4 h-4 mr-2" />
                CHECKOUT
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-800 mb-2">
                Selesaikan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Pesanan
                </span>
              </h1>
              <p className="text-xl text-gray-600">Lengkapi informasi untuk menyelesaikan pembelian Anda</p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Link
                href="/cart"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-green-200 text-green-700 hover:bg-green-50 font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Kembali ke Keranjang
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <form onSubmit={handleSubmit}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Information */}
              <motion.div variants={fadeIn}>
                <Card className="border-0 shadow-lg overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-green-600" />
                      </div>
                      <h2 className="text-xl font-bold text-green-800">Informasi Pengiriman</h2>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="fullName" className="text-gray-700 font-semibold">
                            Nama Lengkap <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              className="pl-10 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-green-400 h-12 bg-white"
                              placeholder="Masukkan nama lengkap"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-gray-700 font-semibold">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-10 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-green-400 h-12 bg-white"
                              placeholder="Masukkan alamat email"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-gray-700 font-semibold">
                            Nomor Telepon <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="pl-10 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-green-400 h-12 bg-white"
                              placeholder="Masukkan nomor telepon"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="province" className="text-gray-700 font-semibold">
                            Provinsi <span className="text-red-500">*</span>
                          </Label>
                          <Select
                            value={formData.province}
                            onValueChange={(value) => handleSelectChange("province", value)}
                          >
                            <SelectTrigger
                              id="province"
                              className="rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-green-400 h-12 bg-white"
                            >
                              <SelectValue placeholder="Pilih provinsi" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="jawa_barat">Jawa Barat</SelectItem>
                              <SelectItem value="jawa_tengah">Jawa Tengah</SelectItem>
                              <SelectItem value="jawa_timur">Jawa Timur</SelectItem>
                              <SelectItem value="dki_jakarta">DKI Jakarta</SelectItem>
                              <SelectItem value="banten">Banten</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="city" className="text-gray-700 font-semibold">
                            Kota/Kabupaten <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-green-400 h-12 bg-white"
                            placeholder="Masukkan kota/kabupaten"
                            required
                          />
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="postalCode" className="text-gray-700 font-semibold">
                            Kode Pos <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            className="rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-green-400 h-12 bg-white"
                            placeholder="Masukkan kode pos"
                            required
                          />
                        </div>

                        <div className="space-y-3 md:col-span-2">
                          <Label htmlFor="address" className="text-gray-700 font-semibold">
                            Alamat Lengkap <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Home className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Textarea
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className="pl-10 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-green-400 bg-white"
                              placeholder="Masukkan alamat lengkap"
                              rows={3}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-3 md:col-span-2">
                          <Label htmlFor="notes" className="text-gray-700 font-semibold">
                            Catatan (opsional)
                          </Label>
                          <Textarea
                            id="notes"
                            name="notes"
                            placeholder="Instruksi khusus untuk pengiriman"
                            value={formData.notes}
                            onChange={handleInputChange}
                            className="rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-green-400 bg-white"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Shipping Method */}
              <motion.div variants={fadeIn}>
                <Card className="border-0 shadow-lg overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 px-6 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Truck className="h-4 w-4 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-bold text-blue-800">Metode Pengiriman</h2>
                    </div>
                    <div className="p-6">
                      <RadioGroup
                        value={formData.shippingMethod}
                        onValueChange={(value) => handleSelectChange("shippingMethod", value)}
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-4 border-2 border-gray-200 rounded-2xl p-4 hover:border-green-400 hover:bg-green-50 transition-all cursor-pointer">
                          <RadioGroupItem value="regular" id="regular" className="text-green-600" />
                          <Label htmlFor="regular" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-gray-800">Reguler (2-3 hari)</div>
                                <div className="text-sm text-gray-600">Pengiriman standar ke seluruh Indonesia</div>
                              </div>
                              <div className="font-bold text-gray-800">Rp15.000</div>
                            </div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-4 border-2 border-gray-200 rounded-2xl p-4 hover:border-green-400 hover:bg-green-50 transition-all cursor-pointer">
                          <RadioGroupItem value="express" id="express" className="text-green-600" />
                          <Label htmlFor="express" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-gray-800">Express (1-2 hari)</div>
                                <div className="text-sm text-gray-600">Pengiriman cepat dengan prioritas</div>
                              </div>
                              <div className="font-bold text-gray-800">Rp30.000</div>
                            </div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-4 border-2 border-gray-200 rounded-2xl p-4 hover:border-green-400 hover:bg-green-50 transition-all cursor-pointer">
                          <RadioGroupItem value="same_day" id="same_day" className="text-green-600" />
                          <Label htmlFor="same_day" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-gray-800">Same Day (Hari ini)</div>
                                <div className="text-sm text-gray-600">
                                  Pengiriman di hari yang sama (area tertentu)
                                </div>
                              </div>
                              <div className="font-bold text-gray-800">Rp50.000</div>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Payment Method */}
              <motion.div variants={fadeIn}>
                <Card className="border-0 shadow-lg overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-purple-600" />
                      </div>
                      <h2 className="text-xl font-bold text-purple-800">Metode Pembayaran</h2>
                    </div>
                    <div className="p-6">
                      <RadioGroup
                        value={formData.paymentMethod}
                        onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-4 border-2 border-gray-200 rounded-2xl p-4 hover:border-green-400 hover:bg-green-50 transition-all cursor-pointer">
                          <RadioGroupItem value="bank_transfer" id="bank_transfer" className="text-green-600" />
                          <Label htmlFor="bank_transfer" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                  <Banknote className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-800">Transfer Bank</div>
                                  <div className="text-sm text-gray-600">BCA, BNI, BRI, Mandiri</div>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                {["BCA", "BNI", "BRI"].map((bank) => (
                                  <div
                                    key={bank}
                                    className="w-12 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-semibold border border-gray-200"
                                  >
                                    {bank}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-4 border-2 border-gray-200 rounded-2xl p-4 hover:border-green-400 hover:bg-green-50 transition-all cursor-pointer">
                          <RadioGroupItem value="e_wallet" id="e_wallet" className="text-green-600" />
                          <Label htmlFor="e_wallet" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                                  <Wallet className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-800">E-Wallet</div>
                                  <div className="text-sm text-gray-600">OVO, GoPay, DANA, LinkAja</div>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                {["OVO", "GOPAY", "DANA"].map((wallet) => (
                                  <div
                                    key={wallet}
                                    className="w-14 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-semibold border border-gray-200"
                                  >
                                    {wallet}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-4 border-2 border-gray-200 rounded-2xl p-4 hover:border-green-400 hover:bg-green-50 transition-all cursor-pointer">
                          <RadioGroupItem value="credit_card" id="credit_card" className="text-green-600" />
                          <Label htmlFor="credit_card" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                                  <CreditCardIcon className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-800">Kartu Kredit</div>
                                  <div className="text-sm text-gray-600">Visa, Mastercard, JCB</div>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                {["VISA", "MC", "JCB"].map((card) => (
                                  <div
                                    key={card}
                                    className="w-12 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-semibold border border-gray-200"
                                  >
                                    {card}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-4 border-2 border-gray-200 rounded-2xl p-4 hover:border-green-400 hover:bg-green-50 transition-all cursor-pointer">
                          <RadioGroupItem value="cod" id="cod" className="text-green-600" />
                          <Label htmlFor="cod" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                                  <Package className="h-6 w-6 text-yellow-600" />
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-800">Bayar di Tempat (COD)</div>
                                  <div className="text-sm text-gray-600">Hanya tersedia untuk area tertentu</div>
                                </div>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <motion.div variants={fadeIn}>
                <Card className="border-0 shadow-lg overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 px-6 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Gift className="h-4 w-4 text-yellow-600" />
                      </div>
                      <h2 className="text-xl font-bold text-yellow-800">Ringkasan Pesanan</h2>
                    </div>
                    <div className="p-6">
                      <div className="max-h-60 overflow-y-auto space-y-4 mb-6">
                        {cart.map((item) => (
                          <div key={item.id} className="flex gap-4">
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-green-100 bg-gradient-to-br from-green-50 to-white">
                              <Image
                                src={item.image || "/placeholder.svg?height=64&width=64"}
                                alt={item.name}
                                fill
                                className="object-cover p-1"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 line-clamp-1">{item.name}</h4>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-sm text-gray-600">
                                  {item.quantity} x Rp{item.price.toLocaleString()}
                                </span>
                                <span className="font-semibold text-gray-800">
                                  Rp{(item.price * item.quantity).toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-4 bg-gray-200" />

                      <div className="space-y-3">
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
                        <div className="flex justify-between">
                          <span className="text-gray-600">Pajak (11%)</span>
                          <span className="font-semibold text-gray-800">Rp{tax.toLocaleString()}</span>
                        </div>
                        <Separator className="my-3 bg-gray-200" />
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-800">Total</span>
                          <span className="font-bold text-2xl text-green-600">Rp{total.toLocaleString()}</span>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                            Memproses...
                          </div>
                        ) : (
                          <>
                            Selesaikan Pesanan
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>

                      <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                          </div>
                          <span>Transaksi aman & terenkripsi</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Clock className="h-4 w-4 text-blue-600" />
                          </div>
                          <span>Proses pesanan dalam 24 jam</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <Lock className="h-4 w-4 text-purple-600" />
                          </div>
                          <span>Pembayaran aman dengan SSL</span>
                        </div>
                      </div>

                      <div className="mt-6 text-xs text-center text-gray-500">
                        Dengan melanjutkan, Anda menyetujui{" "}
                        <Link href="/terms" className="text-green-600 hover:underline">
                          Syarat dan Ketentuan
                        </Link>{" "}
                        serta{" "}
                        <Link href="/privacy" className="text-green-600 hover:underline">
                          Kebijakan Privasi
                        </Link>{" "}
                        kami.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <ShieldCheck className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="font-bold text-gray-800">Belanja dengan Aman</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      AgroOrganik menjamin keamanan transaksi Anda. Semua data pribadi dilindungi dengan enkripsi SSL
                      256-bit.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["VISA", "MC", "BCA", "BNI", "OVO", "GOPAY"].map((method) => (
                        <div
                          key={method}
                          className="border-2 border-green-200 bg-white rounded-lg p-2 h-8 flex items-center justify-center"
                        >
                          <span className="text-xs font-semibold text-gray-700">{method}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </form>
      </div>
    </main>
  )
}
