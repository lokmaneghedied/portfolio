// import photo from '../images/lll.jpg';
const Home = () => {
    return  ( 
        <div id="home" className="flex justify-start h-screen" >
            <div className='grid content-center place-content-center w-2/4 '>
                <h1 id='firstName' className="sm:text-5xl tracking-wider font-extrabold backdrop-blur-md">
                <span className='text-red-500'>L</span>
                <span>OKMANE</span>
                </h1>
                <h1 id='lastName' className="sm:text-5xl tracking-wider font-extrabold backdrop-blur-md">
                <span className='text-red-500'>G</span>
                <span className="text-gray-400">HEDIED</span>
                </h1>
                <p id='title' className="sm:text-2xl text-red-500 backdrop-blur-md">FULL STACK DEVELOPER</p>
                {/* <button className='p-2 m-1 bg-red-500 rounded-lg hover:scale-110'>SEND ME AN EMAIL</button>  */}
            </div>
        </div>
     );
}
 
export default Home;   