import { use } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import useAxiosSuer from "../../hooks/useAxiosSuer";

const Register = () => {
  const { createUser, updateUserProfile, userEmailVerify } = use(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const axiosSquer = useAxiosSuer();
  // console.log(axiosSquer);

  const onSubmit = async (data) => {
    try {
      if (!data?.photo?.length) {
        return toast.error("Please select an image");
      }

      const imageFile = data.photo[0];
      const IMAGEBB_SDK = import.meta.env.VITE_IMAGEBB_SDK;

      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${IMAGEBB_SDK}`,
        formData
      );

      const photoURL = res.data.data.url;

      if (!photoURL) {
        return toast.error("Image upload failed!");
      }

      // console.log("Image URL:", photoURL);

      await createUser(data.email, data.confirmPassword);
      await updateUserProfile(data.name, photoURL);
      userEmailVerify();
      navigate("/");

      window.location.reload()

      const newUser = {
        name: data?.name,
        email: data?.email,
        photo: photoURL,
      };

      await axiosSquer.post(`/users`, newUser);


      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Signup failed!");
    }
  };

  const password = watch("password", "");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="my-bg border border-white/30 p-10 rounded-2xl shadow-xl w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-300 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "focus:ring-red-500 border-red-500"
                  : "focus:ring-blue-500 border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* photo url */}
          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Photo URL
            </label>
            <input
              type="file"
              accept="image"
              {...register("photo", { required: "Photo is required" })}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.photo
                  ? "focus:ring-red-500 border-red-500"
                  : "focus:ring-blue-500 border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300  font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "focus:ring-red-500 border-red-500"
                  : "focus:ring-blue-500 border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.password
                  ? "focus:ring-red-500 border-red-500"
                  : "focus:ring-blue-500 border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.confirmPassword
                  ? "focus:ring-red-500 border-red-500"
                  : "focus:ring-blue-500 border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-blue-500 font-semibold cursor-pointer hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
