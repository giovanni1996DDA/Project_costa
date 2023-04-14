import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LogisticsLayout from '../Layouts/LogisticsLayout';
import ProtectedLogisticsLayout from '../Layouts/ProtectedLogisticsLayout';
import Login from '../Pages/Login';


function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LogisticsLayout/>}>
              <Route index element={<Login/>}/>
            </Route>

            <Route path="/" element={<ProtectedLogisticsLayout/>}>
              <Route index element={<Login/>}/>
            </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App
