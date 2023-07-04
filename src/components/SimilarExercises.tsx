import { Box, Stack, Typography } from "@mui/material"
import HorizontalScollbar from "./HorizontalScollbar"
import Loader from "./Loader"

const SimilarExercises = ({ exerciseTargetMuscle, equipmentExercise }) => {
  return (
    <Box
      sx={{ mt: { lg: "100px", xs: "0" }}}
      p="20px"
    >
      {/* target muscle exercises */}
      <Typography variant="h3" mb="40px">
        Exercises that target the same muscle group
      </Typography>

      <Stack 
        direction="row" 
        sx={{ p: "2", position: "relative" }}
      >
        {exerciseTargetMuscle.length ?
          <HorizontalScollbar data={exerciseTargetMuscle} /> :
          <Loader />
        }
      </Stack>

      {/* equipment exercises */}
      <Typography variant="h3" mb="40px" mt="40px">
        Exercise that use the same equipment
      </Typography>
      <Stack 
        direction="row" 
        sx={{ p: "2", position: "relative" }}
      >
        {exerciseTargetMuscle.length ?
          <HorizontalScollbar data={exerciseTargetMuscle} /> :
          <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises