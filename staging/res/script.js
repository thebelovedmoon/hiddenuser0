function syntaxValidator() {
  let inp = document.getElementById("synInput");
  inp.addEventListener("keydown", (k) => {
    if (k.key === "Enter") {
      syn(btoa(inp.value));
    }
  });
}

function syn(h) {
  switch (h) {
    case "TnVtaXRyb3Zh": // Numitrova
      window.open("/numitrova.html");
      break;
    case "SnVuc3Vp": // Junsui
      window.open("https://www.wattpad.com/story/215143115");
      break;
    case "SW50ZWxsaWNvcnA=": // Intellicorp
      window.open("https://intellicorp.wixsite.com/intellicorp");
      break;
    case "Pw==": // ?
      alert(
        "As you may have noticed, the website has been changed as I feel that the previous website iteration might have been too bloated that the it didn't serve its original purpose anymore. Due to this, I've decided to revamp the code to remove all bloat and start from square one.\n\nIt may take a few weeks or months to finish; and don't worry, the previous version has been saved prior to this revamp.\n\nLet's hope this new version will be much better than before.\n\n-ZER0"
      );
      break;
    default:
      alert("Code is invalid.");
      throw new Error("Code is invalid.");
  }
}
