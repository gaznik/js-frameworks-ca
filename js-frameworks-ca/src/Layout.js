import React from 'react';
import Footer from './Footer';
import './css/Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
