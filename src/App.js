import Avatar from './Avatar';
import './App.css';
import avatar from './Avatar'

function App() {
  return (
    <div className="App">
      <Avatar {...avatar}/>
      <Avatar {...avatar}/>
    </div>
  );
}

export default App;
