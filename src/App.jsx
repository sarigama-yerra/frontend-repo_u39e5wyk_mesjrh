import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <footer className="border-t py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
