import  {useRef} from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from '@emailjs/browser'
import react from 'react'



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_co4io0r', 'template_kvcf92b', form.current, '6QIm8CYQ6eSENs3W4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
      <article className="contact__option">
        <MdEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>rishantdas2003@gmail.com</h5>
        <a href="mailto:rishantdas2003@gmail.com" target='_blank'>Send a Message</a>
      </article>
      <article className="contact__option">
        <RiMessengerFill className='contact__option-icon'/>
        <h4>Messesnger</h4>
        <h5>rishantdas</h5>
        <a href="https://m.me//rishant.das.9" target='_blank'>Send a Message</a>
      </article>
      <article className="contact__option">
        <IoLogoWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>Drop a Text</h5>
        <a href="https://api.whatsapp.com/send?phone=7086844057" target='_blank'>Send a Message</a>
      </article>
      </div>
      <form  ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email'placeholder='Your Email' required/>
        <textarea name="message"  rows="7"placeholder='Your Message'></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact
