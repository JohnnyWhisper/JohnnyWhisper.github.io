
import './App.css';
import Profile from  './components/Profile/Profile';
import Statistics from  './components/Statistics/Statistics.jsx';
import FriendList from './components/Friends/Friendlist.jsx';
import TransitionHistory from './components/Transaction/TransactionHistory.jsx';

function App() {
  return (
    <div className="App">
     
     <Profile/>
     <Statistics/>
     <FriendList/>
     <TransitionHistory/>

    </div>
  );
}

export default App;
