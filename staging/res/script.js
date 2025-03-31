let urlArgs = new URLSearchParams(window.location.search).get("m");

function syntaxValidator() {
  let inp = document.getElementById("synInput");
  inp.addEventListener("keydown", (k) => {
    if (k.key === "Enter") {
      if (urlArgs == "debug") { // debug mode on
        alert(
          "You typed: " +
            inp.value +
            "\nDecoded output: " +
            btoa(inp.value) +
            "\n\nPress OK to continue."
        );
      }
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
      // window.open("https://intellicorp.wixsite.com/intellicorp");
      window.location.replace("intellicorp.html");
      break;
    case "U29jaWFscw==": // Socials
      alert(
        "Make sure to allow pop-ups for this site to see all the socials at once.\n\n-ZER0"
      );
      window.open("https://x.com/hiddenuser0");
      window.open("https://instagram.com/hiddenuser0");
      window.open("https://youtube.com/@hiddenuser0");
      window.open("https://wattpad.com/user/hiddenuser0");
      window.open("https://reddit.com/user/hiddenuser0_");
      break;
    case "Pw==": // ?
      if (urlArgs == "debug") { // debug mode on
        alert("THIS MODE IS INTENDED FOR TESTING PURPOSES ONLY.\n\nYou have stumbled upon the Debug Mode of this site. With this feature, it will allow you to cross-check (and even implement/replace) Base64 values based on the input that you have entered in the box.\n\nYou can then add more variety to it according to your liking.\n\nIf you want to learn more or get involved, contact @thebelovedmoon (the developer of this site) or make a Pull Request on https://github.com/thebelovedmoon/hiddenuser0");
      } else {
        alert(
          "As you may have noticed, the website has been changed as I feel that the previous website iteration might have been too bloated that the it didn't serve its original purpose anymore. Due to this, I've decided to revamp the code to remove all bloat and start from square one.\n\nIt may take a few weeks or months to finish; and don't worry, the previous version has been saved prior to this revamp.\n\nLet's hope this new version will be much better than before.\n\n-ZER0"
        );
      }
      break;
    default:
      alert("Code is invalid.");
      throw new Error("Code is invalid.");
  }
}