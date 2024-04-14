import { setToken } from "../../redux/UserSlice"

export default function SetToken(token, dispatch) {
    dispatch(setToken(token));
}