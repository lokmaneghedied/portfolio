//assets
import circular_text from '../assets/circular_text.png'

const HireMe = () => {

    const sendEmail = ():void =>{
        console.log('dadada')
    }

    return ( 
        <div className='flex justify-center items-center '>
            <img className='h-[80px] md:h-[100px] lg:h-[120px] animate-spin-slow' src={circular_text} alt="circular text" />
            <button onClick={sendEmail} className='bg-white text-primary text-xs font-bold absolute rounded-full xs:h-[40px] xs:w-[40px] lg:h-[60px] lg:w-[60px] hover:scale-110'>Hire Me</button>
        </div>
     );
}
 
export default HireMe;

// ADD SPIN ANIMATION >>>  animate-spin-slow