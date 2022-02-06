import React from 'react';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/index.module.css';

const Navbar = (): JSX.Element => {
  return (
    <Row className='justify-content-center pt-4 mb-3'>
      <Col className='text-center col-12 d-flex align-items-center justify-content-center'>
        <Image src='https://i.imgur.com/2r7IhK3.png' alt='logo' width='64' height='64' />
      </Col>
    </Row>
  );
};

export default Navbar;
