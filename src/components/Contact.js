import linkedin from '../images/linkedin.png'
import gmail from '../images/gmail.png'
import maps from '../images/maps.png'
import phone from '../images/phone.png'
import Footer from './Footer'
const Contact = () => {
    return ( 
        <div id="contact" className="h-full lg:space-y-0 space-y-4 pt-7">
            <div className='grid justify-items-center content-center h-1/6'>
                <h1 className='text-2xl tracking-wider font-extrabold animate-pulse '>
                    <span className='text-red-500 md:uppercase'>Contact </span>
                    <span className="md:uppercase">Info</span>
                </h1>
                <div className='flex space-x-2'>
                    <span className='text-xl tracking-wider'>. . . . . . . .</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -5 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 animate-bounce">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <span className='text-xl tracking-wider'>. . . . . . . .</span>
                </div>
            </div>
            <div className="lg:flex lg:justify-around lg:items-center lg:h-96 grid justify-items-center md:grid-rows-2 md:grid-cols-2 md:gap-2 h-full md:space-y-0 space-y-4">
                <div className="reveal card bg-slate-800 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
                    <div className="icon">
                    <img src={phone} alt="" />
                    </div>
                    <div className="content">
                        <h3>Phone Number: </h3>
                        <p className='font-sans'>+213 672 13 26 33</p>
                    </div>
                </div>
                <div className="reveal card bg-slate-800 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
                    <div className="icon">
                    <img src={gmail} alt="" />
                    </div>
                    <div className="content">
                        <h3>E-mail:</h3>
                        <p>lokmane.ghedied@gmail.com</p>
                    </div>
                </div>
                <div className="reveal card bg-slate-800 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
                    <div className="icon">
                        <img src={maps} alt="" />
                    </div>
                    <div className="content">
                        <h3>I live in:</h3>
                        <p>Jijel/Algeria</p>
                    </div>
                </div>
                <div className="reveal card bg-slate-800 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
                    <div className="icon">
                    <img src={linkedin} alt="" />
                    </div>
                    <div className="content">
                        <h3>LinkedIn:</h3>
                        <p>lokmane-ghedied</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}

export default Contact;
            // <button className="flex justify-center items-center h-fit p-2 space-x-1 rounded-lg transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white duration-300">
            //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            //     <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            //     </svg>
            //     <span>Gmail</span>
            // </button>
            // <button className="flex justify-center items-center h-fit p-2 space-x-1 rounded-lg transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 hover:text-white duration-300">
            //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            //         <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            //         </svg>
            //     <span>LikedIn</span>
            // </button> 