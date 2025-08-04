import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Smart QR Sticker Kit (Standard)', price: 599, quantity: 1, image: 'https://api.builder.io/api/v1/image/assets/TEMP/3a01e8dd58f9dd31d5b352a4aa38c94dbe42881c?width=300' },
    { id: 2, name: 'Smart QR Sticker Kit (Standard)', price: 599, quantity: 1, image: 'https://api.builder.io/api/v1/image/assets/TEMP/3a01e8dd58f9dd31d5b352a4aa38c94dbe42881c?width=300' },
    { id: 3, name: 'Smart QR Sticker Kit (Standard)', price: 599, quantity: 1, image: 'https://api.builder.io/api/v1/image/assets/TEMP/3a01e8dd58f9dd31d5b352a4aa38c94dbe42881c?width=300' }
  ]);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('QRSAFE50');

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

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const applyCoupon = () => {
    if (couponCode) {
      setAppliedCoupon(couponCode);
      setCouponCode('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full px-4 md:px-8 lg:px-24 pt-28 pb-16 bg-gradient-to-b from-white to-[#FFC0C0] rounded-b-3xl">
        <div className="max-w-7xl mx-auto space-y-8 lg:space-y-12">
          <div className="space-y-4 lg:space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DA0000] leading-tight font-dm-sans">
              <span className="font-bold">Shop Smart –</span> Get Your Emergency QR Today
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black font-dm-sans max-w-5xl">
              Browse our range of QR plans, sticker kits, and add-on accessories. Secure your vehicle in under 5 minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <button className="bg-[#ED3237] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
              Buy Now
            </button>
            <button className="border border-[#DA0000] text-[#DA0000] px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
              Track My Order
            </button>
            <button className="border border-[#DA0000] text-[#DA0000] px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
              Apply Coupon
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="space-y-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/dd7dd731381a38fa8a059e3c2c3c6e385aea7be4?width=800" 
                alt="Smart QR Sticker Kit" 
                className="w-full h-80 object-cover rounded-xl" 
              />
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold font-poppins">
                  Smart QR Sticker Kit <span className="font-normal text-lg">(Standard)</span>
                </h3>
                <p className="text-base text-black font-poppins">Perfect for personal vehicles</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl lg:text-2xl font-normal text-black font-poppins">₹599/year</span>
                  <span className="text-sm text-black font-poppins">(</span>
                  <span className="text-sm text-black line-through font-poppins">MRP ₹1299</span>
                  <span className="text-sm text-black font-poppins">)</span>
                  <span className="text-lg text-green-500 font-poppins font-medium">Save ₹700</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-poppins text-black mb-2">Features</h4>
                  <ul className="text-sm text-black font-poppins space-y-1">
                    <li>1 Weatherproof QR Sticker</li>
                    <li>WhatsApp + SMS Alerts</li>
                    <li>Dashboard Access</li>
                    <li>Transferable QR Ownership</li>
                  </ul>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#ED3237] text-white py-3 rounded-2xl text-lg font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                    Add to Cart
                  </button>
                  <button className="flex-1 border border-[#DA0000] text-[#DA0000] py-3 rounded-2xl text-lg font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="space-y-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7d5597fb6c36f6aa840270746db43a38f3940f94?width=800" 
                alt="Combo Kit" 
                className="w-full h-80 object-cover rounded-xl" 
              />
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold font-poppins">
                  Combo Kit <span className="font-normal text-lg">(QR + Extra Sticker)</span>
                </h3>
                <p className="text-base text-black font-poppins">For front & back glass placement</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl lg:text-2xl font-normal text-black font-poppins">₹749/year</span>
                  <span className="text-lg text-green-500 font-poppins font-medium">(Save ₹150)</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-poppins text-black mb-2">Features</h4>
                  <ul className="text-sm text-black font-poppins space-y-1">
                    <li>2 QR Stickers</li>
                    <li>1-Year Subscription</li>
                    <li>All Standard Features</li>
                  </ul>
                </div>
                <button className="w-full bg-[#ED3237] text-white py-3 rounded-2xl text-lg font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="space-y-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d4d5b40ee2085887bc62c1033baa17b73dac0b92?width=800" 
                alt="Fleet Pack" 
                className="w-full h-80 object-cover rounded-xl" 
              />
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold font-poppins">
                  Fleet Pack <span className="font-normal text-lg">(10 QR Codes)</span>
                </h3>
                <p className="text-base text-black font-poppins">Ideal for societies, logistics, cab services</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl lg:text-2xl font-normal text-black font-poppins">₹4,999</span>
                  <span className="text-sm text-black font-poppins">(₹499 per vehicle)</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-poppins text-black mb-2">Features</h4>
                  <ul className="text-sm text-black font-poppins space-y-1">
                    <li>10 QR Kits</li>
                    <li>Bulk Upload Tool</li>
                    <li>Admin Dashboard</li>
                  </ul>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#ED3237] text-white py-3 rounded-2xl text-lg font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                    Add to Cart
                  </button>
                  <button className="border border-[#DA0000] text-[#DA0000] px-2 py-3 rounded-2xl text-sm font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                    Download Fleet Format
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product 4 */}
            <div className="space-y-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/a33b670b46f504bda7ab8e9cbd4a3470f4da5ef9?width=800" 
                alt="Add-On Sticker" 
                className="w-full h-80 object-cover rounded-xl" 
              />
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold font-poppins">Add-On Sticker Only</h3>
                <p className="text-base text-black font-poppins">Lost your sticker? Get a replacement!</p>
                <span className="text-xl lg:text-2xl font-normal text-black font-poppins">₹99</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-poppins text-black mb-2">Features</h4>
                  <p className="text-sm text-black font-poppins">
                    1 Additional QR Sticker<br/>
                    (linked to existing vehicle)
                  </p>
                </div>
                <button className="w-full bg-[#ED3237] text-white py-3 rounded-2xl text-lg font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 5 */}
            <div className="space-y-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/78c7f1bbe069238b92aedc60ffc90b678ed9b412?width=800" 
                alt="QR Code Digital" 
                className="w-full h-80 object-cover rounded-xl" 
              />
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold font-poppins">
                  QR Code Digital Only
                </h3>
                <p className="text-base text-black font-poppins">(No Physical Delivery)</p>
                <p className="text-base text-black font-poppins">Use in documents, ID tags, or windshields</p>
                <span className="text-xl lg:text-2xl font-normal text-black font-poppins">₹299/year</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-poppins text-black mb-2">Features</h4>
                  <ul className="text-sm text-black font-poppins space-y-1">
                    <li>Downloadable QR PDF</li>
                    <li>Email + WhatsApp Alerts</li>
                  </ul>
                </div>
                <button className="w-full bg-[#ED3237] text-white py-3 rounded-2xl text-lg font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coupon Section */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F2322705] border border-dashed border-[#820404] rounded-xl p-8 lg:p-12 text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-black font-poppins">Got a Coupon or Referral Code ?</h2>
              <p className="text-base text-black font-poppins">Enter your code below and apply to unlock discounts</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-2xl border border-[#CDD0D6] bg-white placeholder-black/25 text-black font-poppins focus:outline-none focus:border-[#DA0000]"
                />
                <button 
                  onClick={applyCoupon}
                  className="bg-[#DA0000] text-white px-8 py-4 rounded-2xl text-lg font-bold font-poppins hover:bg-[#ED3237] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform"
                >
                  Apply
                </button>
              </div>
              {appliedCoupon && (
                <div className="flex items-center justify-center gap-2 text-black font-poppins">
                  <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 25" fill="none">
                    <path d="M1.98596 14.6424C1.88515 14.7431 1.80518 14.8627 1.75062 14.9943C1.69605 15.1259 1.66797 15.267 1.66797 15.4094C1.66797 15.5519 1.69605 15.693 1.75062 15.8246C1.80518 15.9562 1.88515 16.0757 1.98596 16.1764L7.18896 21.3804C7.61296 21.8034 8.29896 21.8034 8.72296 21.3804L22.012 8.09042C22.2153 7.88714 22.3295 7.61142 22.3295 7.32392C22.3295 7.03643 22.2153 6.76071 22.012 6.55742L19.952 4.49742C19.7487 4.29414 19.473 4.17993 19.1855 4.17993C18.898 4.17993 18.6223 4.29414 18.419 4.49742L7.95596 14.9604L5.57896 12.5824C5.3755 12.3791 5.09962 12.2648 4.81196 12.2648C4.52431 12.2648 4.24842 12.3791 4.04496 12.5824L1.98596 14.6424Z" fill="currentColor"/>
                  </svg>
                  <span>{appliedCoupon} applied – You saved ₹50!</span>
                </div>
              )}
            </div>
            <p className="text-lg font-poppins text-black">
              <span className="font-bold">Active coupons:</span> QRSAFE50, LAUNCH100, SAVE20
            </p>
            <p className="text-lg font-poppins text-black">
              <span className="font-bold">Updated Price: </span>
              <span className="line-through">₹699</span> <span className="font-bold text-green-500">₹649</span>
            </p>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#DA0000] font-dm-sans">Cart</h2>
          
          <div className="space-y-8">
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-4 border-b border-gray-200">
                  <div className="flex items-center gap-6">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-32 h-32 object-cover rounded-xl" 
                    />
                    <div className="space-y-4">
                      <h3 className="text-xl lg:text-2xl font-bold font-poppins text-black">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={() => updateQuantity(item.id, 0)}
                          className="w-12 h-12 bg-red-100 hover:bg-red-200 rounded flex items-center justify-center hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform"
                        >
                          <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                          </svg>
                        </button>
                        <div className="w-16 h-12 border border-gray-300 flex items-center justify-center text-xl font-poppins">
                          {item.quantity}
                        </div>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform"
                        >
                          <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-black font-poppins">
                    ₹{item.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon Application */}
            <div className="flex gap-2 max-w-md">
              <input
                type="text"
                placeholder="Enter Coupon"
                className="flex-1 px-6 py-4 rounded-2xl border border-[#CDD0D6] bg-white placeholder-black/25 text-black font-poppins focus:outline-none focus:border-[#DA0000]"
              />
              <button className="bg-[#DA0000] text-white px-8 py-4 rounded-2xl text-lg font-bold font-poppins hover:bg-[#ED3237] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                Apply
              </button>
            </div>

            <div className="w-full h-px bg-gray-400"></div>

            {/* Cart Summary */}
            <div className="flex justify-end">
              <div className="w-96 space-y-2">
                <div className="flex justify-between text-2xl font-poppins">
                  <span className="text-black">Subtotal:</span>
                  <span className="font-bold text-black">₹{getSubtotal()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-poppins">After applying coupon</span>
                  <div className="text-2xl font-poppins">
                    <span className="text-black">Final Price:</span>
                    <span className="font-bold text-black"> ₹{getSubtotal()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-semibold text-black font-dm-sans">
                Shipping & Delivery Info
              </h3>
              <div className="text-lg lg:text-xl text-black font-dm-sans">
                <p>Stickers shipped within <span className="font-bold">2–4 business days</span></p>
                <p>Digital QR sent via email instantly</p>
                <p>Tracking link sent by SMS & Email</p>
              </div>
            </div>

            <button className="bg-[#DA0000] text-white px-8 py-4 rounded-2xl text-lg lg:text-2xl font-bold font-poppins hover:bg-[#ED3237] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
              Track My Order
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000] font-dm-sans">
            FAQ
          </h2>
          <div className="space-y-4">
            {[
              { question: "How do I activate my QR after buying?", answer: "You'll receive an activation link via email/WhatsApp.", expanded: true },
              { question: "Can I buy multiple QRs for friends or family?", answer: "", expanded: false },
              { question: "Will I receive a printed QR or digital one?", answer: "", expanded: false },
              { question: "Do I get a dashboard after purchasing?", answer: "", expanded: false }
            ].map((faq, index) => (
              <div key={index} className="p-6 lg:p-8 border border-[#BCBCBC] rounded-3xl text-left">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg lg:text-xl font-bold text-black font-poppins">
                    {faq.question}
                  </h3>
                  <svg className={`w-8 h-8 transform transition-transform ${faq.expanded ? 'rotate-180' : '-rotate-90'}`} viewBox="0 0 35 35" fill="none">
                    <path d="M7.51388 11.2909C7.39661 11.18 7.25867 11.0934 7.10792 11.0359C6.95717 10.9784 6.79657 10.9511 6.63529 10.9557C6.47401 10.9603 6.3152 10.9966 6.16795 11.0625C6.02069 11.1284 5.88786 11.2227 5.77704 11.34C5.66623 11.4573 5.57959 11.5952 5.52209 11.746C5.46458 11.8967 5.43734 12.0573 5.4419 12.2186C5.44646 12.3799 5.48274 12.5387 5.54868 12.6859C5.61461 12.8332 5.70891 12.966 5.82618 13.0768L16.881 23.5175C17.1091 23.7331 17.411 23.8533 17.7249 23.8533C18.0387 23.8533 18.3407 23.7331 18.5687 23.5175L29.6248 13.0768C29.7446 12.9667 29.8414 12.8339 29.9095 12.6861C29.9776 12.5383 30.0156 12.3785 30.0214 12.2159C30.0272 12.0532 30.0006 11.8911 29.9431 11.7388C29.8857 11.5866 29.7986 11.4473 29.6869 11.3289C29.5752 11.2106 29.4411 11.1157 29.2924 11.0497C29.1436 10.9836 28.9833 10.9478 28.8206 10.9442C28.6579 10.9407 28.4961 10.9695 28.3447 11.029C28.1932 11.0885 28.0551 11.1775 27.9383 11.2909L17.7249 20.9356L7.51388 11.2909Z" fill="black"/>
                  </svg>
                </div>
                {faq.expanded && faq.answer && (
                  <p className="mt-4 text-lg text-black font-poppins">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
          <button className="border border-[#DA0000] text-[#DA0000] px-8 py-4 rounded-2xl text-lg lg:text-2xl font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            See All FAQs
          </button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20 relative">
        <div 
          className="max-w-7xl mx-auto rounded-3xl p-8 lg:p-16 text-center space-y-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(102deg, rgba(227, 64, 64, 0.75) -0.66%, rgba(218, 0, 0, 0.75) 100%)'
          }}
        >
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-poppins">
              Ready to protect your vehicle?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#DA0000] px-8 lg:px-12 py-4 lg:py-5 rounded-3xl text-lg lg:text-2xl font-semibold font-ibm-plex hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                Buy Smart QR Now
              </button>
              <button className="bg-white text-[#DA0000] px-8 lg:px-12 py-4 lg:py-5 rounded-3xl text-lg lg:text-2xl font-semibold font-ibm-plex hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                Check Free Access Availability
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
