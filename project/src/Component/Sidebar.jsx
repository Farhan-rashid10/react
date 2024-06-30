import React, { Children } from 'react';
import {
  GenIcon,
  DefaultContext,
  IconBase,
  IconContext,
  IconsManifest
} from 'react-icons'


function Sidebar({Children}) {
  const menuItem = [
    {
      path:"/Dashboard",
      name:"dashboard",
      icon:<GenIcon />
    },
    {
      path:"/About",
      name:"about",
      icon:<DefaultContext />
    },
    {
      path:"/Analytics",
      name:"analytics",
      icon:<IconBase />
    },
    {
      path:"/Comment",
      name:"comment",
      icon:<IconContext />
    },
    {
      path:"/Product",
      name:"product",
      icon:<IconsManifest />
    }
  ]
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top-section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
          </div>
        </div>
        {
          menuItem.map((item , index)=>(
            <navLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </navLink>
          ))
        }
      </div>
      <main>{Children}</main>
    </div>
  );
}

export default Sidebar;
