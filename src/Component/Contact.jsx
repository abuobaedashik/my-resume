import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_j6334sl", "template_07qaumb", form.current, {
        publicKey: "jmuhkAlJJzBd2ZqeO",
      })
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className=" py-20 text-white" id="contact">
      <div className="w-11/12 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="flex flex-col sm:flex-row gap-12">
          {/* Contact Form */}
          <div className="sm:w-1/2 w-full bg-[#131313] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 w-full py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Send Message <FaRegPaperPlane className="text-xl" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="sm:w-1/2 w-full space-y-4 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold">Let’s build something great!</h3>
            <p className="text-gray-300">
              Whether you have a question, a project idea, or just want to say hello — I’d love to hear from you.
            </p>

            <div className="flex items-center gap-3 text-lg">
              <MdLocationOn className="text-pink-500 text-2xl" />
              <span className="text-gray-300">Mohammadpur, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MdPhone className="text-pink-500 text-2xl" />
              <span className="text-gray-300">+880 1765 262296</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MdEmail className="text-pink-500 text-2xl" />
              <span className="text-gray-300">abuobaedashik@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
