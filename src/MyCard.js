import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme: Object) => ({
  card: {
    //minWidth: 200,
    //maxWidth: 576,
    width: '95%',
    height: '90%',
    margin: '12px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function MyCard(props) {
  const { classes, s } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="subtitle2" component="p">
          {s.point_no} - {s.no}
        </Typography>
        <Typography variant="h6" component="h3">
          {s.english}
        </Typography>
        <br/>
        <Typography component="p">
          {s.japanese}
        </Typography>
        <br/>
        <Typography component="p">
          {s.note}
        </Typography>
      </CardContent>
      {/*
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      */}
    </Card>
  );
}

MyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyCard);
