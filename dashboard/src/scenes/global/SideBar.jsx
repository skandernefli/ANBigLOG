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
          color: `#FEE715FF  !important`,
        },
        "& .pro-menu-item.active": {
          color: `#fff !important`,
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
              color: "#fff",
            }}
          >
            {!isCollapsed && (
              <Box
              justifySelflf="flex-start"
              alignSelf="flex-start"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={"#FEE715FF "}>
                  ANbigLOG
                </Typography>
                <IconButton         onClick={toggleCollapse}
>
                  <MenuOutlinedIcon
                    style={{
                      color: "#fff",
                    }}
                  />
                </IconButton>
              </Box>
            )}
          </MenuItem>

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
                color={"#fff"}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Dashboard
              </Typography>

              <SubMenu
                active={selected === "postsList"}
                style={{
                  color: colors.white[500],
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
                    color: "#fff",
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
                    color: "#fff",
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
                  color: colors.white[500],
                }}
                onClick={() => {
                  setSelected("managePostsGallery");
                }}
                icon={<CollectionsOutlinedIcon />}
                title="Manage posts gallery"
              >
                <Link to={"/manage_posts_gallery"} />
                <MenuItem
                  active={selected === "managePostsGallery"}
                  style={{
                    color: "#fff",
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
                    color: "#fff",
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
                    color: "#fff",
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
                    color: "#fff",
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
                  color: "#fff",
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
                  color: colors.white[500],
                }}
                onClick={() => {
                  setSelected("manageVideoPosts");
                }}
                icon={<PlayCircleFilledOutlinedIcon />}
                title="Manage video posts"
              >
                <Link to={"/manage_video_posts"} />
                <MenuItem
                  active={selected === "manageVideoPosts"}
                  style={{
                    color: "#fff",
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
                    color: "#fff",
                  }}
                  onClick={() => setSelected("popularVideo")}
                  icon={<TrendingUpOutlinedIcon />}
                >
                  <Typography>Popular video</Typography>
                  <Link to={"/popular_video"} />
                </MenuItem>
              </SubMenu>
            </Box>
          )}
        </Menu>   </Box></SidebarContent>
      </ProSidebar>
    </Box>
  );
};
export default SideBar;