import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import useAxiosSuer from "../../hooks/useAxiosSuer";
import Swal from "sweetalert2";

const Contact = () => {
  const axiosSquer = useAxiosSuer();

  const handlePost = async (e) => {
    e.preventDefault();
    const formData = e.target;

    const newSMG = {
      name: formData.name.value,
      email: formData.email.value,
      satus: "pending",
      smg: formData.smg.value,
    };

    const res = await axiosSquer.post("/messages", newSMG);
    if (res?.data?.insertedId) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Message sened",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      formData.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Message failed to send",
      });
    }
  };

  return (
    <section className="py-20 my-2">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Fill out the
            form or reach us directly via contact info.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <motion.div
            className="md:w-2/3 my-bg p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={handlePost} className="space-y-4">
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="smg"
                  required
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="md:w-1/3 flex flex-col space-y-6 mt-6 text-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center space-x-4 text-white/80">
              <FaMapMarkerAlt className="text-blue-500 w-6 h-6 mt-1" />

              {/* <h4 className="font-semibold">Address</h4> */}
              <p>Dhaka, Gopalgonj City, Bangladesh</p>
            </div>
            <div className="flex items-center space-x-4 text-white/80">
              <FaPhone className="text-blue-500 w-6 h-6 mt-1" />

              <p>+88 01621-807642</p>
            </div>
            <div className="flex items-center space-x-4 text-white/80">
              <FaEnvelope className="text-blue-500 w-6 h-6 mt-1" />

              <p>ihaveawonderfull@gmail.com</p>
            </div>
          </motion.div>
        </div>

        {/* ChatNest Office Location */}
        <motion.div
          className="mt-12 w-full h-64 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps?q=Gopalganj%20Sadar%2C%20Gopalganj%2C%20Bangladesh&output=embed"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
            title="ChatNest Location - Gopalganj Sadar"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
