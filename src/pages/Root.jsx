import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  const menuListArr = [
    {
      name: 'Project Setting',
      path: '/project'
    },
    {
      name: 'Accounts',
      path: '/accounts'
    },
    {
      name: 'Model',
      path: '/model'
    }
  ]

  const [menuList, setMenuList] = useState(menuListArr)

  return (
    <div className='main-wrapper'>
      <div className='side-bar'>
        <Link className='link' to='/'><h3>😮‍💨 react-router-prac</h3></Link>
       
        <p className='menu-list'>
          {menuList.map((path) => (
            <Link className='link' key={path.path} to={path.path}>{path.name}</Link>
          ))}
        </p>

      </div>
      <div className='main-body'>
        <Outlet />
      </div>
    </div>
  )
}


