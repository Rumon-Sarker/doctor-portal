import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section>
            <div className="hero mt-20 bg-base-200" style={{
                backgroundImage: `url(${appointment})`,
                backgroundSize: 'cover'
            }}>
                <div className="hero min-h-screen ">
                    <div>
                        <div className="py-10 ">
                            <p className='flex justify-center text-2xl font-bold text-green-400'>Contuct Us</p>
                            <h1 className='flex justify-center text-3xl'>Stay Contect With Us</h1>
                        </div>
                        <div className="card flex-shrink-0 md:max-w-1xl w-screen md:w- max-w-2xl shadow-2xl bg-base-100">

                            <div className="card-body">

                                <div className="form-control">
                                    <input type="text" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Subject" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Message" className="input py-20 input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;