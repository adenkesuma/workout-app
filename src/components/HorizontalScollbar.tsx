import { Box, Typography } from "@mui/material"
import { useContext } from "react";
import BodyPart from "./BodyPart"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import LeftArrowIcon from "../assets/icons/left-arrow.png"
import RightArrowIcon from "../assets/icons/right-arrow.png"

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScollbar = ({ data, bodyPart, setBodyPart }: any) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item: any) => (
            <Box 
                key={item?.id || item} 
                itemId={item?.id || item}
                title={item?.id || item}
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