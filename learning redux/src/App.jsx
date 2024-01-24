import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "./store/actions/countActions";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const handleChange = (type)=>{
    dispatch(changeCount(type))
    console.log(type)
  }
  return (
    <div>
      <button className="mx-3" onClick={()=>{handleChange("DECREASE")}}>Decrease</button>
      {count.number}
      <button className="mx-3" onClick={()=>{handleChange("INCREASE")}}>Increase</button>
    </div>
  );
}

export default App;
