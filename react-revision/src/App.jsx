import { useContext } from 'react';
import UserProvider from './context/UserProvider';
import UserContext from './context/UserContext';


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
  return (
    <nav>
      <h2>Navbar</h2>
      <UserMenu />
    </nav>
  );
}

function Card() {
  return (
    <div>
      <h3>Product Card</h3>
      <p>Product details will go here.</p>
    </div>
  );
}

function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <Card />
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
      <div className="flex">
        <Navbar />
        <Main />
      </div>
    </UserProvider>
  );
}

export default App;
