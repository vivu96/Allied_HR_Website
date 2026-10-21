"use client";

import { useState } from "react";

const EMAIL = "alliedhr@gmail.com";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input name="name" placeholder="Your Name" required value={form.name} onChange={onChange} />
      <input name="phone" placeholder="Phone Number" required value={form.phone} onChange={onChange} />
      <input name="email" type="email" placeholder="Email Address" required value={form.email} onChange={onChange} />
      <textarea name="message" rows={4} placeholder="How can we help you?" required value={form.message} onChange={onChange} />
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  );
}
