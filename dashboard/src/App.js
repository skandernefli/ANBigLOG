import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Navigate,Routes, Route } from "react-router-dom";
import HeaderBar from "./scenes/global/HeaderBar";
import SideBar from "./scenes/global/SideBar";
import LoginPage from "./scenes/auth";
import { useSelector } from "react-redux";
// import manageFeatureNews from "./scenes/manageFeatureNews/index";
// import manageOtherSections from "./scenes/manageOtherSections/index";
// import managePostGallery from "./scenes/managePostGallery/index";
import ManagePosts from "./scenes/managePosts";

import { useStore } from 'react-redux';

// import manageVideoPosts from "./scenes/manageVideoPosts/index";

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
              <Route path="/manage_posts" element={ isAuth ?<ManagePosts />:<Navigate to="/"/>}/>
              {/* <Route path="/manage_featur_posts" element={<manageFeatureNews/>}/> */}
              {/* <Route path="/manage_other_sections" element={<manageOtherSections/>}/> */}
              {/* <Route path="/manage_post_gallery" element={<managePostGallery/>}/> */}
              {/* <Route path="/manage_video_posts" element={<manageVideoPosts/>}/> */}
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