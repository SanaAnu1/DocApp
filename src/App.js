import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { app, database } from './firebaseConfig';
import { Routes, Route } from "react-router-dom";
import { Edit } from '@mui/icons-material';
import EditDocs from './pages/EditDocs';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home database={database}></Home>}></Route>
         <Route  path="/editDocs/:id" element={<EditDocs database={database}/>} ></Route>
       </Routes>
    </div>
  );
}

export default App;
