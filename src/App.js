import './App.css';
import List from "./components/list/List"
import Chat from "./components/chats/Chat"
import Details from "./components/details/Details"
import Login from "./components/login/Login"
import Notification from './components/notification/Notification';
// import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'

// import { useRefresh } from 'react-refresh';



function App() {

  const user = 10;
  const reload = 0;
  // const [reload, setReload] = useState(1-1);

  // const handleReload = () => {
  //   setReload((prev) => {
  //     return !prev
  //   })
  // }

  return (
    <div className={reload ? "preloader" : "container"}>
      {reload ? <><figure><img src=".\ai-loader.gif"/><figcaption>Chatsapp<ThreeDots height="40"
        width="40"
        radius="10"
        color="pink"
      /></figcaption></figure></> : <>{user ? (<><List /><Chat /><Details /></>) : (<Login />)}</>}
      <Notification />
    </div>
  );
}

export default App;
