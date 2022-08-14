import { getRandomInteger } from '../utile.js';
import { generateComment } from './comment.js';

const movieDictionary = {
  movies: {
    'Made for each other': './images/posters/made-for-each-other.png',
    'Popeye meets Sindbad': './images/posters/popeye-meets-sinbad.png',
    'Sagebrush trail': './images/posters/sagebrush-trail.jpg',
    'Santa Claus conquers the martians': './images/posters/santa-claus-conquers-the-martians.jpg',
    'The dance of life': './images/posters/the-dance-of-life.jpg',
    'The greate flamarion': './images/posters/the-great-flamarion.jpg',
    'The man with the golden': './images/posters/the-man-with-the-golden-arm.jpg',
  },
  descriptions:['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.']
};

const generateTitles = (movieTitleDictionary) => {
  const titles = Object.keys(movieTitleDictionary);
  return titles[getRandomInteger(0, titles.length - 1)];
};

const generateDescriptions = (description) => {
  const descriptionItem = getRandomInteger(0, description.length - 1);
  return description[descriptionItem];
};

const createComments = (number) => Array.from({length: number}, (_, i) => generateComment(i));

export const generateMovie = () => {
  const moviesTitle = generateTitles(movieDictionary.movies);
  const moviesPosters = movieDictionary.movies[moviesTitle];
  const moviesDescription = generateDescriptions(movieDictionary.descriptions);

  return {
    'id': '0',
    comments: createComments(getRandomInteger(1, 5)),
    'film_info': {
      'title': moviesTitle,
      'alternative_title': 'Laziness Who Sold Themselves',
      'total_rating': 5.3,
      'poster': moviesPosters,
      'age_rating': 0,
      'director': 'Tom Ford',
      'writers': [
        'Takeshi Kitano'
      ],
      'actors': [
        'Morgan Freeman'
      ],
      'release': {
        'date': '2019-05-11T00:00:00.000Z',
        'release_country': 'Finland'
      },
      'runtime': 77,
      'genre': [
        'Comedy'
      ],
      'description': moviesDescription,
    },
    'user_details': {
      'watchlist': false,
      'already_watched': true,
      'watching_date': '2019-04-12T16:12:32.554Z',
      'favorite': false
    }
  };
};
