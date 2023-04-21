import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRating from 'react-bootstrap-star-rating';
const  Product = (props)=>{
  const { data, index, handleShow } = props;
  return (
    
    <Card style={{ width: '18rem', margin: '10px' }} key={index}>
      <Card.Img variant="top" width={200} height = {200} src={data.thumbnail_image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <StarRating defaultValue={data.overall_rating} min={0} max={5} disabled={true} readonly={true} showClear={false} showCaption={false} hoverEnabled={false}/>
        <Button variant="primary" onClick={() => handleShow(data) }> Add Review </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;