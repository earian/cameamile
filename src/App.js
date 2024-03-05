import './style.css'
import Header from './components/Header';
import MainLanding from './components/MainLanding';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import ProductPage from './components/product-page.jsx';
import SideMenu from './components/sidebarmenu';
import AboutUs from './components/aboutUs';
import Products from './components/products';


const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLanding />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/products/sweatshirts',
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
