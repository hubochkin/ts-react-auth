import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, Grid } from "@material-ui/core";

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
      background: "rgb(0 0 0 / 3%)"
    },
  })
);

export default function CompanyInfoCard(props: any) {
  const classes = useStyles();
  const company = props.company;
  const employees = props.employees;

  
  return (
    <Card className={classes.companyCard} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {company.name}
        </Typography>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={6} spacing={2}>
            <Typography variant="body2" className={classes.item}>
              Adress
            </Typography>
            <Typography
              className={classes.pos}
              variant="subtitle2"
              color="textSecondary"
            >
              {company.adress}
            </Typography>
            <Typography variant="body2" className={classes.item}>
              Revenue
            </Typography>
            <Typography
              className={classes.pos}
              variant="subtitle2"
              color="textSecondary"
            >
              {company.revenue}
            </Typography>
            <Typography variant="body2" className={classes.item}>
              Phone
            </Typography>
            <Typography
              className={classes.pos}
              variant="subtitle2"
              color="textSecondary"
            >
              {company.phone}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" className={classes.item}>
              Total employers
            </Typography>
            <Typography
              className={classes.pos}
              variant="subtitle2"
              color="textSecondary"
            >
              {employees.length}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
