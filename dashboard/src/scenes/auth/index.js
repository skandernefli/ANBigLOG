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
  console.log("Form Line29, index 1")
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const register = async (values, onSubmitProps) => {
    console.log("Form Line36, index 2:register async fonction");

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
        credentials: 'include',
        headers: { "Content-Type": "application/json","Authorization": `Bearer ${"access_token"}` },
        body: JSON.stringify(values),
      }
     
    );
   
   if (loggedInResponse.status===200){
    const loggedIn = await loggedInResponse.json();
   
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      console.log(token);
      navigate("/manage_posts");
      onSubmitProps.resetForm();
    }else{
      navigate("/");
      onSubmitProps.resetForm();
    }}
  };

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
        <form onSubmit={handleSubmit}  maxWidth="xs">
          <Box  >
            {isRegister && (
              <>
                <TextField
                  label="auth"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.authorized}
                  name="authorized"
                  error={
                    Boolean(touched.authorized) && Boolean(errors.authorized)
                  }
                  helperText={touched.authorized && errors.authorized}
                  sx={{ gridColumn: "span 2" }}
                />
              </>
            )}
            <TextField
              label="Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              error={Boolean(touched.name) && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              sx={{ gridColumn: "span 2" }}
              autoFocus
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box>
            <Button
              type="submit"
              fullWidth
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: "#FEE715FF",
                color: "#101820FF",
                "&:hover": { color: "#FEE715FF" },
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
                color: "#FEE715FF",
                "&:hover": {
                  cursor: "pointer",
                  color: "#FEE715FF",
                },
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
  console.log("line 188")
  return (
    <Box >
      <Box 
      
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#000" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          sx={{
            color: "#FEE715FF",
          }}
        >
          Welcome
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};
export default LoginPage;
