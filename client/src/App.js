import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <Route exact path="/" component={Saved}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/saved" component={Saved}/>
    </Router>
  )
}

export default App;
