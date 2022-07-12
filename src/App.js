import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './components/login';
import Signup from './components/signup';
import {UserAuthContextProvider} from "./context/userAuthContext"

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
