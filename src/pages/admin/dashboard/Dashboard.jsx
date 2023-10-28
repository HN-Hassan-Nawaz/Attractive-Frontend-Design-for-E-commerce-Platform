import React from 'react'
import {FaUserTie } from 'react-icons/fa';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';

function Dashboard() {
   
  return (
    <Layout>
        <section className="text-gray-600 body-font mt-10 mb-10">
            <div className="container px-5 mx-auto mb-10">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" >
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" >10</h2>
                            <p className=" text-purple-500  font-bold" >Total Products</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl">
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" >10</h2>
                            <p className=" text-purple-500  font-bold" >Total Orders</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"  >
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" >20</h2>
                            <p className=" text-purple-500  font-bold" >Total Users</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" >
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" >20</h2>
                            <p className=" text-purple-500  font-bold" >Total Products</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <DashboardTab/>
    </Layout>
  )
}

export default Dashboard