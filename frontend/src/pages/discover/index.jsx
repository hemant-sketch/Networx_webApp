import UserLayout from "../../layout/UserLayout/index.jsx";
import DashboardLayout from "../../layout/DashBoardLayout/index.jsx";
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../config/redux/action/authAction/index.js";

export default function DiscoverPage() {

    const authState = useSelector((state)=> state.auth);
    const dispatch = useDispatch();

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
                </div>
            </DashboardLayout>  
        </UserLayout>
    )
}