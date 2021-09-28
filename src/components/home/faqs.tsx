import {Accordion, Container} from 'react-bootstrap';
import "../styles/faqsStyles.css";

function Faqs():JSX.Element {
    return(
        <Container id="faqclass">
        <div id="faqtitle">
            <h1>F.A.Qs</h1>
        </div>
        <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header> What can WorkDesk help you with? </Accordion.Header>
                    <Accordion.Body>
                        WorkDesk lets you create ToDos and Notes.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> How to create a Todo? </Accordion.Header>
                    <Accordion.Body>
                        Go to the Todo page and use the create button to create a Todo task.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> How to create a Notes? </Accordion.Header>
                    <Accordion.Body>
                        Go to the Notes page and use the add button to add a new Note.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Container>
    )
}

export default Faqs;