import { Box } from "@mui/material";
import { useState, useEffect } from 'react';
import { useStore } from 'react-redux';

const BoxInsider=(props)=>{
    const store = useStore();
  const [collapsed, setCollapsed] = useState(store.getState().collapsed);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newCollapsed = store.getState().collapsed;
      if (newCollapsed !== collapsed) {
        setCollapsed(newCollapsed);
      }
    });
    return unsubscribe;
  }, [collapsed, store]);

  const { children, ...rest } = props;

    return (
        <Box
        {...rest}
        position={"absolute"}
        top={collapsed==true ? "8%" : "10%"}
        right={collapsed==true ? "4%" : "4%"}
        width={collapsed==true  ? "88vw" : "75vw"}
        height={collapsed==true  ? "86vh" : "85vh"}
        transition="width 1.5s ease-in-out, height 1.5s ease-in-out,top  1.5s ease-in-out"


        bottom="5%"
        zIndex={999}
        overflow="auto"
        borderRadius="10px 10px 10px 10px"
        backgroundColor={"rgba(40,40,40,0.3)"}
        
        sx={{
            transition:"width 0.1s ease-in-out, height 0.1s ease-in-out,top  0.1s ease-in-out",

         boxSizing: "border-box",
          boxShadow: "8px 8px 8px 8px rgba(0, 0, 0, 0.3)",
          borderWidth: "0.1px",
          '&::-webkit-scrollbar': {
            width: 0,
          },
         
          

        }}
        padding="10px"
        paddingBottom={"10px"}
      >
        {children}
      </Box>
      
    )
}
export default BoxInsider;