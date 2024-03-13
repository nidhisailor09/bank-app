import {useState} from 'react'
import styles from '../style';
import {close, logo, menu} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(null); 
  return (
   <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='Hoobank' className='w-[124px] h-[32px] '/>
      <u className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index)=>(
         <li key={nav.id} 
         className={`font-poppins font-normal cursor-pointer text-[20px] text-white hover:bg-gray-700 rounded-md hover:text-white px-3 py-2 text-sm mr-4
         ${currentPage == nav.id ? 'bg-gray-700 text-white rounded-md' : ''} 
           `}>
           
            <a href={`#${nav.id}`} onClick={() => setCurrentPage(nav.id)}>
              {nav.title}
            </a>
          </li>
        ))}
      </u>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
            src={toggle ? close : menu} 
            alt="menu"
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)} 
            />

            <div 
            className={`${toggle ? 'flex' : 'hidden'} 
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
           
            <u className='list-none flex flex-col justify-end items-start flex-1'>
              {navLinks.map((nav, index)=>(
              <li key={nav.id} 
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:bg-gray-700 rounded-md hover:text-white px-3 py-2 text-sm mr-8
              ${currentPage == nav.id ? 'bg-gray-700 text-white rounded-md' : ''} 
                `}>
                
                  <a href={`#${nav.id}`} onClick={() => setCurrentPage(nav.id)}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </u>
           
            </div>
          </div>

   </nav>
  )
}

export default Navbar;