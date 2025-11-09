import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import { emailConfig } from "../../authConfig";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setToast({
        show: true,
        message: "Please fill out all fields before submitting!",
        variant: "danger",
      });
      return;
    }

    setFormdata((prev) => ({ ...prev, loading: true }));

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: emailConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        emailConfig.YOUR_SERVICE_ID,
        emailConfig.YOUR_TEMPLATE_ID,
        templateParams,
        emailConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log("Email Sent Successfully:", result.text);
          setFormdata({
            email: "",
            name: "",
            message: "",
            loading: false,
          });
          setToast({
            show: true,
            message: "SUCCESS! Your message has been sent.",
            variant: "success",
          });
        },
        (error) => {
          console.log("Email Sending Failed:", error.text);
          setFormdata((prev) => ({ ...prev, loading: false }));
          setToast({
            show: true,
            message: `Failed to send message! ${error.text}`,
            variant: "danger",
          });
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${emailConfig.YOUR_EMAIL}`}>
                {emailConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              <strong>Phone:</strong> 8495069491
              <br />
              <strong>Place:</strong> Bangalore
            </address>
            <p>{emailConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={toast.show}
          bg={toast.variant}
          autohide
          delay={3000}
          onClose={() => setToast({ show: false, message: "", variant: "" })}
        >
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </HelmetProvider>
  );
};
