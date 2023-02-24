import { Route, Routes } from 'react-router-dom';
import CategoriesList from './components/category/CategoriesList';
import Home from './components/Home';
import TestsList from './components/test/TestsList';
import CategoryDetails from './components/category/CategoryDetails';
import EditCategory from './components/category/EditCategory';
import CreateCategory from './components/category/CreateCategory';
import NavBar from './components/NavBar';

export default function MyApp() {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories-list/:pageNumber' element={<CategoriesList />} />
        <Route path='/category-details/:id' element={<CategoryDetails />} />
        <Route path='/add-category' element={<CreateCategory />} />
        <Route path='/edit-category/:id' element={<EditCategory />} />

        <Route path='/tests' element={<TestsList />} />
      </Routes>
    </div>
  );
}
