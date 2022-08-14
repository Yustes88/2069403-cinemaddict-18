import { getRandomInteger } from '../utile';

const commentDictionary = {
  authors: ['Ilya O\'Reilly', 'Kate Yinston', 'Margaret Trace', 'John Densy', 'Mark Crasin'],
  comment: ['a film that changed my life', 'a true masterpiece', 'post-credit scene was just amazing omg.'],
  emotion: ['smile', 'sleeping', 'puke', 'angry']
};


export const generateComment = (id) => {
  const randomAuthor = commentDictionary.authors[getRandomInteger(0, commentDictionary.authors.length - 1)];
  const randomComment = commentDictionary.comment[getRandomInteger(0, commentDictionary.comment.length - 1)];
  const randomEmotion = commentDictionary.emotion[getRandomInteger(0, commentDictionary.emotion.length - 1)];

  return {
    id,
    'author': randomAuthor,
    'comment': randomComment,
    'date': '2019-05-11T16:12:32.554Z',
    'emotion': randomEmotion,
  };
};
