import { NextResponse } from "next/server";

const mockShops: Record<string, any> = {
  "1": {
    id: "1",
    name: "Fade Masters",
    slug: "fade-masters",
    address: "123 Barber St, Brooklyn, NY",
    phone: "(718) 555-0123",
    description: "Premium fades & beard sculpting since 2018.",
    rating: 4.9,
    totalReviews: 127,
    images: ["/shop1.jpg", "/shop2.jpg"],
    services: [
      { id: "s1", name: "Classic Haircut", price: 35, duration: 30 },
      { id: "s2", name: "Skin Fade", price: 45, duration: 45 },
      { id: "s3", name: "Beard Trim + Lineup", price: 25, duration: 20 },
      { id: "s4", name: "Hot Towel Shave", price: 40, duration: 40 },
    ],
    staff: [
      { id: "st1", name: "Marco", role: "Master Barber", avatar: "/marco.jpg" },
      { id: "st2", name: "Luis", role: "Barber", avatar: "/luis.jpg" },
    ],
    workingHours: {
      monday: { open: "09:00", close: "19:00" },
      tuesday: { open: "09:00", close: "19:00" },
      // ... all days
      sunday: { open: "10:00", close: "16:00" },
    },
  },
  "2": {
    id: "2",
    name: "The Gentleman’s Cut",
    slug: "gentlemans-cut",
    address: "456 Uptown Ave, Manhattan",
    // ... more data
  },
};

export async function GET(
  request: Request,
  { params }: { params: { shopId: string } }
) {
  await new Promise(r => setTimeout(r, 800)); // Simulate network delay

  const shop = mockShops[params.shopId];

  if (!shop) {
    return NextResponse.json({ error: "Shop not found" }, { status: 404 });
  }

  return NextResponse.json(shop);
}