import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CallContext } from '../../Context/Context';
import Modal from './Modal';
import Productsitem from './Productsitem';

const Products = () => {
    const { users } = useContext(CallContext)
    const datas = useLoaderData()
    const [modalitem, setModalitem] = useState(null)
    const [itemId,setItemId]=useState('')
    const handleModalForm = event => {
        event.preventDefault()
        const form = event.target;
        const number = form.number.value;
        const location = form.location.value;
        const itemName = form.itemName.value
        const price = form.price.value;
        const products = {
            user:users.displayName,
            email: users.email,
            itemName: itemName,
            price:price,
            number:number,
            location: location,
        }
        console.log(products)
        fetch(`https://gsm-area-server.vercel.app/bookitem?id=${itemId}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(products)
            })
                .then(res => res.json())
                .then(data => {
                console.log(data)
            })
    } 
    return (
        <div className='my-10'>
            <div className='grid lg:grid-cols-2 gap-4 container mx-auto'>
                {
                    datas.map(data=><Productsitem key={data._id} setModalitem={setModalitem} data={data}></Productsitem>)
                 }
            </div>
            {modalitem && <Modal
                setModalitem={setModalitem}
                handleModalForm={handleModalForm}
                modalitem={modalitem}
                setItemId={setItemId}
            ></Modal>}
        </div>
    );
};

export default Products;