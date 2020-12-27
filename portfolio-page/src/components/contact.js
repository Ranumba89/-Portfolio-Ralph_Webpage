import {Container, Row,Col, Jumbotron, Nav} from 'react-bootstrap'
import Resume from "../util/Full Stack Resume2.pdf"
import group from "../util/grouping.jpg"
const Contact = ()=>{
    return <div>
        <Jumbotron fluid>
  <Container>
    <h1>Contact</h1>
  </Container>
</Jumbotron>
<Container fluid>
  <Row>
    <Col lg sm= "9" >
    <ul class="nav nav-pills nav-justified">
        <li class="nav-item">
          <a class="nav-link active" href="https://github.com/Ranumba89">GitHub-Page</a>
        </li>
        <li class="nav-item">
        <Nav.Link href={Resume}>Resume</Nav.Link>
        </li>
        </ul>
    </Col>
    </Row>
    <Row>
    <Col lg = "12" >
    <img src={group} alt="GROUP Meeting"/>

    </Col>
    </Row>
    </Container>
    </div>
}
export default Contact;