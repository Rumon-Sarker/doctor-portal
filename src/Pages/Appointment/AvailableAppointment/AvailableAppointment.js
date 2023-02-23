import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BokingModal from '../BokingModal/BokingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmetOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmetOptions(data))
    }, [])


    return (
        <section className='my-16 mx-4'>
            <p className='text-center font-bold text-green-300'>Your selected date:  {format(selectedDate, 'PP')}</p>
            <div className='grid mt-10 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }

            </div>
            {
                treatment &&
                <BokingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></BokingModal>
            }
        </section>
    );
};

export default AvailableAppointment;