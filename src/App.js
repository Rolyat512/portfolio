import './App.css';
import {Background, About, Experience } from './components';
import Portfolio from './components/Portfolio/Portfolio';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



const  App = () => 
    <div className="App">
      <Background /> 
      <Header></Header>
      <About />
      {/* <Experience /> */}
      <Footer></Footer>

    </div>


export default App;
