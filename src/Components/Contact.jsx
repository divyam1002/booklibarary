import React from "react";

function Contact() {
  return (
    <div className="w-[90%] mx-auto p-6 my-10 rounded-2xl bg-[#F8FAFC] shadow-lg text-[#1E293B]">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

      <p className="mb-4">
        We’d love to hear from you! Whether you have a question, feedback, or
        need assistance, feel free to reach out. Our team is always ready to
        help you with book recommendations, technical support, or any inquiries
        related to BookHub.
      </p>

      <ul className="mb-4 space-y-1 font-medium">
        <li>📧 Email: ---------</li>
        <li>📞 Phone: ---------</li>
        <li>🌍 Website: ---------</li>
        <li>📍 Address: ---------</li>
      </ul>

      <p className="mb-2">
        Stay connected with us on social media for the latest book trends,
        recommendations, and updates!
      </p>

      <ul className="space-y-1 font-medium">
        <li>📘 Facebook: ---------</li>
        <li>📷 Instagram: ---------</li>
        <li>🐦 Twitter/X: ---------</li>
      </ul>

      <p className="mt-4">We look forward to assisting you! Happy Reading!</p>
      <p className="font-semibold mt-1">– The BookHub Team</p>
    </div>
  );
}

export default Contact;
