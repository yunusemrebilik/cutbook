import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/shops/new"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">Create New Shop</h3>
          <p className="text-gray-600">Set up your barber shop or salon profile.</p>
        </Link>
        <Link
          href="/dashboard/bookings"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">My Bookings</h3>
          <p className="text-gray-600">View and manage appointments.</p>
        </Link>
        <Link
          href="/dashboard/analytics"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">Analytics</h3>
          <p className="text-gray-600">See your shop&apos;s performance.</p>
        </Link>
      </div>
    </div>
  );
}