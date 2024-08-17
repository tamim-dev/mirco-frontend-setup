import { useEffect, useRef, useState } from 'react';
import { BiSupport } from 'react-icons/bi';
import { FaChalkboardUser } from 'react-icons/fa6';
import { IoMdArrowDropdown, IoMdCloudyNight } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';
import { MdNotificationsActive } from 'react-icons/md';
import { VscSignOut } from 'react-icons/vsc';
import { WiDaySunny } from 'react-icons/wi';
import { Link } from 'react-router-dom';

import logo from 'assets/images/aspire-logo.png';
import profile from 'assets/images/profile-img.png';
import language_flag from 'assets/images/usa-flag.png';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="fixed z-10 mb-5 flex w-full justify-between bg-secondary px-4 py-3 text-white">
      <div className="flex items-center gap-x-8">
        <div>
          <img width="50" src={logo} alt="Aspire Logo" />
        </div>
        <div className="flex h-full py-2">
          <input
            placeholder="Search..."
            className="rounded-l-md pl-4 text-secondary"
          />
          <IoSearchSharp className="h-full rounded-r-md bg-white px-1 text-3xl text-secondary" />
        </div>
        <div className="flex items-center gap-7 text-2xl text-white">
          <MdNotificationsActive />
          <BiSupport />
          <FaChalkboardUser />
        </div>
      </div>
      <div className="flex items-center gap-10">
        <p className="flex items-center">
          Help <IoMdArrowDropdown />
        </p>
        <p className="flex items-center">
          Create new <IoMdArrowDropdown />
        </p>
        <p className="flex items-center">
          <img className="rounded" src={language_flag} alt="Language" />
        </p>
        <div
          ref={dropdownRef}
          className="flex items-center"
          onClick={toggleDropdown}
        >
          <div className="rounded-full bg-white p-1">
            <img
              width="40"
              src={profile}
              alt="Profile Image"
              className="rounded-full"
            />
          </div>
          <p className="ml-1.5 flex items-center">
            Super Admin <IoMdArrowDropdown />
          </p>
          {dropdownVisible && (
            <div className="absolute right-5 top-[72px] z-20 rounded-md bg-white p-5 text-secondary shadow-custom_shadow">
              <div className="flex items-center gap-5">
                <img
                  className="w-[80px] rounded-full"
                  src={profile}
                  alt="Profile Image"
                />

                <div>
                  <h3 className="text-lg font-medium">Adam Tanjil</h3>
                  <p className="mt-1">CTO</p>
                  <p>tanjil@aspiretss.com</p>
                  <Link to="#" className="mt-2.5 text-primary">
                    View profile settings
                  </Link>
                </div>
              </div>

              <div className="mb-6 mt-12 flex items-center font-medium">
                <div className="mr-2.5 h-8 w-8 rounded-sm bg-primary"></div>{' '}
                Organization Theme{' '}
              </div>

              <div className="flex justify-between">
                <div
                  className={`flex w-20 cursor-pointer items-center rounded-full p-1 ${
                    darkMode
                      ? 'justify-end bg-secondary'
                      : 'justify-start bg-gray-300'
                  }`}
                  onClick={toggleTheme}
                >
                  {darkMode ? (
                    <IoMdCloudyNight className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-1 shadow-md" />
                  ) : (
                    <WiDaySunny className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-1 shadow-md" />
                  )}
                </div>

                <button className="flex rounded bg-primary px-3 py-1.5 text-white">
                  <VscSignOut className="text-2xl" /> Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
