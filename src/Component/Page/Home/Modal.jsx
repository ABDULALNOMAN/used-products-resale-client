import React, { useContext, } from 'react';
import { CallContext } from '../../Context/Context';

const Modal = ({ modalitem,setModalitem,handleModalForm,}) => {
    const {users}=useContext(CallContext)
    const { name, resale,} = modalitem
    return (
        <div className='px-4'>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <form onSubmit={handleModalForm} className='grid grid-cols-1 gap-4'>
                        <input
                            type="text" defaultValue={users?.displayName} disabled placeholder="Type here" className="input input-bordered w-full" />
                        <input
                            defaultValue={users?.email}
                            disabled d type="email" placeholder="Type here" className="input input-bordered w-full" />
                        <div className='grid grid-cols-2 gap-2'>
                            <input
                                defaultValue={name}
                                disabled type="text" placeholder="Type here"
                                className="input input-bordered w-full"
                                name="itemName"
                            />
                            <input
                                defaultValue={resale}
                                disabled
                                type="text" placeholder="Type here"
                                className="input input-bordered w-full"
                                name='price'
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                             <input
                            type="number" placeholder="please enter number" className="input input-bordered w-full"
                            name='number'
                        />
                            <input
                                type="text" placeholder="please location" className="input input-bordered w-full"
                                name='location'
                            />
                       </div>
                        <div className="modal-action">
                            <button className='btn btn-info' onClick={()=>setModalitem(null)}>cancle</button>
                            <button><label htmlFor="my-modal-6" className="btn">submit</label></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;