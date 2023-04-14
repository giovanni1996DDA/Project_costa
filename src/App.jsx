import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LogisticsLayout from '../Layouts/LogisticsLayout';
import Login from '../Pages/Login';


function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogisticsLayout/>}>
              <Route index element={<Login/>}/>
            </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App
