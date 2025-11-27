import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-barber-red to-black text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-24">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Cutbook
        </h1>
        <p className="max-w-2xl text-center text-xl">
          The modern booking platform for barbers, salons, and their clients.
        </p>
        <div className="flex gap-6">
          <Link
            href="/login"
            className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-black transition hover:bg-gray-200"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-black"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </main>
  );
}
