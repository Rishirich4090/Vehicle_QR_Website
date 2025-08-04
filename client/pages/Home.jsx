import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
  <header className="w-full px-4 md:px-8 lg:px-28 py-6 flex justify-between items-center absolute top-0 z-10">
    <div className="flex items-center">
      <Link to="/">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/4eb26000fe4f82bc206f688dd1ad5f1c1409ccb0?width=534" 
          alt="Bhurrr Logo" 
          className="h-12 md:h-14 w-auto"
        />
      </Link>
    </div>
    
    <nav className="hidden md:flex items-center gap-8 lg:gap-12">
      <Link to="/" className="text-black text-base lg:text-lg font-normal font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
        Home
      </Link>
      <Link to="/how-it-works" className="text-black text-base lg:text-lg font-normal font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
        How It Works
      </Link>
      <Link to="/pricing" className="text-black text-base lg:text-lg font-normal font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
        Pricing
      </Link>
      <Link to="/shop" className="text-black text-base lg:text-lg font-normal font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
        Shop
      </Link>
      <Link to="/support" className="text-black text-base lg:text-lg font-normal font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
        Support
      </Link>
    </nav>
    
    <div className="flex items-center gap-4">
      <Link 
        to="/login"
        className="bg-[#ED3237] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-2xl text-base lg:text-lg font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform hidden sm:block"
      >
        Login
      </Link>

      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-black rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    {isMobileMenuOpen && (
      <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-20">
        <nav className="px-4 py-6 space-y-4">
          <Link to="/" className="block text-black text-base font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
            Home
          </Link>
          <Link to="/how-it-works" className="block text-black text-base font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
            How It Works
          </Link>
          <Link to="/pricing" className="block text-black text-base font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
            Pricing
          </Link>
          <Link to="/shop" className="block text-black text-base font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
            Shop
          </Link>
          <Link to="/support" className="block text-black text-base font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">
            Support
          </Link>
          <Link 
            to="/login"
            className="w-full bg-[#ED3237] text-white px-6 py-3 rounded-2xl text-base font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform block text-center"
          >
            Login
          </Link>
        </nav>
      </div>
    )}
  </header>
  );
};

