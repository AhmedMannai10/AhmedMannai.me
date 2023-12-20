'use client'
import { useRef, useState } from "react";
import reCAPTCHA, { ReCAPTCHA } from "react-google-recaptcha";
import { sendEmail } from "../sendEmail";

export default function HireMe() {
  const recaptcha = useRef();
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [messageSent, setMesssageSent] = useState(false);


  function connectHandler(e) {
    e.preventDefault();
    const value = e.target;

    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      alert("Please verify the recaptcha!");
    }

    console.log(email, firstName, lastName, subject, message);
    try {
      sendEmail({
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message,
      })
      setMesssageSent(true);

    } catch (err) {
      alert(err);
    }
  }

  return (
    <main
      itemScope
      itemType=''
      className='flex flex-col  mt-10 mx-auto w-full max-w-7xl justify-center items-center p-2 sm:p-6 relative prose '
    >

      <section className="flex flex-col justify-center gap-6 h-fit w-full max-w-3xl">

        <h1 className=" font-extrabold  uppercase dark:text-dark_h_color ">Get In Touch</h1>
        <form onSubmit={connectHandler} className="  flex flex-col justify-center gap-6 h-fit w-full" >
          <div className="flex w-full justify-between gap-4 items-center">
            <div className="w-full">
              <label htmlFor="firstName" className="block mb-2 text-sm dark:text-dark_text_color font-medium" aria-required>First Name</label>
              <input type="text" name="firstName" placeholder="FirstName" onChange={(event) => setFirstName(event.target.value)} required />
            </div>
            <div className="w-full">
              <label htmlFor="lastName" className="block mb-2 text-sm dark:text-dark_text_color font-medium">Last Name</label>
              <input type="text" name="lastName" placeholder="LastName" onChange={(event) => setLastName(event.target.value)} required />
            </div>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm dark:text-dark_text_color font-medium">Your Email</label>
            <input type="email" name="email" placeholder="abc@example.com" onChange={(event) => setEmail(event.target.value)} required />
          </div>
          <div className="w-full">
            <label htmlFor="subject" className="block mb-2 text-sm dark:text-dark_text_color  font-medium">Subject</label>
            <input type="subject" name="subject" placeholder="The subject to talk about" onChange={(event) => setSubject(event.target.value)} required />
          </div>
          <div className="w-full">
            <label htmlFor="message" className="block mb-2 text-sm dark:text-dark_text_color font-medium">Your message</label>
            <textarea id="message" rows="6" placeholder="Hi there..." onChange={(event) => setMessage(event.target.value)} required />
          </div>
          <div className="w-full">
            <ReCAPTCHA ref={recaptcha} sitekey={process.env.NEXT_PUBLIC_APP_SITE_KEY} className="mx-auto h-fit w-fit" />
          </div>
          <button disabled={messageSent} type="submit" className="cursor-pointe flex 
            border-bg-bg_btn  dark:text-dark_primary disabled:hidden
            hover:bg-opacity-90 dark:bg-[#ededed] border-2  border-dark_primary 
            dark:border-primary text-white bg-dark_secondary 
            text-2xl rounded-xl w-fit
            h-14 justify-center items-center duration-300 
            px-5 cursor-pointer"
          >
            Send Message
          </button>
        </form>
        {messageSent && <p className="block mb-2 text-xl dark:text-dark_h_color text-h_color font-medium">
          Thanks so much for getting in touch! I've received your message and will be in touch soon. 😊
        </p>}
      </section>
    </main>
  );
}
