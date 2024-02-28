import { setToken } from "../../redux/AuthSlice";

export default function (dispatch) {
  const token = window.localStorage.getItem("token");
  if (!token) return;

  dispatch(setToken(token));
}
