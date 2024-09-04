import { Request, response, Response } from "express";
import { ReactionDocument, ReactionInput } from "../models/reactionModel";
import reactionService from "../services/reaction.service";
import mongoose from "mongoose";

class reactionController {
    public async create(req: Request, res: Response) {
        try {
          const data = {
            ...req.body,
            comment: new mongoose.Types.ObjectId(req.body.comment) // Convertir a ObjectId
          };
    
          const reaction: ReactionDocument = await reactionService.create(data);
          res.status(201).json(reaction);
        } catch (error) {
          if (error instanceof ReferenceError) {
            res.status(400).json({ message: "Reaction already exists" });
          } else {
            res.status(500).json(error);
          }
        }
      }

  public async get(req: Request, res: Response) {
    try {
      const reaction: ReactionDocument | null = await reactionService.findById(
        req.params.id
      );
      if (!reaction) {
        res
          .status(404)
          .json({ message: `USer with id: ${req.params.id} not found` });
      }
      res.json(reaction);
    } catch (error) {
      res.status(500).json(error);
    }
  }



  public async delete(req: Request, res: Response) {
    try {
      const reaction: ReactionDocument | null = await reactionService.delete(
        req.params.id
      );
      if (!reaction) {
        res
          .status(404)
          .json({ message: `USer with id: ${req.params.id} not found` });
      }
      res.json(reaction);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new reactionController();
