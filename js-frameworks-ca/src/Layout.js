// Layout.js
import React from 'react';
import Footer from './Footer';
import './css/Layout.css';

function Layout({ children, header }) {
  return (
    <div className="layout">
      {header}
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
