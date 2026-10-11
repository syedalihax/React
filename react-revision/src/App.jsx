import { useContext, useState } from 'react';
import UserProvider from './context/UserProvider';
import UserContext from './context/UserContext';
import CartContext from './context/CartContext';
import CartProvider from './context/CartProvider';


function Profile() {
  const { user, loading, change } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <p>{user.name}'s Profile</p>
          <button disabled={loading} onClick={() => change()}>{loading ? 'Processing... ' : 'change name'}</button>

        </div>
      ) : (
        <p>Login required</p>
      )}

    </div>
  );
}

function UserMenu() {
  const userData = {
    name: 'Ali',
    email: 'ali@gmail.com',
  };
  const { user, login, logOut, loading, register, change } = useContext(UserContext);


  return (
    <div>
      <h3>User Menu</h3>

      {user ? (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button disabled={loading} onClick={() => logOut()}>{loading ? 'Processing...' : 'LogOut'}</button>

        </>
      ) : (
        <>
          <p>Login / Register</p>

          <button
            disabled={loading}
            onClick={() => login(userData)}
          >
            {loading ? 'Processing...' : 'Login'}
          </button>

          {!loading &&
            <button
              disabled={loading}
              onClick={() => register(userData)}
            >
              Register
            </button>
          }
        </>
      )}
    </div>
  );
}

function Navbar() {
  const { cartItem, } = useContext(CartContext)
  const [isCart, setIsCart] = useState(false)
  return (
    <>
      {isCart ? <div>
        <button onClick={() => { setIsCart(false) }}>hide</button>
        {cartItem.length === 0 ? 'Your Cart is Empty' : <Cart />}
      </div> :
        <nav>
          <h2>Navbar</h2>
          <UserMenu />
          <button
            onClick={() => {
              setIsCart(true)
            }}>Cart {cartItem.length}</button>
        </nav>}
    </>
  );
}
function Cart() {
  const { cartItem, removeProduct } = useContext(CartContext)
  return (
    <div>
      {cartItem.map((product, index) => {
        return <Card key={index} name={product.name} brand={product.brand} price={product.price} id={product.id} action={() => removeProduct(product.id)} button='Remove' />
      })}

    </div>
  )
}
function Card({ name, brand, price, id, action, button }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{brand}</p>
      <p>{price}</p>
      <button onClick={action}>{button}</button>
    </div>
  );
}

function ProductList() {
  const { products, addProduct } = useContext(CartContext)
  return (
    <div>
      <h2>Product List</h2>

      {products.map((product, index) => {
        return <Card key={product.id} name={product.name} brand={product.brand} price={product.price} id={product.id} action={() => addProduct(product)} button='Add to Cart' />
      })}
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ProductList />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Sidebar</h3>
      <Profile />
    </div>
  );
}

function Main() {
  return (
    <div>
      <h1>Main</h1>

      <div className="flex">
        <Dashboard />
        <Home />
      </div>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <CartProvider>

        <div className="flex">
          <Navbar />
          <Main />
        </div>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
