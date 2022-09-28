import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
import Travel from "./components/Travel";
import Header from "./components/Header";
// import Video from "./components/Video";
import Cardsection from "./components/Cardsection";
import Footer from "./components/Footer";
// import You from "./components/You";
    
    const App = () => {
     return (
     <>
    <Router>
      {/* <You/> */}
     <Travel/>
     <Header/>
     {/* <Video/> */}
     <Cardsection/>
     <Footer/>
     

     
     {/* <Routes>
     <Route exact path="/" component={Home}>
     </Route> */}

     {/* <Route exact path="/about" component={About}>
     </Route>

     <Route exact path="/Services" component={Services}>
     </Route>

     <Route exact path="/contact" component={Contact}>
     </Route> */}

     {/* <Route exact path="/signup" component={Signup}>
     </Route>

     <Route exact path="/login" component={Login}>
     </Route> */}

     {/* </Routes> */}
    </Router>

    {/* <Home/> */}
    </>
  );
}

export default App;



