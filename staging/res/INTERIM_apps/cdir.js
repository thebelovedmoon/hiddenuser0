function cdir(args) {
  if (args.includes("cd /")) { // assume cdir from root directory
    switch (args.replace("cd /", "")) {
      case "boot":
      case "storage":
      case "config":
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>'cd' not allowed: System directory</p>
        `);
      case "intellicorp":
      case "crash":
      case "user":
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>'cd' not allowed, but you can view the files with 'dir'.</p>
        `);
      default:
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>The system cannot find the path specified.</p>
        `);
    }
  } else if (args.includes("cd ")) { // assume cdir from current directory
    switch (args.replace("cd ", "")) {
      case "boot":
      case "storage":
      case "config":
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>'cd' not allowed: System directory</p>
        `);
      case "intellicorp":
      case "crash":
      case "user":
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>'cd' not allowed, but you can view the files with 'dir'.</p>
        `);
      default:
        return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
          <p>The system cannot find the path specified.</p>
        `);
    }
  } else {
    return document.getElementById("cmdInterface").insertAdjacentHTML("beforeend",`
      <p>${localStorage.getItem("PRINT_WORKING_DIRECTORY")}</p>
    `);
  }
}