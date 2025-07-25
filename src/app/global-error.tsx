"use client";

export default function GlobalError({
 reset,
}: {
 error: Error & { digest?: string };
 reset: () => void;
}) {
 return (
  <html>
   <body>
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
     <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
     <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={() => reset()}
     >
      Try again
     </button>
    </div>
   </body>
  </html>
 );
}
