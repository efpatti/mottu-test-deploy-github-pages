import Link from "next/link";

export default function NotFound() {
 return (
  <div className="flex flex-col items-center justify-center min-h-screen p-8">
   <h2 className="text-2xl font-bold mb-4">Not Found</h2>
   <p className="text-gray-600 mb-4">Could not find requested resource</p>
   <Link href="/" className="text-blue-600 hover:underline">
    Return Home
   </Link>
  </div>
 );
}
