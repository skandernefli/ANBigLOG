import { Box, Button, Typography, TextField } from "@mui/material";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import * as yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const registerSchema = yup.object().shape({
  authorized: yup.string().required("required"),
  name: yup.string().required("required"),
  password: yup.string().required("required"),
});
const loginSchema = yup.object().shape({
  name: yup.string().required("required"),
  password: yup.string().required("required"),
});
const initialValuesRegister = {
  authorized: "",
  name: "",
  password: "",
};
const initialValuesLogin = {
  name: "",
  password: "",
};
const Form = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const register = async (values, onSubmitProps) => {

    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);

    }

    const savedUserResponse = await fetch(
      "http://localhost:8000/server/auth/register",
      {
        method: "POST",
        credentials: 'include',
        headers: { "Content-Type": "application/json","Authorization": `Bearer ${"access_token"}` },
        body: JSON.stringify(values),
      }
    );

    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();
    if (savedUser) {
      setPageType("login");
    }
  };
  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch(
      "http://localhost:8000/server/auth/login",
      {
        method: "POST",
        /* credentials: 'include', */
        headers: { "Content-Type": "application/json"/* ,"Authorization": `Bearer ${accessToken}`  */},
        body: JSON.stringify(values),
      }
     
    );
   
 
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();

    if (loggedInResponse.status===200) {
      
      localStorage.setItem("access_token", loggedIn.token);
      dispatch(
        setLogin({ 
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
    
      window.location.reload(navigate("/posts_list"));
     
    }else{
      navigate("/");
      onSubmitProps.resetForm();
    }}
  

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
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
          <Box  >
            {isRegister && (
              <>
                <TextField
                  fullWidth
                  label="auth"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.authorized}
                  name="authorized"
                  error={
                    Boolean(touched.authorized) && Boolean(errors.authorized)
                  }
                  helperText={touched.authorized && errors.authorized}
                  sx={{ gridColumn: "span 2" ,mb:"1rem"}}
                />
              </>
            )}
            <TextField
            fullWidth
              label="Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              error={Boolean(touched.name) && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              sx={{ gridColumn: "span 2",mb:"1rem" }}
              autoFocus
            />
            <TextField
            fullWidth
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4",mb:"1rem" }}
            />
          </Box>
          <Box>
            <Button
              type="submit"
              fullWidth
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: "#101820ff",
                color: "#fff",
                "&:hover": { color: "#101820ff" },
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                color: "#101820ff",
                "&:hover": {
                  cursor: "pointer",
                  color: "#11112fff",
                },
                textAlign:"center"
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </Typography>
          </Box>
        </form>);
      }}
    </Formik>
  );
};
const LoginPage = () => {
  return (
    <Box height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}backgroundColor={"#101820ff"}>
    <Box  minWidth={"30%"}maxWidth={"30%"} borderRadius={"3%"} padding={"1rem"} backgroundColor={"#fff"} >
      <Box 
      
        sx={{
         
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#101820ff",color:"#fff" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          sx={{
            color: "#101820ff",
            m:"2rem"
          }}
        >
          Welcome
        </Typography>
        </Box>

        <Form />
    </Box>
    </Box>
  );
};
export default LoginPage;
