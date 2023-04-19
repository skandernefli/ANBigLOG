import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  intro: Yup.string().required('Intro is required'),
});

const initialValues = {
  title: '',
  subtitle: '',
  intro: '',
  text: '',
  code: '',
  quote: '',
  mainPoints: '',
};

const CreatePostPage = () => {
  const history = useNavigate();
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showMainPoints, setShowMainPoints] = useState(false);

  const handleAddSubtitle = () => setShowSubtitle(true);
  const handleAddText = () => setShowText(true);
  const handleAddCode = () => setShowCode(true);
  const handleAddQuote = () => setShowQuote(true);
  const handleAddMainPoints = () => setShowMainPoints(true);

  const handleSubmit = (values) => {
    // Use fetch to send post data to server
    fetch('http://localhost:8000/server/post', {
      method: "POST",
        credentials: 'include',
        headers: { "Content-Type": "application/json","Authorization": `Bearer ${"access_token"}` },
        body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response
        console.log('Success:', data);
        history.push('/posts');
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field name="title" as={TextField} label="Title" fullWidth />
              {errors.title && touched.title ? (
                <div>{errors.title}</div>
              ) : null}
            </div>
            {showSubtitle && (
              <div>
                <Field name="subtitle" as={TextField} label="Subtitle" fullWidth />
              </div>
            )}
            <Button variant="contained" onClick={handleAddSubtitle}>
              Add Subtitle
            </Button>
            <div>
              <Field name="intro" as={TextField} label="Intro" fullWidth />
              {errors.intro && touched.intro ? (
                <div>{errors.intro}</div>
              ) : null}
            </div>
            {showText && (
              <div>
                <Field name="text" as={TextField} label="Text" fullWidth />
              </div>
            )}
            <Button variant="contained" onClick={handleAddText}>
              Add Text
            </Button>
            {showCode && (
              <div>
                <Field name="code" as={TextField} label="Code" fullWidth />
              </div>
            )}
            <Button variant="contained" onClick={handleAddCode}>
              Add Code
            </Button>
            {showQuote && (
              <div>
                <Field name="quote" as={TextField} label="Quote" fullWidth />
              </div>
        )}
        <Button variant="contained" onClick={handleAddQuote}>
          Add Quote
        </Button>
        {showMainPoints && (
          <div>
            <Field
              name="mainPoints"
              as={TextField}
              label="Main Points"
              fullWidth
            />
          </div>
        )}
        <Button variant="contained" onClick={handleAddMainPoints}>
          Add Main Points
        </Button>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </div>
      </Form>
    )}
  </Formik>
</div>
);
};

export default CreatePostPage;