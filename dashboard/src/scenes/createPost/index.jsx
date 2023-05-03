import BoxInsider from "components/box";
import { Button, TextField, Typography, Box } from "@mui/material";
import AnimatedButton from "../../components/button";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { Input } from "@mui/material";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebase from "firebase/app";
import "firebase/storage";
/*****************************************************************************/



/*****************************************************************************/
const CreatePostPage = () => {
  const [elements, setElements] = useState([]);
  const [value,setValue]=useState("")
  const addElement = (elementType) => {
    setElements([...elements, { type: elementType,value }]);
    console.log("addElement Break Point ",elements);
  };
  
  
  
  const addValue=(event,index)=>{
    const newElements = [...elements];
    console.log("newElements Break Point ", newElements);
    const updatedElement = { ...newElements[index], value: event.target.value };
    console.log("updatedElement ", updatedElement);
    newElements[index] = updatedElement;
    console.log("newElements Break Point  after", newElements);
    setElements(newElements);}
  
  
  const handleAdd=(values,elements)=>{
    values.content=elements;
  }

  const postSchema = yup.object().shape({
    categorie_name: yup.string().required(),
    title: yup.string().required(),
    intro: yup.string().required(),
    content: yup.array().of(
      yup.object().shape({
        type: yup
          .string()
          .oneOf([
            "text",
            "image",
            "backlink",
            "title",
            "subtitle",
            "code",
            "quote",
            "points",
            "video",
          ]),
        value: yup.string(),
      })
    ),
  });
  const [content, setContent] = useState([]);
  const initialValuesPostSchema = {
    categorie_name: "",
    title: "",
    intro: "",

    content: content,
  };
 /*  const handleAdd = (contentType, contentValue) => {
    const newContent = { type: contentType, value: contentValue };
    content.push(newContent);
    setContent(content);
  };
  const handleValue = (values, index, event) => {
        values.content.index.value= event.target.value;
  
        setContent(`content.${index}.value`);
  }; */
  const formik = useFormik({
    initialValues: initialValuesPostSchema,
  });
 /*  useEffect(() => {
    formik.setValues({
      ...formik.values,
      content: [...content],
    });
  }, [content]);
 */
  const createPost = async (values, onSubmitProps) => {
    const formData = new FormData();

    const storageRef = ref(getStorage());
    for (let value in values) {
      if (values[value] instanceof File) {
        const fileRef = storageRef.child(`posts/${values[value].name}`);
        await uploadBytes(fileRef, values[value]);

        formData.append(value, `posts/${values[value].name}`);
      } else {
        formData.append(value, values[value]);
      }
    }

    const SavedPostResonse = await fetch("http://localhost:8000/server/post", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"access_token"}`,
      },
      body: JSON.stringify(values),
    });
    const SavedPost = await SavedPostResonse.json();
    console.log("this  responese", SavedPost);
    if (SavedPost) {
      console.log("this is the success responese", SavedPost);
      onSubmitProps.resetForm();
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
      const finalElements = elements.map(element => ({ type: element.type, value: element.value || '' }));
      values.content = finalElements;
      await createPost(values, onSubmitProps);
   }
  return (
    <BoxInsider>
      <Typography
        variant={"h4"}
        color="rgba(255,75,75,1)"
        sx={{ margin: "30px" }}
      >
        Dashboard/Manage_Posts/Create_Post
      </Typography>
      <Box className="controllersLayout">
        <Box>
          <AnimatedButton
            onClick={() => {
              addElement("text");
             
            }}
          >
            add text
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton onClick={() => addElement("title")}>
            add title
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton onClick={() => addElement("subtitle")}>
            add sub
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton onClick={() => addElement("code")}>
            add code
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton onClick={() => addElement("quote")}>
            add quotes
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton onClick={() => addElement("points")}>
            add points
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton onClick={() => addElement("image")}>
            add image
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton onClick={() => addElement("video")}>
            add video
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton onClick={() => addElement("file")}>
            add file
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton onClick={() => addElement("backlink")}>
            add link
          </AnimatedButton>
        </Box>
      </Box>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesPostSchema}
        validationSchema={postSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          resetForm,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box
                paddingLeft={4}
                sx={{
                  "& .MuiTextField-root": {
                    backgroundColor: "transparent",
                    fontSize: "300pt",
                  },
                }}
              >
                <>
                  <TextField
                    onChange={handleChange}
                    value={values.categorie_name}
                    name="categorie_name"
                    error={
                      Boolean(touched.categorie_name) &&
                      Boolean(errors.categorie_name)
                    }
                  />
                  <TextField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.title}
                    name="title"
                    error={Boolean(touched.title) && Boolean(errors.title)}
                    variant="filled"
                    label="Title"
                    sx={{
                      gridColumn: "span 2",
                      mb: "1rem",
                      backgroundColor: "rgba(255,255,255,0.7)",
                      width: "90%",
                      borderColor: "#000",
                    }}
                    inputProps={{ style: { fontSize: 18, color: "#FFF" } }} // font size of input text
                    InputLabelProps={{
                      style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                    }}
                  />
                  <TextField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.intro}
                    name="intro"
                    error={Boolean(touched.intro) && Boolean(errors.intro)}
                    variant="filled"
                    label="auth"
                    multiline
                    rows={10}
                    sx={{
                      gridColumn: "span 2",
                      mb: "1rem",
                      backgroundColor: "rgba(255,255,255,0.7)",
                      width: "90%",
                      height: "20",
                    }}
                    inputProps={{ style: { fontSize: 18, color: "#FFF" } }} // font size of input text
                    InputLabelProps={{
                      style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                    }}
                  />
                  {elements.map((element, index) => {
                    if (element.type === "text") {             

                      /*        
                      console.log("this is the type inside the add break",values.content[index].type);
                      console.log("this is the value inside the add break",values.content[index].type); */
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event,index)}
                           key={`${element.type}-${index}`}
                          name={`${element.type}-${index}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="paragraph"
                          multiline
                          rows={10}
                          maxRows={400}
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            height: "20",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} // font size of input text
                          InputLabelProps={{
                            style: {
                              fontSize: 16,
                              color: "rgba(255,75,75,1)",
                            },
                          }}
                        />
                      );
                    } else if (element.type === "title") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event,index)}

                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="Title"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            borderColor: "#000",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} // font size of input text
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    } else if (element.type === "subtitle") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event,index)}

                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="sub"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            borderColor: "#000",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} // font size of input text
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    } else if (element.type === "code") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event,index)}

                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="code"
                          multiline
                          rows={10}
                          maxRows={400}
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            height: "20",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} // font size of input text
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    } else if (element.type === "quote") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event,index)}

                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="quotes"
                          multiline
                          rows={10}
                          maxRows={400}
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            height: "20",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} // font size of input text
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    } else if (element.type === "points") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event,index)}

                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="points"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            borderColor: "#000",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} // font size of input text
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    } else if (element.type === "image") {
                      return (
                        <Input
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event,index)}

                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          placeholder="Insert an image"
                          type="file"
                          /*                     onChange={handleFileInputChange}
                           */
                        />
                      );
                    } else if (element.type === "video") {
                      return (
                        <Input
                          onBlur={handleBlur}
                                                    onChange={(event) => addValue(event,index)}

                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          placeholder="Insert a video"
                          type="file"
                          /*                     onChange={handleFileInputChange}
                           */
                        />
                      );
                    } else if (element.type === "file") {
                      return (
                        <Input
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.content[index].valued}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          placeholder="Insert a file"
                          type="file"
                          /*                     onChange={handleFileInputChange}
                           */
                        />
                      );
                    } else if (element.type === "link") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.content[index].value}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="link"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            borderColor: "#000",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} // font size of input text
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    }
                  })}
                </>
              </Box>
              <Box>
                <AnimatedButton
                  type="submit"
                  sx={{
                    "& .button .top, .button .bottom, .button .left, .button .right":
                      { backgroundColor: "#ebff33" },
                    "& .button .border": { border: "1px solid #ebff33" },
                    "& .button": { color: "#ebff33" },
                  }}
                >
                  Submit
                </AnimatedButton>
              </Box>
            </form>
          );
        }}
      </Formik>
    </BoxInsider>
  );
};
export default CreatePostPage;
