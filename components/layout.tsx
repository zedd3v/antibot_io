import React, { ReactNode } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from './navbar';
import Footer from './footer';
import '../styles/index.module.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='h-100'>
      <Container fluid className='h-100'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Container>
    </div>
  );
}
