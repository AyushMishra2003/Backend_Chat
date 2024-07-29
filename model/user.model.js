import { model, Schema } from "mongoose";


const userSchema=new Schema(
    {
         username:{
            type:String
         }
    },
    {
          timestamps:true
    }
)

const User=model("chat_user_alls",userSchema)


export default User