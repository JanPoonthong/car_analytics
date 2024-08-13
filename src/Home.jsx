import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="bg-slate-950 h-screen text-white font-serif flex flex-col justify-center items-center p-4">
        <div className="text-center">
          {/* Header */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Home Page
          </h1>
          <p className="text-slate-500 mt-4 sm:mt-5 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
            You are currently on the home page. Click the options below to
            navigate to another page.
          </p>

          {/* Options */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-6 sm:mt-10 text-gray-500">
            <Link to="/dashboard">
              <button className="px-6 py-3 sm:px-10 sm:py-4 bg-white rounded hover:text-black hover:shadow-lg hover:shadow-cyan-500/50">
                Dashboard
              </button>
            </Link>
            <Link to="/highlight">
              <button className="px-6 py-3 sm:px-10 sm:py-4 bg-white rounded hover:text-black hover:shadow-lg hover:shadow-cyan-500/50">
                Highlight
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
