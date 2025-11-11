import React from "react";
import { Container } from "react-bootstrap";
import FAQs from "../components/Faqs";
import Stories from "../components/Stories";

export default function Home() {
  return (
    <>
      <Container fluid className="p-0">
        <h1>Hi</h1>
      </Container>
      <Stories />
      <FAQs />
    </>
  );
}
