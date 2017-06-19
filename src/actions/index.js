export function selectBook(book) {
  // Select book is an action creator, it needs to return an action
  return {
    type: 'BOOK_SELECTED',
    payload: book    
  };
}