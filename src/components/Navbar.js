import React from 'react';
//import { Link } from "react-router-dom";
import './css/Navbar.css';
const Navbar = () =>{
    return(
        <div className="navbar">
        <img src="logo.jpg" alt="Logo" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>
    );
}
export default Navbar;

// function Navbar()
// {
//     return(
//         <h1>This is the navbar</h1>
//     );
// }
// export default Navbar;

// class Navbar extends React.Component{
//     render()
//     {
//         return(
//             <h1>This is the navbar</h1>

//         );
//     }
// }

// export default Navbar;


// import { Link } from "react-router-dom";
 
// const Home = () => {
//     return (
//         <div>
//             <h1>Home Page</h1>
//             <br />
//             <ul>
//                 <li>
//                     {/* Endpoint to route to Home component */}
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     {/* Endpoint to route to About component */}
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                     {/* Endpoint to route to Contact Us component */}
//                     <Link to="/contactus">Contact Us</Link>
//                 </li>
//             </ul>
//         </div>
//     );
// };



//  {/* <li><a href="#home">Home</a></li>
                // {/* <li className="active"><a href="#home">Home</a></li> */}
                // {/* <li><a href="#about">About</a></li> */}
                // {/* <li><Link to="/contact">Contact</Link></li> */}
                // {/* <li><a href="#Contact">Contact</a></li> */}
        
// function Navbar()
// {
//     return( 
//             <div className="Navbar">
//             <img src="logo.jpg" alt="Logo" />
//             <nav>
//                 <Link to="/">Home</Link>
//                 <Link to="/banner">Banner</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/contact">Contact</Link>
//             </nav> 
//             </div>
//         );
// }

// export default Navbar;
  
        //    {/* <a href to="/About">About</a> */}

            // {/* <ul>
            //     <li>
            //         <Link to="/">Home</Link>
            //     </li>
            //     <li>
            //         <Link to="/About">About</Link>
            //     </li>
            //     <li>
            //         <Link to="/Contact">Contact</Link>
            //     </li>
            // </ul> */}
        // </div>
        
//     );
// }