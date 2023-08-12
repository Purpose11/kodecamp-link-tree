import React from "react"
import Card  from "./Components/Card"
import profileImg from './assets/profileImg.png'
import github from './assets/github.png'
import slack from './assets/slack.png'
import Footer from "./Components/Footer"

function App() {
  return (
    <div className=" w-[80%] h-fit mx-auto py-[20px]  ">
      <div className="w-full h-fit flex flex-col items-center justify-center">
        <img src={profileImg} alt="image" className="h-[60px] w-[60px] rounded-full"/>
        <p className="font-bold mt-2">John Doe</p>
      </div>
      <Card />
      <div className="w-full h-[40px] flex items-center justify-center gap-4 mt-[25px]">
        <img src={slack} alt="image" className="h-[20px] w-[20px]"/>
        <img src={github} alt="image" className="h-[20px] w-[20px]"/>
      </div>
      <hr className="bg-gray-300 w-full lg:mt-[70px] mt-[30px]" />
      <Footer />
    </div>
  )
}

export default App
