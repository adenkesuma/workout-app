import { Box } from "@mui/material"
import BodyPart from "./BodyPart"

const HorizontalScollbar = ({ data, bodyPart, setBodyPart }: any) => {
  return (
    <div>
        {data.map((item: any) => (
            <Box key={item.id} m="0 40px">
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        ))}
    </div>
  )
}

export default HorizontalScollbar