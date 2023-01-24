import webDev from '../images/webDev.png'
// import frontend from '../images/frontend.png'
// import backend from '../images/backend.jpg'
// import db from '../images/db.jpg'

const About = () => {
    return ( 
        <div id='about' className="grid justify-items-center content-start h-full space-y-4 md:space-y-2 xl:space-y-4 bg-gradient-to-t from-red-700 to-red-500 rounded-b-3xl">
            <img src={webDev} alt=""/>
            <div className='grid content-center w-4/5 tracking-wider sm:space-y-2'>
                <div className='grid content-center justify-items-center'>
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
                <p className='reveal text-white xl:text-lg lg:text-sm md:text-base text-sm'>With a State Engineer In Mining Engineering, obtained with honors from the National school of mining and metallurgy in Algeria, I also have a significant background in software development, basically self taught using sources like : FreeCodeCamp, W3School, Youtube & Official documentation.<br />
                In addition to the technical background, my soft skills are well enhanced, for I was an active student in my college years which helped me build a strong personality and respectable leadership abilities.
                </p>
                <a href='#education' className='place-self-end'>
                    <button className='moreBtn reveal' url='https://www.freecodecamp.org/certification/lokmaneghedied/scientific-computing-with-python-v7'>
                        <p>See More About Me !</p>
                        <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
     );
}
export default About;