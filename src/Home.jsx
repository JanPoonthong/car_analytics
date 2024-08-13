import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="bg-slate-950 h-dvh text-white font-serif content-center">
        <div className="flex flex-col justify-center items-center">
          {/* Header  */}
          <h1 className="text-7xl font-bold">Home Page</h1>
          <p className="text-slate-500 mt-5 mb-8">
            You are currently on the home page. Click the options below to
            navigate to another page.
          </p>

          {/* Options */}
          <div className="flex justify-between text-gray-500 px-20 mt-10  space-x-20">
            <Link to="/dashboard">
              {" "}
              <button className="px-20 py-4 bg-white rounded hover:text-black hover:shadow-lg hover:shadow-cyan-500/50">
                Dashboard
              </button>
            </Link>
            <Link to="/highlight">
              {" "}
              <button className="px-20 py-4 bg-white rounded hover:text-black hover:shadow-lg hover:shadow-cyan-500/50">
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
