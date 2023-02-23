import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card  bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-green-600 font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Anauthor Day'}</p>
                <p>Available: {slots.length} {slots.length > 1 ? "spaces" : "space"}</p>
                <div className="card-actions justify-end">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="boking-modal"
                        className="btn btn-primary"
                        onClick={() => setTreatment(appointmentOption)}
                    >Boking Appointment</label>
                </div>
            </div>
        </div >
    );
};

export default AppointmentOption;