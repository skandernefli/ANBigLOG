import {createContext, useState, useMemo}from "react";
import { createTheme } from "@mui/material/styles";
//color design tokens
export const tokens =(mode)=>({
    ...(mode==="light"
    ?{primary: {
        100: "#2d8eff",
        200: "#123966",
        300: "#1b5599",
        400: "#2472cc",
        500: "#2d8eff",
        600: "#57a5ff",
        700: "#81bbff",
        800: "#abd2ff",
        900: "#d5e8ff"
    },
    secondary: {
        100: "#f8fcff",
        200: "#f1f8ff",
        300: "#eaf5ff",
        400: "#e3f1ff",
        500: "#dceeff",
        600: "#b0becc",
        700: "#848f99",
        800: "#585f66",
        900: "#2c3033",
    },
    black: {
        100: "#d1d1d1",
        200: "#a3a3a3",
        300: "#767676",
        400: "#484848",
        500: "#1a1a1a",
        600: "#151515",
        700: "#101010",
        800: "#0a0a0a",
        900: "#050505",
    },
    white: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333",
    },
    negative: {
        100: "#ffdbdb",
        200: "#ffb6b6",
        300: "#ff9292",
        400: "#ff6d6d",
        500: "#ff4949",
        600: "#cc3a3a",
        700: "#992c2c",
        800: "#661d1d",
        900: "#330f0f",
    },
    positive: {
        100: "#d0f5e0",
        200: "#a1ebc2",
        300: "#71e2a3",
        400: "#42d885",
        500: "#13ce66",
        600: "#0fa552",
        700: "#0b7c3d",
        800: "#085229",
        900: "#042914",
    },
    warning: {
        100: "#fff5d8",
        200: "#ffebb1",
        300: "#ffe08b",
        400: "#ffd664",
        500: "#ffcc3d",
        600: "#cca331",
        700: "#997a25",
        800: "#665218",
        900: "#33290c",
    },
    active: {
        100: "#d5e8ff",
        200: "#abd2ff",
        300: "#81bbff",
        400: "#57a5ff",
        500: "#2d8eff",
        600: "#2472cc",
        700: "#1b5599",
        800: "#123966",
        900: "#091c33",
    },
}:{primary: {
    100: "#091c33",
    200: "#123966",
    300: "#1b5599",
    400: "#2472cc",
    500: "#2d8eff",
    600: "#57a5ff",
    700: "#81bbff",
    800: "#abd2ff",
    900: "#d5e8ff"
},
secondary: {
    100: "#2c3033",
    200: "#585f66",
    300: "#848f99",
    400: "#b0becc",
    500: "#dceeff",
    600: "#e3f1ff",
    700: "#eaf5ff",
    800: "#f1f8ff",
    900: "#f8fcff",
},
black: {
    100: "#050505",
    200: "#0a0a0a",
    300: "#101010",
    400: "#151515",
    500: "#1a1a1a",
    600: "#484848",
    700: "#767676",
    800: "#a3a3a3",
    900: "#d1d1d1",
},
white: {
    100: "#333333",
    200: "#666666",
    300: "#999999",
    400: "#cccccc",
    500: "#ffffff",
    600: "#ffffff",
    700: "#ffffff",
    800: "#ffffff",
    900: "#ffffff",
},
negative: {
    100: "#330f0f",
    200: "#661d1d",
    300: "#992c2c",
    400: "#cc3a3a",
    500: "#ff4949",
    600: "#ff6d6d",
    700: "#ff9292",
    800: "#ffb6b6",
    900: "#ffdbdb",
},
positive: {
    100: "#042914",
    200: "#085229",
    300: "#0b7c3d",
    400: "#0fa552",
    500: "#13ce66",
    600: "#42d885",
    700: "#71e2a3",
    800: "#a1ebc2",
    900: "#d0f5e0",
},
warning: {
    100: "#33290c",
    200: "#665218",
    300: "#997a25",
    400: "#cca331",
    500: "#ffcc3d",
    600: "#ffd664",
    700: "#ffe08b",
    800: "#ffebb1",
    900: "#fff5d8",
},
active: {
    100: "#091c33",
    200: "#123966",
    300: "#1b5599",
    400: "#2472cc",
    500: "#2d8eff",
    600: "#57a5ff",
    700: "#81bbff",
    800: "#abd2ff",
    900: "#d5e8ff",
},}),
})
//mui theme settings
export const themeSettings=(mode)=>{
    const colors=tokens(mode); 
    return{
        palette:{
            mode: mode,
            ...(mode === 'light'
            ? {
                backgorund:{
                    main:colors.secondary[100],
                },
                primary:{
                    main:colors.primary[100], 
                },
                secondary:{
                    main:colors.secondary[100],
                },
                neutral:{
                    dark:colors.black[300],
                    main:colors.black[500],
                    light:colors.black[800],
                }
            }:{
                backgorund:{
                    main:"#fcfcfc",
                },
                primary:{
                    main:colors.primary[100], 
                },
                secondary:{
                    main:colors.secondary[100],
                },
                neutral:{
                    dark:colors.black[300],
                    main:colors.black[500],
                    light:colors.black[800],
                }
            }),
        },
        typography:{
            fontFamily:["Source Sans Pro", "sans-serif"].join(","),
            fontSize:12,
            h1:{
                fontFamily:["Source Sans Pro", "sans-serif"].join(","),
                fontSize:40,
            },
            h2:{
                fontFamily:["Source Sans Pro", "sans-serif"].join(","),
                fontSize:32,
            },
            h3:{
                fontFamily:["Source Sans Pro", "sans-serif"].join(","),
                fontSize:24,
            },
            h4:{
                fontFamily:["Source Sans Pro", "sans-serif"].join(","),
                fontSize:20,
            },
            h5:{
                fontFamily:["Source Sans Pro", "sans-serif"].join(","),
                fontSize:16,
            },
            h6:{
                fontFamily:["Source Sans Pro", "sans-serif"].join(","),
                fontSize:14,
            },
        },
    };
};
//context for the color mode
export const ColorModeContext=createContext({
    toggleColorMode:()=>{},
});
export const useMode=()=>{
    const [mode,setMode]=useState("light");
    const colorMode=useMemo(
        ()=>({
            toggleColorMode:()=>
            setMode((prev)=>(prev==="dark" ? "light" :"dark")),
        }),
        []
    );
    const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode]);
    return[theme,colorMode];
}