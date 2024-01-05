import React from "react";
import "./contact.css";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Element } from "react-scroll";

export const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4hvxurc", "template_om51vmm", form.current,"Oc-N6TPU7klPTX7TF",)
        .then((result) => {
            console.log(result.text);
            setEmailSent(true);
        })
        .catch((error) => {
            console.log(error.text);
        });
    };

    return (
        <Element name="contact">
            <section className="contact">
                <div id="contact">
                    {emailSent ? (
                        <div className="email-sent-message">
                            Thank you for taking the time to contact me!<br/>
                            I'll be in touch shortly! &#x1F604;
                        </div> 
                    ) : (
                        <div>
                            <h1 className="contact-header">Let's Work Together!</h1>
                            <span className="description">
                                Please fill out form to discuss work opportunities.
                            </span>
                            <form className="contact-form" ref={ form } onSubmit={sendEmail}>
                                <input type="text" className="name" placeholder="Full Name" name="your_name" />
                                <input type="email" className="email" placeholder="Your email" name="your_email" />
                                <textarea className="message" rows="5" placeholder="Your message" name="message"/>
                                <button type="submit" value="Send" className="submit-btn">
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        </Element>
    );
};

export default Contact;
