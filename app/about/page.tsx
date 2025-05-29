"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Users,
  Leaf,
  Shield,
  Globe,
  Award,
  Heart,
  ChevronRight,
  ArrowRight,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Star,
  Sprout,
  Zap,
  Sparkles,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react"

export default function AboutPageRedesigned() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const milestones = [
    {
      year: "2020",
      title: "Awal Mula",
      description: "AgroOrganik didirikan oleh sekelompok petani dan ahli pertanian yang peduli dengan keberlanjutan.",
      icon: Lightbulb,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2021",
      title: "Pertumbuhan",
      description: "Bermitra dengan 50+ petani lokal dan memperluas jangkauan ke 10 provinsi di Indonesia.",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      year: "2022",
      title: "Inovasi",
      description: "Meluncurkan sistem sertifikasi dan rating kualitas untuk semua produk di platform.",
      icon: Target,
      color: "from-purple-500 to-purple-600",
    },
    {
      year: "2023",
      title: "Ekspansi",
      description: "Mencapai 10.000+ pelanggan dan memperluas kategori produk ke peralatan pertanian organik.",
      icon: Globe,
      color: "from-orange-500 to-orange-600",
    },
  ]

  const stats = [
    { value: "100+", label: "Petani Mitra", icon: Users, color: "from-blue-500 to-blue-600" },
    { value: "500+", label: "Produk Organik", icon: Leaf, color: "from-green-500 to-green-600" },
    { value: "10K+", label: "Pelanggan Puas", icon: Heart, color: "from-red-500 to-red-600" },
    { value: "15+", label: "Provinsi Terjangkau", icon: Globe, color: "from-purple-500 to-purple-600" },
  ]

  const values = [
    {
      icon: Leaf,
      title: "Keberlanjutan",
      description:
        "Kami berkomitmen untuk mempromosikan praktik pertanian yang berkelanjutan dan ramah lingkungan untuk generasi mendatang.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Transparansi",
      description:
        "Kami percaya pada transparansi dalam setiap aspek bisnis kami, dari sumber produk hingga proses sertifikasi.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Award,
      title: "Kualitas",
      description:
        "Kami hanya menawarkan produk berkualitas tinggi yang telah melalui proses seleksi dan sertifikasi ketat.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Komunitas",
      description: "Kami membangun komunitas yang mendukung pertanian organik dan gaya hidup berkelanjutan.",
      gradient: "from-purple-400 to-pink-500",
    },
  ]

  const team = [
    {
      name: "Ahmad Fauzi",
      role: "Pendiri & CEO",
      image: "/placeholder.svg?height=400&width=400&text=AF",
      bio: "Berpengalaman 15 tahun di bidang pertanian organik dan manajemen agribisnis.",
      social: { instagram: "#", facebook: "#", twitter: "#" },
      specialty: "Agribisnis",
    },
    {
      name: "Siti Rahayu",
      role: "Kepala Operasional",
      image: "/placeholder.svg?height=400&width=400&text=SR",
      bio: "Ahli dalam manajemen rantai pasok dan pengembangan bisnis berkelanjutan.",
      social: { instagram: "#", facebook: "#", twitter: "#" },
      specialty: "Operasional",
    },
    {
      name: "Budi Santoso",
      role: "Ahli Pertanian",
      image: "/placeholder.svg?height=400&width=400&text=BS",
      bio: "Doktor di bidang pertanian organik dengan fokus pada biopestisida alami.",
      social: { instagram: "#", facebook: "#", twitter: "#" },
      specialty: "Penelitian",
    },
    {
      name: "Dewi Lestari",
      role: "Manajer Kualitas",
      image: "/placeholder.svg?height=400&width=400&text=DL",
      bio: "Spesialis sertifikasi organik dengan pengalaman di berbagai lembaga sertifikasi.",
      social: { instagram: "#", facebook: "#", twitter: "#" },
      specialty: "Kualitas",
    },
  ]

  const certifications = [
    {
      name: "Organik Indonesia",
      logo: "/placeholder.svg?height=80&width=160&text=Organik+Indonesia",
      description: "Sertifikasi nasional untuk produk pertanian organik di Indonesia.",
      established: "2018",
    },
    {
      name: "Sucofindo",
      logo: "/placeholder.svg?height=80&width=160&text=Sucofindo",
      description: "Lembaga inspeksi, pengawasan, pengujian, dan sertifikasi di Indonesia.",
      established: "1956",
    },
    {
      name: "BPOM",
      logo: "/placeholder.svg?height=80&width=160&text=BPOM",
      description: "Badan Pengawas Obat dan Makanan yang menjamin keamanan produk.",
      established: "2001",
    },
    {
      name: "Kementerian Pertanian",
      logo: "/placeholder.svg?height=80&width=160&text=Kementerian+Pertanian",
      description: "Sertifikasi resmi dari Kementerian Pertanian Republik Indonesia.",
      established: "1945",
    },
  ]

  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background with layered design */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-950 via-green-900 to-green-800"></div>


          <div className="absolute inset-0 opacity-5">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="leaf-pattern" patternUnits="userSpaceOnUse" width="50" height="50">
                  <path
                    d="M25,0 C35,15 40,25 25,40 C10,25 15,15 25,0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
            </svg>
          </div>

          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-green-400 opacity-10 blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-yellow-400 opacity-10 blur-[100px]"></div>


          <div className="absolute inset-0 bg-gradient-to-r from-green-950/80 to-green-800/60"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-700/40 backdrop-blur-sm border border-green-500/30 rounded-full">
                <Leaf className="w-4 h-4 mr-2 text-green-300" />
                <span className="text-sm font-medium text-green-200">Sejak 2020</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Membangun Masa Depan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-yellow-300">
                  Pertanian Organik
                </span>{" "}
                Indonesia
              </h1>

              <p className="text-lg md:text-xl text-green-100/90 leading-relaxed max-w-xl">
                Marketplace khusus produk agroorganik dan biopestisida lokal dengan sertifikasi dan rating kualitas dari
                lembaga terpercaya untuk hasil pertanian yang lebih sehat dan berkelanjutan.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-full px-8 shadow-lg shadow-green-900/30"
                >
                  Jelajahi Produk <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  className="border bg-from-white border-yellow-400/40 text-yellow-100 bg-gradient-to-r from-yellow-900/20 to-amber-900/10 hover:from-yellow-600/30 hover:to-amber-600/20 hover:text-yellow-50 font-semibold rounded-full px-8 py-6 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-yellow-500/20 hover:scale-105"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Main circular container */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-green-500/20 to-green-800/20 border border-green-500/10 flex items-center justify-center shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=500&width=500&text=Organic+Farming"
                    alt="Pertanian Organik"
                    width={400}
                    height={400}
                    className="object-contain p-8 rounded-full"
                  />
                </div>

                <div className="absolute top-0 left-0 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl transform -translate-x-1/4 -translate-y-1/4 w-32 h-32 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Sprout className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-xs text-white font-medium">Organik</span>
                </div>

                <div className="absolute bottom-0 right-0 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl transform translate-x-1/4 translate-y-1/4 w-32 h-32 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                    <Shield className="h-8 w-8 text-yellow-600" />
                  </div>
                  <span className="text-xs text-white font-medium">Tersertifikasi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-200/40 to-green-300/20 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                    {stat.icon && <stat.icon className="h-7 w-7 text-white" />}
                  </div>
                  <h3 className="text-3xl font-bold text-green-800 mb-1">{stat.value}</h3>
                  <p className="text-green-700">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Tabs Section */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 mr-2 text-green-600" />
              <span className="text-sm font-medium text-green-800">Tentang Kami</span>
            </div>
            <h2 className="text-3xl text-black md:text-5xl font-bold tracking-tight mb-6">
              Mengenal Lebih Dekat <span className="text-green-600">AgroOrganik</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pelajari perjalanan kami dalam membangun ekosistem pertanian organik yang berkelanjutan di Indonesia.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="story" className="w-full">
              <TabsList className="grid grid-cols-3 mb-12 bg-green-100/50 p-1.5 rounded-full">
                <TabsTrigger
                  value="story"
                  className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:text-green-800 data-[state=active]:shadow-sm"
                >
                  Cerita Kami
                </TabsTrigger>
                <TabsTrigger
                  value="mission"
                  className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:text-green-800 data-[state=active]:shadow-sm"
                >
                  Misi & Visi
                </TabsTrigger>
                <TabsTrigger
                  value="journey"
                  className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:text-green-800 data-[state=active]:shadow-sm"
                >
                  Perjalanan
                </TabsTrigger>
              </TabsList>

              <TabsContent value="story" className="mt-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=600&text=Cerita+Kami"
                      alt="Tim AgroOrganik"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <Badge className="bg-yellow-500 text-white mb-3 px-3 py-1">Didirikan 2020</Badge>
                      <h3 className="text-2xl font-bold text-white">Dari Petani untuk Petani</h3>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-6 text-green-800">
                      Berawal dari Kepedulian terhadap Pertanian Berkelanjutan
                    </h3>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        AgroOrganik didirikan pada tahun 2020 oleh sekelompok petani dan ahli pertanian yang peduli
                        dengan keberlanjutan dan kesehatan lingkungan. Kami melihat adanya kesenjangan antara produsen
                        produk pertanian organik lokal yang berkualitas dengan konsumen yang mencari produk-produk
                        tersebut.
                      </p>
                      <p>
                        Visi kami adalah menjadi platform terdepan yang menghubungkan petani dan produsen lokal dengan
                        konsumen yang peduli akan kesehatan dan lingkungan. Kami berkomitmen untuk menyediakan produk
                        agroorganik dan biopestisida berkualitas tinggi yang telah tersertifikasi oleh lembaga
                        terpercaya.
                      </p>
                      <p>
                        Melalui AgroOrganik, kami tidak hanya menyediakan marketplace, tetapi juga membangun ekosistem
                        pertanian organik yang berkelanjutan di Indonesia. Kami bekerja sama dengan petani lokal,
                        lembaga sertifikasi, dan komunitas pertanian untuk memastikan produk yang kami tawarkan memenuhi
                        standar kualitas tertinggi.
                      </p>
                    </div>
                    <Button className="mt-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full px-6 py-6 shadow-md">
                      Baca Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mission" className="mt-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-6 text-green-800">
                      Misi dan Visi yang Menginspirasi Kami
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl border border-green-200/50 shadow-sm">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                            <Zap className="h-5 w-5 text-green-700" />
                          </div>
                          <h4 className="text-xl font-semibold text-green-800">Visi</h4>
                        </div>
                        <p className="text-gray-700">
                          Menjadi platform terdepan yang menghubungkan petani dan produsen lokal dengan konsumen yang
                          peduli akan kesehatan dan lingkungan, serta menjadi katalisator pertanian organik
                          berkelanjutan di Indonesia.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl border border-green-200/50 shadow-sm">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                            <Star className="h-5 w-5 text-green-700" />
                          </div>
                          <h4 className="text-xl font-semibold text-green-800">Misi</h4>
                        </div>
                        <ul className="space-y-4">
                          {[
                            "Menyediakan akses ke produk pertanian organik berkualitas tinggi bagi semua orang",
                            "Memberdayakan petani lokal melalui pelatihan, pendampingan, dan akses pasar",
                            "Memastikan transparansi dan kualitas melalui sistem sertifikasi dan rating",
                            "Mengedukasi masyarakat tentang manfaat pertanian organik dan berkelanjutan",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="mt-1 bg-green-200 p-1 rounded-full">
                                <CheckCircle className="h-4 w-4 text-green-700" />
                              </div>
                              <p className="text-gray-700">{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((num) => (
                      <div
                        key={num}
                        className="aspect-square rounded-3xl overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
                      >
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Misi+${num}`}
                          alt={`Misi AgroOrganik ${num}`}
                          width={300}
                          height={300}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="journey" className="mt-0">
                <div className="relative pb-12">
                  {/* Timeline line */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 to-green-500 rounded-full" />

                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="md:w-1/2 flex md:justify-end">
                        <div
                          className={`bg-white p-8 rounded-3xl shadow-lg ${
                            index % 2 === 0 ? "border-l-[6px] border-green-500" : "border-l-[6px] border-yellow-500"
                          } max-w-md hover:shadow-xl transition-shadow duration-300`}
                        >
                          <Badge
                            className={`${
                              index % 2 === 0
                                ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                                : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                            } mb-3 px-3 py-1`}
                          >
                            {milestone.year}
                          </Badge>
                          <h3 className="text-xl font-bold mb-3 text-gray-900">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>

                      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                        <div
                          className={`w-8 h-8 rounded-full border-4 ${
                            index % 2 === 0 ? "border-green-500 bg-white" : "border-yellow-500 bg-white"
                          } shadow-md z-10`}
                        />
                      </div>

                      <div className="md:w-1/2" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

       {/* Enhanced Values Section */}
      <section className="py-32 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-cyan-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-md">
              <Leaf className="w-5 h-5 mr-3 text-green-600" />
              <span className="text-sm font-bold text-green-800 tracking-wide">NILAI-NILAI KAMI</span>
            </div>
            <h2 className="text-4xl text-black md:text-6xl font-black tracking-tight mb-8">
              Prinsip yang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Mendasari
              </span>{" "}
              Langkah Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nilai-nilai ini menjadi fondasi dalam setiap keputusan dan langkah yang kami ambil untuk membangun
              ekosistem pertanian organik yang berkelanjutan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                    >
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 shadow-md">
              <Users className="w-5 h-5 mr-3 text-blue-600" />
              <span className="text-sm font-bold text-blue-800 tracking-wide">TIM KAMI</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-gray-800">
              Bertemu dengan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Para Ahli
              </span>{" "}
              di Balik AgroOrganik
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tim berdedikasi yang bersemangat untuk mendukung pertanian organik dan berkelanjutan di Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Specialty Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-gray-800">{member.specialty}</span>
                  </div>

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex gap-3">
                      {Object.entries(member.social).map(([platform, url]) => {
                        const IconComponent =
                          platform === "instagram" ? Instagram : platform === "facebook" ? Facebook : Twitter
                        return (
                          <Link
                            key={platform}
                            href={url}
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 hover:scale-110"
                          >
                            <IconComponent className="h-4 w-4" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-yellow-200/30 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-300/20 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6 shadow-md">
              <Award className="w-5 h-5 mr-3 text-yellow-600" />
              <span className="text-sm font-bold text-yellow-800 tracking-wide">MITRA KAMI</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-gray-800">
              Lembaga{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                Sertifikasi
              </span>{" "}
              Terpercaya
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kami bekerja sama dengan lembaga sertifikasi terpercaya untuk memastikan kualitas produk yang kami
              tawarkan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              >
                <CardContent className="p-8 flex flex-col items-center text-center relative">
                  {/* Background Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100/40 to-orange-200/20 rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="h-32 flex items-center justify-center mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={cert.name}
                      width={160}
                      height={80}
                      className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white mb-4 px-3 py-1 text-xs font-bold">
                    EST. {cert.established}
                  </Badge>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">{cert.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-green-900 to-teal-800"></div>

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="leaf-pattern-cta" patternUnits="userSpaceOnUse" width="60" height="60">
                  <path
                    d="M30,0 C45,20 40,30 30,50 C20,30 15,20 30,0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#leaf-pattern-cta)" />
            </svg>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-green-800/70"></div>

          {/* Animated Orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-teal-400/20 to-cyan-500/20 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-400/30 rounded-full shadow-lg">
                <Leaf className="w-5 h-5 mr-3 text-green-300" />
                <span className="text-sm font-bold text-green-200 tracking-wide">BERGABUNG DENGAN KAMI</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Jadilah Bagian dari Gerakan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300">
                  Pertanian Organik
                </span>
              </h2>

              <p className="text-xl text-green-100/90 leading-relaxed max-w-2xl">
                Temukan produk berkualitas tinggi atau daftarkan produk Anda di AgroOrganik. Bersama-sama, kita dapat
                membangun masa depan pertanian yang lebih sehat dan berkelanjutan.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-full px-8 shadow-lg shadow-green-900/30"
                >
                  Jelajahi Produk <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border bg-from-white border-yellow-400/40 text-yellow-100 bg-gradient-to-r from-yellow-900/20 to-amber-900/10 hover:from-yellow-600/30 hover:to-amber-600/20 hover:text-yellow-50 font-semibold rounded-full px-8 py-6 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-yellow-500/20 hover:scale-105"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-white mb-10">Hubungi Kami</h3>
                <div className="space-y-8 text-green-50">
                  {[
                    {
                      icon: MapPin,
                      title: "Alamat",
                      content: "Jl. Agro Organik No. 123, Bogor, Jawa Barat, Indonesia",
                    },
                    { icon: Mail, title: "Email", content: "info@agroorganik.com" },
                    { icon: Phone, title: "Telepon", content: "+62 812 3456 7890" },
                    { icon: Calendar, title: "Jam Operasional", content: "Senin - Jumat: 08.00 - 17.00 WIB" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className="bg-gradient-to-br from-green-500/30 to-emerald-600/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-green-200 text-lg">{item.title}</h4>
                        <p className="text-lg leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
