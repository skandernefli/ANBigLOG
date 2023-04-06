import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import HeaderBar from "./scenes/global/HeaderBar";
import SideBar from "./scenes/global/SideBar";
// import manageFeatureNews from "./scenes/manageFeatureNews/index";
// import manageOtherSections from "./scenes/manageOtherSections/index";
// import managePostGallery from "./scenes/managePostGallery/index";
import managePosts from "./scenes/managePosts";
// import manageVideoPosts from "./scenes/manageVideoPosts/index";
import { Routes, Route } from "react-router-dom";
function App() {
  const [theme, colorMode] = useMode();
  const [isSideBar, setIsSideBar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSideBar={isSideBar} />
          <main className="content">
          <HeaderBar setIsSideBar={setIsSideBar}/>
            <Routes>
              <Route path="/" element={<managePosts />}/>
              {/* <Route path="/manage_featur_posts" element={<manageFeatureNews/>}/> */}
              {/* <Route path="/manage_other_sections" element={<manageOtherSections/>}/> */}
              {/* <Route path="/manage_post_gallery" element={<managePostGallery/>}/> */}
              {/* <Route path="/manage_video_posts" element={<manageVideoPosts/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
