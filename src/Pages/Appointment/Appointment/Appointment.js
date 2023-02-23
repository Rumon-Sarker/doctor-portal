import React, { useState } from 'react';
import AppointmentBaner from '../AppointmentBanner/AppointmentBaner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBaner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}

            ></AppointmentBaner>

            <AvailableAppointment
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}

            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;