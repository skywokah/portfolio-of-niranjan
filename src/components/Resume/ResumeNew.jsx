import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "/NiranjanKrishna_Web_Developer_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.js`;


function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScale = () => {
    if (width > 786) return 1.5;
    return 0.6; // Adjust scale for smaller screens
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", margin: "20px 0" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document
            file={pdf}
            onLoadError={(error) => setError(error)}
            loading={<div>Loading PDF...</div>}
          >
            <Page pageNumber={1} scale={getScale()} />
          </Document>
          {error && (
            <div style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
              Error loading PDF: {error.message}
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

