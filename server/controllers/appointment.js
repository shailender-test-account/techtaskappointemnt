import { Appointmentmodel } from "../appointmentmodel/appointmentmodel.js";

export const Bookingcontroller = async (req,res) => {
    try {
        const { reqid, patientphone, doctorid, slotTime } = req.body;
        if (!patientphone || !reqid || !doctorid || !slotTime) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }

        const existingappointemnt = await Appointmentmodel.findOne({reqid,doctorid,slotTime})
        if (existingappointemnt) {
            return res.status(200).json(
                {
                    message: "Booking with this timeSlot with doctor already exists",
                    success: false
                }
            )
        }


        const newappointment = await Appointmentmodel.create(
            {
              reqid, patientphone, doctorid, slotTime

            }
        )

        return res.status(200).json(
            {
                message: "Appointment booked successfully",
                success: true,
                appointment: newappointment
            }
        )



    } catch (error) {
        console.error('Booking error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error while booking appointment.'
        });

    }

}