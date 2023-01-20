import img from '../images/img.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.PNG'

const Skills = () => {
    return ( 
        <div id='skills' className="h-screen">
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
            <div className="reveal md:flex md:justify-around md:items-center px-4 space-y-4 h-5/6">
                <div className="relative rounded-2xl md:h-5/6 md:w-1/5">
                    <img src={img} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl opacity-60"/>
                    <div className='grid justify-items-center px-2 py-1 absolute inset-0 text-yellow-300'>
                        <h1 className="font-semibold place-self-center text-white">. . . . Front-End . . . . </h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptatibus pbeatae adipisci ab libero maiores doloribus modi, fugit quia corporis deleniti ratione consequatur tenetur totam. Qui, totam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, numquam suscipit iste earum de voluptas, soluta odit mollitia quo eaque esse, ipsum et magnam porro. Et, tenetur odio.</p>
                    </div>
                </div>
                <div className="relative rounded-2xl md:h-3/4 md:w-1/5">
                    <img src={img2} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl opacity-60"/>
                    <div className='grid justify-items-center px-2 py-1 absolute inset-0 text-yellow-300'>
                        <h1 className="font-semibold place-self-center text-white">. . . . Back-End . . . .</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at vitae neque nobis explndis, ratione tempore similique incidunt accusamus nisi optio dolores pariatur modi obcaecati maxime! Laborum, iste!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti itaque expedita ipsum impedit? Neque adipisc magni dolorem iure.</p>
                    </div>
                </div>
                <div className="relative rounded-2xl md:h-4/5 md:w-1/5">
                    <img src={img3} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl opacity-60"/>
                    <div className='grid justify-items-center px-2 py-1 absolute inset-0 text-yellow-300'>
                        <h1 className="font-semibold place-self-center text-white">. . . . Back-End . . . .</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam hic voluptates aliquid, reiciendis repellendus pariatur porro dolore cupiditate eos unde nesciunt minima autem, neque mollitia delectus, explicabo magnam necessitatibus ex.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At veritatis nisi quasi tempore. Ab nulla dolor ipsa? Deserunt officiis corrupti nemo non cupiditate temporibus quis alias sed</p>
                    </div>
                </div>
                <div className="relative rounded-2xl md:h-5/6 md:w-1/5">
                    <img src={img4} alt="" className="h-full rounded-2xl bg-gray-100 shadow-2xl opacity-60"/>
                    <div className='grid justify-items-center px-2 py-1 absolute inset-0 text-yellow-300'>
                        <h1 className="font-semibold place-self-center text-white">. . . . Back-End . . . .</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptatienda beatae adipisci ab libero maiores doloribus modi, fugit quia corporis deleniti ratione consequatur tenetur totam. Qui, totam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, numquam suscipit iste earum uta odit mollitia quo eaque esse, ipsum et magnam porro. Et, tenetur odio.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Skills;