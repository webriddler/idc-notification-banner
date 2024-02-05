function getQueryParam(name) {
    const scriptUrl = document.currentScript.src;
    const queryString = scriptUrl.split('?')[1];
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(name);
}

const key = getQueryParam("key");
const body = document.getElementsByTagName("body")[0];
const formData = new URLSearchParams();
const endpoint = "http://localhost/idc-api/apihandler.php";
formData.append("key", key);

fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: formData.toString(),
})
  .then((response) => response.text())
  .then((result) => {
    body.innerHTML += result;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
