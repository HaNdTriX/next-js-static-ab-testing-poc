import cookie from "cookie";
import { v4 as uuidv4 } from "uuid";

export default function getUserId() {
  const userId = cookie.parse(document.cookie).user_id || uuidv4();
  document.cookie = cookie.serialize("user_id", userId, {
    maxAge: 60 * 60,
    path: "/",
  });
  return userId;
}
