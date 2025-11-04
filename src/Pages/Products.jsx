import axios from 'axios';
import React, { useEffect} from 'react';

const Products = ({value , Setvalue , cart , Setcart}) => {

    // creating state to store data from api call


    // using axios getting data from api  

    const fetchdata = async()=>{
        try{
            const response = await axios.get('https://fakestoreapi.com/products')
            //Setvalue (response.data) it used to store data in value in usestae method
            Setvalue(response.data)
        }
        catch(error){
            console.log(error);
            
        }
    }


    const handleCart = (para)=>{
        const exist = cart.find((item)=> item.id === para.id)

        if (exist) {
          Setcart(cart.filter((item)=> item.id !== para.id))
        }
        else{
          para.quantity = 1
          Setcart([...cart, para ])
        }
        
        // console.log(cart)

    }

     console.log(cart)

    useEffect(()=>{
        fetchdata()
    },[])
    


    return (

      

    <div className="full">
      {value.map((info) => {
        const inCart = cart.find((item) => item.id === info.id);

        return (
          <div key={info.id} className="card">
            <img src={info.image} alt={info.title} />
            <h2>{info.title}</h2>
            <p>{info.description}</p>
            <h3>${info.price}</h3>
            <h4> Rating : ⭐ {info.rating.rate} </h4>

            <button onClick={() => handleCart(info)}>
              {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

       
 

export default Products;