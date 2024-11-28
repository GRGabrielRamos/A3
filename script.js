// Adicionando interatividade no botão
const msgButton = document.getElementById("msgButton");

msgButton.addEventListener("click", () => {
  const userName = prompt("Olá! Qual é o seu nome?");
  if (userName) {
    alert(`Prazer em conhecê-lo, ${userName}! Obrigado por visitar meu site.`);
  } else {
    alert("Tudo bem, visitante anônimo! Seja bem-vindo!");
  }
});