import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const Header = () => (
    <header className="w-full px-4 md:px-8 lg:px-28 py-4 flex justify-between items-center absolute top-0 z-10">
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
        <Link to="/" className="text-black text-base lg:text-lg font-normal font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">Home</Link>
        <Link to="/how-it-works" className="text-black text-base lg:text-lg font-normal font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">How It Works</Link>
        <Link to="/pricing" className="text-black text-base lg:text-lg font-normal font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">Pricing</Link>
        <Link to="/shop" className="text-black text-base lg:text-lg font-normal font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">Shop</Link>
        <Link to="/support" className="text-black text-base lg:text-lg font-normal font-dm-sans px-3 py-2 rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300">Support</Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="bg-[#ED3237] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-2xl text-base lg:text-lg font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform hidden sm:block"
        >
          Login
        </Link>
        <button 
          className="md:hidden p-2 text-black rounded-lg hover:text-white hover:bg-[#DA0000] hover:shadow-md transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );

  const Footer = () => (
    <footer className="w-full px-4 md:px-8 lg:px-25 py-10 bg-gradient-to-r from-[#791A15] to-[#EB180C]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          <div className="space-y-10">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/beb6545026ea64ac6fb878b92314327c5c9ada17?width=668" 
              alt="Bhurrr Logo" 
              className="h-24 w-auto" 
            />
            <div className="text-white text-lg lg:text-xl font-poppins">
              <p>Email: <span className="underline">support@bhurrr.com</span></p>
              <p>Call: +91 9270 25 6969</p>
              <p>WhatsApp Support: +91 9270 25 6969</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-8 lg:gap-14">
            <a href="/" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Home</a>
            <a href="#" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Shop</a>
            <a href="#" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Support</a>
            <a href="#" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Terms</a>
            <a href="#" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Privacy</a>
            <a href="#" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">Contact</a>
          </nav>
        </div>
        
        <div className="h-px bg-white/80 my-6"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm lg:text-base font-poppins">© Copyright Media 2022 All Right Reserved.</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#F23227]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#F23227]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.174.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#F23227]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full px-4 md:px-8 lg:px-24 pt-28 pb-16 bg-gradient-to-b from-white to-[#FFC0C0] rounded-b-3xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-6 lg:space-y-10">
            <div className="space-y-4 lg:space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DA0000] leading-tight font-dm-sans">
                How Our QR Emergency System Works — It's Simpler Than You Think.
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-black font-dm-sans">
                <span className="font-bold">Stick. Scan. Alert.</span> Our smart system works silently in the background — until someone needs to reach you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <button className="bg-[#ED3237] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                Get My QR Code Now
              </button>
              <button className="border border-[#DA0000] text-[#DA0000] px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                  <path d="M21.616 15.2004L12.984 10.8831C12.7399 10.761 12.4687 10.7033 12.1961 10.7155C11.9236 10.7278 11.6586 10.8096 11.4265 10.9531C11.1944 11.0966 11.0029 11.297 10.8701 11.5354C10.7374 11.7738 10.6678 12.0422 10.668 12.3151V20.4697C10.6678 20.7426 10.7374 21.011 10.8701 21.2494C11.0029 21.4878 11.1944 21.6883 11.4265 21.8318C11.6586 21.9753 11.9236 22.057 12.1961 22.0693C12.4687 22.0815 12.7399 22.0239 12.984 21.9017L21.616 17.5844C21.8371 17.4736 22.0231 17.3034 22.1531 17.0928C22.283 16.8823 22.3519 16.6398 22.3519 16.3924C22.3519 16.145 22.283 15.9025 22.1531 15.692C22.0231 15.4815 21.8371 15.3113 21.616 15.2004Z" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 28.3924C22.6274 28.3924 28 23.0198 28 16.3924C28 9.76498 22.6274 4.3924 16 4.3924C9.37258 4.3924 4 9.76498 4 16.3924C4 23.0198 9.37258 28.3924 16 28.3924Z" stroke="currentColor" strokeWidth="0.666667"/>
                </svg>
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c1b36cf8a21cc48ea4231ef27799ab6bc6be5881?width=1190" 
              alt="QR Emergency System" 
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-xl" 
            />
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto text-center space-y-12 lg:space-y-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000] font-dm-sans opacity-80">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                number: "1",
                title: "Place Your QR Code",
                description: "We send you a premium waterproof sticker that you stick on your vehicle's windshield, back glass, or fuel tank.",
                bgImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/10aa1fa73abe9fded0effab8fc0d4c95109c37b8?width=664')"
              },
              {
                number: "2", 
                title: "Someone Scans It",
                description: "If there's an issue — wrong parking, damage, accident, or towing — the person scans the QR code with any smartphone. A web page pops up where they choose what the issue is",
                bgImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/24e6658f63073901b1a7c59cf7428af8d50e07d3?width=664')"
              },
              {
                number: "3",
                title: "You Get an Instant Alert", 
                description: "The moment they hit \"Send,\" you receive an instant message via WhatsApp, SMS, and/or Email. Your number is never revealed. Their number stays hidden too.",
                bgImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/90af06c83ff1a1eae90bc59570f4168b7e1a62c7?width=664')"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="relative p-6 lg:p-8 rounded-xl shadow-lg space-y-6 text-white h-80 flex flex-col justify-center items-center"
                style={{
                  background: `linear-gradient(0deg, rgba(255, 99, 99, 0.87) 0%, rgba(255, 99, 99, 0.87) 100%), ${step.bgImage}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="w-10 h-10 bg-[#DA0000] text-white rounded-full flex items-center justify-center text-lg font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg lg:text-2xl font-semibold text-center font-poppins">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-center font-poppins max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Life Use Cases */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000] font-dm-sans">
            Real-Life Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {[
              {
                title: "Wrong Parking",
                icon: "🚗",
                description: "Parked outside a shop? Blocking someone's gate? They scan the code and you get a nudge before your car is towed"
              },
              {
                title: "Accidental Damage", 
                icon: "💥",
                description: "Someone scratched or hit your parked vehicle. They can report it anonymously — so you're not left guessing"
              },
              {
                title: "Towing or Roadblock",
                icon: "🚧", 
                description: "If police or towing staff are nearby, a kind stranger can scan and notify you to move your car immediately"
              },
              {
                title: "Rental & Driver Use",
                icon: "👨‍✈️",
                description: "Assign a temporary number to your driver — alerts will go to them while you're away. You'll be notified after the duration ends"
              },
              {
                title: "QR Transfer Option",
                icon: "🔄",
                description: "Sold or rented your vehicle? You can transfer the QR to the new owner/user without losing your subscription"
              }
            ].map((useCase, index) => (
              <div key={index} className="p-6 bg-[#FF636305] rounded-xl shadow-lg space-y-4 border border-[#E2A7A7]/20">
                <h3 className="text-lg lg:text-xl font-semibold text-black font-poppins">
                  {useCase.title}
                </h3>
                <div className="text-4xl lg:text-5xl">
                  {useCase.icon}
                </div>
                <p className="text-xs lg:text-sm text-black font-poppins">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ED3237] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
              Start with Free QR Access
            </button>
            <button className="border border-[#DA0000] text-[#DA0000] px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
              See Pricing Plans
            </button>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000] font-dm-sans">
              Behind the Scenes
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-black font-dm-sans">
              We don't just forward messages. We manage privacy, tracking, and secure delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
            {[
              {
                title: "Anonymous Messaging Engine",
                icon: "🟢"
              },
              {
                title: "Secure (HTTPS) Pages & Messaging", 
                icon: "🔒"
              },
              {
                title: "GPS Location & Timestamp Included",
                icon: "📍"
              },
              {
                title: "Scan Logs & History in Dashboard",
                icon: "📊"
              },
              {
                title: "No Ads, No Spam, No Contact Sharing",
                icon: "🚫"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 lg:p-8 bg-[#FF636305] rounded-xl shadow-lg space-y-4 border border-[#E2A7A7]/20">
                <div className="text-4xl lg:text-5xl">
                  {feature.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-black font-poppins">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000] font-dm-sans">
            Customer Testimonials
          </h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  text: "I thought it was just a gimmick, but it has truly transformed my driving experience. I've recommended it to all my friends.",
                  name: "Priya S",
                  location: "Bangalore",
                  size: "small"
                },
                {
                  text: "I was hesitant at first, but now I can't live without it. I even got one for my father's car.",
                  name: "Ankit R", 
                  location: "Mumbai",
                  size: "large"
                },
                {
                  text: "This QR system saved my scooter from being towed. I got a WhatsApp message just in time. Brilliant!",
                  name: "Priya N",
                  location: "Pune", 
                  size: "large"
                },
                {
                  text: "I didn't believe the hype until I tried it myself. Now, it's a must-have for every road trip I take.",
                  name: "Ravi K",
                  location: "Delhi",
                  size: "small"
                },
                {
                  text: "Thanks to this QR system, my bike was saved from being towed! I received a timely alert via WhatsApp.",
                  name: "Aarav S",
                  location: "Mumbai", 
                  size: "large"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`p-4 lg:p-6 bg-[#FDF2F2] rounded-xl shadow-lg space-y-4 ${
                    testimonial.size === 'large' ? 'lg:col-span-2' : ''
                  } ${index === 1 || index === 2 ? 'lg:mt-8' : ''}`}
                >
                  <p className="text-black text-sm lg:text-base font-montserrat">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/4491a54b6cfa320e0b7cc6f48289932103e93dbe?width=61" 
                      alt={testimonial.name} 
                      className="w-10 h-10 rounded-lg object-cover" 
                    />
                    <div className="text-left">
                      <p className="font-medium text-black font-poppins">{testimonial.name}</p>
                      <p className="text-xs text-black opacity-70 font-montserrat">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-[#DA0000] rounded-full"></div>
                <div className="w-2 h-2 bg-[#DA0000] opacity-25 rounded-full"></div>
                <div className="w-2 h-2 bg-[#DA0000] opacity-25 rounded-full"></div>
                <div className="w-2 h-2 bg-[#DA0000] opacity-25 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20 relative">
        <div 
          className="max-w-7xl mx-auto rounded-3xl p-8 lg:p-16 text-center space-y-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(102deg, rgba(227, 64, 64, 0.75) -0.66%, rgba(218, 0, 0, 0.75) 100%)'
          }}
        >
          {/* Background decorative elements */}
          <div className="absolute -left-12 bottom-0 w-56 h-56 opacity-20">
            <div className="w-full h-0.5 bg-[#E34040] absolute top-4"></div>
            <div className="w-full h-0.5 bg-[#E34040] absolute top-36"></div>
            <div className="w-56 h-0.5 bg-[#E34040] absolute right-0 top-0 rotate-90"></div>
            <div className="w-60 h-0.5 bg-[#E34040] absolute top-4 left-10"></div>
          </div>
          <div className="absolute -right-12 -top-10 w-56 h-56 opacity-20">
            <div className="w-72 h-0.5 bg-[#D02B2B] absolute top-1.5 left-10"></div>
            <div className="w-56 h-0.5 bg-[#D02B2B] absolute top-36"></div>
            <div className="w-56 h-0.5 bg-[#D02B2B] absolute right-8 top-0 rotate-90"></div>
            <div className="w-60 h-0.5 bg-[#D02B2B] absolute top-4 left-4"></div>
          </div>
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-poppins">
              You Can't Be Everywhere — But Your QR Can.
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-poppins">
              Let your vehicle stay protected 24/7, even when you're not around
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#DA0000] px-8 lg:px-12 py-4 lg:py-5 rounded-3xl text-lg lg:text-2xl font-semibold font-ibm-plex hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                Buy Now for ₹599
              </button>
              <button className="bg-white text-[#DA0000] px-8 lg:px-12 py-4 lg:py-5 rounded-3xl text-lg lg:text-xl font-normal font-ibm-plex hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                Try Free <span className="text-base">(If Available)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
