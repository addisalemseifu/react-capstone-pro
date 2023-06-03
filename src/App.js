import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLocation } from './redux/location/locationSlice';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.location);
  useEffect(() => {
    dispatch(getLocation('London'));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
