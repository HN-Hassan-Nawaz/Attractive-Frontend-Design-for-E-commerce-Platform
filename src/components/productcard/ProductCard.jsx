import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../../redux/cartSlice';

function ProductCard() {

    const context = useContext(myContext)
    const { product } = context

    const dispatch = useDispatch()
    const cartitems = useSelector((state) => state.cart)

    // console.log(cartitems)

    const handleaddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success("Add To Cart Successfully");
    }

    //handle the side effects like store into the localstorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartitems));
    }, [cartitems]);

    return (
        <div className=' mb-12'>
            <div className=' ml-12 text-black font-bold text-3xl mb-6'>
                Our Latest Collection
            </div>

            <div className="flex flex-wrap ml-6 mr-6">
                {product.map((item, index) => {
                    product.id = { index }
                    const { title, price, description, imageUrl } = item;
                    return (
                        <div className="p-4 md:w-1/4  drop-shadow-lg " >
                            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" >
                                <div className="flex justify-center cursor-pointer" >
                                    <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={imageUrl} alt="blog" />
                                </div>
                                <div className="p-5 border-t-2">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" >Pakistan</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                                    {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                    <p className="leading-relaxed mb-3" >Rs. {price}</p>
                                    <div className=" flex justify-center">
                                        <button
                                            onClick={() => handleaddToCart(item)}
                                            type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductCard;
