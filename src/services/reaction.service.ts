// import Reaction, { ReactionDocument } from "../models/reaction.model";
// import { createReactionSchema } from "../schemas/reaction.schema";

// class ReactionService {
//     // Método para crear una nueva reacción
//     public async create(data: createReactionSchema & { user: string }): Promise<ReactionDocument> {
//         try {
//             const reaction = await Reaction.create(data);
//             return reaction;
//         } catch (error) {
//             // Asegurarse de que error es de tipo Error
//             if (error instanceof Error) {
//                 throw new Error("Error creating reaction: " + error.message);
//             }
//             throw new Error("Unknown error occurred while creating reaction");
//         }
//     }

// }

// export default new ReactionService();