import fb from '../images/fb.png'
import linkedin from '../images/linkedin.png'
import whatsapp from '../images/whatsapp.png'
import git from '../images/git.png'

const Footer = () => {
    return ( 
        <footer className="grid justify-items-center content-center bg-slate-800 h-28 space-y-4">
            <div className='flex justify-center items-center space-x-2'>
                <a href="https://github.com/lokmaneghedied" target='_blanck' className='h-10 w-10 hover:scale-95'>
                    <img src={git} alt=""/>
                </a>
                <a href="https://linkedin.com/in/lokmane-ghedied" target='_blanck' className='h-10 w-10 hover:scale-95'>
                    <img src={linkedin} alt=""/>
                </a>
                <a href="https://www.facebook.com/lokmane.ghedied" target='_blanck' className='h-10 w-10 hover:scale-95'>
                    <img src={fb} alt=""/>
                </a>
                <a href="https://wa.me/qr/OAEK2373L7XIH1" target='_blanck' className='h-10 w-10 hover:scale-95'>
                    <img src={whatsapp} alt=""/>
                </a>
            </div>
            <div className='text-white text-xs h-1/2'>Created on january 2023</div>
        </footer>
     );
}
 
export default Footer;