import PostMessage  from "../models/postMessage.js";

export const getPosts = async (req , res)=> {
    try {
        const postMessages = await PostMessage.find(); //this takes times ,so weed await because asyncronious
        console.log(postMessages);
        res.status(200).json(postMessages);//we need to make our function to return something
    } catch (error) {
       res.status(404).json({message : error.message}) 
    }
} 

export const createPost = async (req , res)=> {
   
   const post = req.body;
   console.log(post);
   const newPost = new PostMessage(post)

    try {

        await newPost.save();
        //htts://www.restapitutorial.com/httpstatuscodes.html
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
} 