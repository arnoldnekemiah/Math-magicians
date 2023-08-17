import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Quote from './pages/Quote';

// Layouts
import RootLayout from './Layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="quote" element={<Quote />} />
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
