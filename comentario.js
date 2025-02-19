function publicar(){
    const myHeaders = new Headers();
myHeaders.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZnNsaG10eW15bXh1bXlqeHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MzI3MjMsImV4cCI6MjA1NDQwODcyM30.nbbtKrAxmxNq9YhtPNKM2nXRV9g7La63Zq1DDbI9iDQ");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": document.getElementById("name").value,
  "comentario": document.getElementById("comentario").value
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://dxfslhmtymymxumyjxsq.supabase.co/rest/v1/comentarios", requestOptions)
  .then((response) => response.text())
  .then((result) =>{
    window.location.reload()
  })
  .catch((error) => console.error(error));
}

function getcomentarios(){
    const myHeaders = new Headers();
myHeaders.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZnNsaG10eW15bXh1bXlqeHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MzI3MjMsImV4cCI6MjA1NDQwODcyM30.nbbtKrAxmxNq9YhtPNKM2nXRV9g7La63Zq1DDbI9iDQ");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://dxfslhmtymymxumyjxsq.supabase.co/rest/v1/comentarios", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    result.forEach(element => {
        document.getElementById("lista").innerHTML += `        <div class="comentario" id="comentario">
            <p>${element.name}</p>
            <sub>${element.comentario}</sub>
        </div>`
    });
})
  .catch((error) => console.error(error));
}
getcomentarios()