



import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./style.css"

const CardComponent=()=>{

    return (   
        <div className='car2'>
        <h className='pa'>Learn</h>
<div className='car' >




    <Card   style={{ width: '14rem' }} >
      <Card.Img className='image'  variant="top" src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-mathematical-arithmetic-function-ruler-compass-calculator-addition-subtraction-multiplication-and-division-png-image_5363367.jpg" />
      <Card.Body>
        <Card.Title>Math Card</Card.Title>
        <Card.Text>
        We're happy to invite you to our wedding. 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Come Here</ListGroup.Item>
        <ListGroup.Item>Very Simple</ListGroup.Item>
        <ListGroup.Item>Welcome</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.youtube.com/watch?v=MV9fpmtH7HA">go to Math videos</Card.Link>
        
      </Card.Body>
    </Card>

    
    <Card   style={{ width: '14rem' }}>
      <Card.Img variant="top" className='image' src="https://thumbs.dreamstime.com/b/language-school-adult-kids-english-courses-class-language-school-adult-kids-english-courses-class-141377421.jpg" />
      <Card.Body>
        <Card.Title>English Card</Card.Title>
        <Card.Text>
     Learn English 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Come Here</ListGroup.Item>
        <ListGroup.Item>very Simple and clear</ListGroup.Item>
        <ListGroup.Item>Welcome</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.youtube.com/watch?v=F-vLdvPjN-k">go to English videos</Card.Link>
        
      </Card.Body>
    </Card>

    <Card   style={{ width: '14rem' }}>
      <Card.Img variant="top" className='image' src="data:image/png;base64,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"/>
      <Card.Body>
        <Card.Title>Chemistry</Card.Title>
        <Card.Text>
        Learn chemistry easily
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Simple and clear explanation</ListGroup.Item>
        <ListGroup.Item>Study hard</ListGroup.Item>
        <ListGroup.Item>Welcome</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.youtube.com/watch?v=Z4v0rLoi6dQ&list=PLa8IbBityehFIsAEQ5wdffL7xWtSjs_9D">go to Chemistry videos</Card.Link>
    
      </Card.Body>
    </Card>



    <Card   style={{ width: '14rem' }}>
      <Card.Img className='image'  variant="top" src="https://cdn.arageek.com/magazine/2021/04/encyclopedia-%D9%85%D8%A7-%D9%87%D9%88-%D8%AA%D8%B9%D8%B1%D9%8A%D9%81-%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1.jpg" />
      <Card.Body>
        <Card.Title>Physics Card</Card.Title>
        <Card.Text>
       Come and Learn 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Come Here</ListGroup.Item>
        <ListGroup.Item>Very Simple</ListGroup.Item>
        <ListGroup.Item>Welcome</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.youtube.com/watch?v=D0XdH1V1JS8">go to Physics videos</Card.Link>
    
      </Card.Body>
    </Card> 





    </div>

</div>
    )

}
export default CardComponent;
