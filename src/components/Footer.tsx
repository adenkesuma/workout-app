import { Box, Stack, Typography } from "@mui/material"
import LogoFooter from "../assets/images/Logo-1.png"

const Footer = () => {
  return (
    <Box mt="120px" bgcolor="#fff3f4">
      <Stack
        gap="20px"
        alignItems="center"
        px="40px"
        pt="24px"
      >
        <img
          src={LogoFooter}
          alt="logo"
          width="200px"
          height="40px"
        />
        <Typography variant="h5" pb="40px">
          <i>
            &copy; Made with Infoincode team
          </i>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer