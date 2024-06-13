import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(12),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '300px',
  },
  media: {
    height: 140,
  },
  removeButton: {
    marginTop: theme.spacing(3),
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  gridItem: {
    flexBasis: '30%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      marginBottom: theme.spacing(2),
    },
  },
}));

const ReadingList = ({ readingList, onRemove }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={3} className={classes.gridContainer}>
        {readingList?.map((book, index) => (
          <Grid item key={index} className={classes.gridItem}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={`${process.env.PUBLIC_URL}/${book.coverPhotoURL}`}
                title={book.title}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {book.author}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.removeButton}
                  onClick={() => onRemove(book)}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ReadingList;
