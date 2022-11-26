import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className='container mx-auto px-3'>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}
//test@gmail.com iMg6NS8%xTNq
//romel@gmail.com FzMCZi63zT@g
export default App;
