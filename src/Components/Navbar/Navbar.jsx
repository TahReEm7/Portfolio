import { Link, NavLink } from 'react-router';
import ThemeToggle from '../../Context/ThemeContext';

const Navbar = () => {
  return (
    <div className="drawer sticky z-50 w-full bg-base-300 shadow-md">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content w-full">
        <div className="max-w-11/12 mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Tahreem
          </Link>

          {/* Desktop NavLinks */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className="hover:text-primary transition">Home</NavLink>
            <NavLink to="/about" className="hover:text-primary transition">About</NavLink>
            <NavLink to="/projects" className="hover:text-primary transition">Projects</NavLink>
            <NavLink to="/contact" className="hover:text-primary transition">Contact</NavLink>
            <ThemeToggle />
          </div>

          {/* Mobile Button */}
          <label htmlFor="nav-drawer" className="md:hidden cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
      </div>

      {/* Mobile Drawer Sidebar */}
      <div className="drawer-side z-50">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
          {/* Close button */}
        <div className='flex justify-between'>
              <Link to="/" className="text-2xl font-bold text-primary">
            Tahreem
          </Link>
          <label htmlFor="nav-drawer" className="btn btn-sm btn-circle mb-4 ml-auto">✕</label>
        </div>
        

          {/* Mobile NavLinks */}
          <li><NavLink to="/" onClick={() => document.getElementById('nav-drawer').checked = false}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => document.getElementById('nav-drawer').checked = false}>About</NavLink></li>
          <li><NavLink to="/projects" onClick={() => document.getElementById('nav-drawer').checked = false}>Projects</NavLink></li>
          <li><NavLink to="/contact" onClick={() => document.getElementById('nav-drawer').checked = false}>Contact</NavLink></li>
          <li className="mt-2"><ThemeToggle /></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
