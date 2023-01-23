import img from '../images/img.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.PNG'

const Skills = () => {
    return ( 
        <div id='skills' className="h-full lg:h-screen space-y-2">
            <div className='relative grid justify-items-center content-center h-1/6'>
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
            <div className="lg:flex lg:justify-around lg:items-center h-5/6 space-y-4 grid justify-items-center md:grid-rows-2 md:grid-cols-2 md:gap-2 md:space-y-0">
                <div className="reveal relative rounded-2xl lg:h-4/5 lg:w-1/5 h-96 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
                    <img src={img} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl "/>
                    <div className='grid justify-items-center content-start pt-5 space-y-12 lg:space-y-6 absolute inset-0 text-yellow-300'>
                        <h1 className="font-semibold text-white">. . . BASICS . . .</h1>
                        <div className='grid justify-items-center backdrop-blur-sm rounded-lg space-y-6'>
                            <p>● HTML</p>
                            <p>● CSS</p>
                            <p>● JavaScript ES6</p>
                            <p>● Python</p>
                            <p>● Node.js</p>
                        </div>
                    </div>
                </div>
                <div className="reveal relative rounded-2xl lg:h-3/4 lg:w-1/5 h-96 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
                    <img src={img2} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl"/>
                    <div className='grid justify-items-center content-start pt-5 space-y-12 lg:space-y-6 absolute inset-0 text-yellow-300 '>
                        <h1 className="font-semibold text-white backdrop-blur-sm rounded-lg">. . . FRAMEWORKS . . .</h1>
                        <div className='grid justify-items-center backdrop-blur-sm rounded-lg space-y-6'>
                            <p>● Vue.js</p>
                            <p>● React.js</p>
                            <p>● Bootstrap</p>
                            <p>● Tailwind CSS</p>
                            <p>● Flask</p>
                        </div>
                    </div>
                </div>
                <div className="reveal relative rounded-2xl lg:h-5/6 lg:w-1/5 h-96 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
                    <img src={img3} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl"/>
                    <div className='grid justify-items-center content-start pt-5 space-y-5 lg:space-y-6 absolute inset-0 text-yellow-300'>
                        <h1 className="font-semibold text-white backdrop-blur-sm rounded-lg">. . . EXTRA . . .</h1>
                        <div className='grid justify-items-center space-y-4 backdrop-blur-sm rounded-lg lg:text-sm lg:space-y-4 xl:text-base xl:space-y-6'>
                            <p>● Docker</p>
                            <p>● AWS (Cognito,...)</p>
                            <span className='grid justify-items-center'>
                                <p>● Relational Databases</p>
                                <p><small>(SQLAlchemy)</small></p>
                            </span>
                            <span className='grid justify-items-center'>
                                <p>● Non-Relational Databases</p>
                                <p><small>(MongoDB)</small></p>
                            </span>
                            <p>● Git/GitHub</p>
                            <p className='lg:text-xs xl:text-base'>● Oriented Object Programming</p>
                            <p>● DOM manipulation</p>
                        </div>
                    </div>
                </div>
                <div className="reveal relative rounded-2xl lg:h-4/5 lg:w-1/5 h-96 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
                    <img src={img4} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl"/>
                    <div className='grid justify-items-center content-start pt-5 space-y-5 lg:space-y-6 absolute inset-0 text-yellow-300'>
                        <h1 className="font-semibold text-white backdrop-blur-sm rounded-lg">. . . SOFT SKILLS . . .</h1>
                        <div className='grid justify-items-center space-y-6 backdrop-blur-sm rounded-lg lg:space-y-4 xl:space-y-6'>
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
        </div>
     );
}

export default Skills;