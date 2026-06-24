'use client'
import Link from "next/link";

export default function GlobalError({ reset }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
          <p className="text-6xl font-bold text-orange-600">500</p>
          <p className="text-xl mt-4">Something went wrong</p>
          <button onClick={reset} className="mt-4 text-sm text-orange-600 underline">
            Try again
          </button>
          <Link href="/" className="mt-2 text-sm text-orange-600 underline">
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
