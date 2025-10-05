import UserLayout from "@/layout/UserLayout/index.jsx";
import {useEffect} from "react";
import {useSelector} from 'react-redux';
import {useRouter} from "next/router";


export default function LoginComponent() {



    const authState = useSelector((state) => state.auth);   // redux la function
    const router = useRouter();                      

    useEffect(()=> {
        if(authState.loggedIn) {
            router.push("/dashboard")
        }
    })

    return (
        <UserLayout>
            <>
            
            </>
        </UserLayout>    
    )
}