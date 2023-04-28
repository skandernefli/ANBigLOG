import BoxInsider from "components/box";
import {Button,TextField, Typography,Box } from "@mui/material";
import AnimatedButton  from "../../components/button";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Input } from '@mui/material';


const CreatePostPage =()=>{

    const [elements,setElements]=useState([]);
    const addElement=(elementType)=>{
  setElements([...elements,{type:elementType}]);
    };
  
    return(
      <BoxInsider>
      <Typography variant={"h4"} color="rgba(255,75,75,1)" sx={{margin:"30px"}} >Dashboard/Manage_Posts/Create_Post</Typography>
      <Box className="controllersLayout">
        <Box><AnimatedButton onClick={() => addElement('text')}>add text</AnimatedButton ></Box>
        <Box><AnimatedButton onClick={() => addElement('title')} >add title</AnimatedButton ></Box>
        <Box><AnimatedButton onClick={() => addElement('sub')}>add sub</AnimatedButton ></Box>
        <Box><AnimatedButton onClick={() => addElement('code')}>add code</AnimatedButton ></Box>
        <Box><AnimatedButton onClick={() => addElement('quotes')}>add quotes</AnimatedButton ></Box>
        <Box><AnimatedButton onClick={() => addElement('points')}>add points</AnimatedButton ></Box>
        <Box><AnimatedButton onClick={() => addElement('image')}>add image</AnimatedButton ></Box>
        <Box><AnimatedButton onClick={() => addElement('video')}>add video</AnimatedButton ></Box>
        <Box><AnimatedButton onClick={() => addElement('file')}>add file</AnimatedButton ></Box>
        <Box><AnimatedButton onClick={() => addElement('link')}>add link</AnimatedButton ></Box>
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
                  label="Title"
                  sx={{ gridColumn: "span 2" ,mb:"1rem",backgroundColor:"rgba(255,255,255,0.7)" ,width:"90%",borderColor:"#000"}}
                  inputProps={{style: {fontSize: 18,color:"#FFF"}}} // font size of input text
                  InputLabelProps={{style: {fontSize: 16,color:"rgba(255,75,75,1)"}}}
                />
                <TextField

                  variant="filled"
                  label="auth"
                  multiline
                  rows={10}
                  maxRows={400}
                  sx={{ gridColumn: "span 2" ,mb:"1rem",backgroundColor:"rgba(255,255,255,0.7)" ,width:"90%",height:"20"}}
                  inputProps={{style: {fontSize: 18,color:"#FFF"}}} // font size of input text
                  InputLabelProps={{style: {fontSize: 16,color:"rgba(255,75,75,1)"}}}
                />
 {elements.map((element,index)=>{
                if (element.type==='text'){
                  return(  <TextField

                    variant="filled"
                    label="paragraph"
                    multiline
                    rows={10}
                    maxRows={400}
                    sx={{ gridColumn: "span 2" ,mb:"1rem",backgroundColor:"rgba(255,255,255,0.7)" ,width:"90%",height:"20"}}
                    inputProps={{style: {fontSize: 18,color:"#FFF"}}} // font size of input text
                    InputLabelProps={{style: {fontSize: 16,color:"rgba(255,75,75,1)"}}}
                  />)
                }else if(element.type==='title'){
                  return(  <TextField
                    variant="filled"
                    label="Title"
                    sx={{ gridColumn: "span 2" ,mb:"1rem",backgroundColor:"rgba(255,255,255,0.7)" ,width:"90%",borderColor:"#000"}}
                    inputProps={{style: {fontSize: 18,color:"#FFF"}}} // font size of input text
                    InputLabelProps={{style: {fontSize: 16,color:"rgba(255,75,75,1)"}}}
                  />)
                }else if(element.type==='sub'){
                  return(  <TextField
                    variant="filled"
                    label="sub"
                    sx={{ gridColumn: "span 2" ,mb:"1rem",backgroundColor:"rgba(255,255,255,0.7)" ,width:"90%",borderColor:"#000"}}
                    inputProps={{style: {fontSize: 18,color:"#FFF"}}} // font size of input text
                    InputLabelProps={{style: {fontSize: 16,color:"rgba(255,75,75,1)"}}}
                  />)
                }else if(element.type==='code'){
                  return(  <TextField

                    variant="filled"
                    label="code"
                    multiline
                    rows={10}
                    maxRows={400}
                    sx={{ gridColumn: "span 2" ,mb:"1rem",backgroundColor:"rgba(255,255,255,0.7)" ,width:"90%",height:"20"}}
                    inputProps={{style: {fontSize: 18,color:"#FFF"}}} // font size of input text
                    InputLabelProps={{style: {fontSize: 16,color:"rgba(255,75,75,1)"}}}
                  />)
                }else if(element.type==='quotes'){
                  return(<TextField

                    variant="filled"
                    label="quotes"
                    multiline
                    rows={10}
                    maxRows={400}
                    sx={{ gridColumn: "span 2" ,mb:"1rem",backgroundColor:"rgba(255,255,255,0.7)" ,width:"90%",height:"20"}}
                    inputProps={{style: {fontSize: 18,color:"#FFF"}}} // font size of input text
                    InputLabelProps={{style: {fontSize: 16,color:"rgba(255,75,75,1)"}}}
                  />)
                }else if(element.type==='points'){
                  return(<TextField
                    variant="filled"
                    label="points"
                    sx={{ gridColumn: "span 2" ,mb:"1rem",backgroundColor:"rgba(255,255,255,0.7)" ,width:"90%",borderColor:"#000"}}
                    inputProps={{style: {fontSize: 18,color:"#FFF"}}} // font size of input text
                    InputLabelProps={{style: {fontSize: 16,color:"rgba(255,75,75,1)"}}}
                  />)
                }else if(element.type==='image'){
                  return(  <Input
                    type="file"
/*                     onChange={handleFileInputChange}
 */                  />)
                }else if(element.type==='video'){
                  return(  <Input
                    type="file"
/*                     onChange={handleFileInputChange}
 */                  />)
                }else if(element.type==='file'){
                  return(  <Input
                    type="file"
/*                     onChange={handleFileInputChange}
 */                  />)
                }else if(element.type==='link'){
                  return(<TextField
                    variant="filled"
                    label="link"
                    sx={{ gridColumn: "span 2" ,mb:"1rem",backgroundColor:"rgba(255,255,255,0.7)" ,width:"90%",borderColor:"#000"}}
                    inputProps={{style: {fontSize: 18,color:"#FFF"}}} // font size of input text
                    InputLabelProps={{style: {fontSize: 16,color:"rgba(255,75,75,1)"}}}
                  />)
                }
              })}
              </></Box></form>)}}</Formik>
             
      </BoxInsider>
 

    );
}
export default CreatePostPage;
