import React from "react";
import { Banner, heroImage1 } from "../../utils";

const ContactUs = () => {
  return (
    <div
      className="grid grid-cols-6  grid-rows-3 mx-auto max-w-screen-xl px-8  py-16"
      id="contant-section"
    >
      <div className="col-span-6 row-span-2 flex items-center bg-blend-multiply h-32 object-cover" 
      style={{backgroundImage:`url(${Banner})`}}>
        <p className="text-8xl text-white">Contact Us</p></div>
      <div className="col-span-2 row-span-3 col-start-5 row-start-3 group  bg-white/20 backdrop-blur-sm">
        <img
          src={heroImage1}
          alt="logo"
          className=" object-cover 
            group-hover:drop-shadow-[0_3px_3px_rgba(199,87,224,0.8)] transition-transform 
            duration-500 ease-in-out transform "
        />
      </div>
      <div className="col-span-2 row-span-3 col-start-5 row-start-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58548.29511198467!2d87.69214374407845!3d23.486838535589012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9cef43bf77503%3A0x57e86383904410c7!2sGuskhara%2C%20West%20Bengal%20713128!5e0!3m2!1sen!2sin!4v1725402617941!5m2!1sen!2sin"
          className="w-full h-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="col-span-4 row-span-3 col-start-1 row-start-6">
        <form className="grid grid-cols-4 grid-rows-5 gap-2 py- bg-white/20 px-10">
          <div className="col-span-4 text-4xl  text-stone-300 my-auto">
            Leave a Reply
          </div>
          <div className="col-span-2 row-start-2 flex flex-col">
            <label htmlFor="name" className="text-white">Full Name</label>
            <input type="text" name="" id="" className="h-12 px-2"/>
          </div>
          <div className="col-span-2 col-start-3 row-start-2 flex flex-col">
            <label htmlFor="email" className="text-white">Email</label>
            <input type="text" name="" id="" className="h-12 px-2" />
          </div>
          <div className="col-span-4 row-span-2 row-start-3">
            <textarea name="message" id="" className="w-full h-full"></textarea>
          </div>
          <button className="col-span-2 col-start-2 row-start-5 btn-primary h-fit py-2 mt-4">Submit</button>
        </form>
      </div>
      <div className="col-start-1 row-start-3 grid place-content-center border-b-2">
        <p>Address</p>
      </div>
      <div className="col-span-3 col-start-2 row-start-3 border-b-2 grid place-content-center">
        <p>Guskhara West Bengal India 713128</p>
      </div>
      <div className="col-start-1 row-start-4  grid place-content-center border-b-2">
        <p>Get in Touch</p>
      </div>
      <div className="col-span-3 col-start-2 row-start-4  grid place-content-center border-b-2">
        <p className="flex gap-8">
          <span>+91 9832118794</span>
          <span>atanushil358@gmail.com</span>
        </p>
      </div>
      <div className="col-start-1 row-start-5  grid place-content-center border-b-2">
        <p>Hours</p>
      </div>
      <div className="col-span-3 col-start-2 row-start-5 grid grid-cols-2 grid-rows-3 px-16 border-b-2 py-2 ">
        <div>Mon to Fri :</div>
        <div>9:30 am - 6:00 pm</div>
        <div>Sat :</div>
        <div>10:00 am - 4:00 pm </div>
        <div>Sun :</div>
        <div>12:00 am - 4:00 pm </div>
      </div>
    </div>
  );
};

export default ContactUs;
