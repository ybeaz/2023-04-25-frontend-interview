import React from "react";
import { Link } from "react-router-dom";

export const FilmsList = (props) => {
  const { films } = props;

  const getFilmsList = (filmsIn) => {
    return filmsIn.map((item, index) => {
      const { title, episode_id } = item;
      return (
        <li key={`filmsListItem-${index}`}>
          <Link to={`/${episode_id}/`}>{title}</Link>
        </li>
      );
    });
  };

  return (
    <div className="FilmsList">
      <ul>{getFilmsList(films)}</ul>
    </div>
  );
};
