import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Import navigation bar from components
import NavigationBar from './components/Navbar';
//import header, footer and content from components
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

//Prints content, footr and header. footer in  localhost:read and header in create
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Footer/>} />
        <Route path="/create" element={<Header/>} />
      </Routes>
    </Router>
  );
}

export default App;