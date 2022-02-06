import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import '../styles/index.module.css';

const Output = ({ title, payload }: { title: string; payload: string }): JSX.Element => {
  return (
    <div>
      <h2 className='mb-5 ml-3'>{title}</h2>
      <Row className='align-items-center justify-content-center w-100 m-0'>
        <Col className='col-12'>
          <FormControl
            as='textarea'
            rows={20}
            id={title}
            className='w-100 mb-4 light-input border'
            value={payload}
            disabled
          />
        </Col>
      </Row>
    </div>
  );
};

export default Output;
