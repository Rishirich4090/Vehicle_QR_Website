import { Link } from "react-router-dom";
import { useState } from "react";

// Header Component (reused from homepage)
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
  <header className="w-full px-4 md:px-8 lg:px-28 py-4 flex justify-between items-center absolute top-0 z-10">
    <Link to="/" className="flex items-center">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/4eb26000fe4f82bc206f688dd1ad5f1c1409ccb0?width=534" 
        alt="Bhurrr Logo" 
        className="h-12 md:h-14 w-auto"
      />
    </Link>
    
    <nav className="hidden md:flex items-center gap-8 lg:gap-12">
      <Link to="/" className="text-black text-base lg:text-lg font-normal px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
        Home
      </Link>
      <Link to="/how-it-works" className="text-black text-base lg:text-lg font-normal px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
        How It Works
      </Link>
      <Link to="/pricing" className="text-black text-base lg:text-lg font-normal px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
        Pricing
      </Link>
      <Link to="/shop" className="text-black text-base lg:text-lg font-normal px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
        Shop
      </Link>
      <Link to="/support" className="text-black text-base lg:text-lg font-normal px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
        Support
      </Link>
    </nav>
    
    <div className="flex items-center gap-4">
      <Link
        to="/login"
        className="bg-[#ED3237] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-2xl text-base lg:text-lg font-semibold hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform hidden sm:block"
      >
        Login
      </Link>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-black rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    {/* Mobile menu */}
    {isMobileMenuOpen && (
      <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-20">
        <nav className="px-4 py-6 space-y-4">
          <Link to="/" className="block text-black text-base px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
            Home
          </Link>
          <Link to="/how-it-works" className="block text-black text-base px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
            How It Works
          </Link>
          <Link to="/pricing" className="block text-black text-base px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
            Pricing
          </Link>
          <Link to="/shop" className="block text-black text-base px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
            Shop
          </Link>
          <Link to="/support" className="block text-black text-base px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
            Support
          </Link>
          <Link
            to="/login"
            className="w-full bg-[#ED3237] text-white px-6 py-3 rounded-2xl text-base font-semibold hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform block text-center"
          >
            Login
          </Link>
        </nav>
      </div>
    )}
  </header>
  );
};

// Hero Section for Pricing
const PricingHeroSection = () => (
  <section className="w-full px-4 md:px-8 lg:px-24 pt-28 pb-8 lg:pb-16 bg-gradient-to-b from-white to-[#FFC0C0] rounded-b-3xl">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#DA0000] leading-tight font-dm-sans">
            Smart Protection for Your Vehicle: <span className="font-normal text-xl md:text-2xl lg:text-3xl">Just ₹599/Year (For Now!)</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-black max-w-xl font-dm-sans">
            Enjoy complete access to our emergency QR code alert system — one simple plan, no confusion, no hidden fees
          </p>
        </div>
        
        <div className="space-y-4">
          <button className="bg-[#ED3237] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-semibold hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform w-full sm:w-auto">
            Buy Now for ₹599
          </button>
          <button className="border border-[#DA0000] text-[#DA0000] px-6 py-3 rounded-2xl text-base lg:text-xl font-medium hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform w-full sm:w-auto block sm:inline">
            Check Free Availability <span className="text-sm">(if eligible)</span>
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/f5fa12de6e5ac9a97a82fb0fd5d6c5e0f846b92c?width=1210" 
          alt="Car rental illustration" 
          className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
        />
      </div>
    </div>
  </section>
);

// Free Launch Plan Highlight
const FreeLaunchPlan = () => (
  <section className="w-full px-4 md:px-8 py-16">
    <div className="max-w-2xl mx-auto">
      <div className="border-2 border-dashed border-[#B0A807] bg-[#FFFF021A] rounded-xl p-6 lg:p-8 text-center space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="text-4xl lg:text-5xl">🎉</div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            FREE for First 1000 Users
          </h2>
        </div>
        
        <div className="space-y-2">
          <p className="text-lg lg:text-xl font-semibold text-black">
            Only ₹599/year (MRP ₹1299)
          </p>
          <p className="text-base lg:text-lg text-black">
            Offer valid for 6 months only
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="w-full h-3 bg-[#FFEFB4] rounded-full">
            <div className="w-[93%] h-3 bg-[#FFC700] rounded-full"></div>
          </div>
          <p className="text-sm text-black">934/1000 claimed</p>
        </div>
        
        <button className="bg-[#079912] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-base lg:text-lg font-semibold hover:bg-[#067a10] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
          Claim Free Access <span className="text-sm font-normal">(If Available)</span>
        </button>
      </div>
    </div>
  </section>
);

