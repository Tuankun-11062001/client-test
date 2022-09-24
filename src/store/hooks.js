import { useContext } from "react";
import Context from "./Context";

const UseStore = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};

export { UseStore };
