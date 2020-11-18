import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
//redux stuff
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props: any) {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const [helperText, setHelperText] = useState("")
  useEffect(() => {
    if (props.UI.errors) {
      setErrors(true);
      setHelperText(props.UI.errors.error)
    }
    setLoading(props.UI.loading);
  }, [props.UI]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    //your client side validation here
    //after success validation
    const userData = {
      email: values.email,
      password: values.password,
    };

    props.loginUser(userData, props.history);

  };
  const handleChange = (e: any) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            value={values.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            error={errors}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText={helperText}
            autoFocus
          />
          <TextField
            value={values.password}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            error={errors}
            fullWidth
            name="password"
            label="Password"
            type="password"
            helperText={helperText}
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI,
});
//this map actions to our props in this functional component
const mapActionsToProps = {
  loginUser,
};
export default connect(mapStateToProps, mapActionsToProps)(Login);
