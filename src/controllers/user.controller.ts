import {Request, response, Response} from 'express'
import { UserDocument, UserInput } from '../models/userModel'
import userService from '../services/user.service'

class userController{
    
    public async login(req: Request, res: Response ) {
        try {
            const resObj = await userService.login(req.body)
            res.json(resObj);
            
        } catch (error) {
            if (error instanceof ReferenceError)
                res.status(401).json({message: "Not authorized"});
            res.status(500).json(error);
        }
    }

    //async and await bc the promise that s
    public async create(req: Request, res: Response ) {
        try {
            //Because req.body is an "any" we need to cast it, how? with "as". e.g as UserInput
            // const userExist: UserDocument | null = await userService.findByEmail(req.params.email);
            // if(userExist)
            //     res.status(400).json({message: "User already exists"});
            const user: UserDocument = await userService.create(req.body as UserInput)
            res.status(201).json(user);
            
        } catch (error) {
            if (error instanceof ReferenceError)
                res.status(400).json({message: "User already exists"});
            res.status(500).json(error);
        }
    }

    public async getAll(req: Request, res: Response ) {
        try {
            const users: UserDocument[] = await userService.findAll()
            //The user status its 200 by default
            res.json(users);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async get(req: Request, res: Response) {
        try {
            const user: UserDocument | null = await userService.findById(req.params.id)
            if(!user){
                res.status(404).json({message: `USer with id: ${req.params.id} not found`})
            }
            res.json(user);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async getByEmail(req: Request, res: Response) {
        try {
            const user: UserDocument | null = await userService.findByEmail(req.params.email)
            if(!user){
                res.status(404).json({message: `USer with email: ${req.params.email} not found`})
            }
            res.json(user);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const user: UserDocument | null = await userService.update(req.params.id, req.body as UserInput)
            if(!user){
                res.status(404).json({message: `USer with id: ${req.params.id} not found`})
            }
            res.json(user);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }


    public async delete(req: Request, res: Response) {
        try {
            const user: UserDocument | null = await userService.delete(req.params.id)
            if(!user){
                res.status(404).json({message: `USer with id: ${req.params.id} not found`})
            }
            res.json(user);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }


}

export default new userController();