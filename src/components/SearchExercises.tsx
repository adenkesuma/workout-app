import { ChangeEvent, useEffect, useState } from "react"
import { 
    Button,
    Box,
    Stack,
    TextField,
    Typography
} from "@mui/material"
import { fetchData, exerciseOptions } from "../utils/fetchData"
import HorizontalScrollbar from "./HorizontalScrollbar"

interface Props {
    setExercise: any;
    bodyPart: string;
    setBodyPart: (props: string) => void;
}

const SearchExercises = ({
    setExercise,
    bodyPart,
    setBodyPart
} : Props) => {
    const [search, setSearch] = useState<string>('')
    const [bodyParts, setBodyParts] = useState([
        "all", []
    ])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
                exerciseOptions
            )

            setBodyParts(["all", ...bodyPartsData])
        }

        fetchExercisesData()
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises",
                exerciseOptions
            )

            const searchedExercises = exercisesData.filter(
                (exercise : any) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )

            window.scrollTo({ top: 1800, left: 100, behavior: "smooth" })

            setSearch('')
            setExercise(searchedExercises)
        }
    }

    return (
        <Stack
            alignItems="center"
            mt="37px"
            justifyContent="center"
            p="20px"
            width="100vw"
        >
            <Typography
                fontWeight="700"
                sx={{ fontSize: { lg: "44px", xs: "30px" }}}
                mb="50px"
                textAlign="center"
            >
                Awesome Exercises You <br />
                Should Know
            </Typography>
            <Box 
                position="relative"
                mb="72px"
            >
                <TextField 
                    sx={{ 
                        input: {
                            fontWeight: "600",
                            border: "none",
                            borderRadius: "6px"
                        },
                        width: { lg: "1000px", xs: "350px" },
                        height: "76px",
                        borderRadius: "40px"
                    }}
                    value={search}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search for exercises..."
                    type="text"
                />
                <Button
                    onClick={handleSearch}
                    className="search-btn"
                    sx={{ 
                        bgcolor: "#ff2625", 
                        color: "#fff", 
                        textTransform: "none", 
                        width: { lg: "175px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "56px",
                        position: "absolute",
                        right: '0px'
                    }}
                >
                    Search
                </Button>
            </Box>

            <Box
                sx={{ position: "relative", width: "100vw", p: "20px" }}
            >
                <HorizontalScrollbar 
                    data={bodyParts} 
                    bodyPart={bodyPart} 
                    setBodyPart={setBodyPart} 
                />
            </Box>
        </Stack>
    )
}

export default SearchExercises