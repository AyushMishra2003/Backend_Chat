import { Router } from "express";
import { addUser, getUser } from "../controller/user.controller.js";


const userroute=Router()


userroute.post("/add",addUser)

userroute.get("/user",getUser)

export default userroute