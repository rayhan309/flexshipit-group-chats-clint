import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const {sigInUser} = use(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const loacation = useLocation();
    const navigate = useNavigate();
    console.log(loacation)

    const onSubmit = (data) => {
        // console.log("Form Data:", data);
        sigInUser(data?.email, data?.password).then(() => {
            toast.success(`Welcome back!`);
            navigate(loacation.state);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="min-h-screen flex justify-center py-10">
            <motion.div
                className="bg-white/20 p-10 rounded-2xl shadow-xl w-full max-w-md border border-white/50"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
                    Login to ChatNest
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-300 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required" })}
                            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                                errors.email ? "focus:ring-red-500 border-red-500" : "focus:ring-blue-500 border-gray-300"
                            }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-300 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                                errors.password ? "focus:ring-red-500 border-red-500" : "focus:ring-blue-500 border-gray-300"
                            }`}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Additional Links */}
                <div className="mt-4 text-center">
                    <p className="text-gray-500 text-sm">
                        Don't have an account? <Link to={'/register'} className="text-blue-500 font-semibold cursor-pointer hover:underline">Sign Up</Link>
                    </p>
                    <p className="text-gray-500 text-sm mt-2 cursor-pointer hover:underline">
                        Forgot Password?
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
