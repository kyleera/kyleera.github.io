import * as React from "react"
import { Link } from "gatsby"
import Toggle from "./toggle"
import mediumZoom from "medium-zoom"

import "../styles/global.styl"

const Layout = ({ location, title, children }) => {
  const rootPath = `${ __PATH_PREFIX__ }/`
  const isRootPath = location.pathname === rootPath
  let header

  const [theme, setTheme] = React.useState(null)

  React.useEffect(() => {
    if (window) {
      setTheme(window.__theme)
      window.__onThemeChange = () => setTheme(window.__theme)
    }
    mediumZoom(".blog-post img", { background: '#212530' })
  }, [])

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
        {theme && (
          <Toggle theme={theme} onChange={newTheme => setTheme(newTheme)} />
        )}
      </h1>
    )
  } else {
    header = (
      <>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        {theme && (
          <Toggle theme={theme} onChange={newTheme => setTheme(newTheme)} />
        )}
      </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}

      </header>
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
