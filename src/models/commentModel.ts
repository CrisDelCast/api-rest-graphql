import mongoose, { Document, Schema, Model } from 'mongoose';

// Interfaz para los datos de entrada de un comentario
export interface CommentInput {
    content: string;
    user: mongoose.Types.ObjectId;  // ID del usuario que crea el comentario
    parent?: mongoose.Types.ObjectId;  // ID del comentario padre, en caso de que sea una respuesta
}

// Interfaz para el documento del comentario que extiende Document e incluye la fecha de creación y actualización
export interface CommentDocument extends CommentInput, Document {
    createdAt: Date;
    updatedAt: Date;
}

// Definición del esquema del comentario
const commentSchema = new Schema<CommentDocument>({
    content: { 
        type: String, 
        required: true 
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    parent: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment' 
    }
}, { 
    timestamps: true, 
    collection: 'comments' 
});

// Creación del modelo de Mongoose
const Comment: Model<CommentDocument> = mongoose.model<CommentDocument>('Comment', commentSchema);

export default Comment;
