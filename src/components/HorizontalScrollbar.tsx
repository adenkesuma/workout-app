import { Box, Stack, Typography } from "@mui/material"
import { useContext } from "react";
import BodyPart from "./BodyPart"
import LeftArrowIcon from "../assets/icons/left-arrow.png"
import RightArrowIcon from "../assets/icons/right-arrow.png"
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }: any) => {
  return (
      <Stack
        flexDirection="row"
        sx={{
          overflowX:'scroll',
        }}
      >
        {data.map((item: any) => (
            <Box 
                key={item?.id || item} 
                itemID={item?.id || item}
                title={item?.id || item}
                m="0 40px"
            >
                {bodyPart ?
                  <BodyPart 
                    item={item}
                    bodyPart={bodyPart} 
                    setBodyPart={setBodyPart} 
                  /> :
                  <ExerciseCard exercise={item}/>
                }
            </Box>
        ))}
      </Stack>
  )
}

export default HorizontalScrollbar