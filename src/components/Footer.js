import fb from '../images/fb.png'
import insta from '../images/insta.png'
import twitter from '../images/twitter.png'
import whatsup from '../images/whatsup.png'

const Footer = () => {
    return ( 
        <footer className="grid justify-items-center content-center bg-slate-800 h-28 space-y-4">
            <div className='flex justify-center items-center space-x-2'>
                <a href="https://www.facebook.com/lokmane.ghedied" target='_blanck' className='h-10 w-10 hover:scale-95'>
                    <img src={fb} alt=""/>
                </a>
                <a href="https://www.instagram.com/lokmane_ghedied/?igshid=YzgyMTM2MGM%3D&fbclid=IwAR0cXj9Y9An39sTIMV9fgDqrKzH-fBInpAqnYXwqwdnTCtZg4HxCoxV6eyU" target='_blanck' className='h-10 w-10 hover:scale-95 '>
                    <img src={insta} alt=""/>
                </a>
                <a href="https://twitter.com/lokmane_Ghedied?t=CJ9D-xdzS2YcnC32-4JUmg&s=07&                 fbclid=IwAR07vod1VvdQxJtH1jgKaQazEIF2KAl90WRjiYBnaE7xwVpa2vZlDUQak1E" target='_blanck' className='h-10 w-10 hover:scale-95'>
                    <img src={twitter} alt="" />
                </a>
                <a href="https://call.whatsapp.com/voice/hRR4tHw3q9A8UZkeUsiJYP" target='_blanck' className='h-10 w-10 hover:scale-95'>
                    <img src={whatsup} alt=""/>
                </a>
            </div>
            <div className='text-white text-xs h-1/2'>Created on january 2023</div>
        </footer>
     );
}
 
export default Footer;