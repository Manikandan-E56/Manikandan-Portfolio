// import React, { useState }from 'react'
// import style from "./App.module.css";
// import { FaReact } from "react-icons/fa";

// export default function NavBar() {
//   const [menu, setMenu] = useState(false);

//   return (
//     <div className={style.nav}>
//             <a className={style.logo}>
//               <FaReact color="var(--primary-main)" size="50px" />
//               <h5>Portfolio</h5>
//             </a>
//             <ul>
//               <li>
//                 <a href="#Home">Home</a>
//               </li>
//               <li>
//                 <a href="#About">About</a>
//               </li>
//               <li> 
//                 <a href="#Projects">Projects</a>
//               </li>
//               <li>
//                 <a href="#Certification">Certification</a>
//               </li>
//               <li>
    
//                 <a href="#Contact">Contact</a>
//               </li>
//             </ul>
//             <div className={style["menu-icon"]}>
//               <input id="checkbox" className={style["checkbox2"]} type="checkbox" />
//               <label
//                 className={`${style.toggle} ${style.toggle2}`}
//                 for="checkbox"
//                 onClick={() => setMenu(!menu)}
//               >
//                 <div className={`${style.bars} ${style.bar4}`}></div>
//                 <div className={`${style.bars} ${style.bar5}`}></div>
//                 <div className={`${style.bars} ${style.bar6}`}></div>
//               </label>
//             </div>
//           </div>
//   )
// }



import React, { useState } from 'react';
import style from "./App.module.css";
import { FaReact } from "react-icons/fa";

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenu(false);
  };

  return (
    <>
      <div className={style.nav}>
        {/* Added href="#Home" to make the logo a functional link */}
        <a href="#Home" className={style.logo}>
          <FaReact color="var(--primary-main)" size="50px" />
          <h5>Portfolio</h5>
        </a>
        
        <ul className={`${style.navList} ${menu ? style.menuOpen : ''}`}>
          <li>
            <a href="#Home" onClick={handleLinkClick}>Home</a>
          </li>
          <li>
            <a href="#About" onClick={handleLinkClick}>About</a>
          </li>
          <li> 
            <a href="#Projects" onClick={handleLinkClick}>Projects</a>
          </li>
          <li>
            <a href="#Certification" onClick={handleLinkClick}>Certification</a>
          </li>
          <li>
            <a href="#Contact" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>

        <div className={style["menu-icon"]}>
          <input 
            id="checkbox" 
            className={style["checkbox2"]} 
            type="checkbox"
            checked={menu} 
            onChange={() => setMenu(!menu)}
          />
          <label className={`${style.toggle} ${style.toggle2}`} htmlFor="checkbox">
            <div className={`${style.bars} ${style.bar4}`}></div>
            <div className={`${style.bars} ${style.bar5}`}></div>
            <div className={`${style.bars} ${style.bar6}`}></div>
          </label>
        </div>
      </div>
    </>
  );
}