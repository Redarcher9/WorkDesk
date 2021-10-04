import {Card,Button, Container, Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/featuresStyles.css"

function features():JSX.Element {
    return(
        <div className="featuresclass">
        <Container>
            <Row className="justify-content-center">
                <Col md={{ span: 3, offset: 0 }}>
                    <Card className="featurecard">
                        <Card.Title > TODO</Card.Title>
                        <Card.Text >
                                Create a Todo list to keep a track on your tasks.
                        </Card.Text>
                            <Link to="/todos" id="featurebutton">
                                <Button variant="primary">
                                Get Started
                                </Button>
                            </Link>
                    </Card>
                </Col>
                <Col md={{ span: 3, offset: 3 }}>
                    <Card className="featurecard">
                        <Card.Title >  NOTES</Card.Title>
                        <Card.Text >
                                Store long notes to keep everything at one place.
                        </Card.Text>
                            <Link to="/notes" id="featurebutton">
                                <Button variant="primary">
                                Get Started
                                </Button>
                            </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default features;