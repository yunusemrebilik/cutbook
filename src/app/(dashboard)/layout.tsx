// src/app/(dashboard)/layout.tsx
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar Nav */}
      <div className="flex h-full">
        <div className="w-64 bg-white shadow-md">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">CutBook Dashboard</h2>
          </div>
          <nav className="mt-6">
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Overview
            </Link>
            <Link
              href="/dashboard/bookings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Bookings
            </Link>
            <Link
              href="/dashboard/analytics"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Analytics
            </Link>
          </nav>
        </div>
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}