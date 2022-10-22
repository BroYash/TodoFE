import React from "react";
import TodoNote from "./TodoNote";
import styles from "../styles/Home.module.css";
import { Container, Grid } from "@mui/material";

interface cardDetails {
  cardLen: number;
}

function TodoGroup({ cardLen }: cardDetails) {
  return (
    <Container className={styles.todoGroupContainer}>
      <Grid container spacing={2}>
        {[
          [...Array(cardLen).keys()].map((value1: any) => {
            return (
              <Grid item xs={12} md={4}>
                <TodoNote pvalue={value1 + 1} />
              </Grid>
            );
          }),
        ]}
      </Grid>
    </Container>
  );
}

export default TodoGroup;
