import { useFormik } from "formik";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { BsArrowRight } from "react-icons/bs";
import * as Yup from "yup";
import {
  CALL_TO_ACTION,
  HEADING,
  NAME,
  SOCIAL_PROOF,
  SUBHEADING,
} from "./constants";

function App() {
  const [state, setState] = useState(false);

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      name: "",
    },
    onSubmit: async () => {
      // await props.onSubmit(values.emailAddress, values.name);

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
          <h1 className="display-5 fw-bold mb-4">{HEADING}</h1>
          <h2 className="lead lh-base mb-4">{SUBHEADING}</h2>

          {/* <div className="d-flex justify-content-center mb-1">
            {new Array(4)
              .fill("https://randomuser.me/api/portraits/med/women/72.jpg")
              .map((x, index) => (
                <img
                  alt={`Image ${index + 1}`}
                  className="rounded-circle"
                  key={x}
                  src={x}
                  style={{ marginLeft: index === 0 ? "0px" : "-24px" }}
                  width={48}
                />
              ))}
          </div> */}

          {/* <div className="fst-italic mb-5 text-white">{SOCIAL_PROOF}</div> */}

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

          {state ? <Alert variant="primary">MESSAGE</Alert> : null}

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
