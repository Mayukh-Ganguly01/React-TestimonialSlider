import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";
import { useEffect } from "react";
const App = () => {

  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
        alert("are u trying to right click to inspect this website 😈 then contact the devleoper")
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])

  return (
    <div className="flex flex-col flex-wrap w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-5 mx-auto"></div>
        <Testimonials reviews={reviews}></Testimonials>
      </div>
    </div>
  );
};

export default App;
