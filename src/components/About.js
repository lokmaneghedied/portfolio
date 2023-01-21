import webDev from '../images/webDev.png'
// import frontend from '../images/frontend.png'
// import backend from '../images/backend.jpg'
// import db from '../images/db.jpg'

const About = () => {
    return ( 
        <div id='about' className="grid justify-items-center h-screen bg-gradient-to-t from-red-700 to-red-500 rounded-b-3xl">
            <img src={webDev} alt="" />
            <div className=' grid content-between'>
                <div className='grid justify-items-center content-start'>
                    <div className='grid justify-items-center w-4/5 tracking-wider sm:space-y-3 px-2'>
                        <div className='grid justify-items-center'>
                            <h1 className='text-white sm:text-2xl tracking-wider font-extrabold'>
                                <span>A LITTLE </span>
                                <span className='text-yellow-300 animate-pulse'>ABOUT </span>
                                <span>ME</span>
                            </h1>
                            <div className='flex items-stretch space-x-4'>
                                <span className='text-white sm:text-xl tracking-wider pb-2'>. . . . . . . . .</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6 self-center animate-bounce">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                <span className='text-white sm:text-xl tracking-wider pb-2'>. . . . . . . . .</span>
                            </div>
                        </div>
                        <p className='reveal text-white sm:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, deserunt ipsum. Odio nam temporibus nulla nihil illum, qui nostrum optio sit facilis culpa ipsum, vel quia, laboriosam quod. Beatae, laborum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, deserunt ipsum. Odio nam temporibus nulla nihil illum, qui nostrum optio sit facilis culpa ipsum, vel quia, laboriosam quod. Beatae, laborum!</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
export default About;