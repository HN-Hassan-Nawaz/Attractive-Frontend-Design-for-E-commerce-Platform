import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';


function Cart() {

  const cartitems = useSelector((state) => state.cart);
  // console.log(cartitems)

  const dispatch = useDispatch()

  const deletecard = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete Cart")
  }

  //for delete card count portion works proper
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartitems));
  }, [cartitems]);

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartitems.forEach((cartitems) => {
      temp = temp + parseInt(cartitems.price)
    })
    setTotalAmount(temp);
    console.log(temp);
  }, [cartitems]);

  const shipping = parseInt(100);
  const grandTotal = shipping + totalAmount;
  console.log(grandTotal);

  return (
    <Layout >
      <div>
        <h1 className="font-bold text-3xl text-center mb-12 mt-10">
          Cart Items
        </h1>

        <div className=" w-11/12 m-20 columns-4 gap-6">
          {cartitems.map((item, index) => {
            const { title, price, imageUrl, description } = item;
            return (
              <div className=" w-full mb-10 break-inside-avoid shadow-2xl rounded-xl">
                <h2 className=' font-bold text-xl text-center p-4'>{title}</h2>
                <img className=' ml-12 w-28 float-left mr-16 cursor-pointer' src={imageUrl} />
                <img className=' w-14 cursor-pointer' src='delete.png' onClick={() => deletecard(item)} />
                <p className=' p-6 mt-12'>{description}</p>
                <p className=' ml-10 text-xl font-bold pb-6'>{price}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3" >
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700" >Subtotal</p>
              <p className="text-gray-700" >{totalAmount}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700" >Shipping</p>
              <p className="text-gray-700" >{shipping}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold" >Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold" >{grandTotal}</p>
              </div>
            </div> */}
      {/* <Modal  /> */}
      <Modal />
      {/* </div> */}

      {/* </div> */}
    </Layout >
  )
}

export default Cart;