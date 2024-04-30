import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "./Nav";
import DataContextProvider from "../contexts/DataContextProvider";
import Entry from "../pages/Entry";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Entry />} />
        </Routes>
      </DataContextProvider>
    </BrowserRouter>
  );
}
