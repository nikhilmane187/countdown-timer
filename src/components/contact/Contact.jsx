import React from 'react'
import './contact.css'
import { MdMarkEmailUnread } from 'react-icons/md'
import { MdMessage } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hcrhb4g', 'template_qmy1ra3', form.current, '6eMNd11171tBBxOw_')
     
  };
 

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailUnread />
            <h4>Email</h4>

            <h5>nikhilmane187@gmail.com</h5>
            <a href="mailto:nikhilmane187@gmail.com">Send a Email</a>
          </article>
          <article className="contact__option">
            <MdMessage />
            <h4>LinkedIn</h4>

            <h5>Nikhil Mane</h5>
            <a href="https://www.linkedin.com/in/nikhil-mane-a7a09420a" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <FiPhoneCall />
            <h4>Contact</h4>

            <h5>+91 8830556319</h5>
            <a href="#Contact">Call Us</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}  >
          <input type="text" name='name' placeholder='Your First Name' required />
          <input type="text" name='email' placeholder='Enter Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
        

      </div>
    </section>
  )
}

export default Contact