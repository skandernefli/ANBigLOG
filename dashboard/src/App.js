import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Navigate,Routes, Route } from "react-router-dom";
import HeaderBar from "./scenes/global/HeaderBar";
import SideBar from "./scenes/global/SideBar";
import CreatePostPage from "scenes/createPost";
import Background from "components/background";
import LoginPage from "./scenes/auth";
import ManageFeaturePosts  from "./scenes/manageFeaturePosts/managefeatureposts";
import ManageOtherSections from "./scenes/manageOtherSections/index";
import ManagePostGallery from "./scenes/managePostGallery/managepostsgallery";
import PostsList from "./scenes/postsList";
import ManageVideoPosts from "./scenes/manageVideoPosts/managevideoposts";
import Mainvideo from "./scenes/manageVideoPosts/mainvideo";
import Addvideo from "./scenes/manageVideoPosts/create/video";
import Addvideoposts from "./scenes/manageVideoPosts/create/videopost";
import ManageSideSportsSection from "./scenes/ManageSportsSection/manageSideSportsSection";
import ManageSportsMainSection from "./scenes/ManageSportsSection/manageSportsMainSection";
import Entertainment from "./scenes/entertainment/entertainment";
import Movies from "./scenes/movies/movies";
import ManageSinglePlayPost from "./scenes/manageSinglePlayPost/manageSinglePlayPost";
import ManageBigPosts from "./scenes/manageTrendingSection/manageBigPosts";
import ManageSidePosts from "./scenes/manageTrendingSection/manageSidePosts";
import { useStore } from 'react-redux';
import  AddPostGallery from "./scenes/managePostGallery/create/addPostGallery";
import  Addtrendy from "./scenes/managePostGallery/create/addtrendy";
import  Addpopular from "./scenes/managePostGallery/create/addpopular";
import  Addlatest from "./scenes/managePostGallery/create/addlatest";
import  AddManageSideSportsSection from "./scenes/ManageSportsSection/create/addSide";
import  AddManageSportsMainSection from "./scenes/ManageSportsSection/create/addMain";
import  AddEntertainment from "./scenes/entertainment/addEntertainment";
import  AddMovies from "./scenes/movies/addMovies";
import  AddManageSinglePlayPost from "./scenes/manageSinglePlayPost/addSinglePlay";
import  AddManageBigPosts from "./scenes/manageTrendingSection/create/addBig";
import  AddManageSidePosts from "./scenes/manageTrendingSection/create/addSideTrending";

import Addfeature from "./scenes/manageFeaturePosts/addFeature";
import Latest from "./scenes/managePostGallery/latest";
import Popular from "./scenes/managePostGallery/popular";
import Trendy from "./scenes/managePostGallery/trendy";

function App() {
  const store = useStore();
  const token = store.getState().token;
  const [theme, colorMode] = useMode();
  const [isSideBar, setIsSideBar] = useState(true);
  const [isBackground, setIsBackground] = useState(true)
  const isAuth = Boolean(token);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {isBackground && <Background />} {/* Add the Background component */}

        <div className="app">
          <BrowserRouter>
            {isAuth && <SideBar isSideBar={isSideBar} />}
            
            <main className="content">
              {isAuth && <HeaderBar setIsSideBar={setIsSideBar} />}
              
              <Routes>
                {isAuth ? (
                  <>
                    <Route path="/posts_list" element={<PostsList />} />
                    <Route path="/create_post" element={<CreatePostPage />} />
                    <Route path="/addPostGallery" element={<AddPostGallery />} />
                    <Route path="/manage_posts_gallery" element={<ManagePostGallery/>}/>
                    <Route path="/manage_latest" element={<Latest/>}/>
                    <Route path="/manage_trendy" element={<Trendy/>}/>
                    <Route path="/manage_popular" element={<Popular/>}/>
                    <Route path="/addlatest" element={<Addlatest/>}/>
                    <Route path="/addpopular" element={<Addpopular/>}/>
                    <Route path="/addtrendy" element={<Addtrendy/>}/>
                    <Route path="/addfeature" element={<Addfeature/>}/>
                    <Route path="/addmainvideo" element={<Addvideo/>}/>
                    <Route path="/addmanagevideoposts" element={<Addvideoposts/>}/>
                    <Route path="/popular_video" element={<ManageVideoPosts/>}/>
                    <Route path="/manage_Feature_Posts" element={<ManageFeaturePosts/>}/>
                    <Route path="/manage_other_sections" element={<ManageOtherSections/>}/>
                    <Route path="/manage_video_posts" element={<Mainvideo/>}/>

                    <Route path="/manageSinglePlayPost" element={<ManageSinglePlayPost/>}/>
                    <Route path="/manageSideSportsSection" element={<ManageSideSportsSection/>}/>
                    <Route path="/manageSportsMainSection" element={<ManageSportsMainSection/>}/>
                    <Route path="/manageBigPosts" element={<ManageBigPosts/>}/>
                    <Route path="/manageSidePosts" element={<ManageSidePosts/>}/>
                    <Route path="/manageMoviesSection" element={<Movies/>}/>
                    <Route path="/manageEntertainmentSection" element={<Entertainment/>}/>

                    
                    <Route path="/addManageSideSportsSection" element={<AddManageSideSportsSection />}/>
                    <Route path="/addManageSportsMainSection" element={<AddManageSportsMainSection />}/>
                    <Route path="/addmanageEntertainmentSection" element={<AddEntertainment />}/>
                    <Route path="/addmanageMoviesSection" element={<AddMovies />}/>
                    <Route path="/addManageSinglePlayPost" element={<AddManageSinglePlayPost />}/>
                    <Route path="/addManageBigPosts" element={<AddManageBigPosts />}/>
                    <Route path="/addManageSidePosts" element={<AddManageSidePosts />}/>


                  </>
                ) : (
                  <Route path="/loginpage" element={<LoginPage />} />
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
