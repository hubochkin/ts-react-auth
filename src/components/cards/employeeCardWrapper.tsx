import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent } from "@material-ui/core";
import EmployeeCardItem from "./employeeCardItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    companyCard: {},
    item: {
      fontWeight: 600,
    },

    title: {
      fontSize: 14,
    },
  })
);

export default function EmployeeCardWrapper(props: any) {
  const classes = useStyles();
  const employees = props.employees;
console.log(employees)

const EmployeeList = () => (
  <>
    {employees.map((item: any, index: number) => (
      <EmployeeCardItem name={item.name} adress={item.adress} />
    ))}
  </>
);

  return (
    <Card className={classes.companyCard} variant="outlined">
      <CardContent>   
        <hr />
        <EmployeeList />
      </CardContent>
    </Card>
  );
}
