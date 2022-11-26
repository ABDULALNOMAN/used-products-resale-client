import { useEffect, useState } from "react"

const useIndentify = (info) => {
    const [userStore, setUserStore] = useState('')
    console.log(info)
        useEffect(() => {
            if(info.email){
                fetch('http://localhost:5000/userstore',{
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
     return(userStore)
}
export default useIndentify