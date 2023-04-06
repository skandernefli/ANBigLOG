import { useState } from 'react';
import {  Menu, MenuItem,  ProSidebar } from 'react-pro-sidebar';
import{Box, IconButton,Typography,useTheme} from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import {Link} from "react-router-dom";
import { tokens } from '../../theme';
// import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
// import CollectionsOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import OndemandvideoOutlinedIcon from "@mui/icons-material/OndemandvideoOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.white[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

const SideBar =()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const [isCollapsed,setIsCollapsed]=useState(false);
    const[selected,setSelected]=useState("managePosts");

    return (
        <box
        // sx={{
        //     "&sidebar-bg-color":{
        //         background :`${colors.primary[100]} !important`,
        //     },
        //     "& .pro-icon-wrapper":{
        //         backgroundColor:"transparent !important",
        //     },
        //     "& .pro-inner-item":{
        //         padding:"5px 35px 5px 20px !important",
        //     },
        //     "& .pro-inner-item:hover":{
        //         color:`${colors.primary[900]} !important`,
        //     },
        //     "& .pro-menu-item.active":{
        //         color:`${colors.secondary[100]} !important`,
        //     }

        // }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* logo and menu Icon */}
                  <MenuItem 
                  onClick={()=>setIsCollapsed(!isCollapsed)}
                  icon={isCollapsed ? <MenuOutlinedIcon/>:undefined}
                  style={{
                    margin:"10px 0 20px 0",
                    color:colors.white[100],
                  }}>
                    {!isCollapsed &&(
                        <Box
                        display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px">
                            <Typography variant="h3" color={colors.white[100]}>ANbigLOG</Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon/>
                            </IconButton>
                        </Box>
                    )}
                  </MenuItem>
                  
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="managePosts"
              to="/"
            
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
            //   color={colors.primary[100]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography></Box>
                </Menu>
            </ProSidebar>

        </box>
    )
}
export default SideBar;