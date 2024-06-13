import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, CircularProgress, Box } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';
import { Alert } from '@material-ui/lab';
import SearchBar from './components/SearchBar';
import ReadingList from './components/ReadingList';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  title: {
    color: '#008080',
    marginBottom: theme.spacing(3),
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  alert: {
    margin: theme.spacing(2, 0),
  },
}));

const App = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredBooks(data.books);
    }
  }, [data]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      setFilteredBooks(data.books.filter(book =>
        book.title.toLowerCase().includes(term.toLowerCase())
      ));
    } else {
      setFilteredBooks(data.books);
    }
  };

  const handleAddBook = (book) => {
    setReadingList([...readingList, book]);
    setSearchTerm('');
    setFilteredBooks(data.books);
  };

  const handleRemoveBook = (book) => {
    setReadingList(readingList.filter(b => b.title !== book.title));
  };

  if (loading) return (
    <Box className={classes.loader}>
      <CircularProgress color="primary" />
    </Box>
  );

  if (error) return (
    <Container className={classes.container}>
      <Alert severity="error" className={classes.alert}>
        Error fetching books: {error.message}
      </Alert>
    </Container>
  );

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Book Assignment
      </Typography>
      <SearchBar 
        onSearch={handleSearch} 
        searchTerm={searchTerm} 
        books={filteredBooks} 
        onAdd={handleAddBook} 
        readingList={readingList} 
      />
      {!!readingList?.length && (
        <ReadingList 
          readingList={readingList} 
          onRemove={handleRemoveBook} 
        />
      )}
    </Container>
  );
};

export default App;
