import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';
import { LayoutStyled } from './Container/Layout.styled';

export const Layout = () => {
  return (
    <LayoutStyled
      style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </LayoutStyled>
  );
};
