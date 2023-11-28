import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document {
    name: string;
    address: string;
}

interface User {
    name: string;
    address: string
}

const UserSchema = new Schema<User>({
    name: {
        type:String,
        required: true
    },
    address: {
        type:String,
        required: true
    }
})

const UserModel = model<User>('User',UserSchema);

export default UserModel;