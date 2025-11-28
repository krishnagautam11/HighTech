export const TopBar = () => {
  return (
    <div className="w-full bg-black text-white h-10">
      <div className="custom-container flex items-center justify-between h-full">

        {/* LEFT SECTION */}
        <div className="topbar-left-section flex items-center gap-6 pl-6">
          <span className="flex items-center gap-1">📍 23 Ranking Street, New York</span>
          <span className="flex items-center gap-1">✉️ Email@example.com</span>
        </div>

        {/* CENTER TICKER */}
        <div className="ticker-lane flex-1 mx-8 relative overflow-hidden">
          <p className="ticker-text">Note : We help you to Grow your Business</p>
        </div>

        {/* RIGHT SECTION */}
        <div className="topbar-right-section flex items-center gap-4 pr-6">
          <a>🔵</a>
          <a>🐦</a>
          <a>📷</a>
          <a>💼</a>
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
