import { useEffect, useState } from "react"

const useIndentify = (info) => {
    const [userStore, setUserStore] = useState('')
        useEffect(() => {
            if(info?.email){
                fetch('https://gsm-area-server.vercel.app/userstore',{
                    method:'POST',
                    headers: {
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(info)
                })
                    .then(res => res.json())
                    .then(data => {
                        setUserStore(data)
                })
            }
        }, [info])
     return userStore
}
export default useIndentify