import { Box, Stack, Typography } from "@mui/material"

const ExerciseVideos = ({ exerciseVideos, name }: any) => {
  if (!exerciseVideos.length) return 'Loading...'

  return (
    <Box
      sx={{ marginTop: { lg: "200px", xs: "20px" }}}
      p="20px"
    >
      <Typography
        variant="h4"
        mb="33px"
      >
        Watch 
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}> {name.name} </span> 
        exercise videos
      </Typography>

      {/* exercise video recommendation from yt api */}
      <Stack
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: "110px", xs: "0" }}}
      >
        {exerciseVideos?.slice(0, 6).map((item: any, idx: number) => (
          <a
            key={idx}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#1a1a1a" fontWeight="700">
                {item.video.title}
              </Typography>
              <Typography color="#1a1a1a" sx={{ fontSize: "16px" }}>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}    
      </Stack>
    </Box>
  )
}

export default ExerciseVideos