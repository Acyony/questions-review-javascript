import React from 'react';
import mainImage from '../../Saly-10.png'
function Home() {
    return (
        <div className="container ">
            <h1 className="text-center mt-4 mb-4">Welcome to Learning JavaScript is funny!</h1>
            <img className="img-thumbnail rounded" src={mainImage} alt=""/>
        </div>
    );
}

export default Home;