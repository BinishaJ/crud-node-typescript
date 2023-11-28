import express, {Request,Response} from "express";
import UsersRoute from "./routes/users";
import connection from "./config/db";
import 'dotenv/config'

const app = express();
const PORT:string|number = process.env.PORT || 3000;


app.use(express.json());

app.get('/test',(req:Request,res:Response):void=>{
    res.json({message: "test"})
})

app.use('/api/users',UsersRoute)

connection();

app.listen(PORT, ():void => {
    console.log(`Listening to port ${PORT}`);
})