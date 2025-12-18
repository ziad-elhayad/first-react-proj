import React, { useState } from 'react';
import StarDivider from '../StarDivider/StarDivider';
import FormInput from './FormInput';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    alert('Message sent! 💌');
    setFormData({ name: '', email: '', phone: '', age: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-white">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-700 mb-4">CONTACT SECTION</h2>
          <StarDivider colorClass="dark" />
        </div>

        <div className="space-y-8">
          <FormInput 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="userName"
          />

          <FormInput 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="userEmail"
          />

          <FormInput 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="userPhone"
          />

          <FormInput 
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="userAge"
          />

          <FormInput 
            type="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="userMessage"
          />

          <button
            onClick={handleSubmit}
            className="bg-teal-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-500 transition-colors shadow-md"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}