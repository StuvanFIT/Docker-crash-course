import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { NotFound } from './components/NotFound';
import DockerCourse from './components/DockerCourse';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<DockerCourse/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
