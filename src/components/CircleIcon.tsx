const CircleIcon = () => {
    return ( 
            <figure className="z-20 stroke-accent ">
                <svg width="30" height="75" viewBox="50 120 100 100">
                    <circle cx="95" cy="95" r="40" className="stroke-accent stoke-1 fill-white " />
                    <circle cx="95" cy="95" r="40" className="stroke-[5px] fill-none "/>
                    <circle cx="95" cy="95" r="20" className="stroke-1 animate-pulse fill-accent"/>
                </svg>
            </figure>
            
     );
}
 
export default CircleIcon;
