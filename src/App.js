import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import PayrollForm from "./components/pages/PayrollForm";
import NotFound from './components/pages/NotFound';
import Adduser from './components/users/Adduser';
import EditUser from "./components/users/Edituser";
import User from "./components/users/Users";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<PayrollForm />}>
                <Route index element={<Adduser />} />
                <Route path="/users/add" element={<EditUser />} />
                <Route path="/users/edit/:id" element={<User />} />
                <Route path="/users/:id" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
    </div >
    
  );
}

export default App;