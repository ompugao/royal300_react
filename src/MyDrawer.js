import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Description from '@material-ui/icons/Description';
// import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const styles = {
  list: {
    width: 'auto',
  },
};

class MyDrawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, numSections } = this.props;

    const section_list = [];
    for (let i = 1; i <= numSections; ++i) {
      section_list.push(i);
    }
    const sideList = (
      <div className={classes.list}>
        <List>
          {section_list.map((id, index) => (
            <Link to={'/section/' + id}>
              <ListItem button key={'Section ' + id}>
                <ListItemIcon><Description /></ListItemIcon>
                <ListItemText primary={'Section ' + id} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <SwipeableDrawer
          open={this.props.enabled}
          onClose={this.props.toggleDrawer}
          onOpen={this.props.toggleDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleDrawer}
            onKeyDown={this.props.toggleDrawer}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

MyDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyDrawer);
