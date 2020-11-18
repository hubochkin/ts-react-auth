import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Card,
  CardContent,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@material-ui/core";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { AccountCircle, Room } from "@material-ui/icons";

import { setEmployee } from "../../redux/actions/companyActions";

import { connect } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    companyCard: {},
    item: {
      fontWeight: 600,
    },

    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    settingCard: {},
    form: {
      "& div": {
        paddingBottom: theme.spacing(1),
      },
    },
  })
);

export function AddEmployee(props: any) {
  const classes = useStyles();

  const [state, setState] = useState({
    name: "",
    adress: "",
    companyId: 0,
  });

  const [loading, setLoading] = useState(false);
  const [options, setOptions] = React.useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log("here");
    const companyData = state;
    console.log(props);
    props.setEmployee(companyData);
  };

  const handleChange = (value: string | number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({
      ...state,
      [value]: event.target.value,
    });
  };
  const handleSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setState({
      ...state,
      companyId: event.target.value as number,
    });
    console.log(state);
  };
  console.log(props.companiesList);
  return (
    <Card className={classes.settingCard} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          CREATE NEW COMPANY
        </Typography>
        <hr />
        <ValidatorForm onSubmit={handleSubmit}>
          <div className={classes.form}>
            <TextValidator
              label="Name"
              onChange={handleChange("name")}
              name="Name"
              color="primary"
              value={state.name}
              fullWidth={true}
              className="text-field"
              validators={[
                "required",
                "minStringLength: 3",
                "maxStringLength: 32",
                "matchRegexp:^[a-zA-Z ]+$",
              ]}
              errorMessages={[
                "this field is required",
                "Ener real name from 3 to 32 characters",
                "Ener real name from 3 to 32 characters",
                "this field should contain only characters",
              ]}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <TextValidator
              label="address"
              onChange={handleChange("adress")}
              name="Adress"
              color="primary"
              value={state.adress}
              fullWidth={true}
              className="text-field"
              validators={[
                "required",
                "minStringLength: 3",
                "maxStringLength: 32",
              ]}
              errorMessages={[
                "this field is required",
                "Ener real name from 3 to 32 characters",
                "Ener real name from 3 to 32 characters",
              ]}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Room />
                  </InputAdornment>
                ),
              }}
            />
            
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleSelect}
              value={state.companyId}
              defaultValue={state.companyId}
              fullWidth={true}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {props.companiesList.map((item: any, index: number) => (
                <MenuItem value={index}>{item.name}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Select Company</FormHelperText>
          </div>
          <br />
          <Button type="submit" color="secondary" variant="contained">
            SALVA
          </Button>
        </ValidatorForm>
      </CardContent>
    </Card>
  );
}

const MapStateToProps = (state: any) => {
  return {
    user: state.user,
    UI: state.UI,
    company: state.company,
  };
};

const mapActionsToProps = {
  setEmployee,
};

export default connect(MapStateToProps, mapActionsToProps)(AddEmployee);
