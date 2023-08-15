import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allbuyers = () => {
    const { data:alluser=[],refetch } = useQuery({
        queryKey:['allseller'],
        queryFn: async() => {
            const res =await fetch('https://gsm-area-server.vercel.app/alluser')
            const data = res.json()
            return data
        }
    })
    const handleDeleteUser = (email) => {
        fetch(`https://gsm-area-server.vercel.app/userdelete?email=${email}`, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    refetch()
                }
            })
    }
    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto">
                <table className="table w-full text-black">
                    <thead>
                    <tr>
                        <th>index</th>
                        <th>email</th>
                        <th>User Status</th>
                        <th>button</th>
                    </tr>
                    </thead>
                    <tbody>
                        {alluser.map((user, index) =><tr key={user._id}>
                            <th>{index+1}</th>
                            <td>{user.email}</td>
                            <td>{user.user}</td>
                            <td><button onClick={()=>handleDeleteUser(user.email)} className='btn btn-warning btn-sm'>delete</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allbuyers;