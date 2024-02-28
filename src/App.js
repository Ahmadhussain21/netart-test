import './App.css';
import LOGO from './assets/logo.png'
import PRIZE from './assets/1.png'
import PHOTO from './assets/2.png'
import TOOLS from './assets/3.png'
import { FaGlobe } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";



const Data=['CHEMICALS & PROCESS','POWER','WATER & WASTE WATER','OILS & GAS','PHARMA','SUGARS & DISTILLERIES','PAPER & PULP','MARINE & DEFENCE','METAL & MINING','FOOD & BEVERAGE','PETROCHEMICAL & REFINERIES','SOLAR','BUILDING','HVAC','FIRE FIGHTING']

function App() {
  return (
  <div className='flex flex-col items-center'>
    <div className='flex justify-center mb-7'>
      <img src={LOGO} alt='Logo' width="500" height="400"/>

    </div>
    <div className='flex flex-col  md:flex-row justify-center max-w-[1500px] '>
      <div>
        <img src ={PRIZE} alt='Prize' width="980" />
      </div>
      <div>
        <p className='font-extrabold mb-4'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
        <div>
          <ul className='list-disc ml-10 mb-4'>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <img src={PHOTO} alt='Group' width='1000'/>
        </div>
        <div className='my-4'>
          <span>Government of India has awarded the</span> <span className='font-extrabold'>"National Energy Conservation Award 2018"</span> <span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</span>
        </div>
        
        
      </div>
    </div>
    <div className='flex flex-col mt-6 mx-7 items-center justify-center border-red-700 border-b-2 '>
      <p className='my-4'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
      <img src={TOOLS} alt='Tools' width='1250'/>
      <p className='m-3'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
    </div>
    <div className='flex flex-col justify-center items-center '>
      <p className='m-4 font-extrabold'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
  
      

        <div className="flex flex-col md:flex-wrap md:flex-row justify-center items-center mb-4 max-w-[1500px]">
          {Data.map((element, index) => (
            <span key={index} className='border-red-700  border-r-2 px-1  '>{element}</span>
          ))}
           <span  className='px-2'>AGRICULTURE & RESIDENTIAL</span>
        </div>

      
      <div className='flex min-w-[99%] flex-col md:flex-row justify-around items-center h-[120px] bg-red-600 m-2 text-white'>
        <div className='flex text-3xl'>
          <FaPhoneSquareAlt/>
          <p className='pl-2 text-lg'>Toll free </p><p className='pl-2 text-lg font-bold'> 1800 200 1234</p>
        </div>
        <div className='flex text-3xl'>
          <FaFacebook/>
          <p className='pl-2 text-lg'>www.facebook.com/cripumps</p>
        </div>
        <div className='flex text-3xl'>
          <FaGlobe/>
          <p className='pl-2 text-lg'>www.crigroups.com</p>
        </div>
      </div>
    </div>
    
  </div>
  );
}

export default App;
