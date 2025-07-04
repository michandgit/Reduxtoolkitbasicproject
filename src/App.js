import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <>
   < Header/>
    {isAuthenticated && <UserProfile/>}
    {!isAuthenticated && <Auth/>}
   
     <Counter />
    </>
   
  );
}

export default App;
