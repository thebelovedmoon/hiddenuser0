function lsdir(args) {
  if (args.includes("dir /")) { // assume lsdir from root directory
    switch (args.replace("dir /", "")) {
      case "boot":
      case "storage":
      case "config":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>Access is denied.</p>
          `
        );
        break;
      case "intellicorp":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>
            prog.exec
          </p>
          `
        );
        break;
      case "crash":
      case "user":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>
          </p>
          `
        );
        break;
      default:
        break;
    }
  } else if (args.includes("dir ")) { // assume lsdir from current directory
    switch (args.replace("dir ", "")) {
      case "boot":
      case "storage":
      case "config":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>Access is denied.</p>
          `
        );
        break;
      case "intellicorp":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>
            prog.exec
          </p>
          `
        );
        break;
      case "crash":
      case "user":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>
          </p>
          `
        );
        break;
      default:
        break;
    }
  } else {
    document.getElementById("cmdInterface").insertAdjacentHTML(
      "beforeend",
      `
      <p>
        /boot&emsp;/config&emsp;/crash&emsp;/intellicorp&emsp;/storage&emsp;/user&emsp;dbgview.exec&emsp;GettingStarted.man&emsp;PrograMonitor.exec&emsp;sys.exec&emsp;zero.exec
      </p>
      `
    );
  }
  return;
}