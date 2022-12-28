import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

export const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField
          label="Name"
          variant="standard"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          size="small"
          color="secondary"
          required
          helperText="Do not share your password with anyone"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
