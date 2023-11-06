import './App.css';
// import Home from './Home';
import Nav from './componets/pages/Nav';
import ContextApi from './ContextApi';

function App() {
  return (
    <>
     <ContextApi>
      
      <Nav/>

     </ContextApi>
    </>
  );
}

export default App;
