import { useEffect, useState } from "react"
import { Pagination, Box, Stack, Typography } from "@mui/material"
import ExerciseCard from "./ExerciseCard"
import { exerciseOptions, fetchData } from "../utils/fetchData"

const Exercises = ({ setExercise, exercise, bodyPart }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const exercisePerPage = 9

  // slice exercise per 9 page for pagination
  const indexOfLastExercise = currentPage * exercisePerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage
  const currentExercises = exercise.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (value: any) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: "smooth" })
  }

  // calling api here
  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = []
  
      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        )
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        )
      }

      setExercise(exerciseData)
    }

    fetchExerciseData()
  }, [bodyPart])

  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: "110px" }}}
      mt="50px"
      p="20px"
    >
      <Typography
        variant="h3"
        mb="46px"
        ml="50px"
      >
        Showing Results
      </Typography>
      <Stack 
        sx={{ gap: { lg: "107px", xs: "70px" } }}
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exe: any, idx: number) => (
          <ExerciseCard key={idx} exercise={exe} />
        ))} 
      </Stack>
      <Stack
        alignItems="center"
        mt="50px"
      >
        {exercise.length > 9 && (
          <Pagination 
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises