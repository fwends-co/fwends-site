"use client";

import { useId, useState, type FormEvent } from "react";
import { isValidEmail, submitWaitlist } from "@/lib/waitlist";

type Status = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm({ className = "" }: { className?: string }) {
  const id = useId();
  const inputId = `${id}-email`;
  const messageId = `${id}-message`;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();

    if (!isValidEmail(value)) {
      setStatus("error");
      setMessage("Enter a valid email address, like name@example.com.");
      return;
    }

    setStatus("submitting");
    setMessage("");
    try {
      const result = await submitWaitlist(value);
      if (result.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setMessage(result.error);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className={className} role="status">
        <p className="t-body-strong text-heading">You&rsquo;re on the list.</p>
        <p className="mt-1">We&rsquo;ll email you once, when FWENDS opens.</p>
      </div>
    );
  }

  const invalid = status === "error";

  return (
    <form onSubmit={onSubmit} noValidate className={className}>
      <label htmlFor={inputId} className="t-caption mb-2 block font-semibold text-heading">
        Email
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={inputId}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={invalid}
          aria-describedby={messageId}
          className="field"
        />
        <button type="submit" className="btn t-button" disabled={status === "submitting"}>
          {status === "submitting" ? "Joining" : "Join waitlist"}
        </button>
      </div>
      <p id={messageId} role={invalid ? "alert" : undefined} className="t-caption mt-3 min-h-5">
        {invalid ? message : "One email when we open. Nothing else."}
      </p>
    </form>
  );
}
