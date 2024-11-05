import React, { useEffect, useState } from "react";
import HorizontalLinearStepper from "../component/HorizontalLinearStepper";
import LandingPageLayout from "../component/ReusableComponent/LandingPageLayout";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import coverPage from "../assets/login.png";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../ReduxToolkit/Slices/authSlice";
import { BaseUrl } from "../component/BaseUrl/url";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BaseUrl}/api/v1/users/login`, {
        email: email,
        password: password,
      });
      const { token, user } = response?.data;
      dispatch(login({ token, user }));

      navigate("/dashboard/store");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <LandingPageLayout>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 0, md: 5 },
        }}
      >
        <Grid
          item
          xs={12}
          sm={5}
          md={6}
          sx={{
            width: { sm: "60%", md: "55%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <img src={coverPage} alt="cover page" style={{ width: "55%" }} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={6}
          sx={{
            width: { sm: "40%", xs: "85%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box component={"form"} onSubmit={handleLogin}>
            <Stack>
              <Typography sx={{ fontWeight: 600, fontSize: "25px" }}>
                Login
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: "15px" }}>
                Login to access your store
              </Typography>
            </Stack>
            <TextField
              label="Uername/mobile"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type={showPassword ? "text" : "password"}
              name="password"
              fullWidth
              required
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=". . . . . . . . . . ."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? (
                        <RemoveRedEyeRoundedIcon />
                      ) : (
                        <VisibilityOffRoundedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Stack direction={"column"} width={"100%"} py={1}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        color="success"
                        onClick={() => setChecked(!checked)}
                      />
                    }
                    label="Remember me"
                  />
                </FormGroup>
                <Typography
                  sx={{
                    cursor: "pointer",
                    textAlign: "end",
                    fontSize: "15px",
                    color: "#51B56D",
                  }}
                  // onClick={() => navigate("/forget")}
                >
                  Forgot Password
                </Typography>
              </Box>
            </Stack>
            <Button
              variant="contained"
              sx={{ bgcolor: "#51B56D" }}
              type="submit"
              fullWidth
            >
              Login
            </Button>
            <Typography sx={{ py: 1, textAlign: "center" }}>
              Don’t have an account?{"  "}
              <span
                style={{ color: "#51B56D", cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </LandingPageLayout>
  );
};

export default Login;
