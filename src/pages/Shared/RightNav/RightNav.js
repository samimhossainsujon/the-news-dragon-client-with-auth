import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <div>
        <h3>Login With</h3>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login With Github
        </Button>
      </div>

      <div className="mt-5 mb-5">
        <h3>Find us On</h3>
        <ListGroup>
          <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
          <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
          
        </ListGroup>
      </div>

      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
