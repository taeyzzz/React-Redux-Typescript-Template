import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import ApplicationLayout from '../containers/ApplicationLayout/loadable'
import DashboardPage from '../pages/DashboardPage/loadable'
import LoginPage from '../pages/LoginPage/loadable'

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ApplicationLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
)
