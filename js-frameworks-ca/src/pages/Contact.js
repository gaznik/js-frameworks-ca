import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../css/Contact.css';
import '../css/buttons.css';

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, 'Full name must be at least 3 characters')
    .required('Full name is required'),
  subject: yup
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .required('Subject is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  body: yup
    .string()
    .min(3, 'Body must be at least 3 characters')
    .required('Body is required'),
});

function Contact() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      subject: '',
      email: '',
      body: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      setSuccessMessageVisible(true);

      formik.resetForm();

      console.log('Form data submitted:', values);
    },
  });

  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const hideSuccessMessage = () => {
    setSuccessMessageVisible(false);
  };

  return (
    <div className="form-container">
      <h1 className="page-title">Contact Us</h1>
      <form onSubmit={formik.handleSubmit}>
        {successMessageVisible ? (
          <div className="success-message">
            <p>Thank you for reaching out!</p>
            <button type="button" onClick={hideSuccessMessage}>
              Close
            </button>
          </div>
        ) : null}

        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="error">{formik.errors.fullName}</p>
          )}
        </div>

        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.subject && formik.errors.subject && (
            <p className="error">{formik.errors.subject}</p>
          )}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label>Body:</label>
          <textarea
            name="body"
            value={formik.values.body}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.body && formik.errors.body && (
            <p className="error">{formik.errors.body}</p>
          )}
        </div>

        <button type="submit" className="submit-button button-hover">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
