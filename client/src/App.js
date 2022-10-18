import './App.css';
import Header from './Components/Header/header'
import Main from './Components/Main/Main'
import QueryForm from './Components/QueryForm/QueryForm'
import Footer from './Components/Footer/footer'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="Warp">
      <Header/>
      <Routes>
      <Route path='/'>
          <Route index element={<Main/>} />
       </Route>
       <Route path='/queryform'>
          <Route index element={<QueryForm/>} />
       </Route>
      </Routes>
      <Footer Text="Тестовое задание"/>
    </div>
  );
}

export default App;
