import React from 'react';
import axios from 'axios';

class App extends  React.Component {

      shoot() {
            alert("Great Shot!");
          }
  state={
      products:[
        {
            "id":0,
          "proname":"Out-Fillter",
            "price":1000,
            "image":"jeans.jpeg",
            "qatuntiy":0
            
      },
      {
            "id":1,
          "proname":"Levi's",
            "price":1250,
            "image":"levis.jpeg",
            "qatuntiy":0
      },
      {
            "id":2,
            "proname":"Break-Out",
            "price":1400,
            "image":"break.jpeg",
            "qatuntiy":0
      },
      {     "id":3,
            "proname":"Polo",
            "price":850,
            "image":"polo.jpeg",
            "qatuntiy":0
            
      },
      {     "id":4,
            "proname":"Scoop",
            "price":450,
            "image":"scoop.jpeg",
            "qatuntiy":0
      },
      {     "id":5,
            "proname":"Half Sleve",
            "price":750,
            "image":"sleve.jpeg",
            "qatuntiy":0
      },
      {     "id":6,
            "proname":"Rolex",
            "price":4550,
            "image":"rulex.jpeg",
            "qatuntiy":0
            
      },
      {     "id":7,
            "proname":"Digital",
            "price":5000,
            "image":"feature_prod_02.jpg",
            "qatuntiy":0
      },
      {     "id":8,
            "proname":"Rado",
            "price":1800,
            "image":"rado.jpeg",
            "qatuntiy":0
      },
      {     "id":9,
            "proname":"Joger",
            "price":2500,
            "image":"banner_img_01.jpg",
             "qatuntiy":0
            
      },
      {     "id":10,
            "proname":"Glasses",
            "price":500,
            "image":"category_img_03.jpg",
            "qatuntiy":0
      },
      {     "id":11,
            "proname":"Light",
            "price":300,
            "image":"feature_prod_01.jpg",
            "qatuntiy":0
      },
      ,
      {     "id":11,
            "proname":"bag",
            "price":1400,
            "image":"bag.jpg",
            "qatuntiy":0
      },
      {     "id":12,
            "proname":"sofa",
            "price":850,
            "image":"sofa.jpg",
            "qatuntiy":0
            
      },
      {     "id":13,
            "proname":"watch",
            "price":450,
            "image":"watch.jpg",
            "qatuntiy":0
      },
      {     "id":14,
            "proname":"laptop",
            "price":750,
            "image":"laptop.jpg",
            "qatuntiy":0
      },
      {     "id":15,
            "proname":"shrit_t",
            "price":4550,
            "image":"shit_t.jpg",
            "qatuntiy":0
            
      },
      {     "id":16,
            "proname":"Hlaf jean",
            "price":5000,
            "image":"hlafjean.jpg",
            "qatuntiy":0
      },
      {     "id":17,
            "proname":"Head phone",
            "price":1800,
            "image":"headphone.jpg",
            "qatuntiy":0
      },
      {     "id":18,
            "proname":"jacket",
            "price":2500,
            "image":"jaket.jpg",
             "qatuntiy":0
            
      }
      ]
    }

    

  render() {
    return (
  
    	<div classname="App">
        <br></br>
      <div className="row mx-auto">
        <div className="col-md-4 mx-auto">
        <select class="form-control" onChange={this.shoot}>
        <option>Chosse item</option>
      {this.state.products.map((result) => {
           
          return (
        
              <option value={result.id}>{result.proname}</option>
         
        )
         })}
          </select>
        </div>
        <div className="col-md-4">
         <label>Price Enter -: </label>
         <input value="" type="text" placeholder="Price"></input>
        </div>
      </div>
  <section className="section-name padding-y-sm">
    <div className="container">
      <header className="section-heading">
        
        <h3 className="section-title">Popular products</h3>
      </header>
      <div className="row">
        {this.state.products.map((result) => {
          return (
        <div className="col-md-3">
          <div href="#" className="card card-product-grid">
            <a href="#" className="img-wrap"> <img src={"assets/img/"+result.image} /> </a>
            <figcaption className="info-wrap">
              <a href="#" className="title">{result.proname}</a>
              <div className="price mt-1">{result.price}</div> 
            </figcaption>
          </div>
        </div> 
        )
         })}
      
      </div>
    </div>
  </section>
<br></br>

</div>

      
    );
  }
}
export default App