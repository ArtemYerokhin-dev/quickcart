'use client'
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
      <p className="text-6xl font-bold text-orange-600">404</p>
      <p className="text-xl mt-4">Page not found</p>
      <Link href="/" className="mt-6 text-sm text-orange-600 underline">
        Back to Home
      </Link>
    </div>
  );
}
