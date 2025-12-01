import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const TopBar = () => {
  return (
    <div className="topbar-wrapper w-full  ">
      <div className="custom-container flex items-center justify-between h-full">


        <div className="topbar-left-section flex items-center gap-5 ">
          <p className="small flex items-center "><FontAwesomeIcon icon={faLocationDot} className='topbar-icons me-2' />23 Ranking Street, New York</p>
          <p className="small flex items-center "><FontAwesomeIcon icon={faEnvelope} className='topbar-icons me-2' />Email@example.com</p>
        </div>

       
        <div className="ticker-lane flex-1 mx-2 relative overflow-hidden">
          <p className="ticker-text">Note : We help you to Grow your Business</p>
        </div>

       
        <div className="topbar-right-section flex items-center mt-2 pr-1">
          <a href=""><FontAwesomeIcon className='social-icons' icon={faFacebookF} /></a>
          <a href=""><FontAwesomeIcon className='social-icons' icon={faTwitter} /></a>
          <a href=""><FontAwesomeIcon className='social-icons' icon={faInstagram} /></a>
          <a href=""><FontAwesomeIcon className='social-icons' icon={faLinkedinIn} /></a>
        </div>

      </div>
    </div>

  )
}


// export const TopBar = () => {
//   return (
//     <div className="  w-full bg-black text-white  h-10 ">

//       <div className="ticket-content custom-container flex justify-between items-center relative overflow-hidden">
//         {/* LEFT SECTION */}
//         <div className=" topbar-left-section relative flex items-center py-2 pr-1 gap-4 z-50">
//           <span className="flex items-center gap-1">
//             📍 23 Ranking Street, New York
//           </span>
//           <span className="flex items-center gap-1">
//             ✉️ Email@example.com
//           </span>
//         </div>

//         {/* CENTER TICKER */}
//         <div className=" absolute inset-0 flex items-center justify-center pointer-events-none">
//           <div className="ticker-wrapper z-10">
//             <p className="ticker-text flex z-10">
//               Note : We help you to Grow your Business
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="topbar-right-section flex items-center py-2 pl-1 gap-3 z-20">
//           <a href="#" className="text-white">🔵</a>
//           <a href="#" className="text-white">🐦</a>
//           <a href="#" className="text-white">📷</a>
//           <a href="#" className="text-white">💼</a>
//         </div>

//       </div>
//     </div>
//   );
// }
