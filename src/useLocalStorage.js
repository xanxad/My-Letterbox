import { useState, useEffect } from "react";

export function useLocalStorage() {
  const [watched, setWatched] = useState(function () {
    const storeMovies = localStorage.getItem("watched");
    return storeMovies ? JSON.parse(storeMovies) : [];
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  return [watched, setWatched];
}
