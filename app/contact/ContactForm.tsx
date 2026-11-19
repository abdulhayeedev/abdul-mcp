"use client";
import { useState } from "react";

const EMAIL = "inputabdul@gmail.com";
const WA = "447310679346";
const TOPICS = ["Just saying hi", "A question", "Collaboration", "Feedback", "Something else"];

export default function ContactForm() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [f, setF] = useState({ name: "", email: "", company: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const sendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `${topic} - message from ${f.name}`;
    const body =
      `Hi Abdul,\n\n${f.message}\n\n---\nName: ${f.name}\nEmail: ${f.email}` +
      (f.company ? `\nCompany: ${f.company}` : "") +
      `\nWriting about: ${topic}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const sendWhatsApp = () => {
    const text = `Hi Abdul, ${f.name ? "I'm " + f.name + ". " : ""}${f.message || "I found your portfolio and wanted to get in touch."}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="ct-form reveal" onSubmit={sendMail}>
      <div className="ct-head">
        <span>SEND A MESSAGE</span>
        <span>Fastest way to reach me. * required.</span>
      </div>

      <div className="ct-row">
        <label className="ct-field">
          <span>NAME *</span>
          <input required value={f.name} onChange={set("name")} placeholder="Ada Lovelace" autoComplete="name" />
        </label>
        <label className="ct-field">
          <span>EMAIL *</span>
          <input required type="email" value={f.email} onChange={set("email")} placeholder="ada@company.com" autoComplete="email" />
        </label>
      </div>

      <label className="ct-field">
        <span>COMPANY</span>
        <input value={f.company} onChange={set("company")} placeholder="Optional" autoComplete="organization" />
      </label>

      <div className="ct-field">
        <span>I&apos;M WRITING ABOUT</span>
        <div className="ct-chips" role="group" aria-label="Topic">
          {TOPICS.map((t) => (
            <button
              type="button"
              key={t}
              className={"ct-chip" + (t === topic ? " on" : "")}
              aria-pressed={t === topic}
              onClick={() => setTopic(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <label className="ct-field">
        <span>MESSAGE *</span>
        <textarea required rows={5} value={f.message} onChange={set("message")} placeholder="What would you like to ask or talk about?" />
      </label>

      <div className="ct-actions">
        <button type="submit" className="btn solid">Send message &rarr;</button>
        <button type="button" className="btn" onClick={sendWhatsApp}>Send on WhatsApp &#8599;</button>
      </div>
      <p className="ct-note">Sending opens your email app with the message ready to go. Nothing is stored on this site.</p>
    </form>
  );
}
