import {  Card, Row,  Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const PhotoCard = ({ photoCards }) => {
  
  if (photoCards === []) return "";
  return (
    <Card className="text-center">
      <Row xs={12} md={3} gap={1}>
        {photoCards.map((photoCard) => (
          <Card key={photoCard.id}>
            <Card.Body >
              <Image
                src={photoCard.images[0].src}
                alt={photoCard.title}
                style={{ width: "258px", height: "258px" }}
              />
              <Card.Text pt-1 style={{ height: "42px" }}>
               <h5>{photoCard.title}</h5> 
              </Card.Text>
              <Button
                href="https://www.google.com/"
                style={{ width: "250px", height: "33px" }}
              >
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Card>
  );
};

export default PhotoCard;
