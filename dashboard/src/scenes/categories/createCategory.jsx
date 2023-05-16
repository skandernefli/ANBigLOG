import BoxInsider from "components/box";
import { TextField, Typography, Box   } from "@mui/material";
import AnimatedButton from "../../components/button";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";

import "firebase/storage";
import Notification from "components/notification";

const CreatePostPage = () => {

  const [notification, setNotification] = useState(null);
  const handleNotification = (message, type = 'error', duration = 9000) => {
    console.log("passed by notification");
    setNotification({ message, type, duration });
  };



 
 
 
  const postSchema = yup.object().shape({
    name: yup.string().required(),
  
  });
  const initialValuesPostSchema = {
    name: "",
 
  };

 


  const handleFormSubmit = async (values,onSubmitProps) => {
    try {

      const postData = {
        name: values.name,
   
      };
      await createPost(postData);
      onSubmitProps.resetForm();
      handleNotification('success!', 'success');
    } catch (error) {
      console.log("Error creating post: ", error);
      handleNotification('Error while creating post!', 'error');
    }
  };
  

  
  const createPost = async (postData) => {
  try {  const SavedPostResonse = await fetch("http://localhost:8000/server/category", {
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
        Dashboard/Categories/
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
 
      </TextField>
      
                    
                
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
