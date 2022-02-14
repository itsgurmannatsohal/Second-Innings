const client_id = "";

function redirect() {
  const url = "https://channeli.in/oauth/authorise/?client_id=" + client_id;
  window.location = url;
}
