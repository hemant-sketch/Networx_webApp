import UserLayout from "../../layout/UserLayout/index.jsx";
import DashboardLayout from "../../layout/DashBoardLayout/index.jsx";
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../config/redux/action/authAction/index.js";
import styles from "./index.module.css";
import {BASE_URL} from "../../config/index.jsx";
import {useRouter} from "next/router";

export default function DiscoverPage() {

    const authState = useSelector((state)=> state.auth);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(()=> {
        if(!authState.all_profiles_fetched) {
            dispatch(getAllUsers());
        }
    },[])

    return (
        <UserLayout>
            <DashboardLayout>  
                <div>
                    <h1>DiscoverPage</h1>
                    <div className={styles.allUserProfile}>
                        {authState.all_profiles_fetched && authState.all_users.map((user) => {
                            return (
                                <div onClick={()=> {
                                    router.push(`/view_profile/${user.userId.username}`)
                                }}key={user._id} className={styles.userCard}>
                                    <img className={styles.userCard__image} src={`${BASE_URL}/${user.userId.profilePicture}`} alt="profile" />
                                    <div>
                                        <h1>{user.userId.name}</h1>
                                        <p>@{user.userId.username}</p>
                                    </div>

                                </div>    
                            )
                        })}
                    </div>
                </div>
            </DashboardLayout>  
        </UserLayout>
    )
}