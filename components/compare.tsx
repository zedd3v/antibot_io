import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import { PXPayload } from '../functions/parse';

const Compare = ({ firstPayload, secondPayload }: { firstPayload: PXPayload; secondPayload: PXPayload }) => {
  return (
    <div className='p-3'>
      <Row className='align-items-center justify-content-center w-100 mb-3 rounded'>
        <Col className='col-6 h-100 light justify-content-center align-items-center p-4 d-flex flex-column rounded'>
          <h2 className='mb-3'>First Payload Steps</h2>
          <h5>{Object.keys(firstPayload).join(', ')}</h5>
        </Col>
        <Col className='col-6 h-100 light justify-content-center align-items-center p-4 d-flex flex-column rounded'>
          <h2 className='mb-3 mt-2'>Second Payload Steps</h2>
          <h5>{Object.keys(secondPayload).join(', ')}</h5>
        </Col>
      </Row>

      <h2 className='mb-3'>Step Differences</h2>
      {Array.from(new Set([...Object.keys(firstPayload), ...Object.keys(secondPayload)])).map((step) => {
        const borderColor = /* value ? 'border-success' : */ 'border-warning';
        const className = `w-100 mb-4 light-input text-center border ${borderColor}`;
        return (
          <Row key={step}>
            <Col className='col-6'>
              {step in firstPayload ? (
                <>
                  <label className='mt-1' htmlFor={step}>
                    {step}
                  </label>
                  <FormControl size='sm' id={step} className={className} value={step} disabled />
                </>
              ) : null}
            </Col>
            <Col className='col-6'>
              {step in secondPayload ? (
                <>
                  <label className='mt-1' htmlFor={step}>
                    {step}
                  </label>
                  <FormControl size='sm' id={step} className={className} value={step} disabled />{' '}
                </>
              ) : null}
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Compare;
