import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App';
import { NavBar } from './components/NavBar';
import { NotFound } from './pages/NotFound';
import { VideosPage } from './pages/VideosPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="galeria" element={<VideosPage />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);