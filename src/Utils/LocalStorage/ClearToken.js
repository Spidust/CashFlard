import { setToken } from "../../redux/AuthSlice";

export default function ClearToken(dispatch) {
  dispatch(setToken(""));
}
