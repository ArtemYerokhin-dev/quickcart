'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="px-6 md:px-16 lg:px-32 py-20 bg-gray-50">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-orange-600 uppercase tracking-widest mb-3">About QuickCart</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
            We bring the best tech <br className="hidden md:block" /> straight to your door.
          </h1>
          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl">
            Founded in 2019 in Austin, Texas, QuickCart started as a small online shop for tech enthusiasts
            and grew into one of America's most trusted electronics retailers. We believe everyone deserves
            access to great technology — at a fair price, delivered fast.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-16 lg:px-32 py-14 border-b border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
          {[
            { value: "500K+", label: "Happy Customers" },
            { value: "10,000+", label: "Products Listed" },
            { value: "48h", label: "Avg. Delivery Time" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-orange-600">{stat.value}</p>
              <p className="text-gray-500 mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-16 lg:px-32 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-5">Our Story</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              QuickCart was born out of frustration with slow shipping and overpriced electronics. Our founders
              Marcus Webb and Priya Nolan wanted a store that combined the selection of a big-box retailer with
              the speed and feel of a boutique.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              What started as a garage operation in Austin quickly scaled to a 50,000 sq ft fulfillment center
              in Dallas, serving customers across all 50 states. Today our team of 120 passionate people picks,
              packs, and ships thousands of orders every day.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We partner directly with brands like Apple, Sony, Bose, and Samsung to ensure every product is
              100% authentic, warrantied, and priced competitively.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🚀", title: "Fast Shipping", desc: "2-day delivery on most orders across the US" },
              { icon: "🔒", title: "Secure Checkout", desc: "256-bit SSL encryption on every transaction" },
              { icon: "↩️", title: "Easy Returns", desc: "30-day hassle-free return policy" },
              { icon: "💬", title: "24/7 Support", desc: "Real humans ready to help anytime" },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="font-medium text-gray-800 text-sm">{item.title}</p>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-16 lg:px-32 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 text-center">Meet the Team</h2>
          <p className="text-gray-500 text-center mb-10">The people behind QuickCart</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Marcus Webb", role: "Co-Founder & CEO", initials: "MW" },
              { name: "Priya Nolan", role: "Co-Founder & CTO", initials: "PN" },
              { name: "Jordan Hayes", role: "Head of Operations", initials: "JH" },
              { name: "Sofia Reyes", role: "Customer Experience", initials: "SR" },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-semibold text-lg">{person.initials}</span>
                </div>
                <p className="font-medium text-gray-800 text-sm">{person.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
