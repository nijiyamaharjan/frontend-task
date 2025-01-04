import { Link } from 'react-scroll';  // Import Link from react-scroll
import { FaDumbbell } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <div className="flex justify-between text-gray-100 pt-5 px-36">
      <div className="flex gap-2 items-center">
        <FaDumbbell className="text-redCustom text-3xl"/>
        <p className="text-2xl font-bold">FITNESXIA</p>
      </div>
      <ul className="flex gap-6 items-center">
        <li>
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            className="cursor-pointer hover:text-redCustom"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="aboutus" 
            smooth={true} 
            duration={500}
            className="cursor-pointer hover:text-redCustom"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link 
            to="programs" 
            smooth={true} 
            duration={500}
            className="cursor-pointer hover:text-redCustom"
          >
            Programs
          </Link>
        </li>
        <li>
          <Link 
            to="membership" 
            smooth={true} 
            duration={500}
            className="cursor-pointer hover:text-redCustom"
          >
            Membership
          </Link>
        </li>
        <li>
          <Link 
            to="testimonial" 
            smooth={true} 
            duration={500}
            className="cursor-pointer hover:text-redCustom"
          >
            Testimonials
          </Link>
        </li>
        <li className="bg-redCustom px-6 py-2 rounded-xl">
          <p>Sign Up</p>
        </li>
      </ul>
    </div>
  );
};
