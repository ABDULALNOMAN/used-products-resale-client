import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { CallContext } from '../../Context/Context';

const Login = () => {
    const {LogInUser,googleSignin} = useContext(CallContext)
    const { register, handleSubmit } = useForm()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const handlelogIn = (data) => {
        console.log(data)
        LogInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from,{replace:true})
                toast.success('login successfuly')

            })
        .catch((error) => {
            console.log(error)
        })
    }
    const handleGoogleSignIn = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
                toast.success('login successfuly')
            })
            .catch(error => {
                console.log(error)
                
        })
    }
    return (
        <div className='flex flex-col justify-center max-w-md mx-auto px-4 py-8 rounded-md my-10 bg-sky-900 text-black'>
            <form onSubmit={handleSubmit(handlelogIn)}>
                <div className='flex flex-col'>
                    <label className='text-xl italic text-white' htmlFor="email">email</label>
                    <input {...register('email',{required:true})} className='input input-bordered  bg-gray-400 text-lg italic' type={'email'} id="" />
                </div>
                <div className='flex flex-col my-4'>
                    <label className='text-xl italic text-white' htmlFor="password">password</label>
                    <input {...register('password',{required:true })} className='input input-bordered  bg-gray-400 text-lg italic' type="password" id="" />
                </div>
                <div className=''>
                    <button className='btn btn-info w-44 text-lg text-white'>Login</button>
                </div>
                <div>
                    <div className="flex flex-col w-full border-opacity-50 ">
                        <div className="divider text-white">OR</div>
                    </div>
                </div>
            </form>
            <div className='flex justify-evenly items-center w-96 mx-auto'>
                <button onClick={handleGoogleSignIn} className='btn btn-primary'>google</button>
                <button className='btn btn-primary'>facebppl</button>
                <button className='btn btn-primary'>gisthub</button>
            </div>
        </div>
    );
};

export default Login;