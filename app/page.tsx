export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      
      <h1 className="text-5xl font-bold mb-4">
        AeroTarot
      </h1>

      <p className="text-lg text-gray-300 max-w-xl mb-6">
        Tarot, reimagined through technology.  
        A new way to experience readings through physical cards and digital insight.
      </p>

      <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition">
        Join the Waitlist
      </button>

    </main>
  );
}