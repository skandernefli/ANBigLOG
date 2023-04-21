import { Box } from "@mui/material"
const BoxInsider=(props)=>{
    const {children , ...rest}=props;
    return (
        <Box {...rest} marginTop="13vh" marginLeft="0vw" minHeight="100vh"  backgroundColor="#ffffff"   borderRadius="20px 0px 0px 0px" >
            {children}
        </Box>
    )
}
export default BoxInsider;