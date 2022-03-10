import './App.css';
import { Form, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Hello to my website !!</h1>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Veuillez entrer votre adresse mail svp" />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Veuillez entrer votre mot de passe" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button  type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
