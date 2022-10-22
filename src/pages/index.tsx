import { Box, CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import type { NextPage } from "next";
import TodoGroup from "../components/TodoGroup";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.main}>
        <Box>
          <TodoGroup cardLen={1000} />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
