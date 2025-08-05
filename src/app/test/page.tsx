import Image from 'next/image'

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Image Test Page</h1>
        <p className="text-gray-600 mb-8">Testing image loading:</p>
        
        {/* Test 1: Regular img tag */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Regular img tag:</h2>
          <img 
            src="/images/hero-image.jpg" 
            alt="Hero Image Test" 
            className="w-64 h-48 object-cover rounded"
          />
        </div>

        {/* Test 2: Next.js Image component */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Next.js Image component:</h2>
          <Image
            src="/images/tamago.JPG"
            alt="Tamago Image Test"
            width={256}
            height={192}
            className="object-cover rounded"
          />
        </div>

        {/* Test 3: CSS background image */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">CSS background image:</h2>
          <div 
            className="w-64 h-48 bg-cover bg-center rounded"
            style={{ backgroundImage: "url('/images/nensho-pic.JPG')" }}
          ></div>
        </div>

        {/* Direct links to test accessibility */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Direct links:</h2>
          <ul className="space-y-2">
            <li><a href="/images/hero-image.jpg" target="_blank" className="text-blue-600 hover:underline">hero-image.jpg</a></li>
            <li><a href="/images/tamago.JPG" target="_blank" className="text-blue-600 hover:underline">tamago.JPG</a></li>
            <li><a href="/images/nensho-pic.JPG" target="_blank" className="text-blue-600 hover:underline">nensho-pic.JPG</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}