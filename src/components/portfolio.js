
import {Container, Card, Jumbotron, Row, Col} from 'react-bootstrap'
import ProjecOne from "../util/project1.gif"
import MedicBud from "../util/medicBud-g.gif"
import SongSnip from "../util/snipPagelogin.png"
import {nbSpace} from "../util/constraints"

const Portfolio = ()=>{
    return <div>

<Jumbotron fluid>
  <Container>
    <h1>Portfolio</h1>
  </Container>
</Jumbotron>

<Card>
  <Card.Header>Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Your Will is the most accurate way to predict the Future
{' '}
      </p>
      <footer className="blockquote-footer">
      Elon Musk <cite title="Source Title"></cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
<Container fluid>
  <Row>
    <Col lg= "12" >
    <h2>5StarRecipes</h2>
    <img src={ProjecOne} alt="5starapp"/>
                <p> A search application that retrieves recipes based on what type of ingredient the user inputs.
                  My responsibility with the project was to help with the Javascript logic. More specifically with the food allergy filtering
                  Javascript, and bootstrap was used. 
                   </p>
            <br/><a href="https://tajohnsonn.github.io/5StarRecipes/" class="btn btn-primary">5StarRecipes</a>{nbSpace(1)}
            <a href="https://github.com/tajohnsonn/5StarRecipes" class="btn btn-primary">GitHub-link-to-Repo</a>
    </Col>

  </Row>
  <Row>
    <Col lg= "12" >
    <img src={MedicBud} alt=""/>
                <p>Wow, I have a lot of ideas about this for the future, I really want hone in this but for now this is a great start ! Check this project out! </p>
                <a href ="https://murmuring-shore-74149.herokuapp.com/" class="btn btn-primary">MedicBud</a>{nbSpace(1)}
                <a href="https://github.com/Rauloropesa3/Project2" class="btn btn-primary">GitHub-link-to-Repo</a>
        </Col>
        </Row>

        <Row>
    <Col lg= "12" >
    <img src={SongSnip} alt=""/>
                <p>SongSnip is an application that allows users to listen to and save the best parts of their favorite songs. </p>
                <a href ="https://tranquil-ocean-58611.herokuapp.com/" class="btn btn-primary">SnipSong</a> {nbSpace(1)}
                <a href="https://github.com/mbshepard/Project3" class="btn btn-primary">GitHub-link-to-Repo</a>
        </Col>
        </Row>
</Container>
    </div>
}

export default Portfolio;