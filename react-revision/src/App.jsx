import { createContext, useContext, useState } from 'react'
import UserProvider from './context/UserProvider'
import UserContext from './context/UserContext'

function Main({ cart, theme }) {
  return (
    <div>
      <h1>Main</h1>
      <div className='flex'>
        <Dashboard theme={theme} />
        <Home cart={cart} />
      </div>
    </div>
  )
}
function Home({ cart }) {
  return (
    <div>
      <h2>Home</h2>
      <ProductList cart={cart} />
    </div>
  )
}
function ProductList({ cart }) {
  return (
    <div>
      <h2>Product List</h2>
      <Card cart={cart} />
    </div>
  )
}
function Card({ cart }) {
  return (
    <div>
      <h3>{cart.title}</h3>
      <p>{cart.des}</p>
      <p>Brand: {cart.brand}</p>
      <p>Stock: {cart.items}</p>
      <p>{cart.price} PKR</p>
    </div>
  )
}
function Dashboard({ theme }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <SideBar />
      <Footer theme={theme} />
    </div>
  )
}
function SideBar({ data }) {
  return (
    <div>
      <h3>Side Bar</h3>
      <Profile />
    </div>
  )
}
function Footer({ theme }) {
  return (
    <div>
      <h2>Footer</h2>
      <p>theme: {theme}</p>
    </div>
  )
}
function Profile() {
  const { user } = useContext(UserContext)
  return (
    <div>
      {user ? <p>{user.name}'s Profile</p> : <p>Login required</p>}
    </div>
  );
}

function Navbar({ notifications }) {
  return (
    <nav>
      <h2>Navbar</h2>
      <UserMenu />
      <Notify notifications={notifications} />
    </nav>
  );
}
function Notify({ notifications }) {
  return (
    <div>
      <h2>Notification</h2>
      {notifications.map((notification, index) => {
        return (
          <p key={index}>{notification}</p>
        )
      })}
    </div>
  )
}
function UserMenu() {

  const userData = {
    name: "Ali",
    email: "ali@gmail.com"
  };
  const { user, login, logOut, loading, register } = useContext(UserContext)
  return (
    <div>
      <h3>User Menu</h3>
      {user ? <p>{user.name}</p> : <p>Login / Register</p>}
      {user && <p>{user.email}</p>}
      {!user ?
        <div>
          <button disabled={loading} onClick={() => { login(userData) }}>{loading ? 'Processing...' : 'Login'}</button>
          {!loading && <button disabled={loading} onClick={() => { register(userData) }}>register</button>}

        </div>

        :
        <button onClick={() => { logOut() }}>LogOut</button>

      }
    </div>
  );
}

const App = () => {
  const cart = {
    title: 'iphone 13 pro',
    des: 'new',
    brand: 'iphone',
    items: 3,
    price: '120000'
  };

  const theme = "dark";

  const notifications = [
    "New order",
    "Payment received",
    "order received",
    "order delivered"
  ];

  return (
    <div className='flex'>

      <UserProvider>
        <Navbar notifications={notifications} />
        <Main cart={cart} theme={theme} />
      </UserProvider>

    </div>
  )
}

export default App
