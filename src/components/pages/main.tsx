import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

import CompanyCard from "../cards/companyCard";
import AddCompanyCard from "../cards/addCompanyCard";
import { connect } from "react-redux";
import  AddEmployee  from "../cards/addEmployeeCard";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3),
    },

    companyCard: {
        marginBottom: theme.spacing(2),
    },
    item: {
      fontWeight: 600,
    },

    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    bodywrapper: {},
    rightSide: {},
    settingCard: {},
  })
);

export function MainPage(props: any) {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errors, setErrors] = React.useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = React.useState(false);
  const [companies, setCompanies] = React.useState([]);

  useEffect(() => {
    if (!props.UI.errors) {
      setErrors(true);
    }

    setCompanies(props.company.companies);

    setLoading(props.UI.loading);
  }, [props.UI, props.company.companies]);

  const CompaniesList = () => (
    <>
      {companies.map((item: any, index: number) => (
          <>
        <CompanyCard company={item} className={classes.companyCard} index={index}/>
        <br />
        </>
      ))}
    </>
  );

  return (
    <div className={classes.root}>
      <Typography variant="h5">Companies</Typography>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={8} spacing={2}>
          <CompaniesList />
        </Grid>
        <Grid item xs={4}>
          <AddCompanyCard />
          <br />
          <AddEmployee companiesList={companies} />
        </Grid>
      </Grid>
    </div>
  );
}

const MapStateToProps = (state: any) => {
  return {
    user: state.user,
    UI: state.UI,
    company: state.company,
  };
};

const mapActionsToProps = {};

export default connect(MapStateToProps, mapActionsToProps)(MainPage);
