import Header from "./components/Layout/Header";
import { useState} from 'react';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHendler = ()=>{
    setCartIsShown(true)
  }

  const hideCartHendler = ()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHendler}/>}
      <Header onShowCart={showCartHendler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
