import NavBar from "./components/NavBar.tsx";

function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <NavBar/>
          </header>
        </div>
      </div>
    </div>
  )
}

export default App
