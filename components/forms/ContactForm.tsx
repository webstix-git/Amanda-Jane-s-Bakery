"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setStatus("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("Thanks for your message. We'll be in touch within two business days.");
      form.reset();
    } catch {
      setStatus("We couldn't send your message. Please call or email us instead.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="order-form" onSubmit={onSubmit}>
      <label className="field">
        Name
        <input type="text" name="name" required placeholder="Your name" />
      </label>

      <label className="field">
        Phone
        <input type="tel" name="phone" required placeholder="269-281-7143" />
      </label>

      <label className="field">
        Email
        <input type="email" name="email" required placeholder="you@email.com" />
      </label>

      <label className="field">
        How can we help?
        <textarea
          name="details"
          rows={5}
          placeholder="Share your question or tell us what you're planning."
        />
      </label>

      <div className="form-actions">
        <button className="btn-gold" type="submit" disabled={sending}>
          Send message
        </button>
        <span className="form-status">{status}</span>
      </div>
    </form>
  );
}
