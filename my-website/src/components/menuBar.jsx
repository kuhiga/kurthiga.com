import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    padding: "5px 33vw 5px 5px",
    "&:hover": {
      backgroundColor: "#cdd9e9",
      color: "#010714",
    },
  },
});

const MenuBarStyle = styled.div`
    position: fixed;
    backdrop-filter: blur(0.5px);
`;

export const MenuBar = () => {
  const classes = useStyles();
  return (
    <MenuBarStyle>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={6} sm={6} >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}

          >
            <Grid item>
              <Link
                className={classes.link}
                color="inherit"
                underline="none"
                href="https://www.linkedin.com/in/kurthiga/"
              >
                LinkedIn
              </Link>
            </Grid>
            <Grid item>
              <Link
                className={classes.link}
                color="inherit"
                underline="none"
                href="https://www.github.com/kuhiga/"
              >
                GitHub
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Link
                className={classes.link}
                color="inherit"
                underline="none"
                href="https://www.linkedin.com/in/kurthiga/"
              >
                Twitter
              </Link>
            </Grid>
            <Grid item>
              <Link
                className={classes.link}
                color="inherit"
                underline="none"
                href="https://www.linkedin.com/in/kurthiga/"
              >
                Email
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MenuBarStyle>
  );
};
