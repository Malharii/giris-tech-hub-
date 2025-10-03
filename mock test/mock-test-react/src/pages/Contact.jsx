import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🚀 Thanks for reaching out! I’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100 p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
        📬 Contact Me
      </h1>
      <p className="text-base text-gray-700 mb-6 max-w-md text-center">
        Have a question, idea, Fill out this quick form, I’ll reply soon! ✨
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md transition-transform transform hover:scale-105"
      >
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-1 text-sm">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-1 text-sm">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-1 text-sm">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full px-3 py-2 border rounded-lg text-sm h-24 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-lg shadow-md hover:from-pink-500 hover:to-yellow-400 transition-all duration-300 text-sm"
        >
          🚀 Send
        </button>
      </form>

      <div className="mt-6 text-gray-700 text-center text-sm">
        <p>
          📞 Phone: <span className="font-semibold">+91 98765 43210</span>
        </p>
        <p>
          📧 Email: <span className="font-semibold">yourmail@example.com</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