// What's Included Section
const WhatsIncludedSection = () => (
  <section className="w-full px-4 md:px-8 py-16 lg:py-20 bg-[#DA00000D] rounded-xl mx-4 md:mx-8">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      <div className="flex-1 space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#DA0000]">
          What's Included
        </h2>
        
        <div className="space-y-6">
          {[
            {
              title: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            },
            {
              title: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            },
            {
              title: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            }
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#00DD73] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold text-black">{item.title}</h3>
                <p className="text-lg lg:text-xl text-black">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex-1">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/bbf6592829d38aae0a9a2c10440c754b0313d8c4?width=961" 
          alt="QR Code illustration" 
          className="w-full max-w-lg mx-auto"
        />
      </div>
    </div>
  </section>
);

// Pricing Plans Section
const PricingPlansSection = () => (
  <section className="w-full px-4 md:px-8 py-16 lg:py-20">
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Smart Alert Plan */}
        <div className="p-6 lg:p-8 border border-[#DA0000] bg-[#DA00000D] rounded-3xl space-y-6 relative">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#DA0000]">Smart Alert Plan</h3>
          <p className="text-lg font-bold text-black">Validity : 1 Year</p>
          <div className="bg-gradient-to-r from-[#8D0808] to-[#DA0000] text-white px-6 py-4 rounded-3xl text-center">
            <span className="text-xl lg:text-2xl">₹1299/year</span>
          </div>
        </div>

        {/* Launching Offer - Best Value */}
        <div className="p-6 lg:p-8 border-2 border-[#DA0000] bg-[#DA00000D] rounded-3xl space-y-6 relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#DA0000] transform rotate-45 translate-x-8 -translate-y-8">
            <div className="absolute bottom-2 left-2 text-white text-xs font-bold transform -rotate-45 uppercase">
              best value
            </div>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#DA0000]">Launching Offer</h3>
          <p className="text-lg font-bold text-black">Validity : 1 Year</p>
          <div className="bg-gradient-to-r from-[#8D0808] to-[#DA0000] text-white px-6 py-4 rounded-3xl text-center">
            <span className="text-xl lg:text-2xl">₹599/year </span>
            <span className="text-base font-bold">(Save ₹700)</span>
          </div>
        </div>

        {/* Free Plan */}
        <div className="p-6 lg:p-8 border border-[#DA0000] bg-[#DA00000D] rounded-3xl space-y-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#DA0000]">
            Free Plan <span className="text-xl font-normal">(First 1000 Users)</span>
          </h3>
          <p className="text-lg font-bold text-black">Validity : 1 Year</p>
          <div className="bg-gradient-to-r from-[#8D0808] to-[#DA0000] text-white px-6 py-4 rounded-3xl text-center">
            <span className="text-xl lg:text-2xl">₹0</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-[#ED3237] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-semibold hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
          Get It Now for ₹599
        </button>
        <button className="border border-[#DA0000] text-[#DA0000] px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-medium hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
          Check If Free Plan Is Available
        </button>
      </div>
    </div>
  </section>
);

// Referral Section
const ReferralSection = () => (
  <section className="w-full px-4 md:px-8 py-16">
    <div className="max-w-2xl mx-auto bg-[#DA00000D] rounded-xl p-6 lg:p-8 text-center space-y-6">
      <h2 className="text-2xl lg:text-3xl font-semibold text-[#DA0000]">
        Got a Coupon or Referral Code?
      </h2>
      
      <div className="flex flex-col sm:flex-row">
        <input 
          type="text" 
          placeholder="Enter code here"
          className="flex-1 px-6 py-3 rounded-l-2xl sm:rounded-r-none rounded-r-2xl border-0 bg-white text-black placeholder-gray-500"
        />
        <button className="bg-[#DA0000] text-white px-8 py-3 rounded-r-2xl sm:rounded-l-none rounded-l-2xl font-semibold hover:bg-[#C00000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
          Apply
        </button>
      </div>
      
      <p className="text-black">
        Share with your friends & earn ₹100 per referral. They also save ₹100 instantly!
      </p>
      
      <button className="bg-gradient-to-r from-[#DA0000] to-[#8D0808] text-white px-6 lg:px-8 py-3 rounded-2xl text-lg lg:text-2xl font-semibold hover:from-[#C00000] hover:to-[#7A0707] transition-colors flex items-center gap-2 mx-auto">
        <span className="text-2xl">🎁</span>
        Start Referring Now
      </button>
    </div>
  </section>
);

// FAQ Section for Pricing
const PricingFAQSection = () => (
  <section className="w-full px-4 md:px-8 py-16 lg:py-20">
    <div className="max-w-3xl mx-auto text-center space-y-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000]">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {[
          {
            question: "Is this service free or paid?",
            answer: "We offer a Free Launch Plan for a limited time. After that, you can subscribe to our yearly plans starting at ₹499/year.",
            isOpen: true
          },
          {
            question: "What do I get in the paid plan?",
            answer: "",
            isOpen: false
          },
          {
            question: "Are there any hidden charges?",
            answer: "",
            isOpen: false
          }
        ].map((faq, index) => (
          <div key={index} className="p-6 border border-[#BCBCBC] rounded-3xl text-left">
            <div className="flex justify-between items-center">
              <h3 className="text-lg lg:text-xl font-bold text-black">{faq.question}</h3>
              <svg className={`w-8 h-8 transform transition-transform ${faq.isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            {faq.isOpen && faq.answer && (
              <p className="mt-3 text-black">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      
      <button className="border border-[#DA0000] text-[#DA0000] px-6 lg:px-8 py-3 rounded-2xl text-lg lg:text-2xl font-medium hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
        See All FAQs
      </button>
    </div>
  </section>
);

// CTA Section for Pricing
const PricingCTASection = () => (
  <section className="w-full px-4 md:px-8 py-16 lg:py-20">
    <div className="bg-gradient-to-r from-[#E34040BF] to-[#DA0000BF] rounded-3xl p-8 lg:p-16 text-center text-white space-y-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-30">
        {/* Add decorative lines as in the design */}
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Protect your vehicle for just ₹599/year
        </h2>
        <p className="text-lg lg:text-2xl">
          No apps. No drama. Just peace of mind.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#DA0000] text-white px-8 lg:px-12 py-4 lg:py-5 rounded-3xl text-lg lg:text-2xl font-semibold hover:bg-[#C00000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            Subscribe Now
          </button>
          <button className="bg-[#DA0000] text-white px-8 lg:px-12 py-4 lg:py-5 rounded-3xl text-lg lg:text-2xl font-semibold hover:bg-[#C00000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            Need Help? Talk to Support
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Footer Component (reused from homepage)
const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-[#791A15] to-[#EB180C] text-white">
    <div className="px-4 md:px-8 lg:px-24 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
          <div className="space-y-8">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/beb6545026ea64ac6fb878b92314327c5c9ada17?width=668" 
              alt="Bhurrr Logo" 
              className="h-16 lg:h-20 w-auto"
            />
            <div className="space-y-1 text-lg">
              <p>Email: <a href="mailto:support@bhurrr.com" className="underline">support@bhurrr.com</a></p>
              <p>Call: +91 9270 25 6969</p>
              <p>WhatsApp Support: +91 9270 25 6969</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-6 lg:gap-12 text-lg font-semibold">
            <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
            <a href="#" className="hover:text-gray-200 transition-colors">Shop</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Support</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="w-full h-px bg-white/80 my-8"></div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-base">© Copyright Media 2022 All Right Reserved.</p>
          
          <div className="flex gap-4">
            {["Facebook", "Instagram", "LinkedIn"].map((social) => (
              <div key={social} className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-[#F23227] rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// Main Pricing Component
export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PricingHeroSection />
      <FreeLaunchPlan />
      <WhatsIncludedSection />
      <PricingPlansSection />
      <ReferralSection />
      <PricingFAQSection />
      <PricingCTASection />
      <Footer />
    </div>
  );
}
