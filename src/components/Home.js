import photo from '../images/photo.JPG'
const Home = () => {
    return ( 
        <div id="home" className="md:h-screen h-full w-screen flex justify-start items-center">
                <div className="grid content-center place-content-start absolute pl-5 md:pl-16 lg:pl-24 ">
                    <h1 id='firstName' className="lg:text-6xl sm:text-2xl text-xl tracking-wider font-extrabold ">
                        <span className='text-red-500'>L</span>
                        <span>OKMANE</span>
                    </h1>
                    <h1 id='lastName' className="lg:text-6xl sm:text-2xl text-xl tracking-wider font-extrabold ">
                        <span className='text-red-500'>G</span>
                        <span>HEDIED</span>
                    </h1>
                    <span className="animate-pulse">
                        <p id='title' className="lg:text-xl sm:text-lg sm:font-bold sm:uppercase text-sm text-red-500 ">Junior Web Developer</p>
                    </span>
                </div>
                <img src={photo} alt="" className='h-full w-full place-self-center static '/>
        </div>
     );
}
 
export default Home;