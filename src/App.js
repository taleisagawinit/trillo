import React from 'react';
import './app.scss';
import AvatarIcon from './components/avatar-icon/AvatarIcon';
// import { BiBookmark, BiConversation } from "react-icons/bi";


function App() {
  return (
    <div>
      <AvatarIcon alt={"avatar icon"} img={"/img/user.jpg"} name={"Jonas"} />
    </div>
  );
}

export default App;
