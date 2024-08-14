module.exports = {
  run: [
//    // Delete this step if your project does not use torch
//    {
//      method: "script.start",
//      params: {
//        uri: "torch.js",
//        params: {
//          venv: "env",                // Edit this to customize the venv folder path
//          xformers: true   // uncomment this line if your project requires xformers
//        }
//      }
//    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/MasterX1582/SwarmUI app"
        ],
      }
    },
    {
      when: "{{platform === 'win32'}}",
      method: "shell.run",
      params: {
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "call install-windows.bat"
        ],
      }
    }
//    {
//      method: "fs.link",
//      params: {
//        venv: "env"
//      }
//    }
  ]
}

