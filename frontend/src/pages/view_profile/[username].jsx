import {useSearchParams} from 'next/navigation';
import  {useEffect} from "react";
import { clientServer } from '../../config/index.jsx';
import DashboardLayout from "../../layout/DashboardLayout/index.jsx"
import UserLayout from "../../layout/UserLayout/index.jsx";
import styles from "./index.module.css";
import {BASE_URL} from "../../config/index.jsx";


export default function ViewProfilePage({userProfile}) {
    const searchParameters = useSearchParams();
    useEffect(()=>{
        // console.log("from view: view profile")
        console.log(userProfile.userId.name)
    });
    return (
        
        <UserLayout>
            <DashboardLayout>
                <div className={styles.container}>
                    <div className={styles.backDropContainer}>
                        <img className={styles.backDrop} src={`${BASE_URL}/${userProfile.userId.profilePicture}`} alt="profile" />
                    </div>
                    <div className={styles.profileContainer__details}>
                        <div style={{display:"flex", gap: "0.7"}}>
                            <div style={{flex: "0.8"}}>
                                <div style={{display:"flex", width: "fit-content", alignItems: "center", gap: "1.2rem"}}>
                                    <h2>{userProfile.userId.name}</h2>
                                    <p style={{flex: "0.8"}}>@{userProfile.userId.username}</p>
                                </div>
                            </div>
                            <div style={{flex: "0.2"}}>

                            </div>
                        </div>








                    </div>
                </div>
            </DashboardLayout>
        </UserLayout>
    )
}

export async function getServerSideProps(context) {
    console.log("From View");
    console.log(context.query.username);

    const request = await clientServer.get("/user/get_profile_based_on_username", {
        params: {
            username: context.query.username
        }
    })

    const response = await request.data;
    //console.log(response);

    // return {props: {userProfile: request.data.profile}};
    return {props: {userProfile: request.data.profile}};
}