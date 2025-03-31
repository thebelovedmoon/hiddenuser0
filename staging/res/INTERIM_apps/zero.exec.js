function zero_exec(args) {
  switch (args.replace("zero.exec ", "")) {
    case "-help":
      document.getElementById("cmdInterface").insertAdjacentHTML(
        "beforeend",
        `
        <p>Help prompt.</p>
        `
      );
      break;
    case "/intellicorp/prog.exec":
      window.open("https://intellicorp.wixsite.com/intellicorp");
      break;
    default:
      document.getElementById("cmdInterface").insertAdjacentHTML(
        "beforeend",
        `
        <p>This program is still a work-in-progress. For more information, contact</p>
        <p>INTERIM Support.</p>
        `
      );
      break;
  }
  return;
}