import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Navigate,Routes, Route } from "react-router-dom";
import HeaderBar from "./scenes/global/HeaderBar";
import SideBar from "./scenes/global/SideBar";
import LoginPage from "./scenes/auth";
import ManageFeaturePosts  from "./scenes/manageFeaturePosts/index";
import ManageOtherSections from "./scenes/manageOtherSections/index";
import ManagePostGallery from "./scenes/managePostGallery/index";
import PostsList from "./scenes/postsList";
import ManageVideoPosts from "./scenes/manageVideoPosts/index";
import { useStore } from 'react-redux';


function App() {
  const store = useStore();
  const token = store.getState().token;
  const [theme, colorMode] = useMode();
  const [isSideBar, setIsSideBar] = useState(true);
  const isAuth = Boolean(token);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <BrowserRouter>
        {isAuth &&  <SideBar isSideBar={isSideBar} />}
          <main className="content">
          {isAuth &&  <HeaderBar setIsSideBar={setIsSideBar}/>}
            <Routes>
            {isAuth ? (<>
              <Route path="/posts_list" element={ isAuth ?<PostsList />:<Navigate to="/"/>}/>
              <Route path="/manage_featur_posts" element={<ManageFeaturePosts/>}/>
              <Route path="/manage_other_sections" element={<ManageOtherSections/>}/>
              <Route path="/manage_post_gallery" element={<ManagePostGallery/>}/>
              <Route path="/manage_video_posts" element={<ManageVideoPosts/>}/>
            </>):(   <Route path="/" element={<LoginPage />} />
              )}
            </Routes>
          </main>
          </BrowserRouter>

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;