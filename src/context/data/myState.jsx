import React, { useState, useEffect } from 'react'
import myContext from './myContext'
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';

//define the Use Context data
function myState(props) {

    const [loading, setLoading] = useState(false)

    // const [darkMode, setDarkMode] = useState('light');

    // const toggleDarkMode = () => {
    //     if (mode === "light") {
    //         setDarkMode("dark");
    //         document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    //     }
    //     else {
    //         setDarkMode("light");
    //         document.body.style.backgroundColor = 'white';
    //     }
    // };


    //for product section 

    const [products, setproducts] = useState({
        title: '',
        price: '',
        imageUrl: '',
        category: '',
        description: '',
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    //add product section
    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error("All Fields Are Required")
        }

        setLoading(true)

        try {     //add products to the firebase
            const productRef = collection(fireDB, "products");
            await addDoc(productRef, products)
            toast.success("Add Product Successfully");
            setproducts({
                title: '',
                price: '',
                imageUrl: '',
                category: '',
                description: '',
            });
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 1000);

            getproductData();
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const [product, setproduct] = useState([]);
    const getproductData = async () => {

        setLoading(true)

        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy("time")
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });
                setproduct(productArray);
                setLoading(false)
            })

            return () => data;

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getproductData();
    }, []);

    const edithandle = (item) => {
        setproducts(item)
    }

    const updateproducts = async () => {
        setLoading(true)
        try {
            await setDoc(doc(fireDB, "products", products.id), products)
            toast.success("Product Updated Successfully")
            getproductData();
            window.location.href = "/dashboard"
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const deleteProducts = async (item) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, "products", item.id))
            toast.success("Product Deleted Successfully")
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <myContext.Provider value={{ loading, setLoading, products, setproducts, product, addProduct, edithandle, updateproducts, deleteProducts }}>
            {props.children}
        </myContext.Provider>
    )
}

export default myState;
