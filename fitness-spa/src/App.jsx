import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Companies } from './components/Companies';
import { AboutUs } from './components/AboutUs';
import { Plans } from './components/Plans';
import { Footer } from './components/Footer';
import { Programs } from './components/Programs';
import { Membership } from './components/Membership';
import { Testimonial } from './components/Testimonial';

export default function App() {
  return (
    <div>     
      <div className="relative  bg-[radial-gradient(circle,_#37383c,_#1c1c26)]">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at bottom left, #3c2626 0%, transparent 20%),
            radial-gradient(circle at bottom right, #3c2626 0%, transparent 20%)
          `,
        }}
      />
        <div className="relative z-10 ">
          <Navbar />
          <HeroSection />
        </div>
    </div>
      <div className='bg-darkGrayBg'>
        <Companies />
      </div>
      <div className='bg-lightGrayBg'>
        <AboutUs />
      </div>
      <div className='bg-darkGrayBg'>
        <Programs />
      </div>
      <div className='bg-lightGrayBg'>
        <Membership />
      </div>  
      <div className='bg-darkGrayBg'>
        <Plans/>
      </div>   
      <div className='bg-darkGrayBg'>
        <Testimonial />
      </div>
      <div className='bg-lightGrayBg'>
        <Footer />
      </div>
    </div>
  )
}