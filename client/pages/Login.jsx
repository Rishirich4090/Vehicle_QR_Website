import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    firstName: '',
    lastName: '',
    resetEmail: ''
  });
  const [loginError, setLoginError] = useState('');
  // Dummy credentials for testing
  const dummyUsers = [
    { role: 'admin', email: 'admin@bhurrr.com', password: 'admin123' },
    { role: 'user', email: 'user@bhurrr.com', password: 'user123' }
  ];
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'login') {
      const found = dummyUsers.find(
        (u) =>
          (u.email === formData.email.trim() || u.email === formData.email.trim().toLowerCase()) &&
          u.password === formData.password
      );
      if (found) {
        setLoginError('');
        setLoggedIn(true);
        setLoggedUser(found);
      } else {
        setLoginError('Invalid email or password. Try admin@bhurrr.com/admin123 or user@bhurrr.com/user123');
      }
    } else {
      // For signup/forgot, keep default
      setLoginError('');
      console.log('Form submitted:', { activeTab, formData });
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLoggedUser(null);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      firstName: '',
      lastName: '',
      resetEmail: ''
    });
    setActiveTab('login');
    setLoginError('');
  };
  const Header = () => (
    <header className="w-full px-4 md:px-8 lg:px-28 py-6 flex justify-between items-center">
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
    </header>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFC0C0]">
      <Header />
      
      <div className="flex items-center justify-center px-4 py-12 lg:py-20">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#DA0000] font-dm-sans">
                Welcome to Bhurrr
              </h1>
              <p className="text-sm lg:text-base text-gray-600 font-dm-sans">
                Your vehicle's guardian awaits
              </p>
            </div>

            <div className="flex rounded-2xl bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === 'login'
                    ? 'bg-white text-[#DA0000] shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === 'signup'
                    ? 'bg-white text-[#DA0000] shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Sign Up
              </button>
            </div>

            {activeTab === 'login' && !loggedIn && (
              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA0000] focus:outline-none text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA0000] focus:outline-none text-sm"
                      required
                    />
                  </div>
                  {loginError && (
                    <div className="text-red-600 text-sm font-medium">{loginError}</div>
                  )}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-[#DA0000] focus:ring-[#DA0000]" />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setActiveTab('forgot')}
                      className="text-sm text-[#DA0000] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ED3237] text-white py-3 rounded-xl text-base font-semibold hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform"
                  >
                    Login
                  </button>
                  <div className="mt-2 text-xs text-gray-500">
                    <div>Test Admin: <b>admin@bhurrr.com</b> / <b>admin123</b></div>
                    <div>Test User: <b>user@bhurrr.com</b> / <b>user123</b></div>
                  </div>
                </form>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 transform">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="ml-2 text-sm">Google</span>
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 transform">
                    <svg className="w-5 h-5" fill="#1877f2" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="ml-2 text-sm">Facebook</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'login' && loggedIn && (
              <div className="space-y-6">
                {loggedUser && loggedUser.role === 'admin' ? (
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <h2 className="text-2xl font-bold text-[#DA0000] mb-2">Admin Profile</h2>
                    <div className="text-gray-700 mb-2">Email: <b>{loggedUser.email}</b></div>
                    <div className="text-gray-700 mb-2">Role: <b>Admin</b></div>
                    <button onClick={handleLogout} className="mt-4 px-6 py-2 bg-[#ED3237] text-white rounded-lg font-semibold hover:bg-[#DA0000] transition-all">Logout</button>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <h2 className="text-2xl font-bold text-[#DA0000] mb-2">User Profile</h2>
                    <div className="text-gray-700 mb-2">Email: <b>{loggedUser.email}</b></div>
                    <div className="text-gray-700 mb-2">Role: <b>User</b></div>
                    <button onClick={handleLogout} className="mt-4 px-6 py-2 bg-[#ED3237] text-white rounded-lg font-semibold hover:bg-[#DA0000] transition-all">Logout</button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'signup' && (
              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA0000] focus:outline-none text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA0000] focus:outline-none text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA0000] focus:outline-none text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA0000] focus:outline-none text-sm"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a password"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA0000] focus:outline-none text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA0000] focus:outline-none text-sm"
                      required
                    />
                  </div>

                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 rounded border-gray-300 text-[#DA0000] focus:ring-[#DA0000]" required />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to the <a href="#" className="text-[#DA0000] hover:underline">Terms of Service</a> and <a href="#" className="text-[#DA0000] hover:underline">Privacy Policy</a>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ED3237] text-white py-3 rounded-xl text-base font-semibold hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform"
                  >
                    Create Account
                  </button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or sign up with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 transform">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="ml-2 text-sm">Google</span>
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 transform">
                    <svg className="w-5 h-5" fill="#1877f2" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="ml-2 text-sm">Facebook</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'forgot' && (
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-xl font-semibold text-gray-900">Reset Password</h2>
                  <p className="text-sm text-gray-600">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="resetEmail"
                      value={formData.resetEmail}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA0000] focus:outline-none text-sm"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ED3237] text-white py-3 rounded-xl text-base font-semibold hover:bg-[#DA0000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform"
                  >
                    Send Reset Link
                  </button>
                </form>

                <div className="text-center">
                  <button
                    onClick={() => setActiveTab('login')}
                    className="text-sm text-[#DA0000] hover:underline"
                  >
                    Back to Login
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Need help? <Link to="/support" className="text-[#DA0000] hover:underline">Contact Support</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
