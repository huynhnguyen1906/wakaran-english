export interface ProjectCard {
    id: number | string
    title: string
    publishedAt: string
    thumbnail: string
    youtube: string | null
}

interface WPProjectFromAPI {
    id: number
    title: string
    date: {
        project_date: string
        project_date_formatted: string
    }
    featured_image: {
        medium: string
    }
    youtube_url: string | null
}

export async function fetchFeaturedProjects(): Promise<ProjectCard[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const endpoint = `${baseUrl}/wp-json/api/v1/feature-projects`
    const res = await fetch(endpoint, { cache: 'no-store' })
    if (!res.ok) throw new Error(`WP API ${res.status}`)

    const data = await res.json()
    const raw: WPProjectFromAPI[] = data.projects

    const projects: ProjectCard[] = raw.map((p) => ({
        id: p.id,
        title: p.title,
        publishedAt: p.date.project_date,
        thumbnail: p.featured_image?.medium ?? '/images/heroImg_phone.webp',
        youtube: p.youtube_url ?? null,
    }))

    while (projects.length < 4) {
        projects.push({
            id: `coming-${projects.length}`,
            title: 'coming soon...',
            publishedAt: '',
            thumbnail: '/images/heroImg_phone.webp',
            youtube: null,
        })
    }

    return projects
}
