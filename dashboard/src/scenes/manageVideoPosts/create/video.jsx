import BoxInsider from "components/box";
import { TextField, Typography, Box ,MenuItem,IconButton  } from "@mui/material";
import AnimatedButton from "../../../components/button";
import { Formik } from "formik";
import * as yup from "yup";
import { useState ,useEffect} from "react";
import { Input } from "@mui/material";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Notification from "components/notification";
import InputAdornment from '@mui/material/InputAdornment';
import { getDownloadURL } from "firebase/storage";

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
const CreatePostPage = () => {
  const [categories, setCategories] = useState([]);

  const [notification, setNotification] = useState(null);
  const handleNotification = (message, type = 'error', duration = 9000) => {
    console.log("passed by notification");
    setNotification({ message, type, duration });
  };



 
  useEffect(() => {
    fetch('https://18.218.162.154:8443/server/category')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);
 
 
  const postSchema = yup.object().shape({
    title: yup.string().required(),
    image: yup.string(),
    description: yup.string().required(),
    linkpost: yup.string().required(),
    linkvideo: yup.string().required(),

    category: yup.object().shape({
        name:yup.string(),
        create_At:yup.string(),
      })
  });
  const initialValuesPostSchema = {
    title: "",
    image: "",
    description: "",
    linkpost: "",
    linkvideo: "",
    category:{
        name:"",
        create_At:"",
      }
  };
const Select=(event)=>{
  return event.target.files[0];
}
 


  const handleFormSubmit = async (values,onSubmitProps) => {
    try {
      console.log("passed by handleFormSubmit");
      const pictureUrl = await handleFileUpload(values.image);

      const postData = {
        title: values.title,
        image: pictureUrl,
        description: values.description,
        linkvideo: values.linkvideo,
        linkpost: values.linkpost,
        category: {
          name: values.name,
          create_At: values.create_At,
        },
      };
      await createPost(postData);
      onSubmitProps.resetForm();
      handleNotification('success!', 'success');
    } catch (error) {
      console.log("Error creating post: ", error);
      handleNotification('Error while creating post!', 'error');
    }
  };
  
  const handleFileUpload = async (file) => {
    try {
      const storage = getStorage();

      const postId = uuidv4();

      const storageRef = ref(
        storage,
        `mainvideo/${postId}`
      );
      await uploadBytes(storageRef, file);
      console.log("file",file);
      const url=await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.log("Error uploading file: ", error);
      throw new Error("Error uploading file!");
    }
  };
  
  const createPost = async (postData) => {
  try {  const SavedPostResonse = await fetch("https://18.218.162.154:8443/server/mainvideo", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"access_token"}`,
      },
      body: JSON.stringify(postData),
    });
    if (!SavedPostResonse.ok) {
      throw new Error("Error creating pos:");
    } else{
      return SavedPostResonse;
    }
  
  } catch (error) {
      console.error("Error creating post:", error);
      throw new Error("Error creating post:");
    }
  };
  
  return (
    <BoxInsider>
        {notification &&  <Notification
             message={notification.message}
             type={notification.type}
             duration={notification.duration}
             onClose={() => setNotification(null)}
      />}
      <Typography
        variant={"h4"}
        color="rgba(255,75,75,1)"
        sx={{ margin: "30px" }}
      >
        Dashboard/Manage_Video_Posts/mainvideo/
      </Typography>
      <Box className="controllersLayoutHomePageForm">
        <Box>
          <AnimatedButton
            className="buttonform"
            type="submit"
            form="myForm"
            sx={{
              "& .buttonform .top, .buttonform .bottom, .buttonform .left, .buttonform .right":
                { backgroundColor: "#ebff33" },
              "& .buttonform .border": { border: "1px solid #ebff33" },
              "& .buttonform": { color: "#ebff33" },
            }}
          >
            submit
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
         value={values.name}
      name="name"
        label="Category name"
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
                    value={values.description}
                    name="description"
                    error={Boolean(touched.description) && Boolean(errors.description)}
                    variant="filled"
                    label="description"
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
                    value={values.linkpost}
                    name="linkpost"
                    error={Boolean(touched.linkpost) && Boolean(errors.linkpost)}
                    variant="filled"
                    label="linkpost"
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
                    value={values.linkvideo}
                    name="linkvideo"
                    error={Boolean(touched.linkvideo) && Boolean(errors.linkvideo)}
                    variant="filled"
                    label="linkvideo"
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
                    value={values.create_At}
                    name="create_At"
                    error={Boolean(touched.create_At) && Boolean(errors.create_At)}
                    variant="filled"
                    label="create_At"
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
                        <Input
                          type="file"
                          onBlur={handleBlur}
                          onChange={(event)=>{values.image=Select(event)}}
/*                           value={values.picture}
 */                          placeholder="Insert a picture"
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
<Typography variant="h5" sx={{color:"rgba(255,75,75,1)" ,width:"600px"}}>upload a Picture</Typography>
                              <IconButton sx={{color:"rgba(255,75,75,1)"}} component="span">
                                <AddPhotoAlternateOutlinedIcon />
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                        
                    
                
                </>
              </Box>
            
            </form>
          );
        }}
      </Formik>
    

    </BoxInsider>
    
  );
};
export default CreatePostPage;
