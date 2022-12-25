import "./scss/style.scss"
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import Contacts from "./components/Contacts"
import SharedLayout from "./components/SharedLayout"
import Error from "./components/Error"
import Products from "./components/Products"
import SingleProduct from "./components/SingleProduct"

function App() {

  const {productId} = useParams();
  

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="products/:productId" element={<SingleProduct/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
  )
}

export default App
