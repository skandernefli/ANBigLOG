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
  const [positions,setPosition]=useState([]);
  const addPosition=(event,index)=>{
    if (elements[index].type==="backlink"){
      if (positions.length === 0) {
        const newPosition = [{        index: index,        position: event.target.value      }];
        setPosition(newPosition);
        console.log("updated positions", newPosition);
      } else{
   positions.map((position,i)=>{
    if(position.index===index){
    const newPosition = [...positions];
    const updatedposition = {
      ...newPosition[i],
      index:index,
      position: event.target.value,
    };
    newPosition[i] = updatedposition;
    setPosition(newPosition);
    
    console.log("passed by addposition if",positions)
  }else{
      const newPosition = [...positions];
      newPosition.push({
    
      index:index,
      position: event.target.value,
    });
    setPosition(newPosition);
    console.log("passed by addposition else",positions)

    }
  
  
  })}
   
    console.log("passed by addposition",positions)}
  }
  const getPosition = (index) => {
    const position = positions.find((position) => position.index === index);
    return position ? position.position : '';
  }
  /************************************************************************************** */
  /**************************************************************************************** */
  const [desciptions,setDescription]=useState([]);
  const addDescription=(event,index)=>{
    if (elements[index].type === "image" ||
    elements[index].type === "video" ||
    elements[index].type === "file"  ||
    elements[index].type === "audio" ||
    elements[index].type === "headerimage"  ||
    elements[index].type=== "coverimage"  ||
    elements[index].type === "thumb"  ||
    elements[index].type === "postquote"  

    
    ){
      if (desciptions.length === 0) {
        const newDesciption = [{        index: index,        desciption: event.target.value      }];
        setDescription(newDesciption);
        console.log("updated desciptions", newDesciption);
      } else{
   desciptions.map((desciption,i)=>{
    if(desciption.index===index){
    const newDesciption = [...desciptions];
    const updatedDescription = {
      ...newDesciption[i],
      index:index,
      desciption: event.target.value,
    };
    newDesciption[i] = updatedDescription;
    setDescription(newDesciption);
    
    console.log("passed by addposition if",desciptions)
  }else{
      const newDesciption = [...desciptions];
      newDesciption.push({
    
      index:index,
      desciption: event.target.value,
    });
    setDescription(newDesciption);
    console.log("passed by addposition else",desciptions)

    }
  
  
  })}
   
    console.log("passed by addposition",desciptions)}
  }
  const getDescription = (index) => {
    const desciption = desciptions.find((desciption) => desciption.index === index);
    return desciption ? desciption.desciption : '';
  }





  const [titles,setTitles]=useState([]);
  const addTitle=(event,index)=>{
    if (elements[index].type === "image" ||
    elements[index].type === "video" ||
    elements[index].type === "file"  ||
    elements[index].type === "audio" ||
    elements[index].type === "headerimage"  ||
    elements[index].type=== "coverimage"  ||
    elements[index].type === "thumb"  ||
    elements[index].type === "postquote"  

    
    ){
      if (titles.length === 0) {
        const newTitle = [{        index: index,        title: event.target.value      }];
        setTitles(newTitle);
        console.log("updated titles", newTitle);
      } else{
   titles.map((title,i)=>{
    if(title.index===index){
    const newTitle = [...titles];
    const updatedTitle = {
      ...newTitle[i],
      index:index,
      title: event.target.value,
    };
    newTitle[i] = updatedTitle;
    setTitles(newTitle);
    
    console.log("passed by addposition if",titles)
  }else{
      const newTitle = [...titles];
      newTitle.push({
    
      index:index,
      title: event.target.value,
    });
    setTitles(newTitle);
    console.log("passed by addposition else",titles)

    }
  
  
  })}
   
    console.log("passed by addposition",titles)}
  }
  const getTitle = (index) => {
    const title = titles.find((title) => title.index === index);
    return title ? title.title : '';
  }
  
  



  const [sources,setSource]=useState([]);
  const addSource=(event,index)=>{
    if (elements[index].type === "image" ||
    elements[index].type === "video" ||
    elements[index].type === "file"  ||
    elements[index].type === "audio" ||
    elements[index].type === "headerimage"  ||
    elements[index].type=== "coverimage"  ||
    elements[index].type === "thumb"  ||
    elements[index].type === "postquote"  

    
    ){
      if (sources.length === 0) {
        const newSource = [{        index: index,        source: event.target.value      }];
        setSource(newSource);
        console.log("updated sources", newSource);
      } else{
   sources.map((source,i)=>{
    if(source.index===index){
    const newSource = [...sources];
    const updatedSource = {
      ...newSource[i],
      index:index,
      source: event.target.value,
    };
    newSource[i] = updatedSource;
    setSource(newSource);
    
    console.log("passed by addposition if",sources)
  }else{
      const newSource = [...sources];
      newSource.push({
    
      index:index,
      source: event.target.value,
    });
    setSource(newSource);
    console.log("passed by addposition else",sources)

    }
  
  
  })}
   
    console.log("passed by addposition",sources)}
  }
  const getSource = (index) => {
    const source = sources.find((source) => source.index === index);
    return source ? source.source : '';
  }


  /***************************************************************************************** */
  /****************************************************************************************** */
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
      elements[index].type === "audio" ||
      elements[index].type === "headerimage"  ||
      elements[index].type=== "coverimage"  ||
      elements[index].type === "thumb"  ||
      elements[index].type === "postquote"  
  
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
            "externalLink","headerimage","coverimage","thumb","postquote","headervideo","tag"

          ]),
        value: yup.string(),
        desciption:yup.string(),
        title:yup.string(),
        source:yup.string(),
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
        element.type  === "video" ||
        element.type  === "file"  ||
        element.type  === "audio" ||
        element.type  === "headerimage"  ||
        element.type === "coverimage"  ||
        element.type  === "thumb"  ||
        element.type  === "postquote"  
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
          const desciption=getDescription(index);
          const title=getTitle(index);
          const source=getSource(index);
          const newElements = elements;
          const updatedElement = {
            ...newElements[index],
            value:downloadlink,
            desciption:desciption,
            title:title,
            source:source,
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
const position=getPosition(index);
console.log("this is the link",link);
          const newElements = elements;
          const updatedElement = {
            ...newElements[index],
            value:JSON.stringify({textOfLink:element.value,backlinkLink:link,position:position}),
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
      desciption:element.desciption || "",
      title:element.title  || "",
      source:element.source  || "",

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
      <Box className="controllersLayout_2">
        <Box>
          <AnimatedButton className="button"
            onClick={() => {
              addElement("headervideo");
            }}
          >
          Header video
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("headerimage")}>
          Header Image          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("coverimage")}>
          Cover Image
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("thumb")}>
          thumb
          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("quotetext")}>
          Quote Text          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("postquote")}>
          Post Quote          </AnimatedButton>
        </Box>
        <Box>
          <AnimatedButton className="button" onClick={() => addElement("tag")}>
           tag
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
                    }
