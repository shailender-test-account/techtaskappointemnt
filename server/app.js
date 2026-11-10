import express from "express";
import router from "./routes/appointemntroutes.js";

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/appointments",router)
export default app; 