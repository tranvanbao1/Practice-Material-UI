import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  button: {
    ...theme.myButton
  },
}));
function Feed() {
    const classes = useStyles();
    return (
      <div className="App">
        navbar
      </div>
    );
  }
  
  export default Feed;