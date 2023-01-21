import mining from '../images/mining.png'
import math from '../images/math.PNG'
import pyth from '../images/pyth.png'
import js from '../images/js.png'

const Education = () => {
    return ( 
        <div id='education' className="h-full  pt-4">
            <div className='grid justify-items-center content-center h-1/6'>
                <h1 className='text-2xl tracking-wider font-extrabold animate-pulse '>
                    <span className='text-red-500 md:uppercase'>Education </span>
                    <span className='md:uppercase'>Curriculum</span>
                </h1>
                <div className='flex space-x-2'>
                    <span className='text-xl tracking-wider'>. . . . . . . .</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -5 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 animate-bounce">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <span className='text-xl tracking-wider'>. . . . . . . .</span>
                </div>
            </div>
            <div className="h-5/6 p-5 space-y-2 md:space-y-0">
                <div className='reveal md:flex md:justify-start items-center h-1/4 bg-slate-800 rounded-2xl md:rounded-b-none'>
                    <span className='grid justify-items-start content-center p-2 md:w-1/2 w-full md:h-full h-1/2 text-white space-y-2 md:space-y-4'>
                        <h1 className='sm:uppercase'>- State Ingineer In Mining Engineering And Master in Advanced Land Control</h1>
                        <p className='px-2'>09/2017 – 11/2020: National school of mines and metallurgy, Algeria</p>
                    </span>
                    <img src={mining} alt="" className='md:w-1/2 w-full md:h-full h-1/2 rounded-b-2xl md:rounded-b-none md:rounded-tr-2xl'/>
                </div>
                <div className='reveal md:flex md:justify-start items-center h-1/4 bg-slate-800 rounded-2xl md:rounded-none shadow-xl md:shadow-none'>
                    <img src={math} alt="" className='md:w-1/2 w-full md:h-full h-1/2 rounded-t-2xl md:rounded-t-none md:rounded-bl-2xl'/>
                    <span className='grid justify-items-start content-center p-2 md:w-1/2 w-full md:h-full h-1/2 text-white space-y-2 md:space-y-4'>
                        <h1 className='sm:uppercase'>- Preparatory Class In Sciences And Technologies</h1>
                        <p className='px-2'>09/2015 – 06/2017: National School Of Public Works, Algeria</p>
                        <p>- Main courses :</p>
                        <p className='px-3'>Algebra, Mathematical Analysis ,Physics , Chemistry, Rational Mechanics, Computer Science, Statistics, Probalities...</p>
                    </span>
                </div>
                <div className='reveal md:flex md:justify-start items-center h-1/4 bg-slate-800 rounded-2xl md:rounded-none shadow-xl md:shadow-none'>
                    <span className='grid justify-items-start content-center p-2 md:w-1/2 w-full md:h-full h-1/2 text-white space-y-2 md:space-y-4'>
                        <h1 className='sm:uppercase'>- Scientific Computing with Python</h1>
                        <p className='px-2'>09/2022 – 10/2022: Freecodecamp</p>
                        <a href='https://www.freecodecamp.org/certification/lokmaneghedied/scientific-computing-with-python-v7' target='_blanck' className='place-self-end'>
                            <button className='certificationBtn' url='https://www.freecodecamp.org/certification/lokmaneghedied/scientific-computing-with-python-v7'>
                                <p>Certification</p>
                                <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </button>
                        </a>
                    </span>
                    <img src={pyth} alt="" className='md:w-1/2 w-full md:h-full h-1/2 rounded-b-2xl md:rounded-b-none '/>
                </div>
                <div className='reveal md:flex md:justify-start items-center h-1/4 bg-slate-800 rounded-2xl md:rounded-t-none shadow-xl md:shadow-none'>
                    <img src={js} alt="" className='md:w-1/2 w-full md:h-full h-1/2 rounded-t-2xl md:rounded-t-none md:rounded-bl-2xl'/>
                    <span className='grid justify-items-start content-center p-2 md:w-1/2 w-full md:h-full h-1/2 text-white space-y-2 md:space-y-4'>
                        <h1 className='sm:uppercase'>- JavaScript Algorithms and Data Structures</h1>
                        <p className='px-2'>10/2022 – 11/2022: Freecodecamp</p>
                        <p>- Chapters :</p>
                        <p className='px-3'>Basic JavaScript, ES6, Debugging, Basic Data Structures, Basic Algorithm Scripting, Object Oriented Programming, Functional Programming, Intermediate Algorithm Scripting</p>
                        <a href='https://www.freecodecamp.org/certification/lokmaneghedied/javascript-algorithms-and-data-structures' target='_blanck' className='place-self-end'>
                            <button className='certificationBtn' url='https://www.freecodecamp.org/certification/lokmaneghedied/scientific-computing-with-python-v7'>
                                <p>Certification</p>
                                <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </button>
                        </a>
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Education;
