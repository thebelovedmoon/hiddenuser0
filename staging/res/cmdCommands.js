function execCommands(args) {
  if (args.includes("zero.exec")) {
    zero_exec(args);
  } else if (args.includes("sys.exec")) {
    sys_exec(args);
  } else if (args.includes("cd")) {
    cdir(args);
  } else if (args.includes("dir")) {
    lsdir(args);
  } else {
    switch (args) {
      case "help":
      case "?":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>Useful commands:</p>
          <p>?, cd, cls, dir, exit, help, logoff, reboot, whoami</p>
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
          document.getElementById("cmdInterface").innerHTML = "";
          window.location.replace("/");
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
      case "cls":
        document.getElementById("cmdInterface").innerHTML = "";
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