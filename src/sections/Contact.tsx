//styles
import { styles } from "../style";
//UseState
import { useState } from "react";
//motions
import { motion , useScroll } from "framer-motion";
// fadeIn
import { fadeIn } from '../constants';

const Contact = () => {

    const [email , setEmail] = useState('')
    const [subject , setSubject] = useState('')
    const [message , setMessage] = useState('')
    const [validEmail, setValidEmail] = useState(true)
    const [validMessage, setValidMessage ] = useState(true)
    

    
    const checkEmail= () =>{
        const regex = /^\w+([\.-]?\w+)*@gmail\.com$/
        if(regex.test(email)){
            setValidEmail(true)
        }else{setValidEmail(false)}
        
    }

    const checkMessage=()=>{
        if(message === ''){
            setValidMessage(false)
        }else{
            setValidMessage(true)
        }
    }

    const sendEmail= (e : any) => {
        e.preventDefault()
        checkEmail()
        checkMessage()
            if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
              window.open(`mailto:lokmane.ghedied@gmail.com?subject=${subject}&body=${message}`)
            } else {
              window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=lokmane.ghedied@gmail.com&su=${subject}&body=${message}`);
            }
            setEmail('')
            setSubject('')
            setMessage('')
        }

    return ( 
        <section id='contact' className="h-full lg:h-screen w-full flex justify-center items-center my-2">
            <div className="w-11/12 h-4/5 lg:h-full flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0">
                {/* TEXT */}
                <motion.div
                    variants={fadeIn('right',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once : false, amount: 0.1}} 
                    className="w-full lg:w-1/3 h-1/3 lg:h-3/5 flex-1 flex flex-col items-start justify-center lg:justify-start lg:mx-6 space-y-4 lg:space-y-0">
                    {/* TITLE */}
                    <div className="space-y-3">
                        <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-accent'>Get in touch</h1>
                        <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl'><span>—</span> I am always looking for exciting projects.</h2>
                        <p className='text-base md:text-lg lg:text-xl text-slate-300'>Fill in the form or just use my contacts below</p>
                    </div>
                </motion.div>
                {/* FORM */}
                <motion.form
                    variants={fadeIn('left',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once : false, amount: 0.1}} 
                    onSubmit={sendEmail} 
                    className="border rounded-2xl pb-24 p-6 lg:mx-6 w-11/12 md:w-[70%] lg:w-auto flex-1 flex flex-col gap-y-6">
                    <input 
                        type="text"
                        value={email} 
                        onBlur={checkEmail}
                        onChange={(e)=>setEmail(e.target.value)} 
                        placeholder="Your Email *" 
                        className={validEmail ? 'bg-transparent outline-none transition-all w-full border-b focus:border-accent placeholder:text-white py-3' : 'bg-transparent outline-none transition-all w-full border-b  py-3 invalid_input'}  required pattern="[a-z0-9._%+-]+@gmail\.com$"/>
                    <input 
                        type="text"
                        value={subject} 
                        onChange={(e)=> setSubject(e.target.value)} 
                        placeholder="Your Subject"  
                        className="bg-transparent outline-none transition-all w-full border-b focus:border-accent placeholder:text-white py-3" 
                        />
                    <input
                        type="text"
                        value={message} 
                        onBlur={checkMessage}
                        onChange={(e)=> setMessage(e.target.value)}  
                        placeholder="Your Message *"
                        className={validMessage ? 'bg-transparent outline-none transition-all w-full border-b focus:border-accent placeholder:text-white py-10 ':'bg-transparent outline-none transition-all w-full border-b invalid_input placeholder:text-white py-10 '}  required pattern="^.+$" />
                    <button className={`w-fit ${styles.gradient_btn}`}>Send message</button>
                </motion.form>
            </div>
        </section>
     );
}
 
export default Contact;