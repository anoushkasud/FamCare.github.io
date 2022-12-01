import React from 'react'
import { logo1 } from "../assets";
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
        <div id="signup" className="w-full overflow-hidden flex justify-center item-center h-screen mt-20">
            <div class="w-full max-w-xs mt-0 ">
                <div class="mb-10 mt-10 text-center ">
                    <div className='flex justify-center item-center'>
                        <img id="logo" src={logo1} alt="hoobank" className="w-[70px] h-[50px] inline " />
                        <p class="font-poppins font-bold text-gradient text-[25px] inline py-1.5 pr-8">Famcare </p>
                    </div>
                    <p class="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">Welcome! Let's get started!</p>
                </div>
                <form class="bg-white shadow rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-6 mt-3">
                        <label class="block text-gray-900 text-sm font-bold mb-2 font-poppins" for="username">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight font-poppins focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-900 text-sm font-bold mb-2 font-poppins" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight font-poppins focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>
                    <div class="flex items-center justify-between">
                        <NavLink to={"/"}>
                            <button class=" bg-blue-gradient text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >
                                Sign In
                            </button></NavLink>
                        <a class="inline-block align-baseline font-bold text-sm text-sky-900 hover:text-blue-800" href="/">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="absolute z-[0] w-[40%] h-[35%] inset-0 pink__gradient" />
                    <div className="absolute z-[1] w-[30%] h-[40%] rounded-full white__gradient bottom-0 right-0" />

                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2022 FamCare. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Signup;