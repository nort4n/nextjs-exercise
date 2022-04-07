import { GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import { useState } from 'react'

interface FrontMatter {
  title: string
  author: string
  date: string
  image: string
  tags: string[]
}

interface Props {
  posts: {
    slug: string
    frontMatter: FrontMatter
  }[]
}

export default function Blog({ posts }: Props) {
  const [query, setQuery] = useState('')
  const filterFunction = (post: typeof posts[0]) => {
    if (!query) {
      true
    }
    return (
      post.frontMatter.tags.includes() ||
      post.frontMatter.author.toLowerCase().includes(query.toLowerCase())
    )
  }
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <div>
        <input
          type="search"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {posts.filter(filterFunction).map((post) => (
        <Link href={`/blog/${post.slug}`}>
          <a className="group">
            <div className="border border-fuchsia-100 shadow-md transition group-hover:shadow-xl p-4 rounded">
              <img src={`/${post.frontMatter.image}`} className="mb-4" alt="" />
              <h2 className="text-lg font-bold">{post.frontMatter.title}</h2>
              <p>{post.frontMatter.author}</p>
              <div className="flex space-x-3 mt-4">
                {post.frontMatter.tags.map((tag) => (
                  <div className="px-2 py-1 rounded bg-slate-600 text-fuchsia-100">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  // Get an array of filenames
  const files = fs.readdirSync('_posts')

  const posts = files.map((fileName) => {
    // remove .md from the filenames to construct the dynamic part of the url
    const slug = fileName.replace('.md', '')
    // get the file contents
    const readFile = fs.readFileSync(`_posts/${fileName}`, 'utf-8')
    // parsing the markdown and just grabbing the frontmatter from it
    const { data: frontMatter } = matter(readFile)

    return {
      slug,
      frontMatter,
    }
  })
  return {
    props: {
      posts,
    },
  }
}
