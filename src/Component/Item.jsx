import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ name, imagen, descripcion, categoria, id}) => {
  return (
    <>
    <div key={id}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Link to={`/Item/${id}`}>
        <Button variant="primary">Comprar ahora!</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Item