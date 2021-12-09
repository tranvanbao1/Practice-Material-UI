import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  container: {
    paddingTop: theme.spacing(10)
  }
}));
function RightBar() {
    const classes = useStyles();
    return (
      <Container className={classes.container}>rightbar</Container>
    );
  }
  
  export default RightBar;