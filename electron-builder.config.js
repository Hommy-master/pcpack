module.exports = {
  appId: "com.example.electrontest",
  productName: "Electron Test App",
  directories: {
    output: "dist"
  },
  win: {
    icon: "assets/icon/logo.ico",
    target: "nsis",
    // 禁用代码签名
    signingHashAlgorithms: []
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true
  },
  mac: {
    icon: "assets/icon/logo.icns",
    target: "dmg",
    category: "public.app-category.utilities"
  },
  dmg: {
    background: null,
    window: {
      width: 540,
      height: 380
    },
    contents: [
      {
        x: 410,
        y: 150,
        type: "link",
        path: "/Applications"
      },
      {
        x: 130,
        y: 150,
        type: "file"
      }
    ]
  }
};