"use client";

import { addMessage } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

export default function ContactFrom() {
  const [state, formAction] = useFormState(addMessage, undefined);
  const [modal, setModal] = useState(false);
  console.log(state);
  useEffect(() => {
    state?.success && (
      setModal(true)
    );
    setTimeout(() => { setModal(false) }, 2000)
  }, [state?.success]);


  return (
    <div className="max-w-[700px] m-5">
      <form action={formAction} className="formInput  ">
        <input type="text" name="name" placeholder="Full Name*" />
        <input type="email" name="email" placeholder="Email Address*" />
        <input type="text" name="subject" placeholder="Subject*" />
        <textarea
          rows="4"
          cols="50"
          type="text"
          name="message"
          placeholder="Message*"
        />
        <div className="text-red-500 block w-full h-5">{state?.error}</div>
        <button className="btn2 " type="submit">Send Message</button>
      </form>

      {
        modal && (
          <div className="fixed top-[40%] left-[40%] border-solid drop-shadow-lg text-4xl p-11">
            <h1>Thank You</h1>
            <h1>We are response soon......</h1>
          </div>
        )
      }
    </div>
  );
}
