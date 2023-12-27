import './App.css';
// import 
// { 
//   BrowserRouter as Router, 
//   Route, 
//   Routes,
// } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
// import Banner from './components/Banner';
import About from './components/About';
//import Contact from './components/Contact';
  function App() {
    return (
      <div className="App">
      <Navbar/>
      <Banner/>
      <About/>
      {/* <Contact/>  */}
      
      </div> 
     );
  }

export default App;



//import logo from './logo.svg';
     // {/* <header className="App-header">
        // <img src={logo} className="App-logo" alt="logo" />
        // <p>
        //   Edit <code>src/App.js</code> and save to reload.
        // </p>
        // <a
        //   className="App-link"
        //   href="https://reactjs.org"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        //   Learn React
        // </a>
     // </header> */}





    //  <>
    //         {/* This is the alias of BrowserRouter i.e. Router */}
    //         <Router>
    //             <Routes>
    //                 {/* This route is for home component 
    //       with exact path "/", in component props 
    //       we passes the imported component*/}
    //                 <Route
    //                     exact
    //                     path="/"
    //                     element={<Home />}
    //                 />
 
    //                 {/* This route is for about component 
    //       with exact path "/about", in component 
    //       props we passes the imported component*/}
    //                 <Route
    //                     path="/about"
    //                     element={<About />}
    //                 />
 
    //                 {/* This route is for contactus component
    //       with exact path "/contactus", in 
    //       component props we passes the imported component*/}
    //                 <Route
    //                     path="/contactus"
    //                     element={<ContactUs />}
    //                 />
 
    //                 {/* If any route mismatches the upper 
    //       route endpoints then, redirect triggers 
    //       and redirects app to home component with to="/" */}
    //                 {/* <Redirect to="/" /> */}
    //                 <Route
    //                     path="*"
    //                     element={<Navigate to="/" />}
    //                 />
    //             </Routes>
    //         </Router>
    //     </>


      // <div className="App">
      // <Navbar/>
      // <Banner/>
      // <About/>
      // <Contact/> 
      
      // </div> 




    //   {/* <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<Navbar />} /> */}
    //     {/* <Route path="/banner" element={<Banner />} /> */}
    //     {/* <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes> */}
    // {/* </Router> */}
    
    

      // <>
      // <div className="App">
      //   {/* <Navbar/>
      //   <Banner/> */}
      //   {/* <About/>
      //   <Contact/>  */}
      //  </div>
      //       {/* <Router>
      //           <Routes>
      //           <Route
      //                   exact
      //                   path="/"
      //                   element={<Navbar />}
      //               />
      //           <Route
      //                   path="/Banner"
      //                   element={<Banner />}
      //               />
                    
      //               <Route
      //                   path="/About"
      //                   element={<About />}
      //               />
                    
      //               <Route
      //                   path="/Contact"
      //                   element={<Contact />}
      //               />
      //               <Route
      //                   path="*"
      //                   element={<Navigate to="/" />}
      //               />
      //           </Routes>
      //       </Router> */}
      //   </>
     
    
    // <Router>
    //   <Route path="/" exact component={HomePage} />
    // </Router>