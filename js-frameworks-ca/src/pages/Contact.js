import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

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
      console.log('Form data submitted:', values);
    },
  });

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={formik.handleSubmit}>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
