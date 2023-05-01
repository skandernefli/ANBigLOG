import { Box, Button } from "@mui/material";
const AnimatedButton =(props)=>{
    const { children, ...rest } = props;

    return(
        <Button  {...rest}>
        <a href="javascript: void 0;" className="button" >
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