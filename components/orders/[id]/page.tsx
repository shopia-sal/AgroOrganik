import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getOrderById } from "@/lib/data"
import AccountLayout from "@/components/account-layout"

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = getOrderById(params.id)

  if (!order) {
    return (
      <AccountLayout>
        <div className="flex flex-col items-center justify-center py-12">
          <Package className="h-12 w-12 text-muted-foreground mb-4" />
          <h1 className="text-xl font-semibold mb-2">Pesanan tidak ditemukan</h1>
          <p className="text-muted-foreground mb-4">Pesanan dengan ID {params.id} tidak dapat ditemukan</p>
          <Button asChild>
            <Link href="/account/orders">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Pesanan Saya
            </Link>
          </Button>
        </div>
      </AccountLayout>
    )
  }

  // Map status to badge variant
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge className="bg-green-500">Selesai</Badge>
      case "shipped":
        return <Badge className="bg-blue-500">Dikirim</Badge>
      case "processing":
        return <Badge className="bg-yellow-500">Diproses</Badge>
      case "pending":
        return <Badge variant="outline">Menunggu Pembayaran</Badge>
      case "cancelled":
        return <Badge variant="destructive">Dibatalkan</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <AccountLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Button variant="ghost" size="sm" className="mb-2" asChild>
              <Link href="/account/orders">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Detail Pesanan</h1>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-muted-foreground">#{order.orderNumber}</p>
              <p className="text-muted-foreground">•</p>
              <p className="text-muted-foreground">{order.date}</p>
            </div>
          </div>
          <div>{getStatusBadge(order.status)}</div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h2 className="font-semibold mb-2">Informasi Pengiriman</h2>
              <div className="text-sm space-y-1">
                <p className="font-medium">{order.shipping_address.name}</p>
                <p>{order.shipping_address.address}</p>
                <p>
                  {order.shipping_address.city}, {order.shipping_address.province} {order.shipping_address.postal_code}
                </p>
                <p>{order.shipping_address.phone}</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="font-semibold mb-2">Metode Pembayaran</h2>
              <p className="text-sm capitalize">{order.payment_method.replace("_", " ")}</p>
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="font-semibold mb-2">Metode Pengiriman</h2>
              <p className="text-sm capitalize">
                {order.shipping_method === "regular" ? "Reguler (2-3 hari)" : "Express (1 hari)"}
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-4">Status Pesanan</h2>
            <div className="space-y-4">
              {order.timeline.map((item, index) => (
                <div key={index} className="relative pl-6 pb-4">
                  {index !== order.timeline.length - 1 && (
                    <div className="absolute top-0 left-[11px] h-full w-[1px] bg-border" />
                  )}
                  <div className="absolute top-0 left-0 h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="pt-0.5">
                    <p className="font-medium">{item.status}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.date} - {item.time}
                    </p>
                    <p className="text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted p-4">
            <h2 className="font-semibold">Produk yang Dibeli</h2>
          </div>
          <div className="divide-y">
            {order.items.map((item) => (
              <div key={item.id} className="p-4 flex items-center gap-4">
                <div className="h-16 w-16 rounded bg-muted flex items-center justify-center overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.quantity} x Rp {item.price.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="font-medium">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-muted space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>Rp {order.subtotal.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Pengiriman</span>
              <span>Rp {order.shipping.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Pajak</span>
              <span>Rp {order.tax.toLocaleString("id-ID")}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-sm">
                <span>Diskon</span>
                <span>-Rp {order.discount.toLocaleString("id-ID")}</span>
              </div>
            )}
            <Separator className="my-2" />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>Rp {order.total.toLocaleString("id-ID")}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/account/orders">Kembali ke Pesanan Saya</Link>
          </Button>
          {order.status === "delivered" && <Button>Beli Lagi</Button>}
        </div>
      </div>
    </AccountLayout>
  )
}
