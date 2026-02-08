import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message Sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 pt-20 px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg"
      >
        <h2 className="text-2xl sm:text-3xl text-red-600 font-bold mb-6 text-center">
          Contact Us
        </h2>

        <label className="block mb-2 font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 mb-4 text-sm sm:text-base border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <label className="block mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 mb-4 text-sm sm:text-base border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <label className="block mb-2 font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          required
          className="w-full p-3 mb-4 text-sm sm:text-base border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <label className="block mb-2 font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message here..."
          rows="4"
          required
          className="w-full p-3 mb-4 text-sm sm:text-base border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-red-700 text-white py-3 sm:py-4 rounded-lg hover:bg-red-600 transition font-medium text-sm sm:text-base"
        >
          Send
        </button>
      </form>
    </div>
  );
}
