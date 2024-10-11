import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Import navigation bar from components
import NavigationBar from './components/Navbar';
//import header, footer and content from components
//Importing create and read
import Create from './components/Create';
import Read from './components/Read';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

//Prints content, footr and header. footer in  localhost:read and header in create
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Read/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </Router>
  );
}

export default App;