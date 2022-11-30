import ShoppingCart from './components/ShoppingCart'
import Store from './components/Store'
import './App.css'
const App:React.FC = () => {
  return (
    <div className='App'>
      <span className='heading'>Ambitious Manga Store</span>
      <Store/>
      <ShoppingCart/>
    </div>
  )
}

export default App