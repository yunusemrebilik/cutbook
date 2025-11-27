import Link from "next/link";
import { notFound } from "next/navigation";

interface ShopPageProps {
  params: { shopId: string };
}

async function getShop(shopId: string) {
  const res = await fetch(`http://localhost:3000/api/shops/${shopId}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function ShopPage({ params }: ShopPageProps) {
  const shop = await getShop(params.shopId);

  if (!shop) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link
          href="/"
          className="inline-block mb-6 text-indigo-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Images */}
          <div className="space-y-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-200 border-2 border-dashed rounded-xl aspect-square" />
              ))}
            </div>
          </div>

          {/* Right: Info + Services */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{shop.name}</h1>
              <p className="text-xl text-gray-600 mt-2">{shop.address}</p>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-2xl font-bold text-yellow-500">★★★★★ {shop.rating}</span>
                <span className="text-gray-600">({shop.totalReviews} reviews)</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {shop.services.map((service: any) => (
                  <div
                    key={service.id}
                    className="border rounded-lg p-4 hover:border-indigo-600 transition cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{service.name}</h3>
                        <p className="text-gray-600">{service.duration} min</p>
                      </div>
                      <span className="text-xl font-bold">${service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t">
              <Link
                href={`/shops/${shop.id}/book`}
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}