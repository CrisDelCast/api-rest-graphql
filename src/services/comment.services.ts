//Here we need the CommentModel for CommentDocument and/or CommentInput
//import commentModel, {CommentDocument, CommentInput} from "../models/user.model";

class CommentService{
    
    // public async create(commentInput: CommentInput): Promise<CommentDocument>{
    //     try {
    //         const comment = await CommentModel.create(commentInput);
            
    //         return comment
    //     } catch (error) {
    //         throw error;
    //     } 
    // }

    // public async findAll(): Promise<CommentDocument[]>{
    //     try {
    //         const users = await commentModel.find();
    //         return users
    //     } catch (error) {
    //         throw error;
    //     }   
    // }

    // public async findById(id: string): Promise<CommentDocument | null>{
    //     try {
    //         const user = await commentModel.findById(id);
    //         return user
    //     } catch (error) {
    //         throw error;
    //     }   
    // }

    // public async update(id: string, CommentInput: CommentInput): Promise<CommentDocument | null>{
    //     try {
    //         const user: CommentDocument | null = await commentModel.findOneAndUpdate
    //         ({_id: id}, CommentInput, {returnOriginal: false});
    //         //retunr original false, means return the modified one
    //         return user;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // public async delete(id: string): Promise<CommentDocument | null>{
    //     try {
    //         const user: CommentDocument | null = await commentModel.findOneAndDelete
    //         ({_id: id});
    //         //retunr original false, means return the modified one
    //         return user;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

}

export default new CommentService();