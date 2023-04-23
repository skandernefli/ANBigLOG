import { Box } from "@mui/material"
const BoxInsider=(props)=>{
    const {children , ...rest}=props;
    return (
        <Box {...rest}position={"absolute"} top="0" left="20%" height={"auto"} right="30px"zIndex={999}marginTop="13vh" marginLeft="0vw" minHeight="100vh" backgroundColor="rgba(255,255,255,1)"   borderRadius="20px 20px 20px 20px" padding="10px" >
            {children}
        </Box>
    )
}
export default BoxInsider;