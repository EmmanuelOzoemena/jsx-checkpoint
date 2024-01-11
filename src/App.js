// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { product } from './product';
import {Card, Button} from 'react-bootstrap';
import Name from './Component/Name';
import Price from './Component/Price';
import Description from './Component/Description';
import Image from './Component/Image';
import { alert } from './alert'


function App() {

  // const myName = 'Hello, there!'
  
  return (
    <>
      <div className="App">
        <div>
        <Card className='card' style={{ width: '18rem', border: '1px solid black' }}>
          <Card.Img variant="top" src="./img/buy-2.jpg" width= '289rem' />
          <Card.Body>
            <Card.Title><Name /></Card.Title>
              <Price />
            <Card.Text>
              <Description/>
            </Card.Text>
          </Card.Body>
           <Button style={{ backgroundColor: 'black', border: 'none' }} variant="primary">Add to cart</Button>
        </Card>
        </div>
        <h2> Hi { alert.name?<span><span>{ alert.name }, I'm Emmanuel</span><img style={{ display:'block',  margin:'auto', marginTop:'10px', borderRadius: '5px' }} src={ alert.image } alt="Emmanuel"/></span>: "there!! I'm Emmanuel"}</h2>
      </div>
    </>
  );
}

export default App;
