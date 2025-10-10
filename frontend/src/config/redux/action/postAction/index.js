import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientServer } from '../../../index.jsx';

export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts",
    async(_, thunkAPI)=> {
        try {
            const response = await clientServer.get("/posts");
            return thunkAPI.fulfillWithValue(response.data);
        } catch(err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)

export const createPost = createAsyncThunk(
    "post/createPost",
    async (userData, thunkAPI) => {
        const {file, body} = userData;

        try {
            const formData = new FormData();
            formData.append('token', localStorage.getItem('token'));
            formData.append('body', body);
            formData.append('media',file);

            const response = await clientServer.post("/post", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'   //yeh multer to batne ke liye
                }
            });

            if(response.status === 200) {
                return thunkAPI.fulfillWithValue("Post Uploaded");
            }else{
                return thunkAPI.rejectWithValue("Post didnt upload")
            }
        } catch(error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const deletePost = createAsyncThunk(
    "post/deletePost",
    async(post_id, thunkAPI) => {
        try{
            const response = await clientServer.delete("/delete_post", {
                data: {
                    token: localStorage.getItem("token"),
                    post_id: post_id.post_id
                }
            });
            return thunkAPI.fulfillWithValue(response.data);
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
) 

export const incrementPostLike = createAsyncThunk(
    "post/incrementLike",
    async(post, thunkAPI) => {
        try{
            const response = await clientServer.post('/increment_post_like',{
                post_id: post.post_id
            })
            return thunkAPI.fulfillWithValue(response.data);
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    }
)