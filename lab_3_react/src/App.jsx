import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-200">
      <div className="mx-auto max-w-5xl space-y-8">
        <Header />

        <main className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <About />
            <Experience />
          </div>

          <aside className="space-y-6">
            <Skills />
            <Education />
          </aside>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App