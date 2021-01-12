import {Container, Row,Col, Jumbotron} from 'react-bootstrap'
import '../style.css';
import ralph from "../../util/IMG_0501.JPG"
import BrandStatement from './brandStatement';
const Home = ()=>{
return <div>
    <Jumbotron fluid>
  <Container>
    <h1>Ralph-Ugo</h1>
    <p>
    I enjoy coding innovative ideas, that makes life easier.
    </p>
  </Container>
</Jumbotron>
    <Container fluid>
  <Row>
      <div className="homeStyle">
    <Col sm md= "12" >
    <h1>Brand Statement</h1>
  <img src={ralph} alt="Coach Ralph"/>
    <h2><i>Road to a new world</i></h2>
<BrandStatement/>
</Col>
    
    </div>
  </Row>
</Container>
</div>
}
export default Home;