const HeroSection = () => (
  <section className="w-full px-4 md:px-8 lg:px-24 pt-32 pb-12 lg:pb-20 bg-gradient-to-b from-white to-[#FFC0C0] rounded-b-3xl">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      <div className="flex-1 space-y-8 lg:space-y-12 text-center lg:text-left">
        <div className="space-y-6 lg:space-y-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#DA0000] leading-tight font-dm-sans">
            Your Vehicle's Silent Guardian — One Scan Away.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-black max-w-xl font-dm-sans">
            Say goodbye to anonymous damage, towing surprises, or blocked driveways. Let people reach you safely and instantly without revealing your number.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
          <button className="bg-[#ED3237] text-white px-5 lg:px-6 py-3 lg:py-4 rounded-2xl text-base lg:text-lg font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            Get My QR Code
          </button>
          <Link 
            to="/how-it-works"
            className="border border-[#DA0000] text-[#DA0000] px-5 lg:px-6 py-3 lg:py-4 rounded-2xl text-base lg:text-lg font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform text-center"
          >
            See How It Works
          </Link>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a65f607c45cd0128b370193283aa3a8ba4050854?width=1190" 
          alt="QR Code on Vehicle" 
          className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-xl"
        />
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="w-full px-4 md:px-8 py-20 lg:py-24">
    <div className="max-w-4xl mx-auto text-center space-y-12 lg:space-y-16">
      <div className="space-y-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#DA0000] font-dm-sans">
          Why Our QR Alert System Works
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-black font-dm-sans">
          Built for real-life situations — powered by smart messaging.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {[
          {
            icon: "🔒",
            title: "Anonymity First",
            description: "Your number stays private. Messages go through our system."
          },
          {
            icon: "🚗",
            title: "Prevent Damage & Towing",
            description: "Respond in real time to issues like wrong parking or vehicle damage."
          },
          {
            icon: "📱",
            title: "No App Needed",
            description: "Just scan the QR — fast, simple, universal."
          },
          {
            icon: "🛡️",
            title: "100% Secure & Reliable",
            description: "Multi-channel alerts via SMS, Email, and WhatsApp."
          }
        ].map((feature, index) => (
          <div key={index} className="p-6 lg:p-8 border border-[#FF6363] rounded-xl shadow-lg bg-white flex flex-col items-center text-center space-y-6">
            <div className="text-3xl lg:text-4xl">{feature.icon}</div>
            <h3 className="text-base lg:text-lg font-semibold text-black font-poppins">{feature.title}</h3>
            <p className="text-sm lg:text-base text-black font-poppins">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section id="how-it-works" className="w-full px-4 md:px-8 py-20 lg:py-24 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center space-y-12 lg:space-y-16">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#DA0000]">
        How It Works
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
        {[
          {
            step: "1",
            title: "Stick our QR code on your vehicle",
            description: "We mail you a premium, weatherproof QR sticker.",
            icon: "📱"
          },
          {
            step: "2",
            title: "Someone scans the QR in case of a problem",
            description: "They see a webpage with issues to report: parking, damage, accident, etc.",
            icon: "����"
          },
          {
            step: "3",
            title: "You get an instant message",
            description: "You receive the alert via SMS, WhatsApp, or Email — without revealing your contact.",
            icon: "💬"
          }
        ].map((item, index) => (
          <div key={index} className="p-6 lg:p-8 bg-[#FF636310] rounded-xl shadow-lg space-y-6">
            <div className="w-10 h-10 bg-[#DA0000] text-white rounded-full flex items-center justify-center text-base font-bold mx-auto">
              {item.step}
            </div>
            <div className="text-3xl lg:text-4xl">{item.icon}</div>
            <h3 className="text-base lg:text-lg font-semibold text-black">{item.title}</h3>
            <p className="text-sm lg:text-base text-black">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="w-full px-4 md:px-8 py-20 lg:py-24">
    <div className="max-w-6xl mx-auto text-center space-y-12 lg:space-y-16">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#DA0000]">
        Customer Testimonials
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {[
          {
            name: "Priya N",
            location: "Pune",
            text: "This QR system saved my scooter from being towed. I got a WhatsApp message just in time. Brilliant!",
            avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ea6c9af3bd6ad0786b4dd08028c805c9906d2699?width=108"
          },
          {
            name: "Ankit R",
            location: "Mumbai",
            text: "I was hesitant at first, but now I can't live without it. I even got one for my father's car.",
            avatar: "https://api.builder.io/api/v1/image/assets/TEMP/5bf811d103328fb0d80a92a7a42c4f025210b618?width=81"
          },
          {
            name: "Aarav S",
            location: "Mumbai",
            text: "Thanks to this QR system, my bike was saved from being towed! I received a timely alert via WhatsApp.",
            avatar: "https://api.builder.io/api/v1/image/assets/TEMP/6f6d438e7a157dec0b293d419a63eb31df8d78a2?width=81"
          }
        ].map((testimonial, index) => (
          <div key={index} className="p-6 lg:p-8 bg-[#FDF2F2] rounded-xl shadow-lg space-y-6">
            <p className="text-black text-sm lg:text-base italic">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-3">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="text-left">
                <p className="font-medium text-black text-sm">{testimonial.name}</p>
                <p className="text-xs text-black opacity-70">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="w-full px-4 md:px-8 py-20 lg:py-24 bg-gradient-to-r from-[#E34040BF] to-[#DA0000BF] rounded-3xl mx-4 md:mx-8 my-8">
    <div className="max-w-4xl mx-auto text-center text-white space-y-10">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
        Protect your vehicle in less than 10 seconds
      </h2>
      <p className="text-base lg:text-lg">
        Join thousands using smart QR alerts today.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-[#DA0000] px-6 lg:px-8 py-3 lg:py-4 rounded-3xl text-base lg:text-lg font-semibold hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
          Get My QR Now
        </button>
        <Link 
          to="/pricing"
          className="bg-white text-[#DA0000] px-6 lg:px-8 py-3 lg:py-4 rounded-3xl text-base lg:text-lg font-semibold hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform text-center"
        >
          See Pricing
        </Link>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-[#791A15] to-[#EB180C] text-white">
    <div className="px-4 md:px-8 lg:px-24 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-16">
          <div className="space-y-8">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/beb6545026ea64ac6fb878b92314327c5c9ada17?width=668" 
              alt="Bhurrr Logo" 
              className="h-14 lg:h-16 w-auto"
            />
            <div className="space-y-2 text-base">
              <p>Email: <a href="mailto:support@bhurrr.com" className="underline">support@bhurrr.com</a></p>
              <p>Call: +91 9270 25 6969</p>
              <p>WhatsApp Support: +91 9270 25 6969</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-6 lg:gap-10 text-base font-semibold">
            <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-gray-200 transition-colors">Shop</Link>
            <Link to="/support" className="hover:text-gray-200 transition-colors">Support</Link>
            <a href="#" className="hover:text-gray-200 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="w-full h-px bg-white/80 my-8"></div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">© Copyright Media 2022 All Right Reserved.</p>
          
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
