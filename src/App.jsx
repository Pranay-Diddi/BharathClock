import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ClockHeading from "./Components/ClockHeading";
import ClockSlogan from "./Components/ClockSlogan";
import CurrentTime from "./Components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="content">
        <center>
          <ClockHeading />
          <ClockSlogan />
          <CurrentTime />
        </center>
      </div>
    </>
  );
}

export default App;
