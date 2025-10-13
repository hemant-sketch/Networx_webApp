import {useSearchParams} from 'next/navigation';
import  {useEffect, useState} from "react";
import { clientServer } from '../../config/index.jsx';
import DashboardLayout from "../../layout/DashboardLayout/index.jsx"
import UserLayout from "../../layout/UserLayout/index.jsx";
import styles from "./index.module.css";
import {BASE_URL} from "../../config/index.jsx";
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from "next/router";


export default function ViewProfilePage({userProfile}) {

    const postReducer = useSelector((state)=> state.postReducer);
    const dispatch = useDispatch();
    const searchParameters = useSearchParams();
    const authState = useSelector((state)=> state.auth);
    const router = useRouter();

    const[userPosts, setUserPosts] = useState([]);
    const[isCurrentUserInConnection, setIsCurrentUserInConnection] = useState(false);

    const getUsersPost = async()=> {
        await dispatch(getAllPosts());
        await dispatch(getConnectionsRequest({token: localStorage.getItem("token")}));

    }


    useEffect(()=> {
        let post = postReducer.posts.filter((post)=> {
            return post.userId.username === router.query.username;
             
        })
        setUserPosts(post);
    },[postReducer.posts])


    useEffect(()=> {
        console.log(authState.connections, userProfile.userId._id)
        if(authState.connections.some(user => user.connectionId === userProfile.userId._id)) {
            setIsCurrentUserInConnection(true);
        }
    },[authState.connections])


    
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
                        <div style={{display:"flex", gap: "0.7rem"}}>
                            
                            <div style={{flex: "0.8"}}>
                                <div style={{display:"flex", width: "fit-content", alignItems: "center", gap: "1.2rem"}}>
                                    <h2>{userProfile.userId.name}</h2>
                                    <p style={{color:"grey"}}>@{userProfile.userId.username}</p>
                                </div>
                            </div>
                            {isCurrentUserInConnection ?
                                <button className={styles.connectedButton}>Connected</button>
                                :
                                <button onClick={()=> {
                                    dispatch(sendConnectionRequest({ token: localStorage.getItem("token"), user_id: userProfile.userId._id})) 
                                }}className={styles.connectionBtn}>Connect</button>
                            
                            }
                            <div>
                                <p>{userProfile.bio}</p>
                            </div>

                            <div style={{flex: "0.2"}}>
                                <h3>Recent Activity</h3>
                                {userPosts.map((post)=> {
                                    return (
                                        <div key={post._id} className={styles.postCard}>
                                            <div className={styles.card}>
                                                <div className={styles.card__profileContainer}>
                                                    {post.media !== "" ? <img src={`${BASE_URL}/${post.media}`} alt=""/> 
                                                    :
                                                    <div style={{width: "3.4rem", height: "3.4rem"}}></div>}
                                                </div>
                                                <p>{post.body}</p>
                                            </div>
                                        </div>
                                )
                                })}
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