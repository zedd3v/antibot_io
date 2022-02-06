import React, { useState } from 'react';
import '../styles/index.module.css';
import type { NextPage } from 'next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Output from '../components/output';
import Compare from '../components/compare';
import { ParsePayload, PXPayload } from '../functions/parse';

// import './App.css';

const Home: NextPage = () => {
  const [payloads, setPayloads] = useState<{
    firstPayload: null | PXPayload;
    secondPayload: null | PXPayload;
  }>({
    firstPayload: null,
    secondPayload: null,
  });

  const parsePayloadAndOuputResult = (payloadIndex: 'firstPayload' | 'secondPayload', payload: string): void => {
    if (!['firstPayload', 'secondPayload'].includes(payloadIndex)) return;

    setPayloads({
      ...payloads,
      [payloadIndex]: ParsePayload(payload),
    });
  };

  // const updateBothPayloads = (): void => {
  //   parsePayloadAndOuputResult(
  //     'firstPayload',
  //     (document.getElementById('firstPayloadTextarea') as HTMLTextAreaElement).value
  //   );
  //   parsePayloadAndOuputResult(
  //     'secondPayload',
  //     (document.getElementById('secondPayloadTextarea') as HTMLTextAreaElement).value
  //   );
  // };

  return (
    <Row className='align-items-center justify-content-center p-3'>
      <Row className='align-items-center justify-content-center w-100 py-4 px-2 light mb-4 rounded'>
        <Col className='h-100 text-center justify-content-center align-items-center d-flex flex-column'>
          <FormControl
            as='textarea'
            rows={6}
            id='firstPayloadTextarea'
            placeholder='First Payload'
            className='light-input'
            onChange={(e): void => parsePayloadAndOuputResult('firstPayload', e.target.value)}
          />
        </Col>
        <Col className='h-100 text-center justify-content-center align-items-center d-flex flex-column'>
          <FormControl
            as='textarea'
            rows={6}
            id='secondPayloadTextarea'
            placeholder='Second Payload'
            className='light-input'
            onChange={(e): void => parsePayloadAndOuputResult('secondPayload', e.target.value)}
          />
        </Col>
      </Row>

      {payloads.firstPayload ? (
        <Row className='align-items-center justify-content-center w-100 mb-4 rounded'>
          <Col className='h-100 light justify-content-center align-items-center p-4 d-flex flex-column rounded'>
            <Output title='First Payload Data' payload={JSON.stringify(payloads.firstPayload)} />
          </Col>
        </Row>
      ) : null}

      {payloads.secondPayload ? (
        <Row className='align-items-center justify-content-center w-100 mb-4 rounded'>
          <Col className='h-100 light justify-content-center align-items-center p-4 d-flex flex-column rounded'>
            <Output title='Second Payload Data' payload={JSON.stringify(payloads.secondPayload)} />
          </Col>
        </Row>
      ) : null}

      {payloads.firstPayload && payloads.secondPayload ? (
        <Row className='align-items-center justify-content-center w-100 mb-4 rounded'>
          <Col className='h-100 light p-4 rounded'>
            <Compare firstPayload={payloads.firstPayload} secondPayload={payloads.secondPayload} />
          </Col>
        </Row>
      ) : null}
    </Row>
  );
};

export default Home;
