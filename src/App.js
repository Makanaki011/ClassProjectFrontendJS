import "./App.css";
import Section1 from "./components/Section1";
import { Container, Row, Col } from "react-bootstrap";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <div className="main">
              <Section1 />
            </div>
            <div className="sub-main">
              <Section2 />
            </div>
            <Testimonial />
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
