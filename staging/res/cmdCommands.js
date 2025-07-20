function execCommands(args) {
  if (args.includes("zero.exec")) {
    zero_exec(args);
    postCommand();
  } else if (args.includes("sys.exec")) {
    sys_exec(args);
    postCommand();
  } else if (args.includes("cd")) {
    cdir(args);
    postCommand();
  } else if (args.includes("dir")) {
    lsdir(args);
    postCommand();
  } else {
    switch (args) {
      case "dbgview.exec":
      case "GettingStarted.man":
      case "PrograMonitor.exec":
        document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>This program is still a work-in-progress. For more information, contact</p>
          <p>INTERIM Support.</p>
        `);
        return postCommand();
      case "help":
      case "?":
        document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Useful commands:</p>
          <p>${helpList()}</p>
          <br>
          <p>
            You can launch a program as {program}.exec. For more information about that
          </p>
          <p>specific program, launch {program}.exec -help.</p>
          <br>
          <p>Please note that this program is still a work-in-progress. For more</p>
          <p>information, contact INTERIM support.</p>
        `);
        return postCommand();
      case "exit":
      case "logoff":
        document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Executing system logoff.</p>
        `);
        return setTimeout(() => {
          document.getElementById("cmdInterface").innerHTML = "";
          window.location.replace("/");
        }, 1000);
      case "reboot":
        document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Executing system reboot.</p>
        `);
        return setTimeout(() => {
          document.getElementById("cmdInterface").innerHTML = "";
          location.reload();
        }, 1000);
      case "poweroff":
        document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Executing system termination.</p>
        `);
        return setTimeout(() => {
          document.getElementById("cmdInterface").innerHTML = "";
          localStorage.removeItem("PRINT_WORKING_DIRECTORY");
          window.location.replace("/?m=terminated");
        }, 1000);
      case "whoami":
        document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>INTERIM\\hiddenuser0</p>
        `);
        return postCommand();
      case "cls":
        document.getElementById("cmdInterface").innerHTML = "";
        return postCommand();
      default:
        if (!args) { return intellicorpTerminal(); } else {
        document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>'${args}' is not recognized as an internal or external command,</p>
          <p>operable program or batch file.</p>
        `);
        return postCommand();
      }
    }
  }
}

function postCommand() {
  document.getElementById("cmdInterface").insertAdjacentHTML("beforeend", "<br>");
  intellicorpTerminal();
}

function helpList() {
  let cmds = [
    "?",
    "cd",
    "cls",
    "dir",
    "exit",
    "help",
    "logoff",
    "reboot",
    "whoami",
    "poweroff"
  ]
  return cmds.sort().join(", ");
}