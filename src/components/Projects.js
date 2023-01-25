import projectImg from '../images/projectImg.jpg'
import pyPr from '../images/pyPr.jpg'
import jsPr from '../images/jsPr.jpg'

const Projects = () => {
    return ( 
        <div id='projects' className="h-full pt-6 space-y-6">
            <div className='grid justify-items-center content-center h-1/6 '>
                <h1 className='text-2xl tracking-wider font-extrabold animate-pulse '>
                    <span className="md:uppercase">Recent </span>
                    <span className='text-red-500 md:uppercase'>Projects </span>
                </h1>
                <div className='flex space-x-2'>
                    <span className='text-xl tracking-wider'>. . . . . . . .</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -5 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 animate-bounce">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <span className='text-xl tracking-wider'>. . . . . . . .</span>
                </div>
            </div>
            <div className="grid justify-items-center content-center  h-4/5 ">
                <div className='reveal lg:flex lg:justify-center lg:items-center lg:h-72 xl:w-10/12 w-11/12 grid justify-items-center h-full'>
                    <div className='grid content-center bg-slate-800 text-white p-2 m-1 rounded-xl shadow-inner w-full h-fit'>
                        <h1 className='p-1 font-bold text-lg text-red-500'>MySpace</h1>
                        <p>● Full stack web application that handles all CRUD operations on user generated post, with extra fonctionality of likes and comments.</p>
                        <p>● Stacks used:</p>
                        <p>- Flask for the API</p>
                        <p>- Vue.js, React.js for UI</p>
                        <p>- MongoDB, SQLAlchemy for database</p>
                        <p>● Comes in three versions:</p>
                        <p>-Vue.js & Flask with a relational database <small>(SQLAlchemy)</small>.</p>
                        <p>-Vue.js & Flask with a non-relational database <small>(MongoDB)</small>.</p>
                        <p>-React.js & Flask with a non-relational database <small>(MongoDB)</small>.</p>
                        <a href='https://github.com/lokmaneghedied' target='_blanck' className='place-self-end'>
                            <button className='projectBtn'>
                                <p>Link to project</p>
                                <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <img src={projectImg} alt="" className='lg:h-full h-fit' />
                </div>
                <div className='reveal lg:flex lg:justify-center lg:items-center lg:h-72 xl:w-10/12 w-11/12 grid justify-items-center h-full'>
                    <div className='grid content-center bg-slate-800 text-white p-2 m-1 rounded-xl shadow-inner lg:h-5/6 w-full h-fit'>
                        <h1 className='p-1 font-bold text-lg text-red-500'>Python's Projects</h1>
                        <p>● Arithmetic Formatter.</p>
                        <p>● Time Calculator.</p>
                        <p>● Budget App.</p>
                        <p>● Polygon Area Calculator.</p>
                        <p>● Probability Calculator.</p>
                        <a href='https://github.com/lokmaneghedied/Python-s-projects' target='_blanck' className='place-self-end'>
                            <button className='projectBtn'>
                                <p>Link to projects</p>
                                <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <img src={pyPr} alt="" className='lg:h-full h-fit' />
                </div>
                <div className='reveal lg:flex lg:justify-center lg:items-center lg:h-72 xl:w-10/12 w-11/12 grid justify-items-center h-full'>
                    <div className='grid content-center bg-slate-800 text-white p-2 m-1 rounded-xl shadow-inner lg:h-5/6 w-full h-fit'>
                        <h1 className='p-1 font-bold text-lg text-red-500'>javaScript's Projects</h1>
                        <p>● Palindrome Checker.</p>
                        <p>● Roman Numeral Converter.</p>
                        <p>● Caesars Cipher.</p>
                        <p>● Telephone Number Validator.</p>
                        <p>● Cash Register.</p>
                        <a href='https://github.com/lokmaneghedied/JavaScript-s-projects' target='_blanck' className='place-self-end'>
                            <button className='projectBtn'>
                                <p>Link to projects</p>
                                <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <img src={jsPr} alt="" className='lg:h-full h-fit' />
                </div>
                
            </div>
        </div>
     );
}

export default Projects;