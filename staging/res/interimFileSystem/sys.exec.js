function sys_exec(args) {
  if (args !== "sys.exec") {
    let argSplit = args.replace("sys.exec -", "");
    switch (argSplit) {
      case "help":
        return document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Available parameters for sys.exec:</p>
          <br>
          <p>&emsp;-help - Shows this help prompt.</p>
          <p>&emsp;-logoff - Logs out of the machine. Same as 'exit' and 'logoff'.</p>
          <p>&emsp;-poweroff - Powers off the machine and terminates connection to website. Same as 'poweroff'.</p>
          <p>&emsp;-reboot - Reboots the machine. Same as 'reboot'.</p>
          <br>
          <p>WARNING: Some system commands are hooked to this file.</p>
        `);
      case "reboot":
        document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Executing system reboot.</p>
        `);
        return setTimeout(() => {
          document.querySelector("#cmdInterface").innerHTML = "";
          location.reload();
        }, 1000);
      case "logoff":
        document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Executing system logoff.</p>
        `);
        return setTimeout(() => {
          document.querySelector("#cmdInterface").innerHTML = "";
          if (window.self !== window.top) {
            parent.document.querySelector('#dlg').remove();
          } else {
            window.location.replace("/");
          }
        }, 1000);
      case "poweroff":
        document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Executing system termination.</p>
        `);
        return setTimeout(() => {
          document.querySelector("#cmdInterface").innerHTML = "";
          localStorage.removeItem("PRINT_WORKING_DIRECTORY");
          window.location.replace("/?m=terminated");
        }, 1000);
      default:
        return document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Required parameter missing: -</p>
          <p>See sys.exec -help for available commands.</p>
        `);
    }
  } else {
    return document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
      <p>Required parameter missing: -</p>
      <p>See sys.exec -help for available commands.</p>
    `);
  }
}