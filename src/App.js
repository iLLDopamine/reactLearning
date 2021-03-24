import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogos/Dialogs';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className = 'app-wrapper'>
        <Header />
        <Navbar />
        <div className = "app-wrapper-content">
          <Route path = '/profile' render = { () => <Profile postsData = { props.postsData } /> } />
          <Route path = '/dialogs' render = { () => <Dialogs dialogsData = { props.dialogsData } messagesData = { props.messagesData } /> } />
          <Route path = '/news' render = { News } />
          <Route path = '/music' render = { Music } />
          <Route path = '/settings' render = { Settings } />
        </div>
        
      </div>
    </BrowserRouter>
  );
}
export default App;
