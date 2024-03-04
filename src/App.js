import './style.css'
import Header from './components/Header';
import MainLanding from './components/MainLanding';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import ProductPage from './components/product-page.jsx';
import SideMenu from './components/sidebarmenu';
import AboutUs from './components/aboutUs';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLanding />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    path: '/about-us',
    element: <AboutUs />
  }
])
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={route} />
      <SideMenu />
    </>
  );
}

export default App;
