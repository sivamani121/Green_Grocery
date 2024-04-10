import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/apiCalls";

export default function Logout(params) {
  const dispatch = useDispatch();
  const hadellogout = () => logoutUser(dispatch);
  return <button onClick={hadellogout}>logout</button>;
}
