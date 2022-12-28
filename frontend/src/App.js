import React from 'react'
import { Routes, Route } from "react-router-dom";
import Error from './componentss/Error';
import FormPage from './componentss/form/FormPage';
import DisplayData from './componentss/displayPage/DisplayData';
import SignIn from "./componentss/SignIn_SignUp/SignIn"
import SignUp from "./componentss/SignIn_SignUp/SignUp"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/displayposts" element={<DisplayData />} />
        <Route path="/form" element={<FormPage/>} />
        <Route path="*" element={<Error/>} />
      </Routes>

    </div>


  )
}

export default App
