import styles from "./styles.module.css";
import {useRouter} from "next/router";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {reset} from "../../config/redux/reducers/authReducer/index.js";



export default function NavBarComponent() {
    const router = useRouter();
    const authState = useSelector((state)=> state.auth);
    const dispatch = useDispatch();

    // useEffect(() => {
    // console.log("Navbar authState changed:", authState);
    // }, [authState]);

    return (
        <div className={styles.container}>
            <nav className={styles.navBar}>
                <h1 style={{cursor: "pointer"}}onClick={()=> {
                    router.push("/")
                }}>Networx</h1>

                <div className={styles.navBarOptionContainer}>

                    {authState.profileFetched && <div>
                        <div style={{display: "flex", gap: "1.2rem"}}>
                            <p>Hey, {authState?.user?.userId?.name} </p>
                            <p style={{fontWeight: "bold", cursor: "pointer"}}>Profile</p>
                            <p onClick={()=>{
                                localStorage.removeItem("token");
                                router.push("/login");
                                dispatch(reset());
                            }} style={{fontWeight: "bold", cursor: "pointer"}}>Logout</p>
                        </div>
                    </div>}

                    {!authState.profileFetched && <div onClick={()=> {
                        router.push("/login")
                    }} className={styles.buttonJoin}>
                        <p>Be a part</p>
                    </div>}
                    
                </div>
            </nav>
        </div>
    )
}