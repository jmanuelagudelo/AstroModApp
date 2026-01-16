//import QuantumButton from "../components/quantumbutton.jsx";
import RelativityButton from "../components/relativitybutton.jsx";
//import StelarButton from "../components/stelarbutton.jsx";
import "../styles/home.css";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="my-4"> 
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        {/* Título */}
          Astrofisica Moderna
        </h1>
      </div> 
      <div className="px-6 sm:px-12 md:px-24 lg:px-32 mt-8">
      <div className="grid grid-cols-1 gap-8">
        <RelativityButton
          title="Relatividad Especial"     
          route="/relatividad-especial"
        >
          <p className="text-center">Introducción a la relatividad especial</p>
        </RelativityButton>
      </div>
      </div> 
    </div>
  );
}

export default Home;
