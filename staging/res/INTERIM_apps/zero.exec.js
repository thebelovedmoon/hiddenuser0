function zero_exec(args) {
  switch (args.replace("zero.exec ", "")) {
    case "-help":
      return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
        <p>Help prompt.</p>
      `);
    case "/intellicorp/prog.exec":
      return window.open("https://intellicorp.wixsite.com/intellicorp");
    default:
      return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
        <p>This program is still a work-in-progress. For more information, contact</p>
        <p>INTERIM Support.</p>
      `);
  }
}