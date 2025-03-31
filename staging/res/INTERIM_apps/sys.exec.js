function sys_exec(args) {
  switch (args.replace("sys.exec ", "")) {
    case "-help":
      document.getElementById("cmdInterface").insertAdjacentHTML(
        "beforeend",
        `
        <p>Available commands for sys.exec:</p>
        <br />
        <p>&emsp;-help - Shows this help prompt.</p>
        <p>&emsp;-poweroff - Logs out of the client. Same as 'exit' and 'poweroff'.</p>
        <p>&emsp;-reboot - Reboots the client. Same as 'reboot'.</p>
        `
      );
      break;
    case "-reboot":
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
    case "-poweroff":
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
    default:
      document.getElementById("cmdInterface").insertAdjacentHTML(
        "beforeend",
        `
        <p>Required parameter missing. See sys.exec -help for available commands.</p>
        `
      );
      break;
  }
  return;
}