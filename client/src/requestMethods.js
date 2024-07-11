import axios from "axios";

const BASE_URL = "/api/";

function getCookie(cookieName) {

  var cookies = document.cookie.split(";");


  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
  
    if (cookie.startsWith(cookieName + "=")) {
  
      return cookie.substring(cookieName.length + 1);
    }
  }

  return null;
}

// Example usage:
var user = getCookie("greenUserCookie");

const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTI0ZjM4NjRhODM2YTJiZTFiYWZlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTcxODMyOCwiZXhwIjoxNjQxOTc3NTI4fQ.BHKvrS09UpdDaToxnbbJzQeat-vcSXC2LJcxD0aYo1k"
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTI0ZjM4NjRhODM2YTJiZTFiYWZlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTcxODMyOCwiZXhwIjoxNjQxOTc3NTI4fQ.BHKvrS09UpdDaToxnbbJzQeat-vcSXC2LJcxD0aYo1k
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
