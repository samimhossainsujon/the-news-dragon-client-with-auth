import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { title, details, _id, image_url, category_id } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button variant="primary"><FaArrowLeft></FaArrowLeft> all news in this catagories</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
