import BoxInsider from "components/box";
import {Button,TextField, Typography,Box } from "@mui/material";
import AnimatedButton  from "../../components/button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik } from "formik";
import * as yup from "yup";

const CreatePostPage =()=>{
  return(
       
    
      <BoxInsider>
      <Typography variant={"h4"} color="rgba(255,75,75,1)" sx={{margin:"30px"}} >Dashboard/Manage_Posts/Create_Post</Typography>
      <Box className="controllersLayout">
        <Box><AnimatedButton >add text</AnimatedButton ></Box>
        <Box><AnimatedButton >add title</AnimatedButton ></Box>
        <Box><AnimatedButton >add sub</AnimatedButton ></Box>
        <Box><AnimatedButton >add code</AnimatedButton ></Box>
        <Box><AnimatedButton >add quotes</AnimatedButton ></Box>
        <Box><AnimatedButton >add points</AnimatedButton ></Box>
        <Box><AnimatedButton >add image</AnimatedButton ></Box>
        <Box><AnimatedButton >add video</AnimatedButton ></Box>
        <Box><AnimatedButton >add File</AnimatedButton ></Box>
        <Box><AnimatedButton >add Link</AnimatedButton ></Box>
        <Box><AnimatedButton sx={{


"& .button .top, .button .bottom, .button .left, .button .right":{backgroundColor:"#ebff33"},
"& .button .border":{border:"1px solid #ebff33"},
"& .button":{color:"#ebff33"}




        }} >Submit</AnimatedButton ></Box>

      </Box>
      <Formik

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
        return(
        <form onSubmit={handleSubmit}   >
          <Box  paddingLeft={4}   sx={{
        '& .MuiTextField-root': { backgroundColor:"transparent",fontSize :"300pt",},
      }} >
     
              <>
                <TextField
                  variant="filled"
                  label="auth"
                  sx={{ gridColumn: "span 2" ,mb:"1rem",backgroundColor:"rgba(255,255,255,0.7)" ,width:"90%"}}
                  inputProps={{style: {fontSize: 22,color:"#ebff33"}}} // font size of input text
                  InputLabelProps={{style: {fontSize: 18,color:"#ebff33"}}}
                />
                <TextField
                id="outlined-multiline-static"

                  variant="filled"
                  label="auth"
                  multiline
                  rows={10}
                  maxRows={400}
                  sx={{ gridColumn: "span 2" ,mb:"1rem",backgroundColor:"rgba(255,255,255,0.7)" ,width:"90%",height:"20"}}
                />

              </></Box></form>)}}</Formik>
      </BoxInsider>
 

    );
}
export default CreatePostPage;
