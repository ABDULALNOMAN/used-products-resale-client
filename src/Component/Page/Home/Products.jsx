import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';
import Productsitem from './Productsitem';

const Products = () => {
    const datas = useLoaderData()
    const [modalitem, setModalitem] = useState(null)
    const handleModalForm = event => {
        event.preventDefault()
        const form = event.target;
        const number = form.number.value;
        const location = form.location.value;
        console.log(number, location)
        fetch('')

    } 
    return (
        <div className='my-10'>
            <div className='grid grid-cols-2 gap-4 container mx-auto'>
                {
                    datas.map(data=><Productsitem key={data._id} setModalitem={setModalitem} data={data}></Productsitem>)
                 }
            </div>
            {modalitem && <Modal
                setModalitem={setModalitem} handleModalForm={handleModalForm}
                modalitem={modalitem}></Modal>}
        </div>
    );
};

export default Products;