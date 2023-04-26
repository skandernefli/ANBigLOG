import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext /* tokens */ } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useDispatch } from "react-redux";
import { setLogout } from "state";
import { useNavigate } from "react-router-dom";
const HeaderBar = () => {
  const theme = useTheme();
  const navigate=useNavigate()
  const dispatch=useDispatch();
  //const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  
  
  const logout=async()=>{
   const logoutser= await fetch(
  "http://localhost:8000/server/auth/logout",
  {
    method: "POST",
    credentials: 'include',
    headers: { "Content-Type": "application/json","Authorization": `Bearer ${"access_token"}` },
    body: JSON.stringify(),
  }
  );
 
  if (logoutser.status===200){
    dispatch(setLogout())
  }

  } 
   
  return (
    <Box display="flex" justifyContent="flex-end" p={2}   position={"fixed"} top={0} right={0} height={"8vh"} left={0} backgroundColor={"#fff"} zIndex={999}boxShadow=" 0 10px 10px -10px rgba(0, 0, 0, 0.5)"  borderBottom="blur 1px" borderBottomColor="#101820ff">
      <Box display="flex" justifyContent="flex-end" >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={()=>{
          logout();   window.location.reload(navigate("/"));;
          }
        }>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default HeaderBar;