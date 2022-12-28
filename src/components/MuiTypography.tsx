import { Typography } from "@mui/material";

export default function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3" component="h2" gutterBottom>
        h3 heading
      </Typography>
      <Typography variant="h4">h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed
        reprehenderit quaerat molestias unde similique nihil sequi aliquid
        necessitatibus blanditiis natus beatae cumque adipisci dolores, ab
        accusamus asperiores illo! Magnam!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        assumenda aliquid voluptate officia sunt fugit ratione earum dolorem.
        Alias quisquam deleniti impedit rerum odio earum. Error voluptas
        corrupti accusamus beatae!
      </Typography>
    </div>
  );
}
