import React from 'react';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navbar = (): JSX.Element => {
  return (
    <Row className='justify-content-center pt-4 mb-3'>
      <Col className='text-center col-12 d-flex align-items-center justify-content-center'>
        <Image src='/logo.png' alt='logo' width='32' height='32' />
      </Col>
    </Row>
  );
};

export default Navbar;
