import HireMe from "../components/HireMe";
const Header = () => {
    return ( 
        <div className="w-full h-20 flex items-center justify-start place-self-center px-3">
                <span className='font-extrabold cursor-pointer -space-y-3'>
                    <span className="text-2xl lg:text-3xl logo">Lokmane</span>
                    <h1 className='text-lg lg:text-xl'>GHEDIED</h1>
                </span>
                {/* <span>
                <div className='hidden xs:block lg:hidden absolute top-4 right-4'>
                    <HireMe/>
                </div>
                </span> */}
        </div>
     );
}
 
export default Header;