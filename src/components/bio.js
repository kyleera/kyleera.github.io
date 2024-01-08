/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            music163
            douban
            bilibili
          
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/touxiang.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>，{author?.summary || null}
          {` `}
          <br />
          <a href={`https://music.163.com/#/user/home?id=${ social?.music163 || `` }`} target="_blank">网易云音乐</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href={`https://www.douban.com/people/${ social?.douban }`} target="_blank">豆瓣(记录看过的书/电影)</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href={`https://space.bilibili.com/${ social?.bilibili }`} target="_blank">bilibili创作</a>
        </p>
      )}
    </div>
  )
}

export default Bio
