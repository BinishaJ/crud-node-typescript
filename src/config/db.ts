import mongoose, {connect} from "mongoose";
import 'dotenv/config'

const connection = ():void => {
    connect(process.env.MONGO_URI||'')
    .then(():void=> {
        console.log("Connected to DB");
    })
    .catch((error:any):void=>{
        console.log("Error occured while connecting to DB")
    })
}

export default connection;