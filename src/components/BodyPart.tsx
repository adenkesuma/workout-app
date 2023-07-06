import { Button, Typography } from "@mui/material"
import Icon from "../assets/icons/gym.png"

const BodyPart = ({ item, setBodyPart, bodyPart }: any) => {
    console.log(bodyPart, item)
  return (
    <Button
        type="button"
        className="bodyPart-card"
        onClick={() => {
            setBodyPart(item)
            window.scrollTo({ top: 1800, left: 100, behavior: "smooth" })
        }}
        sx={
            bodyPart === item ? {
                borderTop: "4px solid #ff2625",
                backgroundColor: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "280px",
                cursor: "pointer",
                gap: "46px"
            } : {
                backgroundColor: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "280px",
                cursor: "pointer",
                gap: "46px"
            }
        }
    >
        <img 
            src={Icon} 
            alt="dumbbell"
            style={{ width: "40px", height: "40px" }}
        />
        <Typography 
            fontSize="24px"
            fontWeight="bold"
            color="#3a1212"
            textTransform="capitalize"
        >
            {item}
        </Typography>
    </Button>
  )
}

export default BodyPart