import webDev from '../images/webDev.png'
import frontend from '../images/frontend.png'
import backend from '../images/backend.jpg'
import db from '../images/db.jpg'

const About = () => {
    return ( 
        <div id='about' className="grid justify-items-center h-screen">
            <img src={webDev} alt="" />
            <div className='bg-gradient-to-t from-violet-900 to-violet-600 grid content-between' >
                <div className='grid justify-items-center content-start p-4'>
                    <div className='grid justify-items-center w-2/3 tracking-wider space-y-4'>
                        <h1 className='text-white text-3xl font-bold'>ABOUT ME</h1>
                        <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, deserunt ipsum. Odio nam temporibus nulla nihil illum, qui nostrum optio sit facilis culpa ipsum, vel quia, laboriosam quod. Beatae, laborum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, deserunt ipsum. Odio nam temporibus nulla nihil illum, qui nostrum optio sit facilis culpa ipsum, vel quia, laboriosam quod. Beatae, laborum!</p>
                    </div>
                </div>
                <div id='skills' className='grid justify-items-center'>
                    <div className='flex justify-around block w-11/12 rounded-t-lg border-x border-violet-900 bg-white mt-3 pt-2'>
                        <div className='hover:animate-bounce'>
                            <img src={frontend} alt="" className="place-self-center w-24 h-24 rounded-full border-2 border-double border-purple-900 "/>
                            <h1 className="font-semibold pt-1">Front-End</h1>
                        </div>
                        <div className='hover:animate-bounce'>
                            <img src={backend} alt="" className="place-self-center w-24 h-24 rounded-full border-2 border-double border-purple-900"/>
                            <h1 className="font-semibold mx-2 pt-1">Back-End</h1>
                        </div>
                        <div className='hover:animate-bounce'>
                            <img src={db} alt="" className="place-self-center w-24 h-24 rounded-full border-2 border-double border-purple-900"/>
                            <h1 className="font-semibold mx-2 pt-1">Databases</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;