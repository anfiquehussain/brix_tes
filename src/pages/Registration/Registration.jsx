import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Registration() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false); // State for the checkbox

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!termsAccepted) {
      setError('You must accept the terms and policies.');
      setIsLoading(false);
      return;
    }
    alert(`Username: ${formData.username}\nPassword: ${formData.password}`);
    setIsLoading(false);
    setSuccessMessage('Login successful!');
  };

  return (
    <div className="grid h-screen w-screen grid-cols-1 md:grid-cols-2">
      {/* Left side */}
      <div className="relative border-gray-300 flex flex-col items-start justify-between border-r-2 p-4 bg-cover bg-center h-[50vh] md:h-full" style={{ backgroundImage: "url('/images/bgi/auth_bg.png')" }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Logo container */}
        <div className="mb-4 flex items-start z-10">
          <img src="/images/logo/footer_logo.png" alt="Icon" className="w-3/4 md:w-auto" />
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col items-center justify-center p-4 md:p-4 md:h-full">
        <div className="flex w-11/12 flex-col items-start md:w-4/5">
          <div className="text-start font-bold text-3xl md:text-2xl">
            <p>Hey</p>
            <p>Welcome Back.</p>
            <p className='text-xs text-brand-text-light font-light'>Create your account.</p>
          </div>
          <hr className="border-1 my-8 w-full border-solid border-graylight" />
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="border-brand-primary bg-gray-100 mb-4 w-full rounded-md border p-2"
              required
            />
            <input
              type="email" // Changed type to email
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email or Phone"
              className="border-brand-primary bg-gray-100 mb-4 w-full rounded-md border p-2"
              required
            />
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="border-brand-primary bg-gray-100 w-full rounded-md border p-2"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="text-brand-price-old" /> : <FaEye className="text-brand-price-old" />}
              </button>
            </div>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword" // Changed to confirmPassword
                placeholder="Confirm Password"
                className="border-brand-primary bg-gray-100 w-full rounded-md border p-2"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="text-brand-price-old" /> : <FaEye className="text-brand-price-old" />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {successMessage && <p className="mb-4 text-ForestGreen text-sm">{successMessage}</p>}

            <div className="flex justify-center items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mr-2 cursor-pointer border" // Ensuring pointer cursor on checkbox
              />
              <label htmlFor="terms" className="text-sm cursor-pointer">
                I understood the <span className='text-brand-primary'>terms & policy.</span>
              </label>
            </div>

            <div className="flex my-5 items-center justify-center">
              <button
                type="submit"
                className="w-full rounded-xl px-6 font-bold py-2 text-white transition duration-200 bg-brand-primary"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "REGISTER"}
              </button>
            </div>
            <span className="flex items-center justify-center my-4">
              <div className="flex-grow border-t border-gray-300 mr-2"></div>
              <p className="mx-2">or</p>
              <div className="flex-grow border-t border-gray-300 ml-2"></div>
            </span>

            {/* Social Media Buttons */}
            <div className="flex flex-row justify-between w-full mb-4 gap-4 md:gap-10">
              <div className="rounded-md flex items-center justify-center bg-gray-200 w-full py-1 cursor-pointer" >
                <img src="/images/icons/facebook.svg" alt="Facebook" className="w-8 h-8 " />
              </div>
              <div className="rounded-md flex items-center justify-center bg-gray-200 w-full py-1 cursor-pointer">
                <img src="/images/icons/google.svg" alt="Google" className="w-8 h-8 " />
              </div>
            </div>
            <p className="text-center text-sm">
              Already have an account?{" "}
              <span className="cursor-pointer font-semibold underline text-brand-primary">
                <Link to="/login">SIGN UP</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
