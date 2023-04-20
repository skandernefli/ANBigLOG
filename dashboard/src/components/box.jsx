import { Box } from "@mui/material"
const BoxInsider=(props)=>{
    const {children , ...rest}=props;
    return (
        <Box {...rest} marginTop="10vh">
            {children}
        </Box>
    )
}
export default BoxInsider;