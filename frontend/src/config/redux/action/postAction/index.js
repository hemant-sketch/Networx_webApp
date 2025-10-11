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

export const getAllComments = createAsyncThunk(
    "post/getAllComments",
    async (postData, thunkAPI) => {
       try{
        const response = await clientServer.get("/get_comments", {
            params: {
                post_id: postData.post_id
            }
        });
        return thunkAPI.fulfillWithValue({
            comment: response.data,
            post_id: postData.post_id
        })
       }catch(err){
            return thunkAPI.rejectWithValue(err.response.data.message);
       } 
    }
)

export const postComment = createAsyncThunk(
    "post/postComment",
    async (commentData, thunkAPI) => {
        //console.log("function toh chlra");
        try{
            console.log({
                post_id: commentData.post_id,
                commentbody: commentData.commentBody
            })
            const response = await clientServer.post("/comment", {
                token: localStorage.getItem("token"),
                post_id: commentData.post_id,
                commentBody: commentData.commentBody 
            });
            return thunkAPI.fulfillWithValue(response.data);
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    }
)