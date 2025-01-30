import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "/NiranjanKrishna_Web_Developer_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'pdfjs-dist';

import 'pdfjs-dist/build/pdf.worker.entry';

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
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
        <Row className="resume">
          <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.1.392/pdf.worker.min.js`}>
            <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;