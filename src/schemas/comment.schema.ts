import {object, string, TypeOf } from 'zod'

const createCommentSchema = object({
    content: string({ required_error: "Content is required" }),
    //user:,
    parent: string(), 
});

//update and delete

export default createCommentSchema