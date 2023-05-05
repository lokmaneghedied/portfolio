//styles
import { styles } from "../style";
//formik
import { useFormik , FormikErrors } from "formik";
//motions
import { motion , useScroll } from "framer-motion";
// fadeIn
import { fadeIn } from '../constants';

interface FormValues {
    email: string,
    subject: string ,
    message :string 
}

const Contact = () => {

    const formik = useFormik({
        initialValues:{
            email:'',
            subject:'',
            message: ''
        },
        onSubmit : values  =>{
            if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
                window.open(`mailto:lokmane.ghedied@gmail.com?subject=${values.subject}&body=${values.message}`)
              } else {
                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=lokmane.ghedied@gmail.com&su=${values.subject}&body=${values.message}`);
            }
        },
        validate : values =>{
            
            let errors: FormikErrors<FormValues> = {};

            if(!values.email){
                errors.email = 'this field is required'
            }else if (!/^\w+([\.-]?\w+)*@gmail\.com$/i.test(values.email)){
                errors.email = 'Invalid email format'
            }
            if(!values.subject){
                errors.subject = 'this field is required'
            }
            if(!values.message){
                errors.message = 'this field is required'
            }
            return errors

        }
    })
    
           
     

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
                    onSubmit={formik.handleSubmit} 
                    className="border rounded-2xl pb-24 p-6 lg:mx-6 w-11/12 md:w-[70%] lg:w-auto flex-1 flex flex-col gap-y-6">
                    <input 
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Your Email *" 
                        className={formik.touched.email && formik.errors.email ? `${styles.invalid_input} py-3` : `${styles.valid_input} py-3`} 
                        />
                        {formik.touched.email && formik.errors.email && <p className="text-sm text-red-600">{formik.errors.email}</p>}
                    <input 
                        type="text"
                        name="subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Your Subject *"  
                        className={formik.touched.subject && formik.errors.subject ? `${styles.invalid_input} py-3` : `${styles.valid_input} py-3`}                       
                        />
                        {formik.touched.subject && formik.errors.subject && <p className="text-sm text-red-600">{formik.errors.subject}</p>}

                    <input
                        type="text"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Your Message *"
                        className={formik.touched.message && formik.errors.message ? `${styles.invalid_input} py-10` : `${styles.valid_input} py-10`}
                        />
                        {formik.touched.message && formik.errors.message && <p className="text-sm text-red-600">{formik.errors.message}</p>}

                    <button type="submit" className={`w-fit ${styles.gradient_btn}`}>Send message</button>
                </motion.form>
            </div>
        </section>
     );
}
 
export default Contact;



