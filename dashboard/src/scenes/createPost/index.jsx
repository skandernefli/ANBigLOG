import BoxInsider from "components/box";
import { TextField, Typography, Box ,MenuItem,IconButton  } from "@mui/material";
import AnimatedButton from "../../components/button";
import { Formik } from "formik";
import * as yup from "yup";
import { useState ,useEffect} from "react";
import { Input } from "@mui/material";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import "firebase/storage"; 
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL } from "firebase/storage";
import Notification from "components/notification";
import InputAdornment from '@mui/material/InputAdornment';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
const CreatePostPage = () => {
  const [categories, setCategories] = useState([]);

  const [notification, setNotification] = useState(null);
  const handleNotification = (message, type = 'error', duration = 3000) => {
    setNotification({ message, type, duration });
  };



  const [elements, setElements] = useState([]);
  const [value, setValue] = useState("");
  const addElement = (elementType) => {
    setElements([...elements, { type: elementType, value }]);
  };
  const [backlinks,setBacklinks]=useState([]);
  
  const addBackLink=(event,index)=>{
    if (elements[index].type==="backlink"){
      if (backlinks.length === 0) {
        const newBackLinks = [{        index: index,        link: event.target.value      }];
        setBacklinks(newBackLinks);
        console.log("updated backlinks", newBackLinks);
      } else{
   backlinks.map((backlink,i)=>{
    if(backlink.index===index){
    const newBackLinks = [...backlinks];
    const updatedbacklink = {
      ...newBackLinks[i],
      index:index,
      link: event.target.value,
    };
    newBackLinks[i] = updatedbacklink;
    setBacklinks(newBackLinks);
    
    console.log("passed by addBackLink if",backlinks)
  }else{
      const newBackLinks = [...backlinks];
      newBackLinks.push({
    
      index:index,
      link: event.target.value,
    });
    setBacklinks(newBackLinks);
    console.log("passed by addBackLink else",backlinks)

    }
  
  
  })}
   
    console.log("passed by addBackLink",backlinks)}
  }
  
  const getBackLink = (index) => {
    const backlink = backlinks.find((backlink) => backlink.index === index);
    return backlink ? backlink.link : '';
  }
  useEffect(() => {
    fetch('http://localhost:8000/server/category')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);
 
  const addValue = (event, index) => {
    if (
      elements[index].type === "image" ||
      elements[index].type === "video" ||
      elements[index].type === "file"  ||
      elements[index].type === "audio"
    ) {
      const newElements = [...elements];
      const updatedElement = {
        ...newElements[index],
        value: event.target.files[0],
      };
      console.log("this are event.target.files[0]", event.target.files[0]);
      newElements[index] = updatedElement;
      setElements(newElements);
    } else  {
      const newElements = [...elements];
      const updatedElement = {
        ...newElements[index],
        value: event.target.value,
      };
      newElements[index] = updatedElement;
      setElements(newElements);
    }
  };

  const postSchema = yup.object().shape({
    categorie_name: yup.string().required(),
    title: yup.string().required(),
    intro: yup.string().required(),
    content: yup.array().of(
      yup.object().shape({
        type: yup
          .string()
          .oneOf([
            "",
            "text",
            "image",
            "backlink",
            "title",
            "subtitle",
            "code",
            "quote",
            "points",
            "video",
            "file",
            "audio",
            "externalImage",
            "externalVideo",
            "externalAudio",
            "externalFile",
            "externalLink"

          ]),
        value: yup.string(),
        backlink: yup.object().shape({
          text: yup.string(),
          link: yup.string(),
        }),
        image: yup.object().shape({
          location: yup.string(),
          downloadlink: yup.string(),
        }),
        video: yup.object().shape({
          location: yup.string(),
          downloadlink: yup.string(),
        }),
        file: yup.object().shape({
          location: yup.string(),
          downloadlink: yup.string(),
        }),
        audio: yup.object().shape({
          location: yup.string(),
          downloadlink: yup.string(),
        }),
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
    try {
    const formData = new FormData();

    console.log("these are the values", values);
    console.log("values.contetn", values.content);
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
    if (!SavedPostResonse.ok) {
      throw new Error("Error creating pos:");
    } 
  
  } catch (error) {
      console.error("Error creating post:", error);
      throw new Error("Error creating post:");
    }
  };
  const handleFileUpload = async (values) => {
    try {
    const storage = getStorage();
    const categorie_name = values.categorie_name;
    const postTitle = values.title;
    const postId = uuidv4();
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];

      if (
        element.type === "image" ||
        element.type === "video" ||
        element.type === "file"  ||
        element.type === "audio"
      ) {
        try {
          console.log("File in process:", element.value.name);

          const storageRef = ref(
            storage,
            `posts/${categorie_name}/${postTitle}/${postId}/${element.value.name}`
          );
          await uploadBytes(storageRef, element.value);
          console.log("File uploaded:", element.value.name);
          const  downloadlink= await getDownloadURL(storageRef);
          const newElements = elements;
          const updatedElement = {
            ...newElements[index],
            value:downloadlink,
          };
          newElements[index] = updatedElement;
          setElements(newElements);
          console.log(
            "elements :new set elements 121 in handlefileUpload",
            elements
          );
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }else   if (
        element.type === "backlink" ){
const link=getBackLink(index);
console.log("this is the link",link);
          const newElements = elements;
          const updatedElement = {
            ...newElements[index],
            value:JSON.stringify({textOfLink:element.value,backlinkLink:link}),
          };
          newElements[index] = updatedElement;
          setElements(newElements);
        }
    }  } catch (error) {
      console.error("Error uploading file:", error);
      throw new Error("Failed to upload one or more files.");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    try {
    await handleFileUpload(values);
    const finalElements = elements.map((element) => ({
      type: element.type,
      value: element.value || "",
    }));
    values.content = finalElements;

    await createPost(values, onSubmitProps);
  
    handleNotification('success!', 'success');
    onSubmitProps.resetForm();
  } catch (error) {
      console.error("Error while creating post!", error);
      handleNotification('Error while creating post!', 'error');

    }
  };
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
          <AnimatedButton className="button"
            onClick={() => {
              addElement("text");
            }}
          >
            add text
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("title")}>
            add title
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("subtitle")}>
            add sub
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("code")}>
            add code
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("quote")}>
            add quotes
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("points")}>
            add points
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("image")}>
            add image
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("externalImage")}>
            add external image
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("video")}>
            add video
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("externalVideo")}>
            add extenal video
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("file")}>
            add file
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("externalFile")}>
            add external file
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("audio")}>
            add audio
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("externalAudio")}>
            add external audio
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("backlink")}>
            add link
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("externalLink")}>
            add external link
          </AnimatedButton>
        </Box>
        <Box>
                <AnimatedButton
                className="button"
                  type="submit"
                  form="myForm"
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
            <form id="myForm" onSubmit={handleSubmit}>
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
        select
         value={values.categorie_name}
      name="categorie_name"
        label="Category"
        variant="filled"
        onChange={handleChange}
        sx={{
          gridColumn: 'span 2',
          mb: '1rem',
          backgroundColor: 'rgba(255,255,255,0.4)',
          width: '90%',
          borderColor: '#000',
        }}
        inputProps={{ style: { fontSize: 18, color: '#FFF' } }}
        InputLabelProps={{
          style: { fontSize: 16, color: 'rgba(255,75,75,1)' },
        }}
        SelectProps={{
          style: { color: '#FFF' }
        }}
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.name}>
            {category.name}
          </MenuItem>
        ))}
      </TextField>
                
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
                    inputProps={{ style: { fontSize: 18, color: "#FFF" } }} 
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
                    label="intro"
                    multiline
                    rows={10}
                    sx={{
                      gridColumn: "span 2",
                      mb: "1rem",
                      backgroundColor: "rgba(255,255,255,0.7)",
                      width: "90%",
                      height: "20",
                    }}
                    inputProps={{ style: { fontSize: 18, color: "#FFF" } }} 
                    InputLabelProps={{
                      style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                    }}
                  />
                  {elements.map((element, index) => {
                    if (element.type === "text") {
                    
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
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
                          }}
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
                          onChange={(event) => addValue(event, index)}
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
                          }} 
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    } else if (element.type === "subtitle") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
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
                          }} 
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    } else if (element.type === "code") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
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
                          }}
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    } else if (element.type === "quote") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
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
                          }}
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    } else if (element.type === "points") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
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
                          }}
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
                          onChange={(event) => addValue(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          placeholder="Insert an image"
                          inputProps={{ accept: "image/*" }}
                          overFlow="hidden"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(0,0,0,0.1)",
                            width: "90%",
                            borderColor: "#000",
                            "& .MuiInputBase-input": {
                              fontSize: 18,
                              color: "#FFF",
                            },
                            "& .MuiInputLabel-root": {
                              fontSize: 16,
                              color: "rgba(255,75,75,1)",
                            },
                          }}
                          startAdornment={
                            <InputAdornment position="start">
<Typography variant="h5" sx={{color:"rgba(255,75,75,1)" ,width:"600px"}}>upload an Image</Typography>
                              <IconButton sx={{color:"rgba(255,75,75,1)"}} component="span">
                                <AddPhotoAlternateOutlinedIcon />
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      );
                    } else if (element.type === "video") {
                      return (
                        <Input
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          placeholder="Insert an image"
                          inputProps={{ accept: "video/*" }}
type="file"
                          overFlow="hidden"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(0,0,0,0.1)",
                            width: "90%",
                            borderColor: "#000",
                            "& .MuiInputBase-input": {
                              fontSize: 18,
                              color: "#FFF",
                            },
                            "& .MuiInputLabel-root": {
                              fontSize: 16,
                              color: "rgba(255,75,75,1)",
                            },
                          }}
                          startAdornment={
                            <InputAdornment position="start">
<Typography variant="h5" sx={{color:"rgba(255,75,75,1)" ,width:"600px"}}>upload a video</Typography>
                              <IconButton sx={{color:"rgba(255,75,75,1)"}} component="span">
                                <VideoLibraryOutlinedIcon />
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      );
                    } else if (element.type === "file") {
                      return (
                        <Input
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
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
                          overFlow="hidden"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(0,0,0,0.1)",
                            width: "90%",
                            borderColor: "#000",
                            "& .MuiInputBase-input": {
                              fontSize: 18,
                              color: "#FFF",
                            },
                            "& .MuiInputLabel-root": {
                              fontSize: 16,
                              color: "rgba(255,75,75,1)",
                            },
                          }}
                          startAdornment={
                            <InputAdornment position="start">
<Typography variant="h5" sx={{color:"rgba(255,75,75,1)" ,width:"600px"}}>upload a file</Typography>
                              <IconButton sx={{color:"rgba(255,75,75,1)"}} component="span">
                                <FileCopyOutlinedIcon />
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      );
                    } else if (element.type === "audio") {
                      return (
                        <Input
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
                          key={element.id}
                          variant="filled"

                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          placeholder="Insert a file"
                          accept="audio/*"
                          type="file"
                          overFlow="hidden"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(0,0,0,0.1)",
                            width: "90%",
                            borderColor: "#000",
                            "& .MuiInputBase-input": {
                              fontSize: 18,
                              color: "#FFF",
                            },
                            "& .MuiInputLabel-root": {
                              fontSize: 16,
                              color: "rgba(255,75,75,1)",
                            },
                          }}
                          startAdornment={
                            <InputAdornment position="start">
<Typography variant="h5" sx={{color:"rgba(255,75,75,1)" ,width:"600px"}}>upload an audio</Typography>
                              <IconButton sx={{color:"rgba(255,75,75,1)"}} component="span">
                                <AudiotrackOutlinedIcon />
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                       
                      );
                    }else if (element.type === "externalImage") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="external image"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            borderColor: "#000",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} 
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    }else if (element.type === "externalVideo") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="external video"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            borderColor: "#000",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} 
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    }else if (element.type === "externalAudio") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="external audio"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            borderColor: "#000",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} 
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    }else if (element.type === "externalLink") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="external link"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            borderColor: "#000",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} 
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    }
                    else if (element.type === "externalFile") {
                      return (
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="external file"
                          sx={{
                            gridColumn: "span 2",
                            mb: "1rem",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: "90%",
                            borderColor: "#000",
                          }}
                          inputProps={{
                            style: { fontSize: 18, color: "#FFF" },
                          }} 
                          InputLabelProps={{
                            style: { fontSize: 16, color: "rgba(255,75,75,1)" },
                          }}
                        />
                      );
                    }
                     else if (element.type === "backlink") { 

                       return (
                        
                        <Box >
                        <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addValue(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="text of the link"
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
                        <TextField
                        onBlur={handleBlur}
                        onChange={(event) => addBackLink(event, index)}
                        key={element.id+1}
                        name={`${element.type}-${element.id}+1`}
                        error={Boolean(
                          touched.content &&
                            touched.content[index] &&
                            errors.content &&
                            errors.content[index]
                        )}
                        variant="filled"
                        label="back link"
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
                      </Box>
                      );
                    }
                  })}
                </>
              </Box>
            
            </form>
          );
        }}
      </Formik>
      {notification &&  <Notification
             message={notification.message}
             type={notification.type}
             duration={notification.duration}
             onClose={() => setNotification(null)}
      />}

    </BoxInsider>
    
  );
};
export default CreatePostPage;
