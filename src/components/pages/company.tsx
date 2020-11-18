import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CompanyCard from "../cards/companyInfoCard";
import { connect } from "react-redux";
import CompanyInfoCard from "../cards/companyInfoCard";
import EmployeeCard from "../cards/employeeCardWrapper";

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

export function CompanyPage(props: any) {
  const classes = useStyles();

  let id = props.match.params.id;

  const [errors, setErrors] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [company, setCompany] = React.useState([]);
  const [employees, setEmployees] = React.useState([]);

  useEffect(() => {
    if (!props.UI.errors) {
      setErrors(true);
    }
    console.log(props)
    setCompany(props.company.companies[id]);
    const sortedEmployees = props.company.employees.filter((item: any )=> item.companyId == id);
    console.log(sortedEmployees)
    setEmployees(sortedEmployees);

    setLoading(props.UI.loading);
  }, [id, props.UI, props.company.companies]);
  let companies = [1, 2, 3];
  const CompaniesList = () => (
    <>
      {companies.map((item: any, index: number) => (
        <CompanyCard
          company={item}
          className={classes.companyCard}
          index={index}
        />
      ))}
    </>
  );

  return (
    <div className={classes.root}>
      <Typography variant="h5">Companies</Typography>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={8} spacing={2}>
          <CompanyInfoCard
            company={company}
            employees={employees}
          />
          <br />
          <EmployeeCard employees={employees} />
        </Grid>
      </Grid>
    </div>
  );
}

const MapStateToProps = (state: any) => {
  return {
    UI: state.UI,
    company: state.company,
  };
};

const mapActionsToProps = {};

export default connect(MapStateToProps, mapActionsToProps)(CompanyPage);
