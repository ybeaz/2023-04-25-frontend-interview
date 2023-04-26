import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Layout } from "./Layout";

import { SearchBlock } from "./SearchBlock";
import { FilmsList } from "./FilmsList";

export const MainScreen = () => {
  const [filmsState, setFilmsState] = useState([]);
  const [valueInputState, setValueInputState] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleOnChangeInput = (valueIn) => {
    setValueInputState(valueIn);
  };

  useEffect(() => {
    const source = Axios.CancelToken.source();

    const getFilms = async () => {
      try {
        const res = await Axios.get("https://swapi.dev/api/films", {
          cancelToken: source.token,
        });
        setFilmsState(res.data.results);
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log("Request canceled");
        } else {
          console.log(error);
        }
      }
    };
    getFilms();

    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    setDebounceTimeout(
      setTimeout(async () => {
        try {
          const res = await Axios.get(
            `https://swapi.dev/api/films/?search=${valueInputState}`
          );
          setFilmsState(res.data.results);
        } catch (error) {
          console.log(error);
        }
      }, 500)
    );

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [valueInputState]);

  const searchBlockProps = {
    handleOnChangeInput,
    inputValue: valueInputState,
  };

  const filmsListProps = {
    films: filmsState,
  };

  console.info("MainScreen [18]", { filmsState });
  return (
    <Layout>
      <div className="MainScreen">
        <div>
          <SearchBlock {...searchBlockProps} />
        </div>
        <div>
          <FilmsList {...filmsListProps} />
        </div>
      </div>
    </Layout>
  );
};
