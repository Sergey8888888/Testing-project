/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useMemo, useReducer } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CarsListPage from "../features/cars/CarsListPage";
import { appContext as AppContext } from "../context";
import { initState, reducer } from "../reducer/reducer";
import NavBar from "../features/navbar/NavBar";
import MainPage from "../features/main/MainPage";
import type { Car } from "../features/cars/types";

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initState);

  const loadCars = async (): Promise<void> => {
    const res = await fetch("https://test.tspb.su/test-task/vehicles");
    const data: Car[] = await res.json();
    console.log("Loaded cars:", data);
    dispatch({ type: "cars/load", payload: data });
  };

  useEffect(() => {
    loadCars().catch(console.error);
  }, []);

  const stateContext = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={stateContext}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cars" element={<CarsListPage />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
