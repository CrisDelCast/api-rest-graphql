import mongoose, { Document, Schema, Model } from 'mongoose';

// Interfaz para los datos de entrada de una reacción
export interface ReactionInput {
    type: 'like' | 'love' | 'dislike' | 'angry' | 'sad' | 'wow' | 'celebrate' | 'support';  // Tipos de reacción
    user: mongoose.Types.ObjectId;  // ID del usuario que reacciona
    comment: mongoose.Types.ObjectId;  // ID del comentario al que se reacciona
}

// Interfaz para el documento de la reacción que extiende Document e incluye la fecha de creación y actualización
export interface ReactionDocument extends ReactionInput, Document {
    createdAt: Date;
    updatedAt: Date;
}

// Definición del esquema de la reacción
const reactionSchema = new Schema<ReactionDocument>({
    type: { 
        type: String, 
        enum: ['like', 'love', 'dislike', 'angry', 'sad', 'wow', 'celebrate', 'support'], 
        required: true 
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    comment: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment', 
        required: true 
    }
}, { 
    timestamps: true, 
    collection: 'reactions' 
});

// Creación del modelo de Mongoose
const Reaction: Model<ReactionDocument> = mongoose.model<ReactionDocument>('Reaction', reactionSchema);

export default Reaction;