/********************************************************************************************************* */                    
                    else if (element.type === "headerimage") {
                      return (
                        <Box>
                             <Typography
        variant={"h6"}
        color="#ebff33"
        sx={{ margin: "30px" }}
      >
       Header Image
      </Typography>
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
       <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addTitle(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="title"
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
                                  <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addDescription(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="description"
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
                                  <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addSource(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="Source"
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
                           
                        </Box>
                        
                      );
                    }

                    else if (element.type === "coverimage") {
                      return (
                        <Box>
                           <Typography
        variant={"h6"}
        color="#ebff33"
        sx={{ margin: "30px" }}
      >
      Cover image
      </Typography>
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
       <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addTitle(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="title"
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
                                  <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addDescription(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="description"
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
                                  <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addSource(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="Source"
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
                           
                        </Box>
                        
                      );
                    }
                    else if (element.type === "thumb") {
                      return (
                        <Box>
                           <Typography
        variant={"h6"}
        color="#ebff33"
        sx={{ margin: "30px" }}
      >
      Thumb
      </Typography>
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
       <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addTitle(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="title"
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
                                  <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addDescription(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="description"
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
                                  <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addSource(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="Source"
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
                           
                        </Box>
                        
                      );
                    }
                    else if (element.type === "postquote") {
                      return (
                        <Box>
                           <Typography
        variant={"h6"}
        color="#ebff33"
        sx={{ margin: "30px" }}
      >
     postquote
      </Typography>
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
       <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addTitle(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="title"
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
                                  <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addDescription(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="description"
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
                                  <TextField
                          onBlur={handleBlur}
                          onChange={(event) => addSource(event, index)}
                          key={element.id}
                          name={`${element.type}-${element.id}`}
                          error={Boolean(
                            touched.content &&
                              touched.content[index] &&
                              errors.content &&
                              errors.content[index]
                          )}
                          variant="filled"
                          label="Source"
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
                           
                        </Box>
                        
                      );
                    }
                    





                    
/******************************************************************************************************************************* */               
                    else if (element.type === "externalVideo") {
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
        select
      name="position"
        label="position"
        variant="filled"
        onChange={(event) => addPosition(event, index)}
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
         <MenuItem value="start">Start</MenuItem>
      <MenuItem value="middle">Middle</MenuItem>
      <MenuItem value="end">End</MenuItem>
      <MenuItem value="between">Between</MenuItem>
     
      </TextField>
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
