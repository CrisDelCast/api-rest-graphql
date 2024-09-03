import {Request, response, Response} from 'express'

class postController{
    
    public create(req: Request, res: Response ) {
        res.status(201).send("Create post")
    }

    public getAll(req: Request, res: Response ) {
        res.send("Get post")
    }

    public get(req: Request, res: Response) {
        res.send(`Get post with id: ${req.params.id}`)
    }

    public update(req: Request, res: Response) {
        res.send("updated")
    }

    public delete(req: Request, res: Response)  {
        res.send("Deleted")
    }


}

export default new postController();