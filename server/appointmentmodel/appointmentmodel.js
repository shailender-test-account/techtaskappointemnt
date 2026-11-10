import mongoose from "mongoose";


const Apointmentschema=new mongoose.Schema(
    {
        reqid:{
            type:String,
            unique:true,
            required:true

        },
         patientphone:{
            type:String,
            required:true,
            unique:true
         },

         doctorid:{
            type:String,
            required:true

         },

         slotTime:{
            type:Date,
            required:true
         }


    },
    {
        timestamps:true
    }
)

Apointmentschema.index({patientphone:1,createdAt:-1})


export const Appointmentmodel=mongoose.model("appointment",Apointmentschema)