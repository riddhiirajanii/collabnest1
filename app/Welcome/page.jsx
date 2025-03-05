// app/page.jsx
import Link from 'next/link';
import Image from 'next/image';
import { colors } from '../../const';

export default function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section - Dark Background */}
      <div className="w-full md:w-1/2 p-8 flex flex-col" style={{ backgroundColor: colors.dark }}>
        {/* Logo and Brand */}
        <div className="mb-8 flex items-center">
        <Image 
            src="/Logo.svg" 
            alt="CollabNest Logo" 
            width={160} 
            height={160} 
            className="mr-2"
          />
        </div>

        {/* Spacer to push tagline to bottom on larger screens */}
        <div className="flex-grow"></div>

        {/* Tagline */}
        <div className="mt-auto">
          <p className="text-white text-l leading-relaxed ">
            Learn, collaborate, and grow with real-world projects, mentor support, and a community that helps you turn learning into impact.
          </p>
        </div>
      </div>

      {/* Right Section - White Background with Login */}
      <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Login Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Login to CollabNest</h1>
            <p className="text-gray-600">Securely sign in with your Microsoft account</p>
          </div>

          {/* Microsoft Login Button */}
          <div className="mt-6">
            <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                <path fill="#18181B" d="M1 1h10v10H1z"/>
                <path fill="#18181B" d="M1 13h10v10H1z"/>
                <path fill="#18181B" d="M13 1h10v10H13z"/>
                <path fill="#18181B" d="M13 13h10v10H13z"/>
              </svg>
              Microsoft
            </button>
          </div>

          {/* Terms of Service */}
          <div className="mt-6 text-center text-sm text-gray-500">
            By clicking continue, you agree to our{' '}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}