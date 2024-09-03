import Reaction, { ReactionDocument } from "../models/reactionModel";
import createReactionSchema from "../schemas/reaction.schema";
import { TypeOf } from "zod";

// Definir el tipo para los datos de entrada basados en el esquema Zod
type CreateReactionInput = TypeOf<typeof createReactionSchema> & { user: string };

class ReactionService {
  // Método para crear una nueva reacción
  public async create(data: CreateReactionInput): Promise<ReactionDocument> {
    try {
      const reaction = await Reaction.create(data);
      return reaction;
    } catch (error) {
      throw new Error("Error creating reaction: " + (error instanceof Error ? error.message : "Unknown error"));
    }
  }
}

export default new ReactionService();
