import { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Checkbox,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { LoadingButton } from "@mui/lab";
// components
import Iconify from "../../../components/iconify";

import API from "../../../util/api";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();

  const [idValue, setId] = useState("");
  const [pwValue, setPw] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    // navigate("/dashboard", { replace: true });
    const res = await API.get("/api/jwt", {
      params: { loginid: idValue, passwd: pwValue },
    });
    console.log(res.data.code);
    console.log(res.data.token);
    console.log(res.status);

    if (res.data.code === "ok" && res.status === 200) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const saveUserId = (event) => {
    setId(event.target.value);
  };

  const saveUserPw = (event) => {
    setPw(event.target.value);
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          value={idValue}
          onChange={saveUserId}
        />

        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={pwValue}
            onChange={saveUserPw}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );
}
