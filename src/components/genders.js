import React from "react"

const Genders = () => {
  return (
    <div className="max-w-3xl mx-auto py-24 px-4">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-400 sm:text-5xl lg:text-6xl">
        No matter what you are.
      </h2>
      <ul className="text-gray-400 mt-24 text-3xl space-y-32 font-semibold uppercase">
        <li className="bg-gradient-to-r from-red-600 via-yellow-400 to-indigo-500 bg-clip-text text-transparent">
          Autistic
        </li>
        <li className="pl-4">
          <span className="text-red-500">L</span>
          <span className="text-orange-500">G</span>
          <span className="text-yellow-500">B</span>
          <span className="text-green-500">T</span>
          <span className="text-blue-500">I</span>
          <span className="text-indigo-500">Q</span>
          <span className="text-pink-500">A</span>
          <span className="text-fuchsia-500">+</span>
        </li>
        <li className="pl-8">Christian</li>
        <li className="pl-16">Black or White</li>
      </ul>
    </div>
  )
}

export default Genders
