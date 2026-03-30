import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<ContactMe />} />
            </Routes>
          </main>
          <footer className="border-t border-gray-100 dark:border-gray-800 py-10">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                &copy; {new Date().getFullYear()} Chan Thang. Built with React.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
