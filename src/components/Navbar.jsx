import React from 'react';
import { CgAddR } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { PiNotepad } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Navbar({ activeLink }) {
  const links = [
    { name: 'Home', href: '/', icon: <GoHome className='size-6' /> },
    { name: 'Create', href: '/create', icon: <CgAddR className='size-6'/> },
    { name: 'Events', href: '/events', icon: <PiNotepad className='size-6'/> },
  ];

  const history = useHistory();

    const handleButtonClick = () => {
        // Navigate to the '/about' page
        history.push('/testing');
    };


  return (
    <nav
      className={`fixed bottom-0 w-full rounded-t-lg bg-black text-white p-4 flex justify-center items-center md:justify-center md:left-auto md:p-2 md:rounded-t-lg`}
    >
      <ul className="flex flex-row gap-4">
        {links.map((link) => (
          <li
            key={link.name}
            className={`px-4 rounded-md hover:bg-gray-900 cursor-pointer transition ease-in-out duration-150 hover:-translate-y-1 hover:scale-110 ${
              activeLink === link.name ? 'bg-gray-900' : ''
            }`}
          >
            <Link href={link.href} className='flex flex-col justify-center items-center'>{link.icon}<span className="text-xs">{link.name}</span></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
