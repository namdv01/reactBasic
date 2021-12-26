import logo from './logo.svg';
import './App.scss';
import ListToDo from './todos/ListToDo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeComponent from './myComponent/HomeComponent';
import Nav from './nav/Nav';
import MyComponent from './myComponent/MyComponent';
import UserComponent from './myComponent/UserComponent';
import UserDetailComponent from './myComponent/UserDetailComponent';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          {/* <ListToDo /> */}
          <Switch>
            {/* <Route path="/"  element={<HomeComponent />} />
            <Route path="/todo" element={<ListToDo />} />
            <Route path="/about" element={<MyComponent />} /> */}
            <Route path="/" exact>
              <HomeComponent />
            </Route>
            <Route path="/todo" >
              <ListToDo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <UserComponent />
            </Route>
            <Route path="/user/:id">
              <UserDetailComponent />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
