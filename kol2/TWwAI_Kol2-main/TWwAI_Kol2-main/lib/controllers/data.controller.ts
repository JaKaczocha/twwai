import Controller from '../interfaces/controller.interface';
import {Request, Response, NextFunction, Router} from 'express';
import path from 'path';
import DataModel from './models/DataModel';

class DataController implements Controller {
    public path = '/data';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, this.addData);
        this.router.get(this.path, this.getData);
    }

    private addData = async (request: Request, response: Response) => {
        const {pressure,temperature, humidity, date } = request.body;
    
        try {
            const newData = new DataModel({pressure, temperature, humidity, date});
            await newData.save();
            response.status(201).json(newData);
        } catch (error) {
            console.error('Błąd podczas zapisywania danych: ', error);
            response.status(500).json({error: 'Wystąpił błąd podczas zapisywania danej'});
    
        }
    };
    
    
    private getData = async(request: Request, response: Response) => {
        try {
            const data = await DataModel.find();
            response.status(201).json(data);
        } catch(error) {
            console.error('Błąd podczas pobierania danych');
            response.status(500).json({error: 'Wystąpił błąd podczas pobierania danych'});
        }
    
    
    }
}


export default DataController;
