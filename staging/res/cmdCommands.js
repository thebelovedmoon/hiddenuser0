function execCommands(args) {
  if (args.includes("zero.exec")) {
    zero_exec(args);
  } else {
    switch (args) {
      case "help":
      case "?":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>Useful commands:</p>
          <p>?, cd, dir, exit, help, logoff, reboot, whoami</p>
          <br />
          <p>
            You can launch a program as {program}.exec. For more information about that
          </p>
          <p>specific program, launch {program}.exec -help.</p>
          <br />
          <p>Please note that this program is still a work-in-progress. For more</p>
          <p>information, contact INTERIM support.</p>
          `
        );
        break;
      case "exit":
      case "logoff":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>Executing system logoff.</p>
          `
        );
        setTimeout(() => {
          window.close();
        }, 1000);
        break;
      case "reboot":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>Executing system reboot.</p>
          `
        );
        setTimeout(() => {
          location.reload();
        }, 1000);
        break;
      case "dir":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>
            /boot&emsp;/config&emsp;/crash&emsp;/intellicorp&emsp;/storage&emsp;/user&emsp;dbgview.exec&emsp;GettingStarted.man&emsp;PrograMonitor.exec&emsp;sys.exec&emsp;zero.exec
          </p>
          `
        );
        break;
      case "whoami":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>
            INTERIM\\hiddenuser0
          </p>
          `
        );
        break;
      default:
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>'` +
            args +
            `' is not recognized as an internal or external command,</p>
          <p>operable program or batch file.</p>
          `
        );
        break;
    }
  }
  document
    .getElementById("cmdInterface")
    .insertAdjacentHTML("beforeend", "<br />");
  intellicorpTerminal();
}