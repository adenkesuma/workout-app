import Banner from "../assets/images/banner.png"
import {
    Box,
    Typography,
    Button
} from "@mui/material"

const HeroBanner = () => {
  return (
    <Box
        sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" }}} 
        position="relative"
        p="20px"
    >
        <Typography
            color="#ff2625"
            fontSize="26px"
            fontWeight="600"
        >
            Fitnes Club
        </Typography>
        <Typography
            mt="24px"
            mb="24px"
            fontWeight="700"
            sx={{ fontSize: { lg: "50px", xs: "40px" }}}
        >
            Sweet, Smile <br /> and Repeat
        </Typography>
        <Typography 
            fontSize="22px"
            lineHeight="35px"
            mb={4}
        >
            Check out the most effective exercise
        </Typography>
        <Button
            variant="contained"
            color="error"
            href="#exercises"
            sx={{ backgroundColor: "#ff2625", padding: "10px", marginBottom: "20px" }}
        >
            Explore Exercise
        </Button>   
        <Typography
            fontWeight="600" 
            color="#ff2625"
            sx={{ opacity: 0.1, display: { lg: "block", xs: "none" }}}
            fontSize="200px"
        >
            EXERCISE
        </Typography>
        <img 
            src={Banner} 
            alt="banner" 
            className="hero-banner-img"
        />
    </Box>
  )
}

export default HeroBanner