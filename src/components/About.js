import webDev from '../images/webDev.png'
import frontend from '../images/frontend.png'
import backend from '../images/backend.jpg'
import db from '../images/db.jpg'

const About = () => {
    return ( 
        <div id='about' className="grid justify-items-center h-screen bg-gradient-to-t from-red-700 to-red-500">
            <img src={webDev} alt="" />
            <div className=' grid content-between' >
                <div className='grid justify-items-center content-start p-4'>
                    <div className='grid justify-items-center w-2/3 tracking-wider space-y-5'>
                        <div className='grid justify-items-center'>
                            <h1 className='text-white text-2xl tracking-wider font-extrabold'>
                                <span>A LITTLE </span>
                                <span className='text-yellow-300'>ABOUT </span>
                                <span>ME</span>
                            </h1>
                            <div className='flex items-stretch space-x-4'>
                            <span className='text-white text-xl tracking-wider pb-2'>. . . . . . . . .</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6 self-center">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            <span className='text-white text-xl tracking-wider pb-2'>. . . . . . . . .</span>
                            </div>
                        </div>
                        <p className='text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, deserunt ipsum. Odio nam temporibus nulla nihil illum, qui nostrum optio sit facilis culpa ipsum, vel quia, laboriosam quod. Beatae, laborum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, deserunt ipsum. Odio nam temporibus nulla nihil illum, qui nostrum optio sit facilis culpa ipsum, vel quia, laboriosam quod. Beatae, laborum!</p>
                    </div>
                </div>
                <div id='skills' className='grid justify-items-center'>
                    <div className='flex justify-around block w-11/12 space-x-1.5 '>
                        <div className='grid justify-items-center rounded-t-lg border-x border-red-500 bg-white mt-3 pt-2 w-2/6 '>
                            <img src={frontend} alt="" className="place-self-center w-24 h-24 rounded-full border-2 border-double border-red-500 hover:animate-bounce"/>
                            <h1 className="font-semibold pt-1">Front-End</h1>
                        </div>
                        <div className='grid justify-items-center rounded-t-lg border-x border-red-500 bg-white mt-3 pt-2 w-2/6'>
                            <img src={backend} alt="" className="place-self-center w-24 h-24 rounded-full border-2 border-double border-red-500 hover:animate-bounce"/>
                            <h1 className="font-semibold mx-2 pt-1">Back-End</h1>
                        </div>
                        <div className='grid justify-items-center rounded-t-lg border-x border-red-500 bg-white mt-3 pt-2 w-2/6'>
                            <img src={db} alt="" className="place-self-center w-24 h-24 rounded-full border-2 border-double border-red-500 hover:animate-bounce"/>
                            <h1 className="font-semibold mx-2 pt-1">Databases</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;