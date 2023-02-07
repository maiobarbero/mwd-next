import fs from 'fs'
import matter from 'gray-matter'
import { DateTime } from 'luxon'
import { notFound } from 'next/navigation'
import { PostMetadata } from '@/components/utils/PostInterfaces'

interface PostClassInterface {
	getPostContent(slug: string): matter.GrayMatterFile<string>
	getAllPosts(limit: number): PostMetadata[]
}

export class PostClass implements PostClassInterface {
	dir = 'posts'
	files = fs.readdirSync(this.dir)

	getPostContent(slug: string) {
		const file = `${this.dir}/${slug}.mdx`

		try {
			const content = fs.readFileSync(file, 'utf-8')
			const matterResult = matter(content)
			return matterResult
		} catch (error) {
			notFound()
		}
	}
	getAllPosts(limit = -1) {
		const markdownPosts = this.files.filter(post => post.endsWith('.mdx'))

		if (limit === -1) limit = markdownPosts.length

		const posts = markdownPosts
			.map((filename): PostMetadata => {
				const fileContents = fs.readFileSync(`posts/${filename}`, 'utf-8')
				const matterResult = matter(fileContents)

				return {
					slug: filename.replace('.mdx', ''),
					title: matterResult.data.title,
					excerpt: matterResult.data.excerpt,
					date: matterResult.data.date,
					tags: matterResult.data.tags,
					locale: matterResult.data.locale,
				}
			})
			.sort((a, b) => {
				const beforeDate = DateTime.fromFormat(a.date, 'm-d-yyyy')
				const afterDate = DateTime.fromFormat(b.date, 'm-d-yyyy')
				return +afterDate - +beforeDate
			})
			.filter((p, idx) => idx < limit)

		return posts
	}
}
