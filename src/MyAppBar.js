import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MyAppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.props.classes;
    return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                      onClick={() => this.props.toggleDrawer()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            English Sentences
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

// MyAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(MyAppBar);
