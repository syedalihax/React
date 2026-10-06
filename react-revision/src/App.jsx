import { useState } from 'react'

function Main({ userData, cart, theme }) {
  return (
    <div>
      <h1>Main</h1>
      <div className='flex'>
        <Dashboard user={userData} theme={theme} />
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
function Dashboard({ user, theme }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <SideBar data={user} />
      <Footer theme={theme} />
    </div>
  )
}
function SideBar({ data }) {
  return (
    <div>
      <h3>Side Bar</h3>
      <Profile user={data} />
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
function Profile({ user }) {
  return (
    <div>
      <p> {user.name}'s Profile</p>
    </div>
  );
}

function Navbar({ userData, notifications }) {
  return (
    <nav>
      <h2>Navbar</h2>
      <UserMenu user={userData} />
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
function UserMenu({ user }) {
  return (
    <div>
      <h3>User Menu</h3>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

const App = () => {

  const user = {
    name: "Ali",
    email: "ali@gmail.com"
  };

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
      <Navbar userData={user} notifications={notifications} />
      <Main userData={user} cart={cart} theme={theme} />

    </div>
  )
}

export default App
