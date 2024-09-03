// Due is exported as default (default User) we can put any name on it like "UserModel"
import UserModel, {UserDocument, UserInput} from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserService{
    
    public async login(userInput: UserInput) {
        try {
            const userExist: UserDocument | null = await this.findByEmail(userInput.email);
            if(!userExist)
                throw ReferenceError("User don't exists")
            const isMatch : boolean = await bcrypt.compare(userInput.password, userExist.password)

            if (!isMatch)
                throw ReferenceError("Not authorized")
        
            return {
                email: userExist.email,
                id:userExist._id,
                token: this.generateToken(userExist)
            };
        } catch (error) {
            throw error;
        } 
    }

    public async create(userInput: UserInput): Promise<UserDocument>{
        try {
            const userExist: UserDocument | null = await this.findByEmail(userInput.email);
            if(userExist)
                // aquí no tengo acceso a req, ni req.status, por lo q mando es un mensaje
                //En este caso lanzo una excepción
                throw ReferenceError("User already exists")
            
            //The second param (10), encrypts normally, and then 10 times
            //If you put a string, is like a private key.
            userInput.password = await bcrypt.hash(userInput.password, 10);
            
            const user = await UserModel.create(userInput);
            
            return user
        } catch (error) {
            throw error;
        } 
    }

    public async findByEmail(email: string): Promise<UserDocument | null>{
        try {
            const user = await UserModel.findOne({email});
            //Syntaxis : {email}, es {email: email}
            //Como el nombre es igual, se puede poner solo {email}
            return user
        } catch (error) {
            throw error;
        }   
    }

    public async findAll(): Promise<UserDocument[]>{
        try {
            const users = await UserModel.find();
            return users
        } catch (error) {
            throw error;
        }   
    }

    public async findById(id: string): Promise<UserDocument | null>{
        try {
            const user = await UserModel.findById(id);
            return user
        } catch (error) {
            throw error;
        }   
    }

    public async update(id: string, userInput: UserInput): Promise<UserDocument | null>{
        try {
            const user: UserDocument | null = await UserModel.findOneAndUpdate
            ({_id: id}, userInput, {returnOriginal: false});
            //retunr original false, means return the modified one
            return user;
        } catch (error) {
            throw error;
        }
    }

    public async delete(id: string): Promise<UserDocument | null>{
        try {
            const user: UserDocument | null = await UserModel.findOneAndDelete
            ({_id: id});
            //retunr original false, means return the modified one
            return user;
        } catch (error) {
            throw error;
        }
    }

    public generateToken(user:UserDocument): string {

        try {
            //Is unsecure to send sensitive data in here, like "secret"
            return jwt.sign({id:user._id, email: user.email, name: user.name},
                process.env.JWT_SECRET || "secret", {expiresIn: "2m"});
        } catch (error) {
            throw error
        }
    }
    
}

export default new UserService();