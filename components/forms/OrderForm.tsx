"use client";

import { FormEvent, useState } from "react";

const items = [
  { value: "cookies", label: "Decorated sugar cookies" },
  { value: "cake", label: "Custom cake" },
  { value: "wedding", label: "Wedding cake and favors" },
  { value: "table", label: "Dessert table" },
  { value: "corporate", label: "Corporate or logo order" },
  { value: "other", label: "Something else" },
];

export function OrderForm() {
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setStatus("Sending your request...");

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("Thanks for your order request. We'll be in touch within two business days.");
      form.reset();
      setFileName("");
    } catch {
      setStatus("We couldn't send your order request. Please call or email us instead.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="order-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label className="field">
          Name
          <input type="text" name="name" required placeholder="Your name" />
        </label>
        <label className="field">
          Email
          <input type="email" name="email" required placeholder="you@email.com" />
        </label>
        <label className="field">
          Event date
          <input type="date" name="date" required />
        </label>
        <label className="field">
          What are you ordering?
          <select name="item" defaultValue="cookies">
            {items.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="field">
        Quantity or guest count
        <input
          type="number"
          name="quantity"
          min={1}
          placeholder="For example, 48 cookies or 60 guests"
        />
      </label>

      <label className="field">
        Order details
        <textarea
          name="details"
          rows={4}
          placeholder="Tell us about your theme, colors, flavors, and pickup or delivery needs."
        />
      </label>

      <div className="file-block">
        <span className="file-label">Inspiration photo</span>
        <label className="file-drop">
          <span>
            {fileName || "Select a photo of what you have in mind, if you have one."}
          </span>
          <strong>Select photo</strong>
          <input
            type="file"
            name="inspiration"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setFileName(file.name);
            }}
          />
        </label>
      </div>

      <div className="form-actions">
        <button className="btn-gold" type="submit" disabled={sending}>
          Submit order request
        </button>
        <span className="form-status">{status}</span>
      </div>
    </form>
  );
}
