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
    <div className="flex justify-center items-center min-h-screen m-10 ">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl text-red-600 font-bold mb-6 text-center">
          Contact Us
        </h2>

        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 text-sm border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your Name"
          required
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 text-sm border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your Email"
          required
        />

        <label className="block mb-2 font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-4 text-sm border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your Phone"
          required
        />

        <label className="block mb-2 font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 text-sm border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your Message here..."
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
