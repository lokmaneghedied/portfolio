import photo from '../images/photo.JPG';
const Home = () => {
    return  ( 
        <div id="home" className="flex justify-center items-center h-screen" >
            <div className="grid content-center place-content-start sm:p-10 h-3/5 w-2/5 sm:translate-x-14 sm:translate-y-6 sm:bg-white sm:rounded-2xl sm:shadow-2xl">
                <h1 id='firstName' className="lg:text-4xl sm:text-2xl text-xl tracking-wider font-extrabold ">
                    <span className='text-red-500'>L</span>
                    <span>OKMANE</span>
                </h1>
                <h1 id='lastName' className="lg:text-4xl sm:text-2xl text-xl tracking-wider font-extrabold ">
                    <span className='text-red-500'>G</span>
                    <span className="text-gray-400">HEDIED</span>
                </h1>
                <span className="animate-pulse">
                    <p id='title' className="sm:text-xl text-red-500 ">FULL-STACK DEVELOPER</p>
                </span>
            </div>
            <div className="h-3/5 w-2/5 sm:-translate-x-14 sm:-translate-y-6 ">
                <img className='w-full h-full sm:rounded-2xl sm:shadow-2xl' src={photo} alt="" />
                {/* <div className='grid content-center place-content-center w-2/4'>
                    <h1 id='firstName' className="sm:text-5xl tracking-wider font-extrabold ">
                        <span className='text-red-500'>L</span>
                        <span>OKMANE</span>
                    </h1>
                    <h1 id='lastName' className="sm:text-5xl tracking-wider font-extrabold ">
                        <span className='text-red-500'>G</span>
                        <span className="text-gray-400">HEDIED</span>
                    </h1>
                    <span className="animate-bounce">
                        <p id='title' className="sm:text-2xl text-red-500">FULL STACK DEVELOPER</p>
                    </span>
                </div> */}
            </div>
        </div>
     );
}
 
export default Home;   