import photo from '../images/photo.JPG'
// import img from '../images/img.jpg'
const Home = () => {
    return  ( 
        <div id="home" className="Home flex justify-around space-y-4 bg-cover h-screen">
            <div className='grid justify-items-start content-center'>
                <h1 className="text-5xl text-purple-900">HEY, I'M LOKMANE GHEDIED</h1>
                <p className="text-3xl text-purple-900">A full stack developer</p>
                <button className='p-2 m-1 bg-yellow-300 rounded-lg hover:scale-110'>SEND ME AN EMAIL</button> 
            </div>
            <img src={photo} alt="img" className="place-self-center w-60 h-60 rounded-full border-2 border-double border-purple-900"/> 
        </div>
     );
}
 
export default Home;   