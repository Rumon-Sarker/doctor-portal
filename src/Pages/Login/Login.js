import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const Login = () => {
    const { register, handleSubmit } = useForm();
    const handlaLogin = data => console.log(data);


    return (
        <div className='h-[800px] bg-gray-800 flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-4xl my-4 text-center font-bold '>Login</h2>
                <form onSubmit={handleSubmit(handlaLogin)}>
                    <div className="form-control w-full max-w-sm ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="email" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full max-w-sm">
                        <label className="label">
                            <span className="label-text max-w-sm">Password</span>
                        </label>
                        <input {...register("password")} type="password" className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text max-w-sm">Forget Password</span>
                        </label>
                    </div>

                    <input className='btn w-full max-w-sm' value='Login' type="submit" />
                    <p>You have don't account <Link className='text-green-400' to='/register'>Register</Link></p>
                </form>
                <div className="divider text-red-200">OR</div>
                <button className='btn btn-outline w-full font-bold text-red-200'>GOOGLE WITH LOGIN</button>
            </div>
        </div>
    );
};

export default Login;