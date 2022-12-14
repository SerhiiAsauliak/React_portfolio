import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";

export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
        <a className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav("#")} href="#" alt="home-icon">
          <AiOutlineHome />
        </a>
        <a className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav("#about")} href="#about" alt="user-icon">
          <AiOutlineUser />
        </a>
        <a className={activeNav === '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio')} href="#portfolio" alt="book-icon">
          <BiBookBookmark />
        </a>
        <a className={activeNav === '#contacts' ? 'active' : ''} onClick={() => setActiveNav('#contacts')} href="#contacts" alt="message-icon">
          <MdOutlineMessage />
        </a>
    </nav>
  );
};
