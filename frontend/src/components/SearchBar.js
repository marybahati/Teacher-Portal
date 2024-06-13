import React from 'react';
import { TextField, List, ListItem, ListItemText, ListItemAvatar, Avatar, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    marginBottom: theme.spacing(2),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
      margin: '0 auto',
    },
  },
  textField: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#53c2c2',
        boxShadow: `0 0 0 2px #53c2c2`,
      },
    },
  },
  listContainer: {
    position: 'absolute',
    width: '100%',
    maxHeight: '200px',
    overflowY: 'auto',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    borderRadius: '4px',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  listItemAvatar: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  addButton: {
    marginLeft: theme.spacing(1),
    borderColor: '#4aa088',
    color: '#4aa088',
    textTransform: 'none',
  },
}));

const SearchBar = ({ onSearch, searchTerm, books, onAdd, readingList }) => {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <TextField
        className={classes.textField}
        variant="outlined"
        placeholder="Search for books"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      {searchTerm && (
        <List className={classes.listContainer}>
          {books.map((book, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar src={`${process.env.PUBLIC_URL}/${book.coverPhotoURL}`} />
              </ListItemAvatar>
              <ListItemText primary={book.title} secondary={book.author} />
              {readingList.some((b) => b.title === book.title) ? (
                <Button variant="outlined" disabled className={classes.addButton}>Added</Button>
              ) : (
                <Button variant="outlined" className={classes.addButton} onClick={() => onAdd(book)}>Add</Button>
              )}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default SearchBar;
