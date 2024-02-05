const urlParams = new URLSearchParams(window.location.search);
const key = urlParams.get("key");
const body = document.getElementsByTagName("body")[0];
const formData = new URLSearchParams();
formData.append("key", key);

fetch("http://localhost/test/test.php", {
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
