import './App.css';
import 'react-toastify/dist/ReactToastify.css';

//React router
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //BrowserRouter = Defino cuales componentes van a verse involucrados en este trabajo , Routes = Que componentes van atener rutas , Route= Defino la ruta
//Components 
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
import { Footer } from './Footer/Footer';

//Toastify
import { ToastContainer} from 'react-toastify';
//Firebase
//import { cargarBDD } from '../utils/firebase';
//import { updateProducto, deleteProduct } from '../utils/firebase';
import { CarritoProvider } from '../context/CarritoContext';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:idCategoria' element={<ItemListContainer />} />

              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/checkout' element={<Checkout />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
            </Routes>
            <ToastContainer/>
            <Footer/>
        </CarritoProvider>
      </BrowserRouter>


    </>
  )
}