import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { CallContext } from '../../Context/Context';

const AddProducts = () => {
    const { users } = useContext(CallContext)
    const { register, handleSubmit } = useForm()
    const formSubmit = data => {
        const formData = new FormData()
        formData.append('image',data.image[0])
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_key}`, {
             method: "POST",
            body:formData
            })
            .then(res => res.json())
            .then(item => {
                console.log(item)
                if (item.success) {
                    const dataForm ={
                        image:item.data.url,
                        name:data.product,
                        location:data.location,
                        resale:data.price,
                        originl:data.original,
                        use:data.use,
                        sellerName:data.seller,
                        categroy:data.category,
                        product_type:data.select,
                        number:data.number,
                        description: data.text,
                        date: data.date,
                        seller_email: users?.email,
                        status:'availlable'
                    }
                    fetch(`https://gsm-area-server.vercel.app/productsadd?email=${users?.email}`,{
                        method:'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(dataForm)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.acknowledged) {
                                toast.success('add product success')
                            }
                        })
                }
            })
    }
    return (
        <div className='container mx-auto my-8'> 
            <div className='p-4 border-4 bg-secondary rounded-lg'>
                <form onSubmit={handleSubmit(formSubmit)} className='grid grid-cols-1 gap-3 max-w-md mx-auto'>
                    <div className='grid grid-cols-2 gap-2'>
                        <input {...register('product')} type='text' placeholder='enter a product name' name='product' id="" className='input' input-bordered />
                        <input {...register('price')} type="number" placeholder='enter price' name="price" id="" className="input" input-bordered/>
                    </div>
                    <input {...register('number')} type="number" placeholder='enter a number' name="number" id="" className="input" input-bordered />
                    <input type="file" {...register('image')} className="file-input file-input-bordered w-full" />
                    <select {...register('select')} className="select" select-bordered w-full>
                    <option selected>good</option>
                    <option>excellent</option>
                    <option>fair</option>
                    </select>
                    <div className='grid grid-cols-2 gap-3'>
                        <input {...register('location')} type="text" placeholder='location' name="location" id="" className="input" input-bordered />
                        <input {...register('category')} type="text" placeholder='category' name="category" id="" className="input" input-bordered />
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <input {...register('original')} type="number" placeholder='original price' name="original" id="" className="input" input-bordered />
                        <input {...register('use')} type="number" placeholder='use' name="use" id="" className="input" input-bordered />
                    </div>
                    <input {...register('date')} type="date" className='input input-bordered' name="date" id="" />
                    <input {...register('seller')} type="text"
                    placeholder='seller name' className='input input-bordered' name="seller" id="" />
                    <textarea {...register('text')} 
                    name="text" className="textarea" textarea-bordered placeholder="Bio"></textarea>
                    <button className='btn btn-info'>submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;