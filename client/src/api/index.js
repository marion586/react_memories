import axios from 'axios';


const url ='http://localhost:5000/posts';

export const fetchPosts = ()=>axios.get(url);
export const createPost = (newPost)=>axios.post(url,newPost);

// export const fetchPosts = ()=>axios.get({url ,headers: {
//     'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     }});