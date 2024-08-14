
import './App.css';
import List from "./components/list/List"
import Chat from "./components/chats/Chat"
import Details from "./components/details/Details"

function App() {
  return (
    
    <div className="container">
      <List/>
      <Chat/>
      <Details/>

    </div>
  );
}

export default App;
