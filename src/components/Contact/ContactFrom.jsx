"use client";

import { addMessage } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";

export default function ContactFrom() {
  const [state, formAction] = useFormState(addMessage, undefined);

  useEffect(() => {
    state?.success && (
      <div>
        <h1>Thank You</h1>
        <h1>We are response soon......</h1>
      </div>
    );
  }, [state?.success]);

  return (
    <div className="">
      <form action={formAction} className="flex flex-col">
        <input type="text" name="name" placeholder="Full Name" />
        <input type="email" name="email" placeholder="Email Address" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea
          rows="4"
          cols="50"
          type="text"
          name="message"
          placeholder="message"
        />
        <input type="submit" value="Send Message" />
      </form>
      <div>{state?.error}</div>
    </div>
  );
}
