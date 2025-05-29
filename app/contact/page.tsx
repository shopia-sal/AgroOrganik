"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Leaf,
  MessageSquare,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Users,
  Star,
  Heart,
  Globe,
  Shield,
  Zap,
} from "lucide-react"

export default function ContactPageRedesigned() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "✨ Pesan terkirim!",
        description: "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setIsLoading(false)
    }, 1500)
  }

  const faqs = [
    {
      question: "Bagaimana cara memesan produk?",
      answer:
        "Anda dapat memesan produk dengan memilih produk yang diinginkan, menambahkannya ke keranjang, dan mengikuti proses checkout.",
    },
    {
      question: "Berapa lama waktu pengiriman?",
      answer:
        "Waktu pengiriman bervariasi tergantung lokasi Anda, biasanya antara 2-5 hari kerja untuk pengiriman reguler.",
    },
    {
      question: "Apakah semua produk tersertifikasi?",
      answer:
        "Ya, semua produk di AgroOrganik telah melalui proses sertifikasi oleh lembaga terpercaya dan memiliki rating kualitas.",
    },
    {
      question: "Bagaimana jika saya tidak puas dengan produk?",
      answer:
        "Kami memiliki kebijakan pengembalian 7 hari. Jika Anda tidak puas dengan produk, silakan hubungi kami untuk proses pengembalian.",
    },
    {
      question: "Apakah ada biaya pengiriman?",
      answer:
        "Ya, biaya pengiriman dihitung berdasarkan berat produk dan lokasi pengiriman. Gratis ongkir untuk pembelian di atas Rp500.000.",
    },
    {
      question: "Bagaimana cara menjadi mitra petani?",
      answer:
        "Untuk menjadi mitra petani, silakan hubungi kami melalui formulir kontak dengan subjek 'Kerjasama' atau kirim email ke partnership@agroorganik.com.",
    },
  ]

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
    <main className="flex-1 overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Orbs */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-br from-green-200/40 to-emerald-300/30 blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/40 to-cyan-300/30 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/30 to-pink-300/20 blur-3xl"
          />

          {/* Geometric Patterns */}
          <div className="absolute inset-0 opacity-5">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="leaf-pattern-hero" patternUnits="userSpaceOnUse" width="60" height="60">
                  <path
                    d="M30,0 C45,20 40,30 30,50 C20,30 15,20 30,0"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#leaf-pattern-hero)" />
            </svg>
          </div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeIn} className="space-y-8">
              <motion.div
                variants={fadeIn}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 backdrop-blur-sm border border-green-200 rounded-full shadow-lg"
              >
                <MessageSquare className="w-5 h-5 mr-3 text-green-600" />
                <span className="text-sm font-bold text-green-800 tracking-wide">HUBUNGI KAMI</span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-gray-800"
              >
                Mari{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                  Terhubung
                </span>{" "}
                Bersama
              </motion.h1>

              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Kami siap membantu Anda dengan segala pertanyaan tentang produk organik berkualitas dan solusi pertanian
                berkelanjutan.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-6 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-2xl px-10 py-6 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Mulai Percakapan <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-300 text-green-700 hover:bg-green-50 rounded-2xl px-10 py-6 text-lg font-semibold backdrop-blur-sm"
                >
                  Lihat FAQ
                </Button>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div variants={fadeIn} className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { icon: Users, value: "24/7", label: "Support", color: "from-blue-100 to-cyan-100" },
                  { icon: MessageSquare, value: "<2h", label: "Response", color: "from-green-100 to-emerald-100" },
                  { icon: Star, value: "4.9/5", label: "Rating", color: "from-yellow-100 to-orange-100" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md`}
                    >
                      <stat.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn} className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Main Container */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/80 to-green-50/80 border border-green-200 flex items-center justify-center shadow-2xl backdrop-blur-sm"
                >
                  <Image
                    src="/placeholder.svg?height=500&width=500&text=Contact+Us"
                    alt="Contact AgroOrganik"
                    width={400}
                    height={400}
                    className="object-contain p-12 rounded-3xl"
                  />
                </motion.div>

                {/* Floating Contact Cards */}
                {[
                  {
                    icon: Phone,
                    label: "Call Us",
                    position: "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
                    color: "from-blue-100 to-cyan-200",
                    delay: 0,
                  },
                  {
                    icon: Mail,
                    label: "Email Us",
                    position: "top-0 right-0 translate-x-1/4 -translate-y-1/4",
                    color: "from-green-100 to-emerald-200",
                    delay: 0.5,
                  },
                  {
                    icon: MapPin,
                    label: "Visit Us",
                    position: "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
                    color: "from-purple-100 to-pink-200",
                    delay: 1,
                  },
                  {
                    icon: Clock,
                    label: "24/7 Support",
                    position: "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
                    color: "from-yellow-100 to-orange-200",
                    delay: 1.5,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: item.delay, duration: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`absolute ${item.position} bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-2xl w-36 h-36 flex flex-col items-center justify-center group cursor-pointer`}
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                    >
                      <item.icon className="h-7 w-7 text-gray-700" />
                    </div>
                    <span className="text-xs text-gray-700 font-semibold text-center leading-tight">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="50%" stopColor="#f0fdf4" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-16"
          >
            {/* Contact Information */}
            <motion.div variants={fadeIn} className="space-y-12">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-bold mb-6">
                  <Leaf className="w-4 h-4 mr-2" />
                  INFORMASI KONTAK
                </div>
                <h2 className="text-4xl font-black tracking-tight mb-6 text-gray-800">Hubungi Kami</h2>
                <p className="text-xl text-gray-600 max-w-md leading-relaxed">
                  Hubungi kami melalui informasi di bawah ini atau isi formulir kontak. Tim kami siap membantu Anda
                  dengan segala pertanyaan.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Alamat",
                    content: "Jl. Agro Organik No. 123, Bogor, Jawa Barat, Indonesia",
                    color: "from-green-100 to-emerald-200",
                    iconColor: "text-green-700",
                  },
                  {
                    icon: Phone,
                    title: "Telepon",
                    content: "+62 812 3456 7890",
                    color: "from-blue-100 to-cyan-200",
                    iconColor: "text-blue-700",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@agroorganik.com",
                    color: "from-purple-100 to-pink-200",
                    iconColor: "text-purple-700",
                  },
                  {
                    icon: Clock,
                    title: "Jam Operasional",
                    content: (
                      <>
                        <p>Senin - Jumat: 08.00 - 17.00</p>
                        <p>Sabtu: 09.00 - 15.00</p>
                        <p>Minggu: Tutup</p>
                      </>
                    ),
                    color: "from-yellow-100 to-orange-200",
                    iconColor: "text-yellow-700",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group"
                  >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`bg-gradient-to-br ${item.color} p-4 rounded-3xl transition-transform duration-300 shadow-lg border border-white/50`}
                          >
                            <item.icon className={`h-7 w-7 ${item.iconColor}`} />
                          </motion.div>
                          <div>
                            <h3 className="font-bold text-xl mb-3 text-gray-800">{item.title}</h3>
                            <div className="text-gray-600 text-lg leading-relaxed">{item.content}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8">
                <h3 className="font-bold text-xl mb-6 text-gray-800">Ikuti Kami</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook", color: "from-blue-100 to-blue-200" },
                    { icon: Instagram, href: "#", label: "Instagram", color: "from-pink-100 to-purple-200" },
                    { icon: Twitter, href: "#", label: "Twitter", color: "from-blue-100 to-cyan-200" },
                    { icon: Youtube, href: "#", label: "Youtube", color: "from-red-100 to-red-200" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-br ${social.color} p-4 rounded-2xl shadow-lg transform transition-all duration-300 group border border-white/50`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 text-gray-700" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div variants={fadeIn} className="lg:col-span-2">
              <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-green-50/30">
                <CardContent className="p-12 relative">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100/60 to-emerald-200/40 rounded-full transform translate-x-1/3 -translate-y-1/3" />

                  <div className="relative">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-bold mb-6">
                      <Send className="w-4 h-4 mr-2" />
                      FORMULIR KONTAK
                    </div>
                    <h2 className="text-4xl font-black tracking-tight mb-8 text-gray-800">Kirim Pesan</h2>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="space-y-3"
                        >
                          <Label htmlFor="name" className="text-lg font-semibold text-gray-700">
                            Nama Lengkap
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="rounded-2xl border-gray-200 focus:border-green-400 focus:ring-green-400 h-14 text-lg bg-white/80 backdrop-blur-sm shadow-sm"
                            placeholder="Masukkan nama lengkap"
                            required
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="space-y-3"
                        >
                          <Label htmlFor="email" className="text-lg font-semibold text-gray-700">
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="rounded-2xl border-gray-200 focus:border-green-400 focus:ring-green-400 h-14 text-lg bg-white/80 backdrop-blur-sm shadow-sm"
                            placeholder="Masukkan alamat email"
                            required
                          />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="space-y-3"
                        >
                          <Label htmlFor="phone" className="text-lg font-semibold text-gray-700">
                            Nomor Telepon (Opsional)
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="rounded-2xl border-gray-200 focus:border-green-400 focus:ring-green-400 h-14 text-lg bg-white/80 backdrop-blur-sm shadow-sm"
                            placeholder="Masukkan nomor telepon"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="space-y-3"
                        >
                          <Label htmlFor="subject" className="text-lg font-semibold text-gray-700">
                            Subjek
                          </Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) => handleSelectChange("subject", value)}
                          >
                            <SelectTrigger
                              id="subject"
                              className="rounded-2xl border-gray-200 focus:border-green-400 focus:ring-green-400 h-14 text-lg bg-white/80 backdrop-blur-sm shadow-sm"
                            >
                              <SelectValue placeholder="Pilih subjek" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">Pertanyaan Umum</SelectItem>
                              <SelectItem value="product">Informasi Produk</SelectItem>
                              <SelectItem value="order">Status Pesanan</SelectItem>
                              <SelectItem value="partnership">Kerjasama</SelectItem>
                              <SelectItem value="other">Lainnya</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-3"
                      >
                        <Label htmlFor="message" className="text-lg font-semibold text-gray-700">
                          Pesan
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="rounded-2xl border-gray-200 focus:border-green-400 focus:ring-green-400 resize-none text-lg bg-white/80 backdrop-blur-sm shadow-sm"
                          placeholder="Tulis pesan Anda di sini..."
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl h-16 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                              Mengirim...
                            </div>
                          ) : (
                            <>
                              Kirim Pesan <Send className="ml-3 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-32 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-300/20 rounded-full blur-3xl" />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <motion.div variants={fadeIn}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-bold mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                LOKASI
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-gray-800">Temukan Kami</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Kunjungi kantor kami untuk konsultasi langsung dengan tim ahli kami atau untuk melihat produk-produk
                organik berkualitas.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="relative aspect-[21/9] w-full overflow-hidden">
                {/* Enhanced map placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="map-pattern" patternUnits="userSpaceOnUse" width="40" height="40">
                          <circle cx="20" cy="20" r="2" fill="#10b981" opacity="0.3" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#map-pattern)" />
                    </svg>
                  </div>
                  <div className="text-center relative z-10">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                    >
                      <MapPin className="h-10 w-10 text-white" />
                    </motion.div>
                    <p className="text-green-800 font-bold text-2xl mb-2">Peta Lokasi AgroOrganik</p>
                    <p className="text-gray-600 text-lg">Jl. Agro Organik No. 123, Bogor, Jawa Barat, Indonesia</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 bg-white">
                <div className="flex flex-wrap gap-4 justify-center">
                  {[
                    { icon: Shield, text: "Parkir Tersedia" },
                    { icon: Globe, text: "Akses Transportasi Umum" },
                    { icon: Heart, text: "Toko Fisik" },
                    { icon: Zap, text: "Konsultasi Langsung" },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 text-sm rounded-full font-semibold border border-green-200 shadow-sm">
                        <feature.icon className="w-4 h-4 mr-2" />
                        {feature.text}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl px-10 py-6 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300">
                Dapatkan Petunjuk Arah <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <motion.div variants={fadeIn}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-bold mb-6">
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQ
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-gray-800">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Temukan jawaban untuk pertanyaan umum tentang produk, pengiriman, dan layanan kami.
              </p>
            </motion.div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-0 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50"
                  >
                    <AccordionTrigger className="px-8 py-6 text-left font-bold text-xl hover:no-underline hover:text-green-700 text-gray-800">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <div className="flex gap-4 text-gray-600">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <p className="text-lg leading-relaxed">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <p className="text-gray-600 mb-8 text-lg">Masih punya pertanyaan lain?</p>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl px-10 py-6 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300">
                Hubungi Tim Kami <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-32 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-300/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="max-w-6xl mx-auto border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-12 md:p-16 relative bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500">
                {/* Decorative patterns */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="leaf-pattern-newsletter" patternUnits="userSpaceOnUse" width="60" height="60">
                        <path
                          d="M30,0 C45,20 40,30 30,50 C20,30 15,20 30,0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          opacity="0.3"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#leaf-pattern-newsletter)" />
                  </svg>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center relative">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white"
                  >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6">
                      <Sparkles className="w-4 h-4 mr-2" />
                      NEWSLETTER
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Dapatkan Kabar Terbaru</h2>
                    <p className="text-white/90 mb-8 text-xl leading-relaxed">
                      Berlangganan newsletter kami untuk mendapatkan informasi terbaru tentang produk, tips pertanian
                      organik, dan promo eksklusif.
                    </p>
                    <div className="space-y-4">
                      {[
                        "Artikel tentang pertanian organik",
                        "Tips dan trik dari para ahli",
                        "Promo dan diskon eksklusif",
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4"
                        >
                          <CheckCircle className="h-6 w-6 text-green-200 flex-shrink-0" />
                          <p className="text-white text-lg">{benefit}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                      <CardContent className="p-8">
                        <form className="space-y-6">
                          <div className="space-y-3">
                            <Label htmlFor="newsletter-name" className="text-white text-lg font-semibold">
                              Nama
                            </Label>
                            <Input
                              id="newsletter-name"
                              placeholder="Masukkan nama Anda"
                              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-2xl focus:border-green-300 h-14 text-lg backdrop-blur-sm"
                            />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="newsletter-email" className="text-white text-lg font-semibold">
                              Email
                            </Label>
                            <Input
                              id="newsletter-email"
                              type="email"
                              placeholder="Masukkan email Anda"
                              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-2xl focus:border-green-300 h-14 text-lg backdrop-blur-sm"
                            />
                          </div>
                          <Button className="w-full bg-white text-green-700 hover:bg-green-50 rounded-2xl h-14 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                            Berlangganan Sekarang
                          </Button>
                        </form>
                        <p className="text-sm text-white/70 mt-6 text-center">
                          Dengan berlangganan, Anda menyetujui kebijakan privasi kami.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
