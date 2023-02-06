export interface PostMetadata {
	slug: string
	title: string
	excerpt: string
	date: string
	tags?: string[]
	locale: string
}

export interface PostParams {
	params: {
		slug: string
	}
}
