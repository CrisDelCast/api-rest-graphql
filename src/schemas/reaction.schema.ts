import {z, object, string, TypeOf } from 'zod'

const createReactionSchema = object({
    type: string({ required_error: "Reaction type is required" })
    .refine((val) => ["Like", "Love it", "Dislike"].includes(val), {
        message: "Invalid reaction type",
    }),
    comment: string({ required_error: "Comment is required" }),
});

//update must be delete it and allow to put another one

export default createReactionSchema