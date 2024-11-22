import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Gifts1 from './pages/Gifts1';
import Gifts2 from './pages/Gifts2';
import Gifts3 from './pages/Gifts3';
import Gifts4 from './pages/Gifts4';
import Gifts5 from './pages/Gifts5';
import Gifts6 from './pages/Gifts6';
import Custom from './pages/Custom';
import Home from './pages/Home';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="deals" element={<Gifts1 />} />
          <Route path="kids" element={<Gifts2 />} />
          <Route path="teens" element={<Gifts3 />} />
          <Route path="pets" element={<Gifts4 />} />
          <Route path="vinyl" element={<Gifts5 />} />
          <Route path="parents" element={<Gifts6 />} />
          <Route path="custom" element={<Custom />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
