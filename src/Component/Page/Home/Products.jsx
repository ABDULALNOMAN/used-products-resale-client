import React, { useContext, useState } from 'react';
import { useLoaderData, useRevalidator } from 'react-router-dom';
import { CallContext } from '../../Context/Context';
import Modal from './Modal';
import Productsitem from './Productsitem';
import { toast } from 'react-hot-toast';

const Products = () => {
    const { users } = useContext(CallContext)
    const datas = useLoaderData()
    const revalidator = useRevalidator()
    const [modalitem, setModalitem] = useState(null)
    const [itemId,setItemId]=useState('')

    // function 
    const handleModalForm = event => {
        event?.preventDefault()
        const form = event?.target;
        const products = {
            user:users?.displayName,
            email: users?.email,
            itemName:form?.itemName?.value,
            price:form?.price?.value,
            number:form?.number?.value,
            location: form?.location?.value,
        }
        fetch(`http://localhost:5000/bookitem?id=${itemId}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON?.stringify(products)
            })
                .then(res => res?.json())
                .then(data => {
                    toast.success("Book successfull")
                    data.acknowledged && revalidator.revalidate();
                })
    }
    return (
        <div className='my-10'>
            <div className='grid lg:grid-cols-2 gap-4 container mx-auto'>
                {
                    datas?.map(data=><Productsitem key={data?._id} setModalitem={setModalitem} data={data}></Productsitem>)
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