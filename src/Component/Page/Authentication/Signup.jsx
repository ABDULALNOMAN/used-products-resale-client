import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { CallContext } from '../../Context/Context';
import useIndentify from '../../custom/useIndentify';


const Signup = () => {
    const { handleSignUp, updateUser } = useContext(CallContext)
    const [info, setInfo] = useState({})
    const siteuser = useIndentify(info)
    const navigate = useNavigate()
    siteuser?.acknowledged && toast.success("signup successfully") && navigate("/")

    // useForm fucntion
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const name = data.first +''+ data.lest
        const visitor = data?.siteUser ? data?.siteUser : "user" ;
        handleSignUp(data?.email, data?.password)
            .then(result => {
                if(result?.user?.uid){
                    updated(name)
                    abdultFunc(result?.user?.email, visitor)
                }
            })
            .catch((error) =>{
                const errMess = error?.message?.split("/")[1].split(")")[0]
                toast.error(errMess)
            })
    }

    // function call by useForm
    const updated = (name) => {
        updateUser({displayName:name})
            .then(() =>{})
            .catch((e)=>{})
    }

    // function call by useFrom
    const abdultFunc = (email , visitor) => {
        setInfo({email, visitor})
    }
    return (
        <div className=' max-w-md mx-auto px-4 py-10 my-10 rounded-md bg-sky-900 text-black'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col'>
                        <label className='text-xl italic text-white' htmlFor="text">first name</label>
                        <input {...register('first')} className='input input-bordered bg-gray-400 text-lg italic' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-xl italic text-white' htmlFor="text">lest name</label>
                        <input {...register('lest')} className='input input-bordered bg-gray-400 text-lg italic' type="text" />
                    </div>
                </div>
                <div className='flex flex-col my-2'>
                    <label className='text-xl italic text-white' htmlFor="email">email</label>
                    <input {...register('email',{required:true})} className='input input-bordered bg-gray-400 text-lg italic' type={'email'}/>
                </div>
                <div className='flex flex-col'>
                    <label className='text-xl italic text-white' htmlFor="password">password</label>
                    <input {...register('password',{required:true })} className='input input-bordered bg-gray-400 text-lg font-semibold italic' type="password"/>
                </div>
                <div className='flex flex-row my-4'>
                    <div className='flex items-center'>
                        <input
                        type="radio"
                        name="siteUser"
                        value={'seller'}
                        className="radio mr-1 bg-teal-400"
                        {...register('siteUser')}
                        />
                        <label className='text-lg font-semibold italic text-white' htmlFor="siteUser">seller</label>
                    </div>
                    <div className='flex items-center ml-3'>
                        <input
                        type="radio"
                        name="siteUser"
                        className="radio mr-1 bg-teal-400"
                        {...register('siteUser')}
                        value={'user'}
                        />
                        <label className='text-lg font-semibold text-white italic' htmlFor="siteUser">user</label>
                    </div>
                </div>
                <input className='btn btn-info text-lg text-white w-full rounded-full' type="submit" value="signUp" />
            </form>
        </div>
    );
};

export default Signup;