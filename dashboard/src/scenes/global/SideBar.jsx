import { useState } from "react";
import { Menu, MenuItem, ProSidebar, SubMenu,SidebarHeader,SidebarContent } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import { useSelector,useDispatch } from "react-redux";
import { setCollapse} from "../../state/index";
import { useStore } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import profileimg from"../../public/profileimg.jpg";
import logo from "../../public/logo.png";
const SidebarState = () => {
  const store = useStore();
  const isCollapsed = store.getState().collapsed;
  const dispatch = useDispatch();

  const toggleCollapse = () => {
    const collapsed = !isCollapsed;
    dispatch(setCollapse({ collapsed }));
  };

  return { isCollapsed, toggleCollapse };
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [Collapsed, setIsCollapsed] = useState(false);
 const [selected, setSelected] = useState("managePosts");
  const { isCollapsed, toggleCollapse } = SidebarState();

  return (
    <Box
    zIndex={1001}

      sx={{
        "& .pro-sidebar-inner": {
          backgroundColor: "transparent !important",
          height: "100vh",
          position:"fixed",
          boxShadow:"",
          boxShadow: "4px 0 4px rgba(0, 0, 0, 0.2)",
  },
  '& .pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu > .pro-inner-item > .pro-arrow-wrapper .pro-arrow': {

    borderColor: 'rgba(255,75,75,1)',
   
  },
        '&::-webkit-scrollbar': {
          width: 0,
        },
        "& .pro-menu-item::marker": {
          color: "transparent !important",
        },
        
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `#e60234  !important`,
        },
        "& .pro-menu-item.active": {
          color: `rgba(255,75,75,1) !important`,
        },
        "& .pro-menu-item.after": {
          color: `rgba(255,75,75,1) !important`,
        },
        "& .prosidebar-menu": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "100%",
        }
      }}
    >
      <ProSidebar collapsed={Collapsed}  style={{height: "100vh", }} >
      <SidebarHeader>
       
          {/* logo and menu Icon */}
          <MenuItem
         onClick={()=>{toggleCollapse();setIsCollapsed(!Collapsed)}}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "rgba(255,75,75,1)",
              
            }}
          >
         
            {!isCollapsed && (
              <Box
              justifySelflf="flex-start"
              style={{ display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center' }}                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
            <img src={logo} width="130" height="73" alt="ANbigLog"/>
              
             
              </Box>
            )}
          </MenuItem>
          {!isCollapsed &&(    <div style={{ display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center' }}>
  <Avatar src={profileimg} alt='Profile Photo' sx={{ width: 70, height: 70, boxShadow: "10px 0 10px rgba(0, 0, 0, 0.2)",marginBottom:"10px" }} />
  <Typography variant="h5" color={"rgba(255,75,75,1)"} /* sx={{fontFamily: 'Newsreader'}} */ >Skander Nefli</Typography>
  <Typography variant="h6" color={"rgba(255,75,75,1)"} sx={{marginBottom:"20px"}} >Founder</Typography>


</div>
)}
          </SidebarHeader>
          <SidebarContent>
          <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems:"flex-start",
        height: "100%",
      }}
    >
          <Menu iconShape="square" >
          {!isCollapsed && (
            <Box paddingLeft={isCollapsed ? undefined : "4%"}    
            mr="15px"  >
              <Typography
                variant="h6"
                color={"rgba(255,75,75,1)"}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Dashboard
              </Typography>
              <MenuItem
                active={selected === "categories"}
                style={{
                  color: "rgba(255,75,75,1)",
                }}
                onClick={() => setSelected("categories")}
                icon={<FeaturedPlayListOutlinedIcon />}
              >
                <Typography>categories</Typography>
                <Link to={"/categories"} />
              </MenuItem>
              <SubMenu
                active={selected === "postsList"}
                style={{
                  color: "rgba(255,75,75,1)",
                }}
                onClick={() => {
                  setSelected("postsList");
                }}
                icon={<FeedOutlinedIcon />}
                title="Manage Posts"
               
              >
                
                <MenuItem
                  active={selected === "postsList"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("postsList")}
                  icon={<FormatListBulletedOutlinedIcon />}
                >
                  <Typography>Posts list</Typography>
                  <Link to={"/posts_list"} />
                </MenuItem>
                <MenuItem
                  active={selected === "createPost"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("createPost")}
                  icon={<AddOutlinedIcon />}
                >
                  <Typography>Create a post</Typography>
                  <Link to={"/create_post"} />
                </MenuItem>
              </SubMenu>
              <SubMenu
                active={selected === "managePostsGallery"}
                style={{
                  color: "rgba(255,75,75,1)",
                }}
                onClick={() => {
                  setSelected("managePostsGallery");
                }}
                icon={<CollectionsOutlinedIcon />}
                title="Manage posts gallery"
              >
                <MenuItem
                  active={selected === "managePostsGallery"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("managePostsGallery")}
                  icon={<CollectionsOutlinedIcon />}
                >
                  <Typography>Manage posts gallery</Typography>
                  <Link to={"/manage_posts_gallery"} />
                </MenuItem>
                <MenuItem
                  active={selected === "manageTrendy"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("manageTrendy")}
                  icon={<TrendingUpOutlinedIcon />}
                >
                  <Typography>Trendy</Typography>
                  <Link to={"/manage_trendy"} />
                </MenuItem>
                <MenuItem
                  active={selected === "manageLatest"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("manageLatest")}
                  icon={<TravelExploreOutlinedIcon />}
                >
                  <Typography>Latest</Typography>
                  <Link to={"/manage_latest"} />
                </MenuItem>
                <MenuItem
                  active={selected === "managePopular"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("managePopular")}
                  icon={<StarOutlineOutlinedIcon />}
                >
                  <Typography>Manage popular</Typography>
                  <Link to={"/manage_popular"} />
                </MenuItem>
              </SubMenu>
              <MenuItem
                active={selected === "manageFeaturePosts"}
                style={{
                  color: "rgba(255,75,75,1)",
                }}
                onClick={() => setSelected("manageFeaturePosts")}
                icon={<FeaturedPlayListOutlinedIcon />}
              >
                <Typography>Manage feature posts</Typography>
                <Link to={"/manage_Feature_Posts"} />
              </MenuItem>
              <SubMenu
                active={selected === "manageVideoPosts"}
                style={{
                  color: "rgba(255,75,75,1)",
                }}
                onClick={() => {
                  setSelected("manageVideoPosts");
                }}
                icon={<PlayCircleFilledOutlinedIcon />}
                title="Manage video posts"
              >
                <MenuItem
                  active={selected === "manageVideoPosts"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("manageVideoPosts")}
                  icon={<PlayCircleFilledOutlinedIcon />}
                >
                  <Typography>Manage video posts</Typography>
                  <Link to={"/manage_video_posts"} />
                </MenuItem>
                <MenuItem
                  active={selected === "popularVideo"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("popularVideo")}
                  icon={<TrendingUpOutlinedIcon />}
                >
                  <Typography>Popular video</Typography>
                  <Link to={"/popular_video"} />
                </MenuItem>
              </SubMenu>
              <SubMenu
                active={selected === "manageSportsSection"}
                style={{
                  color: "rgba(255,75,75,1)",
                }}
                onClick={() => {
                  setSelected("manageSportsSection");
                }}
                icon={<PlayCircleFilledOutlinedIcon />}
                title="Sports Section"
              >
                <MenuItem
                  active={selected === "manageSportsSection"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("manageSportsSection")}
                  icon={<PlayCircleFilledOutlinedIcon />}
                >
                  <Typography>Manage main post</Typography>
                  <Link to={"/manageSportsMainSection"} />
                </MenuItem>
                <MenuItem
                  active={selected === "manageSideSportsSection"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("manageSideSportsSection")}
                  icon={<TrendingUpOutlinedIcon />}
                >
                  <Typography>Manage Side Sports Section</Typography>
                  <Link to={"/manageSideSportsSection"} />
                </MenuItem>
              </SubMenu>
              <MenuItem
                active={selected === "manageSinglePlayPost"}
                style={{
                  color: "rgba(255,75,75,1)",
                }}
                onClick={() => setSelected("manageSinglePlayPost")}
                icon={<FeaturedPlayListOutlinedIcon />}
              >
                <Typography> Single Play Post</Typography>
                <Link to={"/manageSinglePlayPost"} />
              </MenuItem>
              <SubMenu
                active={selected === "manageTrendingSection"}
                style={{
                  color: "rgba(255,75,75,1)",
                }}
                onClick={() => {
                  setSelected("manageTrendingSection");
                }}
                icon={<PlayCircleFilledOutlinedIcon />}
                title=" Trending Section"
              >
                <MenuItem
                  active={selected === "manageBigPosts"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("manageBigPosts")}
                  icon={<PlayCircleFilledOutlinedIcon />}
                >
                  <Typography>Manage Big Posts</Typography>
                  <Link to={"/manageBigPosts"} />
                </MenuItem>
                <MenuItem
                  active={selected === "manageSidePosts"}
                  style={{
                    color: "rgba(255,75,75,1)",
                  }}
                  onClick={() => setSelected("manageSidePosts")}
                  icon={<TrendingUpOutlinedIcon />}
                >
                  <Typography>Manage Side Posts</Typography>
                  <Link to={"/manageSidePosts"} />
                </MenuItem>
              </SubMenu>
              <MenuItem
                active={selected === "manageMoviesSection"}
                style={{
                  color: "rgba(255,75,75,1)",
                }}
                onClick={() => setSelected("manageMoviesSection")}
                icon={<FeaturedPlayListOutlinedIcon />}
              >
                <Typography> Movies Section</Typography>
                <Link to={"/manageMoviesSection"} />
              </MenuItem>
              <MenuItem
                active={selected === "manageEntertainmentSection"}
                style={{
                  color: "rgba(255,75,75,1)",
                }}
                onClick={() => setSelected("manageEntertainmentSection")}
                icon={<FeaturedPlayListOutlinedIcon />}
              >
                <Typography>Entertainment Section</Typography>
                <Link to={"/manageEntertainmentSection"} />
              </MenuItem>
            </Box>
          )}
        </Menu>   </Box></SidebarContent>
      </ProSidebar>
    </Box>
  );
};
export default SideBar;