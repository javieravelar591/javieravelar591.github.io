import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Element } from "react-scroll";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4hvxurc", "template_om51vmm", form.current,"Oc-N6TPU7klPTX7TF",)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        },
        );
    };

    return (
        <Element name="contact">
            <section className="contact">
                <div id="contact">
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
            </section>
        </Element>
    );
};

export default Contact;
