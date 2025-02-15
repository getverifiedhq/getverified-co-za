import { useFormik } from "formik";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { BsArrowRight } from "react-icons/bs";
import * as Yup from "yup";
import { CALL_TO_ACTION, HEADING, NAME, SUBHEADING } from "./constants";

function App() {
  const [state, setState] = useState(false);

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      name: "",
    },
    onSubmit: async () => {
      setState(true);

      formik.resetForm();
    },
    validationSchema: Yup.object().shape({
      emailAddress: Yup.string().email().required(),
      name: Yup.string().required(),
    }),
  });

  return (
    <div>
      <Row className="m-0">
        <Col
          className="bg-dark custom-container px-3 px-md-5 text-center text-white"
          style={{ minHeight: "100dvh" }}
          xs={{ span: 12 }}
          md={{ offset: 6, span: 6 }}
          lg={{ offset: 6, span: 6 }}
        >
          <h6 className="fw-light text-uppercase">{NAME}</h6>
          <h1 className="display-5 fw-bold mb-2">{HEADING}</h1>
          <h2 className="lead lh-base mb-5">{SUBHEADING}</h2>

          <Form.Group className="mb-4">
            <Form.Control
              id="name"
              isInvalid={
                formik.touched.name && formik.errors.name ? true : false
              }
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Enter your name..."
              size="lg"
              type="text"
              value={formik.values.name}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              id="emailAddress"
              isInvalid={
                formik.touched.emailAddress && formik.errors.emailAddress
                  ? true
                  : false
              }
              name="emailAddress"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Enter your email address..."
              size="lg"
              type="text"
              value={formik.values.emailAddress}
            />
          </Form.Group>

          {state ? (
            <Alert variant="primary">
              We&apos;ve received your request, and one of our experts will be
              in touch soon to discuss how Get Verified can support your
              business with secure digital identity verification, fraud
              detection and KYC compliance in South Africa.
            </Alert>
          ) : null}

          <Button
            className="fw-semibold mb-4 w-100"
            disabled={formik.isSubmitting || state}
            onClick={() => formik.submitForm()}
            size="lg"
            variant="primary"
          >
            {CALL_TO_ACTION}&nbsp;
            <BsArrowRight strokeWidth={0.375} />
          </Button>

          <div>
            By clicking &quot;{CALL_TO_ACTION}&quot; you agree to our{" "}
            <a className="text-white" href="/not-found">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a className="text-white" href="/not-found">
              Terms of Service
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
