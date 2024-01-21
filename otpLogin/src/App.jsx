import "./App.css";
import PhoneOtpForm from "./components/phone-login";

function App() {
  return (
    <>
      <div className="container text-center h-48 flex items-center justify-center flex-col font-sans">
        <h1 className="text-3xl m-3">Login with Phone</h1>
        <PhoneOtpForm />
      </div>
    </>
  );
}

export default App;
