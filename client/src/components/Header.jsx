import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import { TiThMenu } from 'react-icons/ti'

function Header() {

    const tonglebutton =function(){
        return (
            <div></div>
        )
    }

  return (
    <header className="p-4 shadow-lg">
        <div className="w-5/6 mx-auto flex justify-between">        
            <div className="flex items-center gap-2 shrink-0">
                <img className="h-12 w-12" src="/logo.png" alt="logo" />
                <h1 className="text-2xl sm:text-3xl font-extrabold">CornerStone</h1>
            </div> 
            <div className="lg:hidden">
                {<TiThMenu />}
            </div>       
            <div className="flex items-center ">
                <ul className="flex items-center gap-3 lg:gap-10 text-lg sm:text-xl font-medium">
                    <li className="hover:underline">Home</li>
                    <li className="hover:underline">Services</li>
                    <li className="hover:underline">About us</li>
                    <li className="hover:underline">Contact us</li>
                    <li className="hover:underline">Blog</li>
                </ul>    
            </div>
            <div className="flex items-center">
                <form className="flex items-center bg-[#d1d5db] rounded-xl p-2">
                    <input type="text" placeholder="Search..." className="focus:outline-none bg-transparent"/>
                    {<FaSearch />}
                </form>
            </div>
        </div>
    </header>
  )
}

export default Header