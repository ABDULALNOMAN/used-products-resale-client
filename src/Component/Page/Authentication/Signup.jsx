import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CallContext } from '../../Context/Context';

const Signup = () => {
    const {handleSignUp}=useContext(CallContext)
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        handleSignUp(data.email, data.password)
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col'>
                        <label htmlfor="text">first name</label>
                        <input {...register('first')} className='input input-bordered' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="text">lest name</label>
                        <input {...register('lest')} className='input input-bordered' type="text" />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email">email</label>
                    <input {...register('email',{required:true})} className='input input-bordered' type={'email'}/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password">password</label>
                    <input {...register('password',{required:true })} className='input input-bordered' type="password" />
                </div>
                <div>
                    <input type="radio" {...register('seller')}  id="" />
                    <input type="radio" {...register('user')} id="" />
                </div>
                <input className='btn btn-primary' type="submit" value="signUp" />
            </form>
        </div>
    );
};

export default Signup;