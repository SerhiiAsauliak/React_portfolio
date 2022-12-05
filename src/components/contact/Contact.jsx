import React, { useRef } from 'react';
import './contact.css'
import emailjs from 'emailjs-com';
import {MdOutlineEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4kh0x9g', 'template_rin2hem', form.current, 'EW4zs70LC0X3hnAIW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-image'/>
            <h4>Email</h4>
            <h5>mel.gipppson@gmail.com</h5>
            <a href="mailto:mel.gipppson@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-image'/>
            <h4>WhatsApp</h4>
            <h5>+380123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=380662292011" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
