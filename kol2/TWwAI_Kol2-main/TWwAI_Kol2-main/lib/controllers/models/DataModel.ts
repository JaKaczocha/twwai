import mongoose, { Schema, Document } from 'mongoose';

interface IData extends Document {
    pressure: string;
    temperature: string;
    humidity: string;
    date: string;
}

const DataSchema: Schema = new Schema({
    pressure: { type: String, required: true },
    temperature: { type: String, required: true },
    humidity: { type: String, required: true },
    date: { type: String, required: true },
});

const DataModel = mongoose.model<IData>('paramsJK', DataSchema);

export default DataModel;
