import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    issue: '',
    attachment: null
  });

  const Header = () => (
    <header className="w-full px-4 md:px-8 lg:px-28 py-4 flex justify-between items-center absolute top-0 z-10">
      <div className="flex items-center">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/4eb26000fe4f82bc206f688dd1ad5f1c1409ccb0?width=534" 
          alt="Bhurrr Logo" 
          className="h-12 md:h-14 w-auto" 
        />
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
            <a href="/" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] transition-colors">Home</a>
            <a href="#" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] transition-colors">Shop</a>
            <a href="#" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] transition-colors">Support</a>
            <a href="#" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] transition-colors">Terms</a>
            <a href="#" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] transition-colors">Privacy</a>
            <a href="#" className="text-white text-lg lg:text-xl font-semibold font-poppins hover:text-[#FFC0C0] transition-colors">Contact</a>
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full px-4 md:px-8 lg:px-24 pt-28 pb-16 bg-gradient-to-b from-white to-[#FFC0C0] rounded-b-3xl">
        <div className="max-w-7xl mx-auto space-y-8 lg:space-y-12">
          <div className="space-y-4 lg:space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DA0000] leading-tight font-dm-sans">
              Need Help? Let's Get You Sorted
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black font-dm-sans max-w-5xl">
              We're available on WhatsApp, email, and live chat. Whether it's about QR setup, payments, messaging, or custom plans — we're just a tap away.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <button className="bg-[#ED3237] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform flex items-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 28 29" fill="none">
                <path d="M22.224 6.22831C21.1542 5.1481 19.8802 4.29161 18.4761 3.70874C17.072 3.12587 15.5659 2.82828 14.0456 2.83331C7.67562 2.83331 2.48396 8.02498 2.48396 14.395C2.48396 16.4366 3.02063 18.42 4.02396 20.17L2.39062 26.1666L8.51562 24.5566C10.2073 25.4783 12.109 25.9683 14.0456 25.9683C20.4156 25.9683 25.6073 20.7766 25.6073 14.4066C25.6073 11.315 24.4056 8.40998 22.224 6.22831ZM14.0456 24.0083C12.319 24.0083 10.6273 23.5416 9.14562 22.6666L8.79562 22.4566L5.15563 23.4133L6.12396 19.8666L5.89063 19.505C4.9311 17.9732 4.4217 16.2025 4.42062 14.395C4.42062 9.09832 8.73729 4.78165 14.034 4.78165C16.6006 4.78165 19.0156 5.78498 20.824 7.60498C21.7195 8.49616 22.4292 9.55628 22.9119 10.7239C23.3945 11.8914 23.6405 13.1432 23.6356 14.4066C23.659 19.7033 19.3423 24.0083 14.0456 24.0083ZM19.319 16.8216C19.0273 16.6816 17.604 15.9816 17.3473 15.8766C17.079 15.7833 16.8923 15.7366 16.694 16.0166C16.4956 16.3083 15.9473 16.9616 15.784 17.1483C15.6206 17.3466 15.4456 17.37 15.154 17.2183C14.8623 17.0783 13.929 16.7633 12.8323 15.7833C11.969 15.0133 11.3973 14.0683 11.2223 13.7766C11.059 13.485 11.199 13.3333 11.3506 13.1816C11.479 13.0533 11.6423 12.8433 11.7823 12.68C11.9223 12.5166 11.9806 12.3883 12.074 12.2016C12.1673 12.0033 12.1206 11.84 12.0506 11.7C11.9806 11.56 11.3973 10.1366 11.164 9.55331C10.9306 8.99331 10.6856 9.06331 10.5106 9.05165H9.95062C9.75229 9.05165 9.44896 9.12165 9.18062 9.41331C8.92396 9.70498 8.17729 10.405 8.17729 11.8283C8.17729 13.2516 9.21563 14.6283 9.35563 14.815C9.49563 15.0133 11.3973 17.93 14.2906 19.1783C14.979 19.4816 15.5156 19.6566 15.9356 19.785C16.624 20.0066 17.254 19.9716 17.7556 19.9016C18.3156 19.82 19.4706 19.2016 19.704 18.525C19.949 17.8483 19.949 17.2766 19.8673 17.1483C19.7856 17.02 19.6106 16.9616 19.319 16.8216Z" fill="white"/>
              </svg>
              Chat on WhatsApp
            </button>
            <button className="border border-[#DA0000] text-[#DA0000] px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform flex items-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 28 29" fill="none">
                <path d="M4.66536 23.8334C4.0237 23.8334 3.47459 23.6051 3.01803 23.1485C2.56148 22.692 2.33281 22.1425 2.33203 21.5V7.50002C2.33203 6.85835 2.5607 6.30924 3.01803 5.85269C3.47536 5.39613 4.02448 5.16746 4.66536 5.16669H23.332C23.9737 5.16669 24.5232 5.39535 24.9805 5.85269C25.4379 6.31002 25.6661 6.85913 25.6654 7.50002V21.5C25.6654 22.1417 25.4371 22.6912 24.9805 23.1485C24.524 23.6059 23.9745 23.8341 23.332 23.8334H4.66536ZM23.332 9.83335L14.6112 15.2875C14.514 15.3459 14.4121 15.3898 14.3055 15.4194C14.199 15.4489 14.0967 15.4633 13.9987 15.4625C13.9007 15.4617 13.7988 15.4474 13.693 15.4194C13.5873 15.3914 13.485 15.3474 13.3862 15.2875L4.66536 9.83335V21.5H23.332V9.83335ZM13.9987 13.3334L23.332 7.50002H4.66536L13.9987 13.3334ZM4.66536 10.125V8.40419V8.43335V8.41935V10.125Z" fill="currentColor"/>
              </svg>
              Email Us
            </button>
            <button className="border border-[#DA0000] text-[#DA0000] px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-lg lg:text-2xl font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform flex items-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 28 29" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.0987 12.3767C22.7371 8.66673 20.5437 2.83337 13.7654 2.83337C6.98706 2.83337 4.79371 8.66673 4.43206 12.3767C3.16331 12.8582 2.32643 14.0764 2.33206 15.4334V17.0667C2.33206 18.8709 3.79462 20.3334 5.59871 20.3334C7.40285 20.3334 8.86541 18.8708 8.86541 17.0667V15.4334C8.8595 14.1056 8.05341 12.9126 6.82371 12.4117C7.05706 10.265 8.20041 5.16673 13.7654 5.16673C19.3304 5.16673 20.4621 10.265 20.6954 12.4117C19.4682 12.9136 18.6662 14.1075 18.6654 15.4334V17.0667C18.6679 17.6814 18.8432 18.283 19.1712 18.8028C19.4992 19.3227 19.9667 19.7398 20.5204 20.0067C20.0304 20.9284 18.7821 22.1767 15.7137 22.55C15.1004 21.6187 13.9137 21.2515 12.8816 21.6738C11.8494 22.096 11.2603 23.1895 11.4755 24.2837C11.6908 25.3779 12.6502 26.1667 13.7654 26.1667C14.1975 26.1643 14.6205 26.042 14.9871 25.8133C15.3538 25.5847 15.6498 25.2587 15.8421 24.8717C20.8471 24.3 22.4454 21.7217 22.9471 20.205C24.3042 19.7654 25.217 18.4932 25.1987 17.0667V15.4334C25.2043 14.0764 24.3675 12.8582 23.0987 12.3767ZM6.53206 17.0667C6.53206 17.5822 6.11419 18 5.59871 18C5.08322 18 4.66541 17.5822 4.66541 17.0667V15.4334C4.66447 15.3102 4.68791 15.1881 4.73439 15.074C4.78088 14.9599 4.84947 14.8562 4.93623 14.7688C5.023 14.6814 5.1262 14.612 5.23991 14.5646C5.35361 14.5173 5.47556 14.4929 5.59874 14.4929C5.72191 14.4929 5.84386 14.5173 5.95756 14.5646C6.07127 14.612 6.17447 14.6814 6.26124 14.7688C6.348 14.8562 6.41659 14.9599 6.46308 15.074C6.50956 15.1881 6.533 15.3102 6.53206 15.4334V17.0667ZM20.9987 15.4334C20.9987 14.9179 21.4166 14.5 21.9321 14.5C22.4475 14.5 22.8654 14.9179 22.8654 15.4334V17.0667C22.8654 17.5822 22.4475 18 21.9321 18C21.4166 18 20.9987 17.5822 20.9987 17.0667V15.4334Z" fill="currentColor"/>
              </svg>
              Call Support
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black font-dm-sans">
            Quick Contact Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#FF636305] rounded-xl shadow-lg space-y-4 border border-[#E2A7A7]/20">
              <h3 className="text-xl lg:text-2xl font-semibold text-black font-poppins">WhatsApp</h3>
              <svg className="w-14 h-14 mx-auto" viewBox="0 0 56 56" fill="none">
                <g clipPath="url(#clip0_361_2509)">
                  <path d="M1.19406 27.881C1.19275 32.6228 2.43175 37.2528 4.78768 41.3338L0.96875 55.2774L15.2382 51.5359C19.185 53.6844 23.607 54.8102 28.1007 54.8106H28.1125C42.947 54.8106 55.0226 42.7393 55.029 27.9022C55.0318 20.7125 52.2345 13.9519 47.152 8.86549C42.0705 3.77956 35.3122 0.977158 28.1114 0.973877C13.2752 0.973877 1.20041 13.0445 1.19428 27.881" fill="url(#paint0_linear_361_2509)"/>
                  <path d="M0.234062 27.8722C0.232531 32.7847 1.51593 37.5803 3.95587 41.8074L0 56.2508L14.7811 52.3752C18.8538 54.5957 23.4392 55.7665 28.1052 55.7682H28.1172C43.4839 55.7682 55.9933 43.2628 55.9999 27.8945C56.0025 20.4465 53.1045 13.4428 47.8405 8.17423C42.5759 2.90631 35.5759 0.00306249 28.1172 0C12.7478 0 0.240187 12.5037 0.234062 27.8722ZM9.03676 41.0794L8.48486 40.2033C6.1648 36.5143 4.94024 32.2513 4.94199 27.8739C4.9468 15.1001 15.3427 4.70749 28.1259 4.70749C34.3166 4.71012 40.1344 7.12336 44.5103 11.5019C48.8859 15.8808 51.2937 21.7017 51.2922 27.8928C51.2865 40.6666 40.8904 51.0605 28.1172 51.0605H28.108C23.9489 51.0583 19.8699 49.9414 16.3126 47.8307L15.466 47.3287L6.69461 49.6284L9.03676 41.0794Z" fill="url(#paint1_linear_361_2509)"/>
                  <path d="M21.1483 16.2198C20.6263 15.0598 20.0771 15.0364 19.5807 15.0161C19.1743 14.9986 18.7096 14.9999 18.2455 14.9999C17.7808 14.9999 17.0259 15.1747 16.3878 15.8714C15.7491 16.5687 13.9492 18.254 13.9492 21.6816C13.9492 25.1092 16.4458 28.4219 16.7938 28.8872C17.1423 29.3516 21.6135 36.6106 28.6949 39.4031C34.5801 41.7238 35.7778 41.2623 37.0551 41.1459C38.3326 41.03 41.1772 39.4611 41.7575 37.8343C42.3383 36.2076 42.3383 34.8133 42.1642 34.522C41.9901 34.2317 41.5254 34.0573 40.8287 33.7091C40.132 33.3608 36.7066 31.6752 36.0681 31.4426C35.4293 31.2103 34.9649 31.0944 34.5003 31.792C34.0357 32.4885 32.7015 34.0573 32.2949 34.522C31.8887 34.9877 31.482 35.0456 30.7855 34.6972C30.0883 34.3476 27.8446 33.6128 25.1827 31.2396C23.1115 29.3929 21.7133 27.1125 21.3069 26.4149C20.9004 25.7184 21.2633 25.3408 21.6127 24.9937C21.9257 24.6815 22.3096 24.1801 22.6583 23.7735C23.0057 23.3666 23.1216 23.0763 23.3539 22.6117C23.5865 22.1466 23.4701 21.7398 23.2962 21.3913C23.1216 21.0428 21.7678 17.5973 21.1483 16.2198Z" fill="white"/>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_361_2509" x1="2703.98" y1="5431.32" x2="2703.98" y2="0.973877" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1FAF38"/>
                    <stop offset="1" stopColor="#60D669"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_361_2509" x1="2799.99" y1="5625.08" x2="2799.99" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F9F9F9"/>
                    <stop offset="1" stopColor="white"/>
                  </linearGradient>
                  <clipPath id="clip0_361_2509">
                    <rect width="56" height="56" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black text-base lg:text-lg font-poppins">
                <span className="text-xl font-medium">+91 9270 25 6969</span><br/>
                <span className="text-xs">(10 AM – 8 PM, Mon–Sat)</span>
              </p>
            </div>

            <div className="p-6 bg-[#FF636305] rounded-xl shadow-lg space-y-4 border border-[#E2A7A7]/20">
              <h3 className="text-xl lg:text-2xl font-semibold text-black font-poppins">Email</h3>
              <svg className="w-14 h-14 mx-auto" viewBox="0 0 56 57" fill="none">
                <path d="M46.6667 12.0938H9.33333C7.49238 12.0938 6 13.5861 6 15.4271V41.7604C6 43.6014 7.49238 45.0938 9.33333 45.0938H46.6667C48.5076 45.0938 50 43.6014 50 41.7604V15.4271C50 13.5861 48.5076 12.0938 46.6667 12.0938Z" fill="#4285F4"/>
                <path d="M46.6667 12.0938H9.33333C7.49238 12.0938 6 13.5861 6 15.4271V17.0938L28 30.7604L50 17.0938V15.4271C50 13.5861 48.5076 12.0938 46.6667 12.0938Z" fill="#34A853"/>
                <path d="M6 17.0938V41.7604C6 43.6014 7.49238 45.0938 9.33333 45.0938H46.6667C48.5076 45.0938 50 43.6014 50 41.7604V17.0938L28 30.7604L6 17.0938Z" fill="#EA4335"/>
              </svg>
              <p className="text-black text-base lg:text-lg font-poppins">
                support@bhurrr.com
              </p>
            </div>

            <div className="p-6 bg-[#FF636305] rounded-xl shadow-lg space-y-4 border border-[#E2A7A7]/20">
              <h3 className="text-xl lg:text-2xl font-semibold text-black font-poppins">Working Hours</h3>
              <svg className="w-14 h-14 mx-auto" viewBox="0 0 56 56" fill="none">
                <path d="M28.0013 51.3333C40.888 51.3333 51.3346 40.8866 51.3346 28C51.3346 15.1133 40.888 4.66666 28.0013 4.66666C15.1147 4.66666 4.66797 15.1133 4.66797 28C4.66797 40.8866 15.1147 51.3333 28.0013 51.3333Z" fill="#00ACC1"/>
                <path d="M27.9987 46.6667C38.308 46.6667 46.6654 38.3093 46.6654 28C46.6654 17.6907 38.308 9.33334 27.9987 9.33334C17.6894 9.33334 9.33203 17.6907 9.33203 28C9.33203 38.3093 17.6894 46.6667 27.9987 46.6667Z" fill="#EEEEEE"/>
                <path d="M26.832 12.8333H29.1654V28H26.832V12.8333Z" fill="black"/>
                <path d="M36.4995 34.5963L34.6036 36.4933L27.0156 28.9053L28.9126 27.0072L36.4995 34.5963Z" fill="black"/>
                <path d="M28.0013 30.3333C29.29 30.3333 30.3346 29.2887 30.3346 28C30.3346 26.7113 29.29 25.6667 28.0013 25.6667C26.7126 25.6667 25.668 26.7113 25.668 28C25.668 29.2887 26.7126 30.3333 28.0013 30.3333Z" fill="black"/>
                <path d="M27.9987 29.1667C28.643 29.1667 29.1654 28.6443 29.1654 28C29.1654 27.3557 28.643 26.8333 27.9987 26.8333C27.3544 26.8333 26.832 27.3557 26.832 28C26.832 28.6443 27.3544 29.1667 27.9987 29.1667Z" fill="#00ACC1"/>
              </svg>
              <p className="text-black text-base lg:text-lg font-poppins">
                10 AM – 8 PM (Mon–Sat)
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ED3237] text-white px-6 lg:px-8 py-3 rounded-2xl text-lg lg:text-xl font-semibold font-dm-sans hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform flex items-center gap-2 justify-center">
              <svg className="w-6 h-6" viewBox="0 0 25 26" fill="none">
                <path d="M19.5317 5.75383C18.5981 4.8111 17.4862 4.06361 16.2608 3.55492C15.0355 3.04624 13.7211 2.78652 12.3943 2.79092C6.83502 2.79092 2.30411 7.32183 2.30411 12.8811C2.30411 14.6629 2.77247 16.3938 3.64811 17.9211L2.22266 23.1546L7.56811 21.7495C9.04447 22.5538 10.7041 22.9815 12.3943 22.9815C17.9536 22.9815 22.4845 18.4506 22.4845 12.8913C22.4845 10.1931 21.4357 7.65783 19.5317 5.75383ZM12.3943 21.2709C10.8874 21.2709 9.41102 20.8636 8.11793 20.1L7.81247 19.9167L4.63575 20.7516L5.48084 17.6564L5.2772 17.3407C4.4398 16.0039 3.99523 14.4585 3.99429 12.8811C3.99429 8.25855 7.76156 4.49128 12.3841 4.49128C14.6241 4.49128 16.7317 5.36692 18.3099 6.95528C19.0915 7.73303 19.7109 8.65823 20.1321 9.67722C20.5533 10.6962 20.768 11.7887 20.7637 12.8913C20.7841 17.5138 17.0168 21.2709 12.3943 21.2709ZM16.9965 14.9989C16.7419 14.8767 15.4997 14.2658 15.2757 14.1742C15.0416 14.0927 14.8787 14.052 14.7056 14.2964C14.5325 14.5509 14.0539 15.1211 13.9114 15.284C13.7688 15.4571 13.6161 15.4775 13.3616 15.3451C13.107 15.2229 12.2925 14.948 11.3354 14.0927C10.5819 13.4207 10.083 12.596 9.93029 12.3415C9.78775 12.0869 9.90993 11.9546 10.0423 11.8222C10.1543 11.7102 10.2968 11.5269 10.419 11.3844C10.5412 11.2418 10.5921 11.1298 10.6736 10.9669C10.755 10.7938 10.7143 10.6513 10.6532 10.5291C10.5921 10.4069 10.083 9.16474 9.87938 8.65565C9.67575 8.16692 9.46193 8.22801 9.3092 8.21783H8.82047C8.64738 8.21783 8.38266 8.27892 8.14847 8.53346C7.92447 8.78801 7.27284 9.39892 7.27284 10.6411C7.27284 11.8833 8.17902 13.0847 8.3012 13.2476C8.42338 13.4207 10.083 15.9662 12.6081 17.0556C13.2088 17.3204 13.6772 17.4731 14.0437 17.5851C14.6445 17.7786 15.1943 17.748 15.6321 17.6869C16.1208 17.6156 17.1288 17.076 17.3325 16.4855C17.5463 15.8949 17.5463 15.396 17.475 15.284C17.4037 15.172 17.251 15.1211 16.9965 14.9989Z" fill="white"/>
              </svg>
              Open WhatsApp Now
            </button>
            <button className="border border-[#DA0000] text-[#DA0000] px-6 lg:px-8 py-3 rounded-2xl text-lg lg:text-xl font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform flex items-center gap-2 justify-center">
              <svg className="w-6 h-6" viewBox="0 0 25 26" fill="none">
                <path d="M4.50121 21.1181C3.94121 21.1181 3.46198 20.9189 3.06353 20.5205C2.66509 20.122 2.46552 19.6425 2.46484 19.0818V6.8636C2.46484 6.3036 2.66441 5.82438 3.06353 5.42593C3.46266 5.02748 3.94189 4.82792 4.50121 4.82724H20.7921C21.3521 4.82724 21.8317 5.0268 22.2308 5.42593C22.6299 5.82506 22.8292 6.30428 22.8285 6.8636V19.0818C22.8285 19.6418 22.6293 20.1213 22.2308 20.5205C21.8324 20.9196 21.3528 21.1188 20.7921 21.1181H4.50121ZM20.7921 8.89997L13.1812 13.66C13.0964 13.7109 13.0074 13.7492 12.9144 13.775C12.8214 13.8008 12.7322 13.8134 12.6467 13.8127C12.5611 13.812 12.4722 13.7995 12.3799 13.775C12.2876 13.7506 12.1983 13.7122 12.1121 13.66L4.50121 8.89997V19.0818H20.7921V8.89997ZM12.6467 11.9545L20.7921 6.8636H4.50121L12.6467 11.9545ZM4.50121 9.15451V7.65269V7.67815V7.66593V9.15451Z" fill="currentColor"/>
              </svg>
              Send an Email
            </button>
          </div>
        </div>
      </section>

      {/* Support Request Form */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F2322705] border border-dashed border-[#820404] rounded-3xl p-8 lg:p-12">
            <h2 className="text-xl lg:text-2xl font-medium text-black font-poppins mb-8">Support Request</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-base font-medium text-black font-poppins">Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-2xl border border-[#CDD0D6] bg-white placeholder-black/25 text-black font-poppins focus:outline-none focus:border-[#DA0000]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base font-medium text-black font-poppins">Registered Mobile/Email*</label>
                <input
                  type="text"
                  name="contact"
                  placeholder="xx-xxxxx-xxxxx/xyz@gmail.com"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-2xl border border-[#CDD0D6] bg-white placeholder-black/25 text-black font-poppins focus:outline-none focus:border-[#DA0000]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base font-medium text-black font-poppins">Describe Your Issue*</label>
                <textarea
                  name="issue"
                  placeholder="Write text here..."
                  value={formData.issue}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl border border-[#CDD0D6] bg-white placeholder-black/25 text-black font-poppins resize-none focus:outline-none focus:border-[#DA0000]"
                  required
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="block font-poppins">
                  <span className="text-base font-medium text-black">Attach Screenshot </span>
                  <span className="text-xs font-medium text-black">(optional)*</span>
                </label>
                <div className="flex items-center gap-2 px-6 py-4 rounded-full border border-[#CDD0D6] bg-white cursor-pointer hover:border-[#DA0000] transition-colors">
                  <svg className="w-6 h-6 text-black/25" viewBox="0 0 25 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00105 20.9029C7.40501 20.9029 5.90377 20.2813 4.7749 19.1524C2.44482 16.8223 2.44482 13.0301 4.7749 10.7001L12.7454 2.72952L13.9896 3.97471L6.01908 11.9442C4.37517 13.5891 4.37517 16.2642 6.01908 17.9082C6.81566 18.7047 7.87512 19.1435 9.00105 19.1435C10.127 19.1435 11.1865 18.7047 11.983 17.9082L19.8685 10.0227C20.8488 9.04238 20.8488 7.44827 19.8685 6.46798C18.9185 5.51701 17.2619 5.51994 16.3138 6.46702L8.59156 14.1834C8.42929 14.3456 8.34036 14.5616 8.34036 14.7913C8.34036 15.021 8.42929 15.237 8.59252 15.3992C8.91703 15.7267 9.48485 15.7247 9.80936 15.3992L16.2923 8.91726L17.5365 10.1625L11.0545 16.6444C10.0312 17.6658 8.36968 17.6638 7.34834 16.6444C6.32696 15.623 6.32696 13.9596 7.34834 12.9392L15.0705 5.22384C15.8759 4.41751 16.95 3.97279 18.0916 3.97279C19.2322 3.97279 20.3053 4.4165 21.1136 5.22384C22.7791 6.89025 22.7791 9.6015 21.1136 11.2679L13.2272 19.1524C12.0984 20.2813 10.5981 20.9029 9.00105 20.9029Z" fill="currentColor"/>
                  </svg>
                  <span className="text-base font-medium text-black/25 font-poppins">Attach</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#740000] to-[#DA0000] text-white px-8 py-4 rounded-3xl text-lg lg:text-xl font-semibold font-poppins hover:opacity-90 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform"
              >
                Submit Request Button
              </button>

              <div className="flex items-center gap-2 text-sm font-poppins text-black">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12.2273 1.6875C6.56003 1.6875 1.96484 6.28269 1.96484 11.9499C1.96484 17.6172 6.56003 22.2124 12.2273 22.2124C17.8945 22.2124 22.4897 17.6172 22.4897 11.9499C22.4897 6.28269 17.8945 1.6875 12.2273 1.6875ZM12.2273 20.4714C7.52213 20.4714 3.70579 16.6551 3.70579 11.9499C3.70579 7.24479 7.52213 3.42845 12.2273 3.42845C16.9324 3.42845 20.7488 7.24479 20.7488 11.9499C20.7488 16.6551 16.9324 20.4714 12.2273 20.4714Z" fill="black"/>
                  <path d="M11.1289 7.91827C11.1289 8.20989 11.2448 8.48956 11.451 8.69577C11.6572 8.90197 11.9368 9.01782 12.2285 9.01782C12.5201 9.01782 12.7997 8.90197 13.0059 8.69577C13.2122 8.48956 13.328 8.20989 13.328 7.91827C13.328 7.62665 13.2122 7.34698 13.0059 7.14077C12.7997 6.93457 12.5201 6.81873 12.2285 6.81873C11.9368 6.81873 11.6572 6.93457 11.451 7.14077C11.2448 7.34698 11.1289 7.62665 11.1289 7.91827ZM12.7782 10.4839H11.6787C11.5779 10.4839 11.4954 10.5663 11.4954 10.6671V16.8979C11.4954 16.9987 11.5779 17.0812 11.6787 17.0812H12.7782C12.879 17.0812 12.9615 16.9987 12.9615 16.8979V10.6671C12.9615 10.5663 12.879 10.4839 12.7782 10.4839Z" fill="black"/>
                </svg>
                <span>Most support requests are answered within <span className="font-bold">24 hours</span></span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Self-Service Help Topics */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000] font-dm-sans">
            Self-Service Help Topics
          </h2>
          <div className="space-y-4">
            {[
              "How do I install my QR code",
              "How to check if my alerts are working?",
              "How do I renew my subscription?",
              "Can I assign the QR code to my driver temporarily?",
              "Where do I update my WhatsApp alert number?"
            ].map((question, index) => (
              <div key={index} className="p-6 lg:p-8 border border-[#BCBCBC] rounded-3xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg lg:text-xl font-medium text-black font-poppins text-left">
                    {question}
                  </h3>
                  <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 35 35" fill="none">
                    <path d="M7.51388 11.2909C7.39661 11.18 7.25867 11.0934 7.10792 11.0359C6.95717 10.9784 6.79657 10.9511 6.63529 10.9557C6.47401 10.9603 6.3152 10.9966 6.16795 11.0625C6.02069 11.1284 5.88786 11.2227 5.77704 11.34C5.66623 11.4573 5.57959 11.5952 5.52209 11.746C5.46458 11.8967 5.43734 12.0573 5.4419 12.2186C5.44646 12.3799 5.48274 12.5387 5.54868 12.6859C5.61461 12.8332 5.70891 12.966 5.82618 13.0768L16.881 23.5175C17.1091 23.7331 17.411 23.8533 17.7249 23.8533C18.0387 23.8533 18.3407 23.7331 18.5687 23.5175L29.6248 13.0768C29.7446 12.9667 29.8414 12.8339 29.9095 12.6861C29.9776 12.5383 30.0156 12.3785 30.0214 12.2159C30.0272 12.0532 30.0006 11.8911 29.9431 11.7388C29.8857 11.5866 29.7986 11.4473 29.6869 11.3289C29.5752 11.2106 29.4411 11.1157 29.2924 11.0497C29.1436 10.9836 28.9833 10.9478 28.8206 10.9442C28.6579 10.9407 28.4961 10.9695 28.3447 11.029C28.1932 11.0885 28.0551 11.1775 27.9383 11.2909L17.7249 20.9356L7.51388 11.2909Z" fill="black"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <button className="border border-[#DA0000] text-[#DA0000] px-8 py-4 rounded-2xl text-lg lg:text-2xl font-medium font-dm-sans hover:bg-[#DA0000] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
            Go to Help Center
          </button>
        </div>
      </section>

      {/* Track My Request */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#F2322705] border border-dashed border-[#820404] rounded-xl p-8 lg:p-12 text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-black font-poppins">Track My Request</h2>
              <h3 className="text-lg lg:text-xl font-semibold text-black font-poppins">Already raised a ticket ?</h3>
              <p className="text-base text-black font-poppins">Track your request status here:</p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Request ID"
                className="w-full px-6 py-4 rounded-2xl border border-[#CDD0D6] bg-white placeholder-black/25 text-black font-poppins focus:outline-none focus:border-[#DA0000]"
              />
              <button className="bg-[#DA0000] text-white px-8 py-3 rounded-2xl text-lg font-bold font-poppins hover:bg-[#ED3237] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                Check Status
              </button>
              <p className="text-sm font-semibold text-[#A20505] font-poppins">*Login required to view history</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business & Custom Support */}
      <section className="w-full px-4 md:px-8 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#DA0000] font-dm-sans">
              Business & Custom Support
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-black font-dm-sans">
              Are you a fleet manager, security agency, or housing society ?
            </p>
            <p className="text-lg md:text-xl text-black font-dm-sans">
              Need bulk QR codes or integration help ?
            </p>
          </div>
          
          <div className="space-y-8 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 text-[#DA0000]" viewBox="0 0 32 33" fill="none">
                <path d="M29.3346 10.0057L17.3466 17.6417C16.9398 17.878 16.4778 18.0025 16.0073 18.0025C15.5369 18.0025 15.0748 17.878 14.668 17.6417L2.66797 10.0057" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26.668 6.00574H5.33464C3.86188 6.00574 2.66797 7.19964 2.66797 8.6724V24.6724C2.66797 26.1452 3.86188 27.3391 5.33464 27.3391H26.668C28.1407 27.3391 29.3346 26.1452 29.3346 24.6724V8.6724C29.3346 7.19964 28.1407 6.00574 26.668 6.00574Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-lg lg:text-2xl text-black font-dm-sans">
                Email our sales/support team directly: <span className="font-bold">enterprise@bhurrr.com</span>
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 text-[#DA0000]" viewBox="0 0 32 33" fill="none">
                <path d="M11.8476 10.2324C12.0916 10.239 12.3623 10.2524 12.6196 10.823C12.7903 11.203 13.077 11.903 13.3116 12.4737C13.4943 12.9177 13.6436 13.283 13.681 13.3577C13.7663 13.5284 13.8196 13.7244 13.7076 13.955L13.6703 14.0324C13.5945 14.2118 13.491 14.3783 13.3636 14.5257L13.173 14.7524C13.0596 14.891 12.9463 15.027 12.8503 15.123C12.6783 15.2937 12.501 15.4777 12.6983 15.819C12.8956 16.1604 13.589 17.283 14.6116 18.1884C15.3596 18.863 16.2179 19.4042 17.149 19.7884C17.2423 19.8284 17.3179 19.8622 17.3756 19.8897C17.7183 20.0604 17.9223 20.0337 18.1196 19.8044C18.3183 19.5737 18.977 18.8057 19.209 18.4644C19.433 18.123 19.6623 18.1764 19.9796 18.2937C20.297 18.4124 21.985 19.2404 22.3276 19.4097L22.5183 19.503C22.757 19.6164 22.9183 19.695 22.9876 19.8097C23.073 19.955 23.073 20.6364 22.7903 21.439C22.4996 22.239 21.101 23.007 20.4676 23.0657L20.2876 23.087C19.7063 23.1564 18.9703 23.247 16.3463 22.2137C13.1116 20.9417 10.977 17.787 10.5463 17.1484L10.4756 17.047L10.4676 17.0364C10.2716 16.7737 9.07031 15.167 9.07031 13.5084C9.07031 11.9217 9.85298 11.095 10.209 10.719L10.2716 10.6524C10.3869 10.5222 10.5277 10.4171 10.6853 10.3437C10.8428 10.2703 11.0139 10.2302 11.1876 10.2257C11.4183 10.2257 11.6503 10.2257 11.8476 10.2324Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.91068 29.1137C2.88555 29.2041 2.88472 29.2995 2.90825 29.3903C2.93179 29.4812 2.97886 29.5642 3.04472 29.631C3.11059 29.6978 3.19291 29.746 3.28338 29.7709C3.37385 29.7957 3.46927 29.7962 3.56001 29.7724L9.70268 28.167C11.6516 29.2227 13.8329 29.7758 16.0493 29.7764H16.0547C23.3693 29.7764 29.332 23.8484 29.332 16.5604C29.3365 14.8224 28.9953 13.101 28.3283 11.4961C27.6613 9.89128 26.6817 8.43512 25.4467 7.21238C24.2137 5.9796 22.7492 5.00275 21.1374 4.33802C19.5256 3.67328 17.7982 3.33378 16.0547 3.33905C8.74001 3.33905 2.77734 9.26705 2.77734 16.5537C2.77734 18.8724 3.38801 21.1497 4.55068 23.159L2.91068 29.1137ZM6.48001 23.6897C6.55051 23.4338 6.56937 23.1665 6.53549 22.9032C6.50161 22.64 6.41567 22.3861 6.28268 22.1564C5.29754 20.4535 4.77834 18.5211 4.77734 16.5537C4.77734 10.3804 9.83468 5.33905 16.0547 5.33905C19.0813 5.33905 21.9053 6.50838 24.036 8.62972C25.0843 9.66666 25.9157 10.902 26.4816 12.2636C27.0475 13.6252 27.3366 15.0859 27.332 16.5604C27.332 22.7337 22.2747 27.7764 16.0547 27.7764H16.048C14.1649 27.7754 12.3118 27.3053 10.656 26.4084C10.2097 26.1668 9.68829 26.1039 9.19734 26.2324L5.51468 27.1937L6.48001 23.6897Z" fill="currentColor"/>
              </svg>
              <p className="text-lg lg:text-2xl text-black font-dm-sans">
                WhatsApp us: <span className="font-bold">+91 9270 25 6969</span>
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-black font-dm-sans">
              Add a contact number if you provide telephonic onboarding
            </p>
            
            <div className="flex items-start gap-4">
              <svg className="w-10 h-10 text-[#DA0000] mt-1" viewBox="0 0 40 41" fill="none">
                <path d="M20 13.1724C22.7614 13.1724 25 10.9338 25 8.17236C25 5.41094 22.7614 3.17236 20 3.17236C17.2386 3.17236 15 5.41094 15 8.17236C15 10.9338 17.2386 13.1724 20 13.1724Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.25 13.4849C21.25 13.2984 21.1759 13.1195 21.0441 12.9877C20.9122 12.8558 20.7334 12.7817 20.5469 12.7817H19.4531C19.2666 12.7817 19.0878 12.8558 18.9559 12.9877C18.8241 13.1195 18.75 13.2984 18.75 13.4849V36.4192C18.7502 36.7513 18.8163 37.0801 18.9445 37.3864L19.7312 39.2614C19.7576 39.3097 19.7965 39.3499 19.8438 39.378C19.8911 39.406 19.945 39.4208 20 39.4208C20.055 39.4208 20.1089 39.406 20.1562 39.378C20.2035 39.3499 20.2424 39.3097 20.2688 39.2614L21.0555 37.3864C21.1837 37.0801 21.2498 36.7513 21.25 36.4192V13.4849Z" fill="currentColor"/>
                <path d="M21.875 8.17236C22.9105 8.17236 23.75 7.3329 23.75 6.29736C23.75 5.26183 22.9105 4.42236 21.875 4.42236C20.8395 4.42236 20 5.26183 20 6.29736C20 7.3329 20.8395 8.17236 21.875 8.17236Z" fill="currentColor"/>
              </svg>
              <p className="text-lg lg:text-2xl text-black font-dm-sans">
                <span className="font-bold">Registered Office Address:</span> Bhurrr Technologies Pvt Ltd, 123 Tech Park, Pune, 411001, Maharashtra, India
              </p>
            </div>
          </div>
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
              Still confused?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-poppins">
              Don't worry ��� we'll help you figure it out
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#DA0000] px-8 lg:px-12 py-4 lg:py-5 rounded-3xl text-lg lg:text-2xl font-semibold font-ibm-plex hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                Start WhatsApp Chat
              </button>
              <button className="bg-white text-[#DA0000] px-8 lg:px-12 py-4 lg:py-5 rounded-3xl text-lg lg:text-2xl font-semibold font-ibm-plex hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform">
                Send a Support Email
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
