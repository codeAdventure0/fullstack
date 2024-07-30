import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import { AuthContext } from "../context/AuthContext";

const Homepage = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div
        className="flex flex-col justify-center w-[60%] p-[100px] gap-5"
        style={{ paddingLeft: 0 }}
      >
        <h1 className="font-bold text-6xl mb-4">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          cupiditate earum sapiente modi. Exercitationem quam deserunt ducimus
          eaque cupiditate. Magnam qui, consequuntur cum perspiciatis beatae
          explicabo at repellendus sequi vero.
        </p>

        <SearchBar />

        <div className="flex justify-between ">
          <div>
            <h1 className="text-3xl font-bold">16+</h1>
            <h2>Years of Experience</h2>
          </div>
          <div>
            <h1 className="text-3xl font-bold">200</h1>
            <h2>Award Gained</h2>
          </div>
          <div>
            <h1 className="text-3xl font-bold">2000+</h1>
            <h2>Property Ready</h2>
          </div>
        </div>
      </div>

      <div className="flex items-center relative  w-[40%]  bg-[#fcf5f3]">
        <img
          className="absolute right-0 max-w-[118%]  h-full "
          src="bg.png"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Homepage;

