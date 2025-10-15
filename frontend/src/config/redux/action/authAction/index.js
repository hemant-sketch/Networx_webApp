import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientServer } from '../../../index.jsx';
import {useDispatch} from "react-redux";

export const loginUser = createAsyncThunk (
    "user/login",  //async type prefix for woh teen cheeze fulfiled, pending, rejected
    async (user, thunkAPI) => {
        try {
            const response = await clientServer.post("/login", {
                email: user.email,
                password: user.password 
            });
            
            if(response.data.token) {
                localStorage.setItem("token", response.data.token)
            }else {
                return thunkAPI.rejectWithValue({
                    message: "token not provided"
                })
            }
            return thunkAPI.fulfillWithValue(response.data.token)  //yeh sab jo return krre woh action hai
                                                                    // aur uske hisab se  auth reducer mein hum kaam krte
        }catch(err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)

export const registerUser  = createAsyncThunk (
    "user/register",
    async (user, thunkAPI) => {
        try {
            const response = await clientServer.post("/register", {
                username: user.username,
                email: user.email,
                password: user.password,
                name: user.name,
            });
            
            if(response.data.token) {
                localStorage.setItem("token", response.data.token);
            }else {
                return thunkAPI.rejectWithValue({
                    message: "token not provided"
                })
            }
            return thunkAPI.fulfillWithValue(response.data.token);

        }catch(err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)

export const getAboutUser = createAsyncThunk (
    "user/getAboutUser",
    async (user, thunkAPI) => {
        try {
            const response = await clientServer.get("/get_user_and_profile", {
                params: {
                    token : user.token,
                }
            })
            return thunkAPI.fulfillWithValue(response.data);
        } catch(err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)

export const getAllUsers = createAsyncThunk (
    "user/getAllUsers",
    async (_, thunkAPI) => {
        try {
            const response = await clientServer.get("/user/get_all_users")
            return thunkAPI.fulfillWithValue(response.data);
        } catch(err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)

export const sendConnectionRequest = createAsyncThunk(  //request bejra hu
    "user/sendConnectionRequest",
    async (user, thunkAPI) => {
        try {
            const response = await clientServer.post("/user/send_connection_request", {
                token: user.token, //user ka (mera)
                connectionId: user.user_id   //uska jisko bhejre connection req
            })
            thunkAPI.dispatch(getConnectionsRequest({token: user.token}))
            return thunkAPI.fulfillWithValue(response.data);
        }catch(err) {
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    }
)

export const getConnectionsRequest = createAsyncThunk(  //maine kis kisoko bhejdi hai
    "user/getConnectionRequests", 
    async (user, thunkAPI) => {
        try {
            const response = await clientServer.get("/user/getConnectionRequests", { 
                params: {
                    token: user.token
                }
            })
            return thunkAPI.fulfillWithValue(response.data.connections);
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data.message);  
        }
    }
)

export const getMyConnectionRequests = createAsyncThunk( //merko kis ksine bheja
    "user/getMyConnectionRequests",
    async (user, thunkAPI) => {
        
        try {
            const response = await clientServer.get("/user/user_connection_request", {
                params: {
                    token: user.token
                }
            })
            return thunkAPI.fulfillWithValue(response.data.connections)
        }catch(err) {
            return thunkAPI.rejectWithValue(err.response.data.message);  
        }
    }
)

export const AcceptConnections = createAsyncThunk(
    "user/acceptConnection",
    async (user, thunkAPI) => {
        try {
            const response = await clientServer.post("/user/accept_connection_request", { 
                token: user.token,
                connection_id: user.connectionId,
                action_type: user.action //yes or no
            })
            return thunkAPI.fulfillWithValue(response.data)
        }catch(err) {
            return thunkAPI.rejectWithValue(err.response.data.message);  
        }
    }
)