import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button, Card, CardContent, InputAdornment } from "@material-ui/core";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { AccountCircle, AttachMoney, Phone, Room } from "@material-ui/icons";

import { setCompanyData } from "../../redux/actions/companyActions";

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
    form : {
      "& div": {
        paddingBottom: theme.spacing(1)
      }
   
    }
  })
);

export function AddCompanyCard(props: any) {
  const classes = useStyles();

  const [state, setState] = useState({
    name: "",
    adress: "",
    revenue: null,
    phone: null,
  });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errors, setErrors] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!props.UI.errors) {
      setErrors(true);
    }
    
    setLoading(props.UI.loading);
  }, [props.UI]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const companyData = state;

    props.setCompanyData(companyData);
    
  };

  const handleChange = (value: string | number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({
      ...state,
      [value]: event.target.value,
    });
  };

  return (
    <Card className={classes.settingCard} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          CREATE NEW COMPANY
        </Typography>
        <hr />
        <ValidatorForm onSubmit={handleSubmit} className={classes.form}>
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

          <TextValidator
            label="Revenue"
            onChange={handleChange("revenue")}
            name="Revenue"
            color="primary"
            value={state.revenue}
            fullWidth={true}
            className="text-field"
            validators={[
              "required",
              "minStringLength: 1",
              "matchRegexp:^[0-9]+$",
            ]}
            errorMessages={[
              "this field is required",
              "Min lenght is 1",
              "You can use numbers only",
            ]}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachMoney />
                </InputAdornment>
              ),
            }}
          />

          <TextValidator
            label="Phone"
            onChange={handleChange("phone")}
            name="Phone"
            color="primary"
            value={state.phone}
            fullWidth={true}
            className="text-field"
            validators={[
              "required",
              "minStringLength: 9",
              "matchRegexp:^[0-9]+$",
            ]}
            errorMessages={[
              "this field is required",
              "Min lenght is 9",
              "You can use numbers only",
            ]}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Phone />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="secondary">Submit</Button>
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
  setCompanyData,
};

export default connect(MapStateToProps, mapActionsToProps)(AddCompanyCard);
