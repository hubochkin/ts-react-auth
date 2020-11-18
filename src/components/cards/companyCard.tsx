import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";

import { useHistory } from 'react-router-dom'



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

export default function CompanyCard(props: any) {
  const classes = useStyles();
  const company = props.company;
  const history = useHistory();

  const handleClick = () => { 
    history.push(`/${props.index}`);
  }
  return (
    <Card className={classes.companyCard} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {company.name}
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
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Company overview</Button>
      </CardActions>
    </Card>
  );
}
