import mongoose, { Document, Schema, Model } from 'mongoose';

// Interfaz para los datos de entrada de un usuario
export interface UserInput {
    name: string;
    email: string;
    password: string;
    role: 'superadmin' | 'regular'; // Definición de roles como literales de cadena
}

// Interfaz para el documento de usuario que extiende Document e incluye fechas de creación, actualización y eliminación
export interface UserDocument extends UserInput, Document {
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date; // Campo opcional para la fecha de eliminación (solo si se usa en soft delete)
}

// Definición del esquema de usuario
const userSchema = new Schema<UserDocument>({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        index: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: ['superadmin', 'regular'], 
        default: 'regular' 
    }
}, { 
    timestamps: true, 
    collection: 'users' 
});

// Creación del modelo de Mongoose
const User: Model<UserDocument> = mongoose.model<UserDocument>('User', userSchema);

export default User;
