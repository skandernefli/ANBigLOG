import { Box, Button } from "@mui/material";
const AnimatedButton =({ className, children, ...rest })=>{

    return(
        <Button  {...rest}>
        <a href="javascript: void 0;"  className={className} >
        <span className="border"></span>
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
        <span className="text">{children}</span>
    </a>
    </Button>
    )
}
export default AnimatedButton ;