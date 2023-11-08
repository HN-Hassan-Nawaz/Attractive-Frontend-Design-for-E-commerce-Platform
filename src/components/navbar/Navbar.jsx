import React from 'react'
import { Link } from 'react-router-dom'
import { WiDaySunny } from "react-icons/wi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';

function Navbar() {

    const cartitems = useSelector((state) => state.cart)

    return (
        <div className=''>
            <div className=' bg-violet-800 w-auto h-24 text-center py-7 text-2xl font-bold ' data-testid="web-name">
                WELCOME TO PAK ECOMMERES STORE
            </div>

            <div className=' shadow-lg w-auto h-20'>
                <h1 className=' font-bold text-3xl px-4 py-2 float-left' data-testid="store-name">E-Pak Store</h1>

                <div className=' float-right my-6'>
                    <div className=' float-left mr-8'>
                        <Link className=' hover:text-zinc-800' to={"/"} data-testid="product-page">All Products</Link>
                    </div>

                    <div className=' float-left mr-8'>
                        <Link className='' to={"/order"}>Order</Link>
                    </div>

                    <div className=' float-left mr-8'>
                        <Link to={"/dashboard"}>Admin</Link>
                    </div>

                    <div className=' float-left mr-8'>
                        <Link to={"/login"}>Logout</Link>
                    </div>

                    <div className=' float-left mr-8'>
                        <img className=' w-8 h-8 float-left mr-4' src='./flag.png' />
                        <span>Pak</span>
                    </div>

                    <div className=' float-left mr-8'>
                        <img className=' w-12 h-12 rounded-full -mt-2' src='./man3.png' />
                    </div>

                    <div className="ml-4 flow-root lg:ml-6 mr-8">
                        <Link to={'/cart'} className="group -m-2 flex items-center p-2" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span className="ml-6 text-sm font-medium text-gray-700 group-" >{cartitems.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
