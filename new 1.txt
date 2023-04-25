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
              <Route path="/manage_posts" element={isAuth ? <ManagePosts /> : <Navigate to="/" />} />
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














    /************************************************************************************************************************************************/
      background-image:  linear-gradient(to right top, #2f2fa2, #59369b, #724195, #834e91, #8f5d8e, #9b628f, #a66790, #b06d91, #c3668f, #d55f89, #e6567f, #f64c72);    ;
