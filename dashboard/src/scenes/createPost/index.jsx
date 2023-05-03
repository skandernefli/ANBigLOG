import BoxInsider from "components/box";
import {  TextField, Typography, Box } from "@mui/material";
import AnimatedButton from "../../components/button";
import { Formik,  } from "formik";
import * as yup from "yup";
import { useState,  } from "react";
import { Input } from "@mui/material";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import "firebase/storage";
/*****************************************************************************/



/*****************************************************************************/
const CreatePostPage = () => {
  const [elements, setElements] = useState([]);
  const [value,setValue]=useState("")
  const addElement = (elementType) => {
    setElements([...elements, { type: elementType,value }]);
  };
  
  
  
  const addValue=(event,index)=>{
    if (elements[index].type === "image" || elements[index].type === "video" || elements[index].type === "file") {
      const newElements = [...elements];
      const updatedElement = { ...newElements[index], value: event.target.files[0] };
      newElements[index] = updatedElement;
      setElements(newElements);
    } else {
      const newElements = [...elements];
      const updatedElement = { ...newElements[index], value: event.target.value };
      newElements[index] = updatedElement;
      setElements(newElements);
    }
  
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
 
 

  const createPost = async (values, onSubmitProps) => {
    const formData = new FormData();

    console.log("these are the values",values);
    console.log("values.contetn",values.content);
    for (let value in values) {
     
        formData.append(value, values[value]);
      
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
  const handleFileUpload = async () => {
    const storage = getStorage();

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];

    if (element.type === "image" || element.type === "video" || element.type === "file") {
      const storageRef = ref(storage, `posts/${element.value.name}`);
      await uploadBytes(storageRef, element.value);
      
      console.log("File uploaded:", element.value.name);

      const newElements = [...elements];
      const updatedElement = { ...newElements[index], value: `posts/${element.value.name}` };
      newElements[index] = updatedElement;
      setElements(newElements);
    }
  }
  }

  const handleFormSubmit = async (values, onSubmitProps) => {
   console.log("passed here 1");
    handleFileUpload();
    console.log("passed here 2");

   
    console.log("passed here 5");

      const finalElements = elements.map(element => ({ type: element.type, value: element.value || '' }));
      values.content = finalElements;
      console.log("passed here 6");

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
                        type="file"
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
                          onChange={(event) => addValue(event,index)}
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
                    } else if (element.type === "backlink") {
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
