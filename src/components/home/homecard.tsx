import {Card,} from 'react-bootstrap';
import "../styles/homecardStyles.css";

function homecard():JSX.Element {
    return(
        <Card className="homecard">
            <Card.Title className="title">WorkDesk</Card.Title>
                <Card.Text style={{fontSize:'30px',marginLeft:'140px',marginTop:'10px'}}>
                        Your own notebook on your Desktop.
                </Card.Text>
        </Card>
    )
}

export default homecard;