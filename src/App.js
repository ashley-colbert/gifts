import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Gifts1 from './pages/Gifts1';
import Gifts2 from './pages/Gifts2';
import Gifts3 from './pages/Gifts3';
import Gifts4 from './pages/Gifts4';
import Home from './pages/Home';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gifts1" element={<Gifts1 />} />
          <Route path="gifts2" element={<Gifts2 />} />
          <Route path="gifts3" element={<Gifts3 />} />
          <Route path="gifts4" element={<Gifts4 />} />
          <Route path="gifts5" element={<Gifts4 />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
