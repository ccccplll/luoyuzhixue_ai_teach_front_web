import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorksPage } from './pages/WorksPage';
import { WorkDetailPage } from './pages/WorkDetailPage';
import { CoursePage } from './pages/CoursePage';
import { BookingPage } from './pages/BookingPage';
import { TeacherPage } from './pages/TeacherPage';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fff8ec] text-[#12346e] selection:bg-[#f4d58c] selection:text-[#0b2d73]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/two-cats-home" element={<WorkDetailPage forcedId="animal" />} />
          <Route path="/works/:id" element={<WorkDetailPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
