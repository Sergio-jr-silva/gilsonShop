import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from'./navbar/navbar'
import Main from './Main/Main'
import Sobre from './Sobre/Sobre'
import Depoimentos from './Depoimentos/Depoimentos';
import Footer from './footer/footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Main />
     <Sobre />
     <Depoimentos />
     <Footer />
    </div>
  );
}

export default App;
