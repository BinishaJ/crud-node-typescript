import { Request, Response } from "express";
import UserModel from "../models/User";


const getAllUsers = async (req: Request, res: Response):Promise<any> => {
    try{
        let users = await UserModel.find();
        return res.send(users);
    }catch(error:any){
        return res.sendStatus(400);
    }
}

const createUser = async (req: Request, res: Response): Promise<any>=> {
    try{
        const {name, address} = req.body;
        if(!name)
            return res.status(400).send("Name is required!");
        if(!address)
            return res.status(400).send("Address is required!");

        const userExists = await UserModel.findOne({name});
        if(userExists)
            return res.status(400).send("User already exists");

        const user = new UserModel(req.body);
        await user.save();
        return res.status(201).send(user);
    } catch(error:any){
        return res.sendStatus(400);
    }
}

const getUser = async (req:Request, res:Response): Promise<any> => {
    try {
        const {name} = req.params;
        if(!name)
            return res.status(400).send("Name is required!");
        const userExists = await UserModel.findOne({name});
        if(!userExists)
            return res.status(404).send("User doesn't exist");
        return res.status(200).send(userExists);
    }catch(error:any){
        return res.sendStatus(400);
    }
}

const updateUser = async(req:Request, res:Response): Promise<any>=>{
    try{
        const {name} = req.params;
        if(!name)
            return res.status(400).send("Name is required!");
        await UserModel.updateOne({ name }, { $set: req.body });
        const updated = await UserModel.find({ name });
        return res.status(200).send(updated);
    }catch(error:any){
        return res.sendStatus(400);
    }
}

const deleteUser = async(req:Request, res:Response): Promise<any>=>{
    try{
        const {name} = req.params;
        if(!name)
            return res.status(400).send("Name is required!");
        const userExists = await UserModel.findOne({name});
        if(!userExists)
            return res.status(404).send("User doesn't exist");
        await UserModel.deleteOne({ name });
        return res.status(200).send("User deleted successfully!");
    }catch(error:any){
        return res.sendStatus(400);
    }
}

export {getAllUsers,createUser,getUser,updateUser, deleteUser}