import React from 'react'
import Layout from '../../components/layout/Layout'

function ProductInfo() {
    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden  w-full h-full">

                <div className=' ml-56 mt-12 float-left -w-2/5 h-4/5'>
                    <img
                        className="object-cover object-center -w-2/5 rounded-lg"
                        src="https://dummyimage.com/400x400"
                    />
                </div>

                <div className="w-1/3 h-96 mb-28 float-left ml-6 mt-12 p-8">

                    <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">
                        BRAND NAME
                    </h2>

                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                        The Catcher in the Rye
                    </h1>
                    
                    <p className="leading-relaxed border-b-2 mb-5 pb-5">
                        Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                        sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
                        cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
                        tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
                        shorts keytar banjo tattooed umami cardigan.
                    </p>

                    <div className="flex">

                        <span className="title-font font-medium text-2xl text-gray-900">
                            $58.00
                        </span>

                        <button className=" text-white w-40 h-10 bg-indigo-500 border-0 mb-28  focus:outline-none hover:bg-indigo-600 rounded ml-36">
                            Add To Cart
                        </button>

                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default ProductInfo