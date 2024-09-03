import {Request, response, Response} from 'express'
import { ReactionDocument, ReactionInput } from '../models/reactionModel'
import reactionService from '../services/reaction.service'

class reactionController{
    
    public async create(req: Request, res: Response ) {
        try {
            const reaction: ReactionDocument = await reactionService.create(req.body as ReactionInput)
            res.status(201).json(reaction);
            
        } catch (error) {
            if (error instanceof ReferenceError)

                //? should be the same?
                res.status(400).json({message: "Reaction already exists"}); 
            res.status(500).json(error);
        }
    }

    public async getAll(req: Request, res: Response ) {
        try {
            const reactions: ReactionDocument[] = await reactionService.findAll()
            res.json(reactions);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async get(req: Request, res: Response) {
        try {
            const reaction: ReactionDocument | null = await reactionService.findById(req.params.id)
            if(!reaction){
                res.status(404).json({message: `USer with id: ${req.params.id} not found`})
            }
            res.json(reaction);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }


    public async update(req: Request, res: Response) {
        try {
            const reaction: ReactionDocument | null = await reactionService.update(req.params.id, req.body as ReactionInput)
            if(!reaction){
                res.status(404).json({message: `USer with id: ${req.params.id} not found`})
            }
            res.json(reaction);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }


    public async delete(req: Request, res: Response) {
        try {
            const reaction: ReactionDocument | null = await reactionService.delete(req.params.id)
            if(!reaction){
                res.status(404).json({message: `USer with id: ${req.params.id} not found`})
            }
            res.json(reaction);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }


}

export default new reactionController();