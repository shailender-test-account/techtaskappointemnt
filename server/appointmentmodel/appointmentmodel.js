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

Apointmentschema.index({ doctorid: 1, slotTime: 1 }, { unique: true });


export const Appointmentmodel=mongoose.model("appointment",Apointmentschema)