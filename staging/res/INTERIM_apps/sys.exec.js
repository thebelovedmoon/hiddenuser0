function sys_exec(args) {
  switch (args.replace("sys.exec ", "")) {
    case "-help":
      return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
        <p>Available commands for sys.exec:</p>
        <br>
        <p>&emsp;-help - Shows this help prompt.</p>
        <p>&emsp;-logoff - Logs out of the machine. Same as 'exit' and 'logoff'.</p>
        <p>&emsp;-poweroff - Powers off the machine and terminates connection to website. Same as 'poweroff'.</p>
        <p>&emsp;-reboot - Reboots the machine. Same as 'reboot'.</p>
      `);
    case "-reboot":
      document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
        <p>Executing system reboot.</p>
      `);
      return setTimeout(() => {
        document.getElementById("cmdInterface").innerHTML = "";
        location.reload();
      }, 1000);
    case "-logoff":
      document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
        <p>Executing system logoff.</p>
      `);
      return setTimeout(() => {
        document.getElementById("cmdInterface").innerHTML = "";
        window.location.replace("/");
      }, 1000);
    case "-poweroff":
      document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
        <p>Executing system termination.</p>
      `);
      return setTimeout(() => {
        document.getElementById("cmdInterface").innerHTML = "";
        localStorage.removeItem("PRINT_WORKING_DIRECTORY");
        window.location.replace("/?m=terminated");
      }, 1000);
    default:
      return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
        <p>Required parameter missing. See sys.exec -help for available commands.</p>
      `);
  }
}