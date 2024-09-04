import React from "react";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-7 grid-rows-7 gap-4 max-w-screen-lg bg-red-400">
      <div className="col-span-7">1</div>
      <div className="col-span-4 row-span-3 row-start-2">2</div>
      <div className="col-span-4 row-span-3 col-start-1 row-start-5">3</div>
      <div className="col-span-3 row-span-3 col-start-5 row-start-2">4</div>
      <div className="col-span-3 row-span-3 col-start-5 row-start-5">5</div>
    </div>
  );
};

export default ContactUs;
