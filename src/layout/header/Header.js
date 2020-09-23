import React from 'react';
import LogoIcon from '../../components/logo-icon/LogoIcon';
import NotificationIcon from '../../components/notification-icon/NotificationIcon';
import AvatarIcon from '../../components/avatar-icon/AvatarIcon';
import Searchbar from '../../components/searchbar/Searchbar';
import { IoIosBookmark, IoIosChatboxes } from "react-icons/io";


export default function Header(props) {
  return (
    <header className="header">
      <div className={"header__logo"}>
        <LogoIcon img={"/img/logo.png"} />
      </div>
      <div className="header__user">
        <NotificationIcon icon={<IoIosBookmark/>} number={"7"} />
        <NotificationIcon icon={<IoIosChatboxes/>} number={"13"} />
        <AvatarIcon img={"/img/user.jpg"} alt={"user img"} name={"Jonas"} />
      </div>
      <div className="header__search">
        <Searchbar />
      </div>
    </header>
  )
}