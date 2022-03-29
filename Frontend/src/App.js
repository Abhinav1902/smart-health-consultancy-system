import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, Routes,
} from "react-router-dom";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";

export default function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
  );
}