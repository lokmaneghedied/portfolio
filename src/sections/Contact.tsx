//styles
import { styles } from "../style";
//icons
import { AiOutlinePhone , AiOutlineWhatsApp } from "react-icons/ai";
import {FaGithub , FaLinkedinIn } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
//UseState
import { useState } from "react";

const Contact = () => {

    const [email , setEmail] = useState('')
    const [subject , setSubject] = useState('')
    const [message , setMessage] = useState('')

    const openPhone = ():void =>{
        if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
          window.location.href = "tel:+213672132633";
        }
      }

    const openMaps= ():void => {
        window.open("https://www.google.com/maps/place/Jijel+Province/@36.7270623,5.3041575,9z/data=!3m1!4b1!4m6!3m5!1s0x12f2469374b8be63:0x13bd084ff97ca4da!8m2!3d36.7179681!4d5.9832577!16zL20vMDU0MGhm")
      }

    const sendMail= (e : any) => {
      e.preventDefault();
      console.log(email, subject , message)
    }

    return ( 
        <section id='contact' className="h-full lg:h-screen w-full flex flex-col lg:flex-row items-center space-y-4 my-4 lg:my-0">
            {/* TEXT */}
            <div className="w-11/12 lg:w-1/3 h-1/3 lg:h-4/5 flex-1 flex flex-col items-start justify-around lg:mx-6 space-y-3 lg:space-y-0">
                {/* TITLE */}
                <div className="space-y-3">
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-accent'>Get in touch</h1>
                    <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl'><span>—</span> I am always looking for exciting projects.</h2>
                    <p className='text-base md:text-lg lg:text-xl text-slate-300'>Fill in the form or just use my contacts below</p>
                </div>
                {/* SOCIAL */}
                <div className="space-y-2">
                    <span className="flex justify-start items-center space-x-2 px-3">
                        <a href="https://www.linkedin.com/in/lokmane-ghedied/" target='_blank'>
                            <FaLinkedinIn className="w-6 h-6"/>
                        </a>
                        <a href="https://github.com/lokmaneghedied" target='_blank'>
                            <FaGithub  className="w-6 h-6 "/>
                        </a>
                        <a href="https://wa.me/qr/OAEK2373L7XIH1" target='_blank'>
                            <AiOutlineWhatsApp  className="w-6 h-6 "/>
                        </a>
                        <CiLocationOn onClick={openMaps} className="w-6 h-6 "/>
                        <AiOutlinePhone onClick={openPhone} className="w-6 h-6 "/>
                    </span>
                </div>
            </div>
            {/* FORM */}
            <form onSubmit={sendMail} className="border rounded-2xl pb-24 p-6 lg:mx-6 w-11/12 lg:w-auto flex-1 flex flex-col gap-y-6">
                <input 
                    type="email"
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)} 
                    placeholder="Your Email *" 
                    className="bg-transparent outline-none transition-all w-full border-b focus:border-accent placeholder:text-white py-3"  required/>
                <input 
                    type="text"
                    value={subject} 
                    onChange={(e)=> setSubject(e.target.value)} 
                    placeholder="Your Subject"  
                    className="bg-transparent outline-none transition-all w-full border-b focus:border-accent placeholder:text-white py-3" 
                    />
                <textarea
                    value={message} 
                    onChange={(e)=> setMessage(e.target.value)}  
                    placeholder="Your Message *"
                    className="bg-transparent outline-none transition-all w-full border-b focus:border-accent placeholder:text-white py-10 resize-none"  required></textarea>
                <button className={`w-fit ${styles.gradient_btn}`}>Send message</button>
            </form>
        </section>
     );
}
 
export default Contact;