import { Link } from "react-router-dom";
import { useState } from "react";

// Header Component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
  <header className="w-full px-4 md:px-8 lg:px-28 py-4 flex justify-between items-center absolute top-0 z-10">
    <div className="flex items-center">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/4eb26000fe4f82bc206f688dd1ad5f1c1409ccb0?width=534" 
        alt="Bhurrr Logo" 
        className="h-12 md:h-14 w-auto"
      />
    </div>
    
    <nav className="hidden md:flex items-center gap-6 lg:gap-10">
      <Link to="/how-it-works" className="text-black text-lg lg:text-2xl font-normal font-dm-sans hover:text-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
        How It Works
      </Link>
      <Link to="/pricing" className="text-black text-lg lg:text-2xl font-normal font-dm-sans hover:text-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
        Pricing
      </Link>
      <Link to="/shop" className="text-black text-lg lg:text-2xl font-normal font-dm-sans hover:text-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
        Shop
      </Link>
      <Link to="/support" className="text-black text-lg lg:text-2xl font-normal font-dm-sans hover:text-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
        Support
      </Link>
    </nav>
    
    <div className="flex items-center gap-4">
      <button className="bg-[#ED3237] text-white px-6 lg:px-8 py-3 rounded-2xl text-lg lg:text-2xl font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform hidden sm:block">
        Login
      </button>

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
          <Link to="/how-it-works" className="block text-black text-lg font-dm-sans hover:text-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            How It Works
          </Link>
          <Link to="/pricing" className="block text-black text-lg font-dm-sans hover:text-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            Pricing
          </Link>
          <Link to="/shop" className="block text-black text-lg font-dm-sans hover:text-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            Shop
          </Link>
          <Link to="/support" className="block text-black text-lg font-dm-sans hover:text-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            Support
          </Link>
          <button className="w-full bg-[#ED3237] text-white px-6 py-3 rounded-2xl text-lg font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            Login
          </button>
        </nav>
      </div>
    )}
  </header>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="w-full px-4 md:px-8 lg:px-24 pt-28 pb-8 lg:pb-16 bg-gradient-to-b from-white to-[#FFC0C0] rounded-b-3xl">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="flex-1 space-y-6 lg:space-y-10 text-center lg:text-left">
        <div className="space-y-4 lg:space-y-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#DA0000] leading-tight font-dm-sans">
            Your Vehicle's Silent Guardian — One Scan Away.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-black max-w-xl font-dm-sans">
            Say goodbye to anonymous damage, towing surprises, or blocked driveways. Let people reach you safely and instantly without revealing your number.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
          <button className="bg-[#ED3237] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            Get My QR Code
          </button>
          <button className="border border-[#DA0000] text-[#DA0000] px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            See How It Works
          </button>
        </div>
        
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <svg className="w-8 h-8 text-[#DA0000] rotate-180" fill="currentColor" viewBox="0 0 32 32">
            <path d="M26.8811 16C26.8811 22.016 22.0171 26.88 16.0011 26.88C9.98509 26.88 5.12109 22.016 5.12109 16C5.12109 9.984 9.98509 5.12 16.0011 5.12C22.0171 5.12 26.8811 9.984 26.8811 16ZM6.40109 16C6.40109 21.312 10.6891 25.6 16.0011 25.6C21.3131 25.6 25.6011 21.312 25.6011 16C25.6011 10.688 21.3131 6.40001 16.0011 6.40001C10.6891 6.40001 6.40109 10.688 6.40109 16Z"/>
            <path d="M17.0884 10.688L11.7764 16L17.0884 21.312L16.1924 22.208L9.98438 16L16.1924 9.79201L17.0884 10.688Z"/>
            <path d="M10.8789 16.64V15.36H21.7589V16.64H10.8789Z"/>
          </svg>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-[#DA0000] rounded-full"></div>
            <div className="w-3 h-3 border-2 border-[#DA0000] rounded-full"></div>
            <div className="w-3 h-3 border-2 border-[#DA0000] rounded-full"></div>
            <div className="w-3 h-3 border-2 border-[#DA0000] rounded-full"></div>
          </div>
          <svg className="w-8 h-8 text-[#DA0000]" fill="currentColor" viewBox="0 0 32 32">
            <path d="M5.11891 16C5.11891 22.016 9.98291 26.88 15.9989 26.88C22.0149 26.88 26.8789 22.016 26.8789 16C26.8789 9.984 22.0149 5.12 15.9989 5.12C9.98291 5.12 5.11891 9.984 5.11891 16ZM25.5989 16C25.5989 21.312 21.3109 25.6 15.9989 25.6C10.6869 25.6 6.39891 21.312 6.39891 16C6.39891 10.688 10.6869 6.40001 15.9989 6.40001C21.3109 6.40001 25.5989 10.688 25.5989 16Z"/>
            <path d="M14.9116 10.688L20.2236 16L14.9116 21.312L15.8076 22.208L22.0156 16L15.8076 9.79201L14.9116 10.688Z"/>
            <path d="M21.1211 16.64V15.36H10.2411V16.64H21.1211Z"/>
          </svg>
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

// Why Our QR Alert System Works Section
const FeaturesSection = () => (
  <section className="w-full px-4 md:px-8 py-16 lg:py-20">
    <div className="max-w-4xl mx-auto text-center space-y-8 lg:space-y-16">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000] font-dm-sans">
          Why Our QR Alert System Works
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-black font-dm-sans">
          Built for real-life situations — powered by smart messaging.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
          <div key={index} className="p-6 lg:p-8 border border-[#FF6363] rounded-xl shadow-lg bg-white flex flex-col items-center text-center space-y-4">
            <div className="text-4xl lg:text-5xl">{feature.icon}</div>
            <h3 className="text-lg lg:text-2xl font-semibold text-black font-poppins">{feature.title}</h3>
            <p className="text-sm lg:text-base text-black font-poppins">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// How It Works Section
const HowItWorksSection = () => (
  <section id="how-it-works" className="w-full px-4 md:px-8 py-16 lg:py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center space-y-12 lg:space-y-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000]">
        How It Works
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
            icon: "🔍"
          },
          {
            step: "3",
            title: "You get an instant message",
            description: "You receive the alert via SMS, WhatsApp, or Email — without revealing your contact.",
            icon: "💬"
          }
        ].map((item, index) => (
          <div key={index} className="p-6 lg:p-8 bg-[#FF636310] rounded-xl shadow-lg space-y-4">
            <div className="w-10 h-10 bg-[#DA0000] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto">
              {item.step}
            </div>
            <div className="text-4xl lg:text-5xl">{item.icon}</div>
            <h3 className="text-lg lg:text-2xl font-semibold text-black">{item.title}</h3>
            <p className="text-sm lg:text-base text-black">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Real Problems Section
const RealProblemsSection = () => (
  <section className="w-full px-4 md:px-8 py-16 lg:py-20">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#DA0000]">
          Real Problems, Real Solutions
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl lg:text-2xl font-semibold text-black">
            Imagine this…
          </h3>
          <p className="text-lg text-black">
            You parked outside a shop. Your vehicle is about to be towed. You're not around, 
            but someone scans your QR and reports it. You get notified in seconds — and act immediately.
          </p>
        </div>
        <p className="text-[#DA0000] text-base lg:text-lg font-bold">
          No more dented cars. No towing headaches. No angry strangers.
        </p>
      </div>
      
      <div className="flex-1">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/5f08abf1f646cb21a1535b83581b5acd46383535?width=1138" 
          alt="Towing illustration" 
          className="w-full max-w-lg mx-auto"
        />
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section className="w-full px-4 md:px-8 py-16 lg:py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center space-y-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000]">
        Customer Testimonials
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
          <div key={index} className="p-6 bg-[#FDF2F2] rounded-xl shadow-lg space-y-4">
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
                <p className="font-medium text-black">{testimonial.name}</p>
                <p className="text-xs text-black opacity-70">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-[#DA0000] rounded-full"></div>
          <div className="w-2 h-2 bg-[#DA0000] opacity-25 rounded-full"></div>
          <div className="w-2 h-2 bg-[#DA0000] opacity-25 rounded-full"></div>
          <div className="w-2 h-2 bg-[#DA0000] opacity-25 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

// Plans Section
const PlansSection = () => (
  <section className="w-full px-4 md:px-8 py-16 lg:py-20">
    <div className="max-w-6xl mx-auto text-center space-y-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000]">
        Plans That Work for Everyone
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {[
          {
            icon: "🎉",
            title: "Free Launch Plan Available"
          },
          {
            icon: "👜",
            title: "Premium options for fleet owners"
          },
          {
            icon: "🛍️",
            title: "Visit our [Shop] to order your QR today."
          }
        ].map((plan, index) => (
          <div key={index} className="p-6 lg:p-8 border border-[#FFA1A1] bg-[#DA00000D] rounded-xl space-y-4">
            <div className="text-4xl lg:text-5xl">{plan.icon}</div>
            <h3 className="text-lg lg:text-2xl font-medium text-black">{plan.title}</h3>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/pricing"
          className="bg-[#ED3237] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-semibold hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform"
        >
          View Plans
        </Link>
        <button className="border border-[#DA0000] text-[#DA0000] px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-medium hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
          Buy QR Sticker
        </button>
      </div>
    </div>
  </section>
);

// Compatible With Section
const CompatibleSection = () => (
  <section className="w-full px-4 md:px-8 py-16 lg:py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center space-y-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000]">
        Compatible With…
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
        {[
          { icon: "🏍️", label: "Bikes" },
          { icon: "🚗", label: "Cars" },
          { icon: "🛺", label: "Auto Rickshaws" },
          { icon: "🚌", label: "School Buses" },
          { icon: "🚛", label: "Commercial Fleets" }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2 px-6 py-3 border border-black rounded-full">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-lg font-medium text-black">{item.label}</span>
          </div>
        ))}
      </div>
      
      <p className="text-lg lg:text-2xl font-medium text-black">
        Even Parking Lot Barriers or Society Gates!
      </p>
    </div>
  </section>
);

// FAQ Section
const FAQSection = () => (
  <section className="w-full px-4 md:px-8 py-16 lg:py-20">
    <div className="max-w-3xl mx-auto text-center space-y-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000]">
        FAQ
      </h2>
      
      <div className="space-y-4">
        {[
          {
            question: "What if someone misuses it?",
            answer: "Each report is tracked, and we don't allow multiple spams.",
            isOpen: true
          },
          {
            question: "Can I get alerts only via WhatsApp?",
            answer: "",
            isOpen: false
          },
          {
            question: "Is my number ever shown?",
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

// CTA Section
const CTASection = () => (
  <section className="w-full px-4 md:px-8 py-16 lg:py-20 bg-gradient-to-r from-[#E34040BF] to-[#DA0000BF] rounded-3xl mx-4 md:mx-8 my-8">
    <div className="max-w-4xl mx-auto text-center text-white space-y-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        Protect your vehicle in less than 10 seconds
      </h2>
      <p className="text-lg lg:text-2xl">
        Join thousands using smart QR alerts today.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-[#DA0000] px-8 lg:px-12 py-4 lg:py-5 rounded-3xl text-lg lg:text-2xl font-semibold hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
          Get My QR Now
        </button>
        <Link 
          to="/pricing"
          className="bg-white text-[#DA0000] px-8 lg:px-12 py-4 lg:py-5 rounded-3xl text-lg lg:text-2xl font-semibold hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform"
        >
          See Pricing
        </Link>
      </div>
    </div>
  </section>
);

// Footer Component
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
            <a href="#" className="hover:text-gray-200 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Home</a>
            <a href="#" className="hover:text-gray-200 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Shop</a>
            <a href="#" className="hover:text-gray-200 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Support</a>
            <a href="#" className="hover:text-gray-200 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Terms</a>
            <a href="#" className="hover:text-gray-200 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Privacy</a>
            <a href="#" className="hover:text-gray-200 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Contact</a>
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

// Main Index Component
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RealProblemsSection />
      <TestimonialsSection />
      <PlansSection />
      <CompatibleSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
