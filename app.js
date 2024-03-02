
import React  from "react";
import  ReactDOM from "react-dom/client";


const Header = () =>{
    return (
        <div className="header">
        <div className="logo-container">
            
            <img  className="logo"
            src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" />
       
                </div>
        <div className="navbar-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
        </ul>
        </div>
        </div>
    )
}

const Restaurancard = () => {
    return (
        <div className="res-card">
            <img   className="res-image"  alt="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg" />
            <h3>Meghana Foods</h3>
            <h4>Biriyani,South-Indiian,Asian</h4>
            <h4>4.4 Stars</h4>
            <h4>38 Minutes</h4>
        </div>
    )
}
    const hehe = "dfdfdf";
        
    const Body = () =>{
        return (
            <div className="body">
               <div className="search-bar">search</div>

               <div className="res-container">
                    <Restaurancard />
                    <Restaurancard />
                    <Restaurancard />
                    <Restaurancard />
                    <Restaurancard />
                    <Restaurancard />
                    <Restaurancard />
                    <Restaurancard />
               </div>
            </div>
        )
    }


const Appbar = () =>{
    return <div className="app">
        <Header />
        <Body />
    </div>
}




const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<Appbar />);