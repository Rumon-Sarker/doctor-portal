import { format } from 'date-fns';
import React from 'react';

const BokingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, "PP");

    const handleBooking = event => {
        event.preventDefault();
        const from = event.target;
        const slot = from.slot.value;
        const name = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;

        const booking = {
            appoitmentDate: date,
            treatment: name,
            pataint: name,
            slot,
            email,
            phone,

        }

        // set tost data server 
        console.log(booking);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="boking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="boking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-green-600">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-7'>
                        <input type="text" placeholder={date} className="input  input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}
                                </option>)

                            }
                        </select>
                        <input name='name' type="text" placeholder="Your name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Your email" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder=" Your Phone Number " className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="input text-white bg-green-600 input-bordered w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BokingModal;
