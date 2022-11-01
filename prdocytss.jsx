import React from "react";
import { Card, Button } from "react-bootstrap";
import Product from "./cartproduct";
const ProductCard = props => {
  return (
    <>
   
      <Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src='image1.jpg'/>
        <Card.Body>
          <Card.Title>Boat</Card.Title>
          <Card.Text>
          <h4>Bose. Bose QuietComfort 45/QC45 Wireless. ...</h4>
          </Card.Text>
          <div className="product-actions">
            <Button variant="">Buy Now</Button>
            <Button variant="">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>


    
    </>
  );
};

export default ProductCard;