import { Box, Button } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { useColorModeValue } from '@chakra-ui/react';

function App() {

  return (
    <>

      <Box minH="100vh" bg={useColorModeValue("blue.50","blue.1500")}>
        <Navbar />   {/*Navbar is put before Routes, so it's available on any page.*/}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </Box>

    </>
  );
}

export default App;
