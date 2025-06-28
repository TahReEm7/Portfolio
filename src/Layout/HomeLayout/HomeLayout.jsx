import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import GlobalLoader from '../../Components/Loader/Loader';

const HomeLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1 second on mount
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div >
      <Navbar />
      <main>
        {loading ? <GlobalLoader /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
