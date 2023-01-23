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
            <div className="lg:flex lg:justify-around lg:items-center h-5/6 px-4 space-y-4">
                <div className="reveal relative rounded-2xl lg:h-3/4 lg:w-1/5">
                    <img src={img} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl "/>
                    <div className='grid justify-items-center content-start pt-5 space-y-6 absolute inset-0 text-yellow-300'>
                        <h1 className="font-semibold text-white">. . . BASICS . . .</h1>
                        <div className='grid justify-items-center backdrop-blur-sm rounded-lg space-y-6'>
                            <p>- HTML</p>
                            <p>- CSS</p>
                            <p>- JavaScript ES6</p>
                            <p>- Python</p>
                        </div>
                    </div>
                </div>
                <div className="reveal relative rounded-2xl lg:h-5/6 lg:w-1/5">
                    <img src={img2} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl"/>
                    <div className='grid justify-items-center content-center space-y-6 absolute inset-0 text-yellow-300 '>
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
                <div className="reveal relative rounded-2xl lg:h-5/6 lg:w-1/5">
                    <img src={img3} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl"/>
                    <div className='grid justify-items-center content-center space-y-6 absolute inset-0 text-yellow-300'>
                        <h1 className="font-semibold text-white backdrop-blur-sm rounded-lg">. . . EXTRA . . .</h1>
                        <div className='grid justify-items-center space-y-6 backdrop-blur-sm rounded-lg lg:text-sm xl:text-base'>
                            <span className='grid justify-items-center'>
                                <p>● Relational Databases</p>
                                <p><small>(SQLAlchemy)</small></p>
                            </span>
                            <span className='grid justify-items-center'>
                                <p>● Non-Relational Databases</p>
                                <p><small>(MongoDB)</small></p>
                            </span>
                            <p>● Git</p>
                            <p>● GitHub</p>
                            <p className='lg:text-xs xl:text-base'>● Oriented Object Programming</p>
                            <p>● DOM manipulation</p>
                        </div>
                    </div>
                </div>
                <div className="reveal relative rounded-2xl lg:h-4/5 lg:w-1/5">
                    <img src={img4} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl"/>
                    <div className='grid justify-items-center content-center space-y-6 absolute inset-0 text-yellow-300'>
                        <h1 className="font-semibold text-white backdrop-blur-sm rounded-lg">. . . SOFT SKILLS . . .</h1>
                        <div className='grid justify-items-center space-y-6 backdrop-blur-sm rounded-lg'>
                            <p>● Dynamic leadership</p>
                            <p>● Dynamic leadership</p>
                            <p>● Dynamic leadership</p>
                            <p>● Dynamic leadership</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Skills;