import { useState } from 'react';
import { FaUsersLine } from 'react-icons/fa6';
import { MdDashboard, MdSettings } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleLinkClick = (path: string) => {
    setActivePath(path);
  };

  return (
    <div className="fixed flex h-screen w-[4%] flex-col items-center gap-10 bg-white px-4 pt-5 text-2xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
      <Link
        to="/home"
        onClick={() => handleLinkClick('/home')}
        className={`rounded p-1 ${
          activePath === '/home' ? 'bg-secondary text-white' : ''
        }`}
      >
        <MdDashboard className="text-3xl" />
      </Link>
      <Link
        to="/child"
        onClick={() => handleLinkClick('/child')}
        className={`rounded p-1 ${
          activePath === '/child' ? 'bg-secondary text-white' : ''
        }`}
      >
        <FaUsersLine className="text-3xl" />
      </Link>
      <Link
        to="/not"
        onClick={() => handleLinkClick('/not')}
        className={`rounded p-1 ${
          activePath === '/not' ? 'bg-secondary text-white' : ''
        }`}
      >
        <MdSettings className="text-3xl" />
      </Link>
    </div>
  );
};

export default Sidebar;
