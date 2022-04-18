import React from "react";
import {  Card, Col, Row } from "react-bootstrap";

import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container">
      <Row className=" mt-5">
        <Card className="mx-4" as={Col}>
          <h5 className="text-center ">
            1 Difference between `authorization` and `authentication`
          </h5>
          <p>
            Authorization means granting a user account configured on the
            computer system the right to make use of a resource (allocating the
            user privileges on the resource). <br />
            Authentication protects the validity of the user account by testing
            that the person accessing that account is who s/he says s/he is.
          </p>
        </Card>
        <Card className="mx-4" as={Col}>
          <h5 className="text-center">
            2 Why are you using `firebase`? What other options do you have to
            implement authentication?
          </h5>
          <p>
            You can use Firebase Authentication to allow users to sign in to
            your app using one or more sign-in methods, including email address
            and password sign-in, and federated identity providers such as
            Google Sign-in and Facebook Login.
            <br />
            <br />
            <br />
            Single-Factor/Primary Authentication. ... <br />
            Two-Factor Authentication (2FA) ... Single Sign-On (SSO) <br />
            Multi-Factor Authentication (MFA) Password Authentication Protocol
            (PAP) ... <br />
            Challenge Handshake Authentication Protocol (CHAP) ... Extensible
            Authentication Protocol (EAP)
          </p>
        </Card>
        <Card className="mx-4" as={Col}>
          <h5 className="text-center">
            3 What other services does `firebase` provide other than
            authentication
          </h5>
          <p className="py-2">
            There are many services which Firebase provides, Most useful of them
            are:
            <br />
            .Cloud Firestore <br /> .Cloud Functions<br /> .Authentication <br /> .Hosting Cloud Storage
             <br /> .Google Analytics <br /> .Predictions <br /> .Cloud Messaging
          </p>
        </Card>
      </Row>
    </div>
  );
};

export default Blogs;
