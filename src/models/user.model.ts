import mongoose, { Collection } from "mongoose"

export interface UserInput{
    name: string,
    email: string,
    password: string
}

export interface UserDocument extends UserInput, mongoose.Document{
    createdAt: Date,
    updateAt: Date,
    deleteAt: Date
}

//Schema definition and characteristics like required or unique. and the name at the end
const userSchema = new mongoose.Schema({
   name: {type: String, require: true},
   email:{type: String, require: true, index: true, unique: true},
   password: {type: String, require: true},
}, {timestamps: true, collection: "users"}); 

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;