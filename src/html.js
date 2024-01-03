import React from "react"

const HTML = props => {
  return (
    <html {...props.htmlAttribute}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="light">
        <script
          dangerouslySetInnerHTML={{
            __html: `
							(function() {
								function setTheme (newTheme) {
									window.__theme = newTheme;
									preferredTheme = newTheme;
									document.body.className = newTheme;
									window.__onThemeChange(newTheme)
								}

								window.__onThemeChange = function () {}
								window.__setPreferredTheme = function(newTheme) {
									setTheme(newTheme)
									try {
										localStorage.setItem('theme', newTheme)
									} catch(err) {}
								}

								let preferredTheme
								try {
									preferredTheme = localStorage.getItem('theme')
								} catch(err) {}

								let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
								darkQuery.addListener(function(e) {
									window.__setPreferredTheme( e.matches ? 'dark' : 'light' )
								})

								setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))

							})()
						`,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

export default HTML
