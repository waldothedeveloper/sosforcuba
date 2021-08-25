import React from "react"
import girl_protesting from "../images/girl_protesting.jpg"

const Header = () => {
  return (
    <>
      <div>
        <div className="relative flex flex-col mx-auto max-w-7xl w-full pb-20 text-left">
          <div className="p-8 md:w-1/3">
            <img
              className="w-full h-full object-cover rounded-xl shadow-sm"
              src={girl_protesting}
              alt=""
            />
          </div>
          <div className="absolute bottom-12 left-2 md:top-40">
            <h1 className="text-8xl md:text-9xl tracking-tight font-extrabold text-gray-50">
              <span className="block xl:inline text-6xl">S.O.S</span>{" "}
              <span className="block text-red-600 xl:inline pl-12">CUBA</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start mt-12 pl-6">
        <h2 className="text-xl font-extrabold text-white sm:text-4xl">
          <span className="block text-xl text-gray-400">we need urgent</span>
          <span className="block text-2xl">SUPPORT.</span>
          <span className="block text-sky-500 text-3xl">HELP.</span>
          <span className="block text-red-500 text-4xl">INTERVENTION.</span>
        </h2>
      </div>
    </>
  )
}

export default Header