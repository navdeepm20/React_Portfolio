import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SubHeading({ title, bold, size }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        marginBottom: "30px",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{ fontWeight: `${bold}`, fontSize: `${size}px` }}
      >
        {title}
      </Typography>
      <span
        style={{
          width: "100%",
          borderBottom: "7px solid #ffb100",
          position: "absolute",
          height: "70px",
          bottom: "1px",
          opacity: "0.4",
        }}
      ></span>
    </Box>
  );
}
SubHeading.defaultProps = {
  size: 18,
  title: "Title",
  bold: 600,
};
