import React from "react";
import Swal from "sweetalert2";

const showContacts = () => {
  Swal.fire({
    title: "Connect with Us",
    html: `
      <div class="flex flex-col items-center">
        <a href="https://www.facebook.com/academicresearchpoint" target="_blank" rel="noopener noreferrer" class="flex items-center mb-3">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png?20210818083032" alt="Messenger" class="h-6 w-6 mr-2">
          <span class="text-primary">Facebook Page</span>
        </a>
        <a href="https://m.me/academicresearchpoint" target="_blank" rel="noopener noreferrer" class="flex items-center mb-3">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png?20210818083032" alt="Messenger" class="h-6 w-6 mr-2">
          <span class="text-primary">Facebook Messenger</span>
        </a>
        <a href="https://wa.me/+8801718409797" target="_blank" rel="noopener noreferrer" class="flex items-center mb-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="h-6 w-6 mr-2">
          <span class="text-green-500">WhatsApp</span>
        </a>
      </div>
    `,
    showConfirmButton: false,
    showCloseButton: true,
    customClass: {
      popup: "p-4 bg-white rounded-lg shadow-lg",
      title: "text-2xl font-bold text-primary mb-4",
    },
  });
};

const ContactUs = ({children}) => {
  return (
    <div className="btn btn-primary inline-flex items-center">
      {children}
      <button onClick={showContacts}>Contact Us</button>
    </div>
  );
};

export default ContactUs;
