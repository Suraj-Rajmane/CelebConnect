import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="app">
      <Route exact path="/">
        <Login setName={setName} setImage={setImage} setFirstName={setFirstName}/>
      </Route>

      <Route path="/profile">
        <Profile name={name} image={image} firstName={firstName} />
      </Route>
    </div>
  );
}

export default App;
