import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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
    <div>
      <div className="mx-auto w-11/12 text-[#ffffff]">
        <div className="text-5xl font-bold mb-16 text-center">Contact</div>
        <div className="mt-5 flex items-center justify-between sm:flex-row flex-col gap-4">
          {/* email */}
          <div className="email text-base text-[#131313] sm:w-[45%]">

            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-[2px] rounded-xl">
                <div className="bg-[#0a0213] p-6  rounded-xl">
                  <h2 className="text-white text-xl font-semibold mb-4">
                    Contact Us
                  </h2>

                  <form ref={form} onSubmit={sendEmail} className="space-y-2">
                    <div>
                      <label className="text-gray-300 block mb-1">Name</label>
                      <input
                        type="name"
                        placeholder="Enter your Name"
                        name="user_name"
                        className="w-full bg-black text-white p-3  rounded-lg border-none outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 block mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        name="user_email" 
                        className="w-full bg-black text-white p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>

                    <div>
                      <label className="text-gray-300 block mb-1">
                        Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        placeholder="Enter your message"
                        className="w-full bg-black text-white p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>

                    <button className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-3 rounded-lg font-semibold shadow-lg hover:opacity-80 transition">
                      Send <span className="ml-2">🚀</span>
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
          {/* contact info */}
          <div className="email text-base space-y-2 sm:w-[45%]">
            <div className="text-xl font-bold">
              Let's Create Something Amazing Together!
            </div>
            <div className="text-base font-normal ">
              Thanks for stopping by! If you have any questions, ideas, or
              simply want to collaborate, feel free to reach out. Use the
              contact details below or fill out the quick form to send me a
              message directly. I'm excited to connect and create something
              amazing together!
            </div>
            <div className="text-lg font-normal ">contact</div>
            <div className="text-lg font-normal ">
              Mohammadpur, Dhaka , Bangladesh
            </div>
            <div className="text-lg font-normal ">phone: +8801765262296</div>
            <div className="text-lg font-normal ">
              email: abuobaedashik@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
