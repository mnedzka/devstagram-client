import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { AuthProvider } from './Components/Context/AuthContext';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
