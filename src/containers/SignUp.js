import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { countries } from "../constants/countries";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import { hideMessage, showAuthLoader, userSignUp } from "actions/Auth";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedDate, handleDateChange] = useState(null);

  const dispatch = useDispatch();
  const { loader, alertMessage, showMessage, authUser } = useSelector(
    ({ auth }) => auth
  );

  // useEffect(() => {
  //   if (showMessage) {
  //     setTimeout(() => {
  //       dispatch(hideMessage());
  //     }, 3000);
  //   }
  //   if (authUser !== null) {
  //     props.history.push("/");
  //   }
  // }, [showMessage, authUser, props.history, dispatch]);

  return (
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
          <div className="app-login-header">
            <h1>Sign Up</h1>
          </div>

          <div className="app-login-form">
            <form method="post" action="/">
              <TextField
                type="text"
                label="Name"
                // onChange={(event) => setName(event.target.value)}
                fullWidth
                defaultValue={name}
                margin="normal"
                className="mt-0 mb-4"
              />
              {/* <input
                  type="text"
                  placeholder="Name"
                  className="form-control form-control-lg"
                /> */}
              {/* <TextField
                type="text"
                label="Name"
                // onChange={(event) => setName(event.target.value)}
                fullWidth
                defaultValue={name}
                margin="normal"
                className="mt-0 mb-2"
              /> */}

              <TextField
                type="email"
                //   onChange={(event) => setEmail(event.target.value)}
                label={<IntlMessages id="appModule.email" />}
                fullWidth
                defaultValue={email}
                margin="normal"
                className="mt-0 mb-4"
              />

              <DatePicker
                variant="inline"
                fullWidth
                label="Date Of Birth"
                value={selectedDate}
                onChange={(date) => handleDateChange(date)}
                format="DD/MMM/YYYY"
                autoOk
                margin="normal"
                className="mt-0 mb-4"
              />

              <Autocomplete
                id="country-select-demo"
                className="mt-0 mb-4"
                style={{ width: 300 }}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(option) => (
                  <React.Fragment>
                    {/* <span>{countryToFlag(option.code)}</span> */}
                    {option.label} ({option.code})
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Current Location"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />

              <TextField
                type="password"
                // onChange={(event) => setPassword(event.target.value)}
                label={<IntlMessages id="appModule.password" />}
                fullWidth
                defaultValue={password}
                margin="normal"
                className="mt-0 mb-4"
              />
              <TextField
                type="password"
                // onChange={(event) => setPassword(event.target.value)}
                label="Confirm Password"
                fullWidth
                defaultValue={password}
                margin="normal"
                className="mt-0 mb-4"
              />
              <div className="mb-3 d-flex align-items-center justify-content-between">
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(showAuthLoader());
                    dispatch(userSignUp({ email, password }));
                  }}
                  color="primary"
                >
                  <IntlMessages id="appModule.regsiter" />
                </Button>
              </div>
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
  );
};

export default SignUp;
