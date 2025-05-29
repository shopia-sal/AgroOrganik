import type React from "react"
import { Shield, Award, BadgeCheck, Leaf, CheckCircle, ThumbsUp, Sparkles } from "lucide-react"

interface FeatureProps {
  icon: React.ReactNode
  iconBg: string
  title: string
  description: string
  index: number
}

function FeatureCard({ icon, iconBg, title, description, index }: FeatureProps) {
  return (
    <div
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Card background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-green-50/50 z-0"></div>

      {/* Border glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl border border-green-200/50 group-hover:border-green-300/70 transition-colors duration-500 z-0"></div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-green-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 z-0"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center p-6 z-10 h-full">
        {/* Enhanced icon container */}
        <div
          className={`relative flex items-center justify-center w-16 h-16 rounded-xl ${iconBg} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}
        >
          {/* Icon */}
          <div className="relative">
            {icon}

            {/* Sparkle effect on hover */}
            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
              <Sparkles className="w-3 h-3 text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Enhanced title */}
        <h3 className="text-lg font-bold text-gray-800 mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
          {title}
        </h3>

        {/* Enhanced description */}
        <p className="text-sm text-gray-600 text-center leading-relaxed">{description}</p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  )
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      title: "Produk Tersertifikasi",
      description: "Semua produk telah melalui proses sertifikasi ketat dari lembaga terpercaya.",
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
      title: "Kualitas Terjamin",
      description: "Rating kualitas transparan dari lembaga independen untuk setiap produk.",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
      title: "Produk Lokal Berkualitas",
      description: "Mendukung petani dan produsen lokal dengan produk unggulan.",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50/30 z-0"></div>

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.15)_0%,transparent_50%)] bg-[length:60px_60px]"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-2xl animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-emerald-200/30 to-green-300/20 rounded-full blur-2xl animate-pulse delay-1000 z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header section */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 font-medium text-sm mb-4 shadow-lg border border-green-200">
            <Leaf className="w-4 h-4 text-green-600 mr-2" />
            <span>Keunggulan Kami</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Mengapa Memilih{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              AgroOrganik
            </span>
            ?
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            Kami berkomitmen menyediakan produk organik terbaik dengan standar kualitas tertinggi
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              iconBg={feature.iconBg}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Stats section */}
        <div className="relative max-w-3xl mx-auto">
          {/* Background decoration */}
          <div className="absolute inset-0 -m-4 bg-gradient-to-r from-green-50/80 via-white/90 to-emerald-50/80 rounded-2xl border border-green-100/50 shadow-md z-0"></div>

          {/* Stats content */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 p-6 z-10">
            {[
              { value: "100%", label: "Organik", icon: <Leaf className="w-4 h-4 text-green-600" /> },
              { value: "50+", label: "Produk", icon: <CheckCircle className="w-4 h-4 text-emerald-600" /> },
              { value: "15+", label: "Sertifikasi", icon: <BadgeCheck className="w-4 h-4 text-amber-600" /> },
              { value: "10K+", label: "Pelanggan", icon: <ThumbsUp className="w-4 h-4 text-blue-600" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 mb-2">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
