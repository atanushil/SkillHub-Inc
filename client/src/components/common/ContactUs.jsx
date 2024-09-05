import React from "react";
import { Banner, heroImage1 } from "../../utils";
import { SlCalender } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { RiHome3Line } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div className="max-w-screen-xl py-16  px-8 mx-auto " id="contact-section">
      {/* Banner Section */}
      <div
        className="sm:h-32 h-24 flex items-center bg-cover "
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <p className="sm:text-6xl text-4xl ml-5  text-gradient-heading caret-transparent opacity-100">Contact Us</p>
      </div>

      {/* Details and Image Section */}
      <div className="grid grid-cols-3  group">
        {/* Details */}
        <div className="lg:col-span-2 col-span-3   ">
          {/* Address Section */}
          <div className=" m-2 py-6 flex items-center border-b-2">
            <p className="sm:text-2xl text-xl  w-1/3 flex gap-2 items-center  text-gradient-heading">
            <RiHome3Line className="text-orange-400"/>
            Address</p>
            <p className="sm:text-lg text-sm  w-2/3 text-center sm:text-start  text-gradient-sub-heading">
              Guskara, West Bengal, India 713128
            </p>
          </div>

          {/* Contact Details Section */}
          <div className=" m-2 py-6 flex items-center border-b-2">
            <p className="sm:text-2xl gap-2 text-xl  text-gradient-heading whitespace-nowrap w-1/3 flex items-center">
            <IoCallOutline className="text-orange-400"/>
              Get in Touch
            </p>
            <p className="sm:text-lg text-sm  text-gradient-sub-heading w-2/3 text-center md:flex-row flex flex-col">
              <span className="mr-4">+91 9832118794</span>
              <span>atanushil358@gmail.com</span>
            </p>
          </div>

          {/* Hours of Operation Section */}
          <div className=" py-6 m-2 border-b-2  flex  items-center">
            <p className="sm:text-2xl text-xl  w-1/3 flex gap-2 items-center  text-gradient-heading">
            <SlCalender className="text-orange-400"/>
            Hours</p>
            <div className="sm:text-md text-sm  text-gradient-sub-heading  w-2/3 grid grid-cols-2 grid-rows-3 ">
              <div>Mon - Fri</div>
              <div> 10:00 AM - 6:00 PM</div>
              <div>Sat</div>
              <div>10:00 AM - 1:00 PM</div>
              <div>Sun</div>
              <div> Closed</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:flex items-center justify-center hidden">
          <img
            src={heroImage1}
            alt="Contact Us"
            className="w-full h-auto rounded-lg 
             group-hover:drop-shadow-[1px_3px_3px_rgba(0,0,255,0.8)]
            transition-transform duration-500 ease-in-out transform "
          />
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="grid grid-cols-3 lg:grid-rows-1 grid-rows-2 bg-slate/20">
        {/* Contact Form */}
        <div className="flex flex-col m-2 lg:col-span-2 col-span-3 lg:row-start-1">
          <p className="text-3xl   py-2 gotu-regular text-gradient-heading">Leave a Reply</p>
          <form className="space-y-2 text-center">
            {/* Full Name and Email in one line */}
            <div className="flex  text-start w-full ">
              <div className="flex flex-col  w-1/2 pr-2">
                <label htmlFor="name" className="text-lg text-gradient-heading">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="h-8 px-2 border rounded-md text-white bg-white/20"
                />
              </div>
              <div className="flex flex-col w-1/2 ">
              <label htmlFor="email" className="text-lg text-gradient-heading">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="h-8 px-2 border rounded-md text-white bg-white/20"
                />
              </div>
            </div>
            {/* Message Textarea */}
            <div className="flex flex-col">
              
              <textarea
                id="message"
                placeholder="Write the message"
                className="w-full text-white h-32 p-2 border rounded-md bg-white/20"
              />
            </div>
            {/* Submit Button */}
            <button className="btn-primary text-gradient-heading  w-1/3 py-2 text-2xl ">Submit</button>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex items-center justify-center col-span-3 row-start-1 lg:col-span-1 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14637.073176944346!2d87.73334364999998!3d23.486843949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9cef43bf77503%3A0x57e86383904410c7!2sGuskhara%2C%20West%20Bengal%20713128!5e0!3m2!1sen!2sin!4v1725471485084!5m2!1sen!2sin"
            className="w-full h-full "
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
