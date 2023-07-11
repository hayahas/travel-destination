import Footer from '../footer/Footer';
import Header from '../header/Header';
import Tours from '../tours/Tours';

import db from '../../data/db.json';
function Home(){
  
    
    return( 
    <div>
      
    <Header/>
    {
        db.map((obj, i) => (
          <Tours  name={obj.name} image={obj.image} />
        ))
      }
    <Footer/>
    </div>
    );
}

export default Home;