import { Song } from "@/components/music/types"
import Link from "next/link"
import Image from "next/image"

async function getHistory() {
    const MUSIC_API_URL = process.env.MUSIC_API_URL

    try {
        const res = await fetch(MUSIC_API_URL + '/song/history', { next: { revalidate: 600 } })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await res.json()


        const songs: Song[] = data.map((songData: any) => ({
            id: songData.id,
            title: songData.title,
            artist: songData.artist,
            image_url: songData.image_url,
            submitted_at: new Date(songData.submitted_at), // Convert to Date object here
            song_url: songData.song_url,
            platform: songData.platform,
        }));

        // Make certain that songs are displayed in the correct order (newest first)
        songs.sort((a, b) => new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime())
        return songs

    } catch (error) {
        console.log(error)
        return null
    }
}

export default async function SongHistory() {
    const history = await getHistory()
    if (!history) {
        return (<div>
            <h1>Sorry, something went wrong :(</h1>
        </div>)
    }

    return (
        <div className="flex min-h-screen flex-col space-y-5 items-center p-8 sm:p-24">
            <h1 className="text-xl">music i like</h1>
            <Link href="/" className="hover:underline text-gray-500">(back home)</Link>
            <div className="border rounded-md md:w-[80%] w-[98%] overflow-hidden">
                {history.map((song: Song, index: number) => (
                    <div key={song.id.toString()}>
                        <Link href={song.song_url} target="_blank">
                            <div className="flex flex-row group justify-start items-center hover-swipe py-5 px-5">
                                <Image
                                    alt="Song cover"
                                    className="rounded-lg"
                                    height="50"
                                    width="50"
                                    src={song.image_url}
                                />
                                <div className="px-2 md:px-4 py-2 flex-grow">
                                    <h2 className="text-base group-hover:underline">{song.title}</h2>
                                    <h3 className="text-sm text-gray-300">{song.artist}</h3>
                                </div>
                                <h2 className="ml-auto">{new Date(song.submitted_at).toLocaleString('en-US', { month: 'long', day: 'numeric' })}</h2>
                            </div>
                        </Link>
                        {index < history.length - 1 && <hr className="border-t border-white" />}
                    </div>
                ))}
            </div>
        </div>
    )
}