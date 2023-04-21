import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import StarRating from 'react-bootstrap-star-rating';
import Card from 'react-bootstrap/Card';

const ReviewForm = (props) => {
	
	const {show, handleClose, product, handleSubmit} = props;
	
	const [reviewerName, setReviewerName] = useState('');
	const [content, setContent] = useState('');
	const [rating, setRating] = useState(0);

	const handleReviewrName = (e) => {
		setReviewerName(e.target.value);
	}

	const handleContent = (e) => {
		setContent(e.target.value);
	}
	
	const handleRating = (e,val) => {
		setRating(val);
	}
	
	return <Modal animation={false} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Product Review Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      	<Card style={{ width: '18rem', margin: '10px' }}>
      		<Card.Img variant="top" width={200} height = {200} src={product.thumbnail_image} />
      		<Card.Body>
        		<Card.Title>{product.name}</Card.Title>
        		<Card.Text>
          			{product.description}
        		</Card.Text>
      		</Card.Body>
    	</Card>
        <Form.Group >
          <Form.Label>Reviewer Name: </Form.Label>
          <Form.Control type="text" onChange={handleReviewrName} value={reviewerName} placeholder="reviewer name"/>
          <Form.Label>Rating: </Form.Label>
          <StarRating defaultValue={rating} min={0} max={5}  showClear={false} showCaption={false} hoverEnabled={false} onRatingChange={handleRating}/>
          <Form.Label>Your review: </Form.Label>
          <Form.Control as="textarea" rows={5} onChange={handleContent} value={content} placeholder=""/>           
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => handleSubmit({reviewer_name: reviewerName, content: content, product_id: product.id, rating: rating})}>
          Submit
       </Button>
      </Modal.Footer>
    </Modal>
}

export default ReviewForm;
