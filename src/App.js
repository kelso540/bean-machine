import './App.css';
import './Selection.css';
import Nav from './sections/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './sections/Footer';
import Middle from './sections/Middle';
import Selections from './sections/Selections';
import About from './sections/About';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={ <Middle /> }/>
        <Route path='/selections' element={ <Selections /> }/>
        <Route path='/about' element={ <About /> }/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
