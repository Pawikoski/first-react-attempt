const Home = () => {
    const handleClick = () => {
        console.log('hello world')
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}></button>
        </div>
     );
}
 
export default Home;