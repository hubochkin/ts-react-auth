import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent } from "@material-ui/core";

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

export default function EmployeeCardItem(props: any) {
  const classes = useStyles();
  const name = props.name;
  const adress = props.adress;

 
  return (
    <Card className={classes.companyCard} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
        {name}
        </Typography>
        <hr />
       
        <Typography variant="body2" className={classes.item}>
          Adress
        </Typography>
        <Typography
          className={classes.pos}
          variant="subtitle2"
          color="textSecondary"
        >
          {adress}
        </Typography>
      </CardContent>
    </Card>
  );
}
