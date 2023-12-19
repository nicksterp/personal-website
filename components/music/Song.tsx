import { Song } from "./types"
import Image from "next/image"
import Link from "next/link"

async function getSong() {
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
export default async function Song() {
    const song: Song | null = await getSong()
    if (song == null) {
        return (<></>)
    }

    const imageStyle = {
        height: 50
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center items-end space-x-1">
                <h1 className="text-base">Song of the Day</h1>
                <a href="/" className="text-gray-500">(more)</a>
            </div>
            <div className="flex flex-row justify-center items-center border px-2 rounded-md">
                <Image
                    alt="Song cover"
                    className="rounded-lg"
                    height="50"
                    width="50"
                    src={song.image_url}
                    layout="fixed"
                    style={imageStyle}
                />
                <div className="px-4 py-2">
                    <Link href={song.song_url}><h2 className="text-base font">{song.title}</h2></Link>
                    <h3 className="text-sm text-gray-300">{song.artist}</h3>
                </div>
            </div>
        </div>
    );
};

