import { Box } from "@mui/material"
import BodyPart from "./BodyPart"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

const HorizontalScollbar = ({ data, bodyPart, setBodyPart }: any) => {
  return (
    <ScrollMenu>
        {data.map((item: any) => (
            <Box 
                key={item.id || item} 
                itemID={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                <BodyPart 
                    item={item}
                    bodyPart={bodyPart} 
                    setBodyPart={setBodyPart} 
                />
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScollbar