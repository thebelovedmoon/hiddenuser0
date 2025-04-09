function cdir(args) {
  if (args.includes("cd /")) { // assume cdir from root directory
    switch (args.replace("cd /", "")) {
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
      case "crash":
      case "user":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>Access is denied. But you can view the files with 'dir'.</p>
          `
        );
        break;
      default:
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>The system cannot find the path specified.</p>
          `
        );
        break;
    }
  } else if (args.includes("cd ")) { // assume cdir from current directory
    switch (args.replace("cd ", "")) {
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
      case "crash":
      case "user":
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>Access is denied. But you can view the files with 'dir'.</p>
          `
        );
        break;
      default:
        document.getElementById("cmdInterface").insertAdjacentHTML(
          "beforeend",
          `
          <p>The system cannot find the path specified.</p>
          `
        );
        break;
    }
  } else {
    document.getElementById("cmdInterface").insertAdjacentHTML(
      "beforeend",
      `
      <p>
        /
      </p>
      `
    );
  }
  return;
}