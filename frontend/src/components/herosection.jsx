import { Link } from "react-router-dom";
export default function HeroSection() {



  return (
    <section className="w-full bg-blue-50 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-800 leading-tight">
            Buy & Sell Easily Inside SASTRA 🚀
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Post your old books, gadgets, cycles, or anything else. Connect directly with other students via WhatsApp — no middleman, no hassle!
          </p>
          <Link to="/post">
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200">
              Post an Item
            </button>
          </Link>
        </div>

        {/* Image or Illustration */}
        <div className="flex-1">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
            alt="Marketplace Illustration"
            className="w-full max-w-[400px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
