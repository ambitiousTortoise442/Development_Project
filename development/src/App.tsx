import ShoppingCart from './components/ShoppingCart'
import Store from './components/Store'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SiFoodpanda } from "../node_modules/react-icons/si";
import './App.css'
import { useState } from 'react';
import item from './model';


const App: React.FC = (): JSX.Element => {
  //States
  const [cart, setCart] = useState<item[]>([]);
  const [total, updateTotal] = useState(0);

  //Increment the cart total
  function addTotal(store_item: item) {
    updateTotal(total + store_item.price)
  }
  //Update cart map 
  function addCart(store_item: item) {
    setCart([...cart, store_item])
  }
  //function for onClick inside Store Item Component
  const handleClick = (store_item: item): void => {
    addTotal(store_item)
    addCart(store_item)
  }
  //@ts-ignore
  return (
    <div className='App'>
      <div className='heading_container'>
        <SiFoodpanda className='heading_img' />
        <span className='heading'>Ambitious Manga Store</span>
      </div>

      <Container>
        <Row>
          <Col><div>Store Controls</div></Col>
        </Row>
        <Row>
          <Col>
            {/* 
            // @ts-ignore */}
            <Store handleClick={handleClick} />
          </Col>
          <Col>
            {/* 
            // @ts-ignore */}
            <ShoppingCart cart={cart} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App