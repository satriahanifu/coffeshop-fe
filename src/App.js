import "./App.css";
import Topbar from "./components/Topbar";
import Carousel2nd from "./components/Carousel2nd";
import SimpleSlider from "./components/SimpleSlider";

function App() {
  return (
    <div className="" style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto", marginTop: 64 }}>
      <div>
        <div className="w-[1226px] h-[1168px] absolute left-[-507px] top-[-97px] bg-[rgb(213,160,111)]/25 rounded-full z-0"></div>
        <div className="w-[436px] h-[468px] absolute left-[-75px] top-[635px] bg-[#4F7E68] rounded-full z-1"></div>
        <div className="w-[500px] h-[493px] absolute left-[1044px] top-[-123px] bg-[#E9B885] rounded-full z-0"></div>
      </div>
      <header className="z-40">
        <Topbar />
        <p className="text-[40px] absolute left-[971px] top-[206px] text-center font-slogan w-[367px] h-[128px] font-[400]">
          “What do you want? "<br /> "Just coffee. Black - like my soul.”
        </p>
      </header>
      <body>
        {/* <Carousel2nd /> */}
        <SimpleSlider />
      </body>
    </div>
  );
}

export default App;
