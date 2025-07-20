function lsdir(args) {
  if (args.includes("dir /")) { // assume lsdir from root directory
    switch (args.replace("dir /", "")) {
      case "boot":
      case "storage":
      case "config":
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>'dir' not allowed: System directory</p>
        `);
      case "intellicorp":
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>prog.exec</p>
        `);
      case "crash":
      case "user":
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p></p>
        `);
      default:
        return;
    }
  } else if (args.includes("dir ")) { // assume lsdir from current directory
    switch (args.replace("dir ", "")) {
      case "boot":
      case "storage":
      case "config":
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>'dir' not allowed: System directory</p>
        `);
      case "intellicorp":
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>prog.exec</p>
        `);
      case "crash":
      case "user":
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p></p>
        `);
      default:
        return;
    }
  } else {
    return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
      <p>${dirList()}</p>
    `);
  }
}

function dirList() {
  let dirs = [
    "/boot",
    "/config",
    "/crash",
    "/intellicorp",
    "/storage",
    "/user",
    "dbgview.exec",
    "GettingStarted.man",
    "PrograMonitor.exec",
    "sys.exec",
    "zero.exec"
  ];
  return dirs.sort().join("&emsp;");
}