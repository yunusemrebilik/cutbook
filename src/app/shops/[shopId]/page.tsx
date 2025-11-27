import Link from "next/link";

interface ShopPageProps {
  params: { shopId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ShopPage({ params }: ShopPageProps) {
  // In a real app, fetch shop data here (Phase 3)
  const shop = {
    id: params.shopId,
    name: "Fade Masters Barber Shop",
    description: "Classic fades and modern cuts.",
    services: ["Haircut", "Beard Trim", "Shave"],
    // ... more data
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link href="/dashboard" className="text-indigo-600 hover:underline mb-4 inline-block">
          ← Back to Dashboard
        </Link>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">{shop.name}</h1>
          <p className="text-gray-600 mb-6">{shop.description}</p>
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            {shop.services.map((service) => (
              <li key={service} className="text-lg text-gray-800">
                • {service}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}