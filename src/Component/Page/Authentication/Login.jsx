import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CallContext } from '../../Context/Context';

const Login = () => {
    const {LogInUser} = useContext(CallContext)
    const {register,handleSubmit}=useForm()
    const handlelogIn = (data) => {
        console.log(data)
        LogInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handlelogIn)}>
                <div className='flex flex-col'>
                    <label htmlFor="email">email</label>
                    <input {...register('email',{required:true})} className='input input-bordered' type={'email'} id="" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password">password</label>
                    <input {...register('password',{required:true })} className='input input-bordered' type="password" id="" />
                </div>
                <button className='btn btn-info'>Login</button>
                <div>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                </div>
                <div>
                    <button className='btn btn-primary'>google</button>
                    <button className='btn btn-primary'>facebppl</button>
                    <button className='btn btn-primary'>gisthub</button>
                </div>
            </form>
        </div>
    );
};

export default Login;