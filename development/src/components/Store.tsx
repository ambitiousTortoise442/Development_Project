import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../bootstrap.css'
import './styles.css'
import StoreItem from './StoreItem'

interface Props {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// @ts-ignore
const Store: React.FC<(props: Props) => JSX.Element>= (props: Props): JSX.Element => {
  return (
    <div className='store_contents'>
      <Container>
        <Row>
          <Col>
            <StoreItem
              handleClick={props.handleClick}
              name={"Tokyo Ghoul"}
              price={15}
              genre={"thriller"}
              count={0} />
          </Col>
          <Col>
            <StoreItem
              handleClick={props.handleClick}
              name={"Tokyo Ghoul"}
              price={15}
              genre={"thriller"}
              count={0} />
          </Col>
        </Row>
        <Row>
          <Col>
            <StoreItem
              handleClick={props.handleClick}
              name={"Tokyo Ghoul"}
              price={15}
              genre={"thriller"}
              count={0} />
          </Col>
          <Col>
            <StoreItem
              handleClick={props.handleClick}
              name={"Tokyo Ghoul"}
              price={15}
              genre={"thriller"}
              count={0} />
          </Col>
        </Row>
        <Row>
          <Col>
            <StoreItem
              handleClick={props.handleClick}
              name={"Tokyo Ghoul"}
              price={15}
              genre={"thriller"}
              count={0} />
          </Col>
          <Col>
            <StoreItem
              handleClick={props.handleClick}
              name={"Tokyo Ghoul"}
              price={15}
              genre={"thriller"}
              count={0} />
          </Col>
        </Row>
      </Container>
    </div >

  )
}

export default Store