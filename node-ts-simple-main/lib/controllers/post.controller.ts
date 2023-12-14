import Controller from '../interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';
import PostModel from "../models/PostModel";

class PostController implements Controller {
    public path = '/api/posts';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getPosts);
        this.router.get(`${this.path}/:postId`, this.getPostById);
        this.router.post(this.path, this.createPost);
    }

    

    public async getPostById(request: Request, response: Response): Promise<void> {
        const postId = request.params.postId;

        try {
            const post = await PostModel.findOne({ _id: postId });

            if (!post) {
                response.status(404).json({ error: 'Nie znaleziono wpisu o podanym numerze' });
                return;
            }

            response.json(post);
        } catch (error) {
            console.error('Błąd podczas pobierania pojedynczego wpisu:', error);
            response.status(500).json({ error: 'Wystąpił błąd podczas pobierania pojedynczego wpisu' });
        }
    }
    public async getPosts(request: Request, response: Response): Promise<void> {
        try {
            
            const posts = await PostModel.find();

            
            response.json(posts);
        } catch (error) {
            
            console.error('Błąd podczas pobierania postów:', error);
            response.status(500).json({ error: 'Wystąpił błąd podczas pobierania postów' });
        }
    };

    private createPost = async (request: Request, response: Response) => {
        const { title, text, image } = request.body;
    
        const convertedTitle = String(title);
        const convertedText = String(text);
        const convertedImage = String(image);
    
        console.info("title: " + convertedTitle + "\ntext: " + convertedText + "\nimage: " + convertedImage);
    
        if (!convertedTitle || !convertedText || !convertedImage) {
            return response.status(400).json({ error: 'Wymagane pola są niekompletne.' });
        }
    
        try {
            const newPost = new PostModel({ title: convertedTitle, text: convertedText, image: convertedImage });
            await newPost.save();
            response.status(201).json(newPost);
        } catch (error) {
            console.error('Error:', error);
            response.status(500).json({ error: 'Wystąpił błąd podczas zapisywania posta.' });
        }
    };
}

export default PostController;