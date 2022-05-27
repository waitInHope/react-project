
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../api/client'

const initialState = {
    data: [
        {id: 1, title: 'firstPost', content: "hello post1"},
        {id: 2, title: 'secondPost', content: "hello post2"}
    ],
    status: 'idle',
    error: null
}

const fetchPost = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fake/posts');
    return response.posts;
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // 接收对应action的函数，必须是纯函数
        addPost(state, action) {
            state.posts.push(action.payload);
        }
    },
    extraReducers: {
        [fetchPost.pending]: (state) => {
            state.status = 'pending';
        },
        [fetchPost.fulfilled]: (state, action) => {
            state.status = 'fullfilled';
            state.posts = action.payload;
        },
        [fetchPost.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        }
    }
})

// 由Slice创建出来的action函数，type就是sliceName/reducerName(posts/addPost)
export const { addPost } = postSlice.actions;
export default postSlice.reducer;