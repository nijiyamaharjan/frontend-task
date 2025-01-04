import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaDumbbell, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Why Us", "Security", "Partnership"]
    },
    {
      title: "Categories",
      links: ["Basic Yoga", "Strength Training", "Body Building", "Weight Loss"]
    },
    {
      title: "Help",
      links: ["Account", "Support Center", "Privacy Policy", "Terms & Conditions"]
    }
  ];

  return (
    <div className="text-white py-8 lg:py-12 px-4 md:px-8 lg:px-36 flex flex-col justify-between gap-6 text-xs">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {footerSections.map((section, index) => (
          <ul key={index} className="flex flex-col space-y-4">
            <li className="font-bold text-sm">{section.title}</li>
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex} className="hover:text-redCustom cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        ))}
        <ul className="flex flex-col space-y-4">
          <li className="font-bold text-sm">Contact Us</li>
          {[
            { icon: <FaPhoneAlt className="text-yellow-500" />, text: "+1 (406) 555-0120" },
            { icon: <FaEnvelope className="text-yellow-500" />, text: "example@gmail.com" },
            { icon: <FaMapMarkerAlt className="text-yellow-500" />, text: "2464 Royal Ln. Mesa, New Jersey 45463" }
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-4">
          <p className="font-bold text-sm">Subscribe to Our Newsletter</p>
          <div className="flex gap-2 items-center">
            <div className="relative w-full lg:w-80">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="p-4 rounded-full text-gray-700 w-full pr-14 h-12"
              />
              <button 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-500 text-white rounded-full flex items-center justify-center w-10 h-10"
              >
                <FaPaperPlane className="text-xl"/>
              </button>
            </div>
          </div>
          <p className="text-xsm">Never miss an update & news to your email.</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pt-8 border-t border-darkGrayCustom">
        <div className="flex items-center">
          <FaDumbbell className="text-2xl mr-4 text-redCustom" />
          <p className="text-lg font-semibold">FITNESXIA</p>
        </div>
        
        <p className="text-sm text-darkGrayCustom text-center">
          &copy; 2023 DesignAxen. All Copyrights Reserved.
        </p>
        
        <div className="flex gap-4 text-xl">
          {[
            { icon: <FaFacebook />, hoverClass: "hover:text-blue-600" },
            { icon: <FaInstagram />, hoverClass: "hover:text-pink-500" },
            { icon: <FaTwitter />, hoverClass: "hover:text-blue-400" },
            { icon: <FaLinkedin />, hoverClass: "hover:text-blue-700" }
          ].map((social, index) => (
            <div key={index} className={social.hoverClass}>
              {social.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
