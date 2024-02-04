"use client";
import { useRef, useState } from "react";
import reCAPTCHA, { ReCAPTCHA } from "react-google-recaptcha";
import { sendEmail } from "../sendEmail";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const recaptcha = useRef();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMesssageSent] = useState(false);

  function connectHandler(e) {
    e.preventDefault();
    const value = e.target;

    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      alert("Please verify the recaptcha!");
    }

    try {
      sendEmail({
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message,
      });
      setMesssageSent(true);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <main className="flex flex-col container  mt-10 mx-auto w-full max-w-7xl justify-center items-center p-2 sm:p-6 relative  ">
      <section className="flex flex-col justify-center gap-6 h-fit w-full max-w-3xl">
        <h1 className=" font-extrabold  uppercase  ">Get In Touch</h1>
        <form
          onSubmit={connectHandler}
          className="  flex flex-col justify-center gap-6 h-fit w-full"
        >
          <div className="flex w-full justify-between gap-4 items-center">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm  font-medium"
                aria-required
              >
                First Name
              </label>
              <Input
                type="text"
                name="firstName"
                placeholder="FirstName"
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm  font-medium"
              >
                Last Name
              </label>
              <Input
                type="text"
                name="lastName"
                placeholder="LastName"
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <Input
              type="email"
              name="email"
              placeholder="abc@example.com"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm  font-medium"
            >
              Subject
            </label>
            <Input
              type="subject"
              name="subject"
              placeholder="The subject to talk about"
              onChange={(event) => setSubject(event.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="message"
              className="block mb-2 text-sm  font-medium"
            >
              Your message
            </label>
            <Textarea
              id="message"
              rows="6"
              placeholder="Hi there..."
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <ReCAPTCHA
              ref={recaptcha}
              sitekey={process.env.NEXT_PUBLIC_APP_SITE_KEY}
              className="mx-auto h-fit w-fit"
            />
          </div>
          <Button disabled={messageSent} type="submit">
            Send Message
          </Button>
        </form>
        {messageSent && (
          <p className="block mb-2 text-xl dark:text-dark_h_color text-h_color font-medium">
            Thanks so much for getting in touch! I have received your message
            and will be in touch soon. 😊
          </p>
        )}
      </section>
    </main>
  );
}
