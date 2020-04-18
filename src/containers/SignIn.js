import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { useHistory } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "@material-ui/core/CircularProgress";
import HomeIcon from "@material-ui/icons/Home";
import SignUp from "./SignUp";

import { showAuthLoader, userSignIn } from "actions/Auth";
import { wait } from "@testing-library/react";

const SignIn = (props) => {
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("demo#123");
  const [open, setOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();
  const { loader, alertMessage, showMessage, authUser } = useSelector(
    ({ auth }) => auth
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handlePublishMovie = () => {};

  const handleLoginClose = () => {
    setOpen(false);
  };

  const handleSignupClose = () => {
    setSignupOpen(false);
  };

  const handleSignupOpen = () => {
    setSignupOpen(true);
  };

  const handleClickHome = () => {
    history.push("/app/home");
  };

  // useEffect(() => {
  //   if (showMessage) {
  //     setTimeout(() => {
  //       dispatch(hideMessage());
  //     }, 100);
  //   }
  //   if (authUser !== null) {
  //     props.history.push('/');
  //   }
  // }, [showMessage, authUser, props.history, dispatch]);

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="Home"
        component="span"
        className="home-button"
        onClick={handleClickHome}
      >
        <HomeIcon title="Home" href="/" className="home-icon" />
      </IconButton>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        href="/app/publish"
      >
        PUBLISH YOUR MOVIE
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleClickOpen}
      >
        Login
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Dialog open={open} onClose={handleLoginClose}>
        <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
          <div className="app-login-main-content">
            <div className="app-logo-content d-flex align-items-center justify-content-center">
              <Link className="app-login-logo" to="/" title="Jambo">
                <img
                  src={require("assets/images/ssf-logo.png")}
                  alt="Super Shortfilms"
                  title="Super Shortfilms"
                />
              </Link>
            </div>

            <div className="app-login-content">
              <div className="app-login-header mb-4">
                <h1>
                  <IntlMessages id="appModule.email" />
                </h1>
              </div>

              <div className="app-login-form">
                <form>
                  <fieldset>
                    <TextField
                      label={<IntlMessages id="appModule.email" />}
                      fullWidth
                      onChange={(event) => setEmail(event.target.value)}
                      defaultValue={email}
                      margin="normal"
                      className="mt-1 my-sm-3"
                    />
                    <TextField
                      type="password"
                      label={<IntlMessages id="appModule.password" />}
                      fullWidth
                      onChange={(event) => setPassword(event.target.value)}
                      defaultValue={password}
                      margin="normal"
                      className="mt-1 my-sm-3"
                    />

                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <Button
                        onClick={() => {
                          dispatch(showAuthLoader());
                          dispatch(userSignIn({ email, password }));
                          setOpen(false);
                        }}
                        variant="contained"
                        color="primary"
                      >
                        <IntlMessages id="appModule.signIn" />
                      </Button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          {loader && (
            <div className="loader-view">
              <CircularProgress />
            </div>
          )}
          {showMessage && NotificationManager.error(alertMessage)}
          <NotificationContainer />
        </div>
      </Dialog>
      <Link onClick={handleSignupOpen} color="secondary" variant="body2">
        SIGNUP
      </Link>
      <Dialog open={signupOpen} onClose={handleSignupClose}>
        <SignUp />
      </Dialog>
    </div>
  );
};

export default SignIn;
