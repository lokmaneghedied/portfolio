// import img from '../images/img.jpg'
// import img2 from '../images/img2.jpg'
// import img3 from '../images/img3.jpg'
// import img4 from '../images/img4.PNG'

const Skills = () => {
    return ( 
        <div id='skills' className="h-full xl:h-screen space-y-3 ">
            <div className='grid justify-items-center content-center h-1/6'>
                <h1 className='text-2xl tracking-wider font-extrabold animate-pulse '>
                    <span className='text-red-500'>S</span>
                    <span>KI</span>
                    <span className='text-red-500'>LL</span>
                    <span>S</span>
                </h1>
                <div className='flex space-x-2'>
                    <span className='text-xl tracking-wider'>. . . . . . . .</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -5 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 animate-bounce">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <span className='text-xl tracking-wider'>. . . . . . . .</span>
                </div>
            </div>
            <div className="skillsContainer xl:flex xl:justify-around xl:items-center h-5/6 space-y-6 grid justify-items-center md:grid-rows-2 md:grid-cols-2 md:gap-2 md:space-y-0">
                <div className="skillscard reveal grid justify-items-center content-center space-y-6 bg-slate-800 xl:h-5/6 xl:w-1/5 h-fit md:h-full w-72 py-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 rounded-2xl shadow-2xl">
                    <h1 className="font-semibold text-red-500">. . . BASICS . . .</h1>
                    <div className='grid justify-items-center space-y-10 p-2 text-white'>
                        <p>● HTML</p>
                        <p>● CSS</p>
                        <p>● JavaScript ES6</p>
                        <p>● Python</p>
                        <p>● Node.js</p>
                    </div>
                </div>
                <div className="skillscard reveal grid justify-items-center content-center space-y-6 bg-slate-800 xl:h-5/6 xl:w-1/5 h-fit md:h-full w-72 py-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 rounded-2xl shadow-2xl">
                    <h1 className="font-semibold text-red-500">. . . FRAMEWORKS . . .</h1>
                    <div className='grid justify-items-center space-y-10 p-2 text-white'>
                        <p>● Vue.js</p>
                        <p>● React.js</p>
                        <p>● Bootstrap</p>
                        <p>● Tailwind CSS</p>
                        <p>● Flask</p>
                    </div>
                </div>
                <div className="skillscard reveal grid justify-items-center content-center space-y-6 bg-slate-800 xl:h-5/6 xl:w-1/5 h-fit md:h-full w-72 py-2 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 rounded-2xl shadow-2xl">
                    <h1 className="font-semibold text-red-500">. . . EXTRA . . .</h1>
                    <div className='grid justify-items-center space-y-6 p-2 text-white'>
                        <p>● Docker</p>
                        <p>● Basic AWS</p>
                        <span className='grid justify-items-center'>
                            <p>● Relational Databases</p>
                            <p><small>(SQLAlchemy)</small></p>
                        </span>
                        <span className='grid justify-items-center'>
                            <p>● Non-Relational Databases</p>
                            <p><small>(MongoDB)</small></p>
                        </span>
                        <p>● Git/GitHub</p>
                        <p>● Oriented Object Programming</p>
                        <p>● DOM manipulation</p>
                    </div>
                </div>
                <div className="skillscard reveal grid justify-items-center content-center space-y-6 bg-slate-800 xl:h-5/6 xl:w-1/5 h-fit md:h-full w-72 py-2 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 rounded-2xl shadow-2xl">
                    <h1 className="font-semibold text-red-500">. . . SOFT SKILLS . . .</h1>
                    <div className='grid justify-items-center space-y-6 p-2 text-white'>
                        <p>● Growth Mindset</p>
                        <p>● Organization and patience</p>
                        <p>● Problem-Solving</p>
                        <p>● Self-Motivation</p>
                        <p>● Perseverance</p>
                        <p>● Integrity</p>
                        <p>● Thirst to learn new skills</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Skills;

