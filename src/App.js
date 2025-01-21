import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from'./navbar/navbar'
import Main from './Main/Main'
import Sobre from './Sobre/Sobre'
import Depoimentos from './Depoimentos/Depoimentos';
import Footer from './footer/footer';
import Area from './area/area'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Main />
     <Sobre />
     <Depoimentos />
     <Area />
     <Footer />
    
    </div>
  );
}

export default App;
