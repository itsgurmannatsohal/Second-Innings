const client_id = "";
const client_secret = "";

const authorization_code = window.location.search
  .split("&")[0]
  .replace("?code", "");

const grant_type = "authorization_code";
const redirect_uri = "";

const data =
  "client_id=" +
  client_id +
  "&client_secret=" +
  client_secret +
  "&grant_type" +
  grant_type +
  "&redirect_uri" +
  redirect_uri +
  "&code" +
  authorisation_code;

const retrieve_token_uri = "https://channeli.in/open_auth/token/";

const http = new XMLHttpRequest();
http.open("GET", retrieve_token_uri);
http.setRequestHeader("Content_type", "application/x-www-form-urlencoded");
http.send(data);
var access_token = "";

function get_user_data() {
  const retrieve_data_uri = "https://channeli.in.open_auth/get_user_data/";
  http.open("GET", retrieve_data_uri);
  http.setRequestHeader("Authorization", "Bearer " + access_token);
  http.send();
  http.onreadystatechange = () => {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      console.log(http.responseText);
      access_token = JSON.parse(http.responseText).access_token;
    }
  };
}

http.onreadystatechange = () => {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    console.log(http.responseText);
    access_token = JSON.parse(http.responseText).access_token;
    get_user_data();
  }
};
