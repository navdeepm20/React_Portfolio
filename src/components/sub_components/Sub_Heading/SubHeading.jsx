import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SubHeading({ title }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        marginBottom: "30px",
      }}
    >
      <Typography variant="h5" component="h5">
        {title}
      </Typography>
      <span
        style={{
          width: "100%",
          borderBottom: "5px solid #ffb100",
          position: "absolute",
          height: "70px",
          bottom: "5px",
          opacity: "0.4",
        }}
      ></span>
    </Box>
  );
}
