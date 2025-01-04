import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaDumbbell, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="text-white py-12 px-36 flex flex-col justify-between gap-6 text-xs">
      <div className='flex justify-between'>
      <ul className="flex flex-col space-y-4">
        <li className="font-bold text-sm">Company</li>
        <li className="hover:text-redCustom cursor-pointer">About Us</li>
        <li className='hover:text-redCustom cursor-pointer'>Why Us</li>
        <li className='hover:text-redCustom cursor-pointer'>Security</li>
        <li className='hover:text-redCustom cursor-pointer'>Partnership</li>
      </ul>
      
      <ul className="flex flex-col space-y-4">
        <li className="font-bold text-sm">Categories</li>
        <li className='hover:text-redCustom cursor-pointer'>Basic Yoga</li>
        <li className='hover:text-redCustom cursor-pointer'>Strength Training</li>
        <li className='hover:text-redCustom cursor-pointer'>Body Building</li>
        <li className='hover:text-redCustom cursor-pointer'>Weight Loss</li>
      </ul>
      
      <ul className="flex flex-col space-y-4">
        <li className="font-bold text-sm">Help</li>
        <li className='hover:text-redCustom cursor-pointer'>Account</li>
        <li className='hover:text-redCustom cursor-pointer'>Support Center</li>
        <li className='hover:text-redCustom cursor-pointer'>Privacy Policy</li>
        <li className='hover:text-redCustom cursor-pointer'>Terms & Conditions</li>
      </ul>
      
      <ul className="flex flex-col space-y-4">
        <li className="font-bold text-sm">Contact Us</li>
        <li className="flex items-center space-x-2">
          <FaPhoneAlt className="text-yellow-500" />
          <span>+1 (406) 555-0120</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaEnvelope className="text-yellow-500" />
          <span>example@gmail.com</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-yellow-500" />
          <span>2464 Royal Ln. Mesa,<br/> New Jersey 45463</span>
        </li>
      </ul>
      
      <div className="flex flex-col space-y-4">
        <p className="font-bold text-sm">Subscribe to Our Newsletter</p>
        <div className="flex gap-2 items-center">
          <div className="relative w-80">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="p-4 rounded-full text-gray-700 w-full pr-14 h-12"  // Adjust padding-right for the button
            />
            <button 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-500 text-white rounded-full flex items-center justify-center w-10 h-10"
            >
              <FaPaperPlane className='text-xl'/>
            </button>
          </div>
        </div>
        <p className='text-xsm'>Never miss an update & news to your email.</p>
      </div>
      </div>
      

      {/* bottommost part */}
      <div className="flex justify-between pt-8">
        <div className="flex items-center">
          <FaDumbbell className="text-2xl mr-4 text-redCustom" />
          <p className="text-lg font-semibold">FITNESXIA</p>
        </div>
        <p className="text-sm text-gray-300">
          &copy;  2023 DesignAxen. All Copyrights Reserved.
        </p>
        <div className="flex gap-4 text-xl">
          <FaFacebook className="hover:text-blue-600" />
          <FaInstagram className="hover:text-pink-500" />
          <FaTwitter className="hover:text-blue-400" />
          <FaLinkedin className="hover:text-blue-700" />
        </div>
      </div>
    </div>
  );
};
