import ReactionModel, {ReactionDocument, ReactionInput} from "../models/reactionModel";

class ReactionService{
    
    public async create(reactionInput: ReactionInput): Promise<ReactionDocument>{
        try {
            const reaction = await ReactionModel.create(reactionInput);
            
            return reaction
        } catch (error) {
            throw error;
        } 
    }

    public async findAll(): Promise<ReactionDocument[]>{
        try {
            const users = await ReactionModel.find();
            return users
        } catch (error) {
            throw error;
        }   
    }

    public async findById(id: string): Promise<ReactionDocument | null>{
        try {
            const user = await ReactionModel.findById(id);
            return user
        } catch (error) {
            throw error;
        }   
    }

    public async update(id: string, ReactionInput: ReactionInput): Promise<ReactionDocument | null>{
        try {
            const user: ReactionDocument | null = await ReactionModel.findOneAndUpdate
            ({_id: id}, ReactionInput, {returnOriginal: false});
            //retunr original false, means return the modified one
            return user;
        } catch (error) {
            throw error;
        }
    }

    public async delete(id: string): Promise<ReactionDocument | null>{
        try {
            const user: ReactionDocument | null = await ReactionModel.findOneAndDelete
            ({_id: id});
            //retunr original false, means return the modified one
            return user;
        } catch (error) {
            throw error;
        }
    }

}

export default new ReactionService();