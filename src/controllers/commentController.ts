import {Request, response, Response} from 'express'
import { CommentDocument, CommentInput } from '../models/commentModel'
import commentService from '../services/comment.service'

class commentController{
    
    public async create(req: Request, res: Response) {
        try {
            // Asegúrate de que el ID del usuario esté presente
            const userId = req.body.loggedUser.id; // Obtener el ID del usuario desde el token
            
            if (!userId) {
                return res.status(400).json({ message: "User ID is required." });
            }
    
            // Crear el comentario incluyendo el ID del usuario
            const comment: CommentDocument = await commentService.create({
                ...req.body,
                user: userId, // Agregar el ID del usuario al comentario
            } as CommentInput);
    
            res.status(201).json(comment);
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(400).json({ message: "Comment already exists" });
            } else {
                res.status(500).json(error);
            }
        }
    }

    public async getAll(req: Request, res: Response ) {
        try {
            const comments: CommentDocument[] = await commentService.findAll()
            res.json(comments);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async get(req: Request, res: Response) {
        try {
            const comment: CommentDocument | null = await commentService.findById(req.params.id)
            if(!comment){
                res.status(404).json({message: `USer with id: ${req.params.id} not found`})
            }
            res.json(comment);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }


    public async update(req: Request, res: Response) {
        try {
            const comment: CommentDocument | null = await commentService.update(req.params.id, req.body as CommentInput)
            if(!comment){
                res.status(404).json({message: `USer with id: ${req.params.id} not found`})
            }
            res.json(comment);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }


    public async delete(req: Request, res: Response) {
        try {
            const comment: CommentDocument | null = await commentService.delete(req.params.id)
            if(!comment){
                res.status(404).json({message: `USer with id: ${req.params.id} not found`})
            }
            res.json(comment);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }


}

export default new commentController();