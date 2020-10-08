const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/mariaeas/Área de Trabalho/Elas@Computação/Site/project/src/pages/404.tsx"))),
  "component---src-pages-en-index-tsx": hot(preferDefault(require("/home/mariaeas/Área de Trabalho/Elas@Computação/Site/project/src/pages/en/index.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/mariaeas/Área de Trabalho/Elas@Computação/Site/project/src/pages/index.tsx")))
}

