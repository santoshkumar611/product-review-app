import { useState, useEffect } from 'react';
import Product from './Product';
import ReviewForm from './ReviewForm';
import Row from 'react-bootstrap/Row';


const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(undefined);


  const handleClose = () => setShow(false);
  const handleShow = (product) => {
     setProduct(product);
     setShow(true);
  }

  const handleSubmit = async (review) => {
    const rawResponse = await fetch('http://localhost:4000/reviews', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({review: review})
    });
    const resp = await rawResponse.json();
    

    const currentProductIndex = products.findIndex((prod) => prod.id === review.product_id);
  
    const updatedProduct = {...products[currentProductIndex], overall_rating: resp.product.overall_rating};
  
    const newProducts = [...products];
    newProducts[currentProductIndex] = updatedProduct;
    setProducts(newProducts);
    handleClose();
  }

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:4000/products");
      const json = await response.json();
      setProducts(json.products);
    } catch (error) {
      console.log("error", error);
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <Row xs={1} md={2} className="g-4" style={{marginTop: '10px'}}>
      {products.map((product, index) => {
         return <Product data={product} index={index} handleShow={handleShow}/>
      })}
    </Row>
     {product != undefined ?  <ReviewForm show={show} handleClose={handleClose} product={product} handleSubmit ={handleSubmit}/> : <div></div> }
     }
    </>
   );
}
export default ProductsList;
