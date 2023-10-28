import React from 'react'


function Filter() {
    return (
        <>
            <div className=' m-12 bg-gray-500 h-64 rounded-lg '>

                <div className=''>
                    <input className=' shadow-sm h-14 w-11/12 ml-12 mt-10 rounded-lg pl-6 border-solid border-2 border-white-400'
                        type="text"
                        placeholder='Search here'
                    />
                </div>

                <div className='ml-12 mt-8 font-bold text-xl'>
                    <h2 className=' float-left ml-2'>Filters</h2>

                    <button className=' float-right mr-20'>
                        <button>Reset Filter</button>
                    </button>
                </div>

                <div className='mt-20 ml-14'>
                    <select className='mr-4 w-60 h-12 rounded-lg pl-4 text-lg text-black'>
                        <option value="All">All</option>
                        <option value="OPPO">OPPO</option>
                        <option value="VIVO">VIVO</option>
                        <option value="Redme">Redme</option>
                    </select>

                    <select className=' w-60 h-12 rounded-lg pl-4 text-lg text-black'>
                        <option value="Any Price">Any Price</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                    </select>
                </div>

            </div>
        </>
    )
}

export default Filter;
