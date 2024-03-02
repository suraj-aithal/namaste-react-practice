
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

const Restaurancard = ({resdata}) => {
    // or you can do llike below
// const Restaurancard = (pops) => { 
//    const {resdata} = pops; 

const {name,food,rating,time} = resdata;  // this is done so as to avoid the usage of resdata.name everytime nstead we can just use name 
    return (
        <div className="res-card">
            <img   className="res-image"  alt="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg" />
            <h3>{name}</h3>
            <h4>{food}</h4>
            <h4>{rating}</h4>
            <h4>{time} minutes</h4>
        </div>
    )
}
  


const resobj = [  {
    "address": "Regent Street City Centre",
    "area": "centre",
    "food": "italian",
    "id": "19210",
    "introduction": "Pizza hut is a large chain with restaurants nationwide offering convenience pizzas pasta and salads to eat in or take away",
    "location": [
        52.20103,
        0.126023
    ],
    "name": "pizza hut city centre",
    "phone": "01223323737",
    "postcode": "cb21ab",
    "pricerange": "cheap",
    "rating":"4.4",
    "time":"34",
    "type": "restaurant"
},
{
    "address": "Finders Corner Newmarket Road",
    "area": "east",
    "food": "international",
    "id": "30650",
    "introduction": "",
    "location": [
        52.21768,
        0.224907
    ],
    "name": "the missing sock",
    "phone": "01223812660",
    "postcode": "cb259aq",
    "pricerange": "cheap",
    "signature": "african babooti",
    "rating":"4.4",
    "time":"34",
    "type": "restaurant"
},
{
    "address": "106 Regent Street City Centre",
    "area": "centre",
    "food": "indian",
    "id": "19214",
    "introduction": "curry garden serves traditional indian and bangladeshi cuisine cooked with fresh produce delivered every day",
    "location": [
        52.200187,
        0.126407
    ],
    "name": "curry garden",
    "phone": "01223302330",
    "postcode": "cb21dp",
    "pricerange": "expensive",
    "rating":"4.4",
    "time":"34",
    "type": "restaurant"
},
{
    "address": "82 Cherry Hinton Road Cherry Hinton",
    "area": "south",
    "food": "chinese",
    "id": "19192",
    "location": [
        52.188528,
        0.140627
    ],
    "name": "the good luck chinese food takeaway",
    "phone": "01223244149",
    "postcode": "cb17ag",
    "pricerange": "expensive",
    "type": "restaurant"
},
{
    "address": "G4 Cambridge Leisure Park Clifton Way Cherry Hinton",
    "area": "south",
    "food": "italian",
    "id": "19196",
    "introduction": "pizza hut is a large chain with restaurants nationwide offering convenience pizzas pasta and salads to eat in or take away",
    "location": [
        52.190176,
        0.13699
    ],
    "name": "pizza hut cherry hinton",
    "phone": "01223323737",
    "postcode": "cb17dy",
    "pricerange": "moderate",
    "type": "restaurant"
},
{
    "address": "64 Cherry Hinton Road Cherry Hinton",
    "area": "south",
    "food": "indian",
    "id": "19191",
    "introduction": "taj tandoori serves a variety of indian dishes to eat in or take away catering for private parties of up to 50 guests is available upon request",
    "location": [
        52.188747,
        0.138941
    ],
    "name": "taj tandoori",
    "phone": "01223412299",
    "postcode": "cb17aa",
    "pricerange": "expensive",
    "type": "restaurant"
},
{
    "address": "152 - 154 Hills Road",
    "area": "south",
    "food": "modern european",
    "id": "14731",
    "introduction": "",
    "location": [
        52.18889,
        0.13589
    ],
    "name": "restaurant alimentum",
    "phone": "01223413000",
    "postcode": "cb28pb",
    "pricerange": "moderate",
    "signature": "slowroast sirloin of beef red onion celeriac and garlic",
    "type": "restaurant"
},
{
    "address": "529 Newmarket Road Fen Ditton",
    "area": "east",
    "food": "chinese",
    "id": "19273",
    "introduction": "yu garden serves authentic chinese cuisine",
    "location": [
        52.212992,
        0.157569
    ],
    "name": "yu garden",
    "phone": "01223248882",
    "postcode": "cb58pa",
    "pricerange": "expensive",
    "type": "restaurant"
},
{
    "address": "Market Hill City Centre",
    "area": "centre",
    "food": "italian",
    "id": "19240",
    "location": [
        52.205442,
        0.119706
    ],
    "name": "stazione restaurant and coffee bar",
    "phone": "01223352607",
    "postcode": "cb23nj",
    "pricerange": "expensive",
    "type": "restaurant"
},
{
    "address": "451 Newmarket Road Fen Ditton",
    "area": "east",
    "food": "indian",
    "id": "19270",
    "introduction": "curry prince is a neighbourhood indian restaurant serving authentic cuisine",
    "location": [
        52.213072,
        0.149771
    ],
    "name": "curry prince",
    "phone": "01223566388",
    "postcode": "cb58jj",
    "pricerange": "moderate",
    "type": "restaurant"
},
{
    "address": "Regent Street City Centre",
    "area": "centre",
    "food": "chinese",
    "id": "19212",
    "introduction": "charlie chan serves a variety of popular chinese dishes at their restaurant",
    "location": [
        52.201743,
        0.124843
    ],
    "name": "charlie chan",
    "phone": "01223361763",
    "postcode": "cb21db",
    "pricerange": "cheap",
    "type": "restaurant"
},
{
    "address": "Free School Lane City Centre",
    "area": "centre",
    "food": "european",
    "id": "19245",
    "introduction": "eraina serves a variety of drinks and european dishes with influences from france spain italy and greece catering for vegetarians is also provided",
    "location": [
        52.203708,
        0.119082
    ],
    "name": "eraina",
    "phone": "01223368786",
    "postcode": "cb23rh",
    "pricerange": "expensive",
    "type": "restaurant"
},
{
    "address": "Regent Street City Centre",
    "area": "centre",
    "food": "italian",
    "id": "19213",
    "introduction": "the simple menu and kitchen concept at pizza express has retained its freshly made ideal and you can still watch your pizza being prepared for you",
    "location": [
        52.201743,
        0.124843
    ],
    "name": "pizza express",
    "phone": "01223324033",
    "postcode": "cb21db",
    "pricerange": "moderate",
    "type": "restaurant"
},
{
    "address": "De Vere University Arms Regent Street City Centre",
    "area": "centre",
    "food": "british",
    "id": "19211",
    "introduction": "adjoining the de vere university arms restaurant one seven is located at the forefront of regent street, and provides a birds eye view to take in the hustle and bustle of the busy city. Enjoy beautifully created food which is always complemented by a fine selection of wines in a truly relaxing and contemporary atmosphere",
    "location": [
        52.20103,
        0.126023
    ],
    "name": "restaurant one seven",
    "phone": "01223337766",
    "postcode": "cb21ab",
    "pricerange": "moderate",
    "type": "restaurant"
},
{
    "address": "12 Bridge Street City Centre",
    "area": "centre",
    "food": "italian",
    "id": "19229",
    "introduction": "ask is a leading name in the uk casual dining market with over 100 restaurants across the uk. ask is the perfect place to relax and enjoy mouthwatering risottos an extended range of hearty al forno dishes and all your favourite pastas pizzas and salads",
    "location": [
        52.209028,
        0.118296
    ],
    "name": "ask restaurant",
    "phone": "01223364917",
    "postcode": "cb21uf",
    "pricerange": "cheap",
    "type": "restaurant"
},
{
    "address": "11 Peas Hill City Centre",
    "area": "centre",
    "food": "chinese",
    "id": "19242",
    "introduction": "jinling noodle bar serves a wide range of chinese and shanghai dishes reflecting many different flavours and ingredients",
    "location": [
        52.204453,
        0.118693
    ],
    "name": "jinling noodle bar",
    "phone": "01223566188",
    "postcode": "cb23pp",
    "pricerange": "moderate",
    "type": "restaurant"
}
]




        
    const Body = () =>{
        return (
            <div className="body">
               <div className="search-bar">search</div>

               <div className="res-container">

               {/* {resobj.map((resdata, index) => (
                <Restaurancard key={index} resdata={resdata} />
            ))} */}
                 
                 {/* <Restaurancard resdata={resobj[0]} /> */}

                {
                    resobj.map((restaurant) =>(
                        <Restaurancard  key={restaurant.id} resdata={restaurant}/> // we add key to remove the warning of add uniuq key on console
                    ))
                }


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
