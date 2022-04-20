import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import { FrontMatter } from '.'

interface Props {
  posts: {}
}

export default function BlogPost({ frontMatter, content }: Props) {
  return (
    <div
      className="prose mx-auto"
      dangerouslySetInnerHTML={{ __html: md().render(content) }}
    ></div>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const files = fs.readdirSync('_posts').filter((file) => file !== '.DS_Store')
  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace('.md', ''),
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetch('http://localhost:8000')
  return {
    props: {
      posts,
    },
  }
}
