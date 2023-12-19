import Song from "@/components/music/types"

async function getHistory() {
    const MUSIC_API_URL = process.env.MUSIC_API_URL

    try {
        const res = await fetch(MUSIC_API_URL + '/song')

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await res.json()

        const song: Song = {
            id: data.id,
            title: data.title,
            artist: data.artist,
            image_url: data.image_url,
            submitted_at: data.submitted_at,
            song_url: data.song_url,
            platform: data.platform,
        }
        return song

    } catch (error) {
        console.log(error)
        return null
    }
}