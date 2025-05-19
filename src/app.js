import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "Mrs"];
  let adj = ["great", "big", "fun"];
  let noun = ["jogger", "racoon", "dog"];
  let domin = [".com", ".net", ".ar", ".es"];


  function generateDomain(pronoun, adj, noun, domin) {
    let dominios = "<table class='table table-striped'>";

    for (const i in pronoun) {
      for (const j in adj) {
        for (const k in noun) {
          for (const l in domin) {
            const pronombres = pronoun[i];
            const adjetivo = adj[j];
            const element = noun[k];
            const dominio = domin[l];

            dominios +=
              "<tr><td class= 'domain-cell'>" +
              pronombres +
              adjetivo +
              element +
              dominio +
              " " +
              "</td></tr>";
            console.log(dominios);
          }
        }
      }
    }
    dominios += "</table>";
    return dominios;
  }


  const misDominios = document.querySelector("#domain");
  const dominios = generateDomain(pronoun, adj, noun, domin);
  misDominios.innerHTML = dominios;

  console.log("Hello Rigo from the console!");
};

