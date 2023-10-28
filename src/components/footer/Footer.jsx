// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'

export default function Footer() {
    const context = useContext(myContext)
    const { toggleMode, mode } = context
    return (
        <footer className="text-gray-600 body-font bg-gray-300">
            <div className="container px-5 py-24 mx-auto" >
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" >CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Home</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Order</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Local For Vocal</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Cart</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Customer Service</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to={'/returnpolicy'} className="text-gray-600 hover:text-gray-800">Return Policy</Link>
                            </li>
                            <li>
                                <Link to={'/about'} className="text-gray-600 hover:text-gray-800">About</Link>
                            </li>
                            <li>
                                <Link to={'/contact'} className="text-gray-600 hover:text-gray-800">Contact Us</Link>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" >Services</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to={'/privacypolicy'} className="text-gray-600 hover:text-gray-800">Privacy</Link>
                            </li>

                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
                    </div>
                </div>

            </div>

            <div className="bg-gray-200">
                <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to={'/'} className='flex'>
                        <div className="flex ">
                            <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded'>E-Pakistan</h1>
                        </div>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" >© 2023 P-Pak —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" >www.pk.com</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}