import './css/style.css';
import Home from './pages/Home';
// import { BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Home /> 
    </div>
  );
}

export default App;


// Routing

{/* <Router>
        <Switch>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                <Signin />
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                <Signup />
            </IsUserRedirect>
            <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                <Browse />
            </ProtectedRoute>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                <Home />
            </IsUserRedirect>
        </Switch>
    </Router> */}