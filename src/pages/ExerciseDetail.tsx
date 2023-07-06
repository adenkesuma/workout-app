import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData"
import Detail from "../components/Detail"
import ExerciseVideos from "../components/ExerciseVideos"
import SimilarExercises from "../components/SimilarExercises"

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [exerciseTargetMuscle, setExerciseTargetMuscle] = useState([])
  const [equipmentExercise, setEquipmentExercise] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

      // exercise detail fetching data
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      )
      setExerciseDetail(exerciseDetailData)

      // youtube fetching data
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      )
      setExerciseVideos(exerciseVideosData.contents)

      // target Muscle fetching data
      const targetMuscleExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      )
      setExerciseTargetMuscle(targetMuscleExerciseData)

      // equipment exercises fetching data
      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      )
      setEquipmentExercise(equipmentExercisesData)
    }

    fetchExercisesData()
  }, [id])

  return (
    <Box>
      <Detail 
        exerciseDetail={exerciseDetail}
      />
      <ExerciseVideos 
        exerciseVideos={exerciseVideos} 
        name={exerciseDetail} 
      />
      <SimilarExercises 
        exerciseTargetMuscle={exerciseTargetMuscle} 
        equipmentExercise={equipmentExercise} 
      />
    </Box>
  )
}

export default ExerciseDetail