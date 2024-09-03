import {object, string, TypeOf } from 'zod'

const createReactionSch = object({
    //content: string(["Like", "Love it", "Dislike"]  ),
    parentComment: string({required_error: "Comment is requeried"}),

})  

//delete
const deleteReactionSch = object({
    
})

//update must be delete it and allow to put another one

export default createReactionSch