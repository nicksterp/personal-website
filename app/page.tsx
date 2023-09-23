import Terminal from '@/components/Terminal';
import Image from 'next/image'


import { FaGithub, FaTwitter, FaFileAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Nicolas Patil
      </h1>

      <Terminal />

      <div className="flex justify-center space-x-8">
        <a href="https://github.com/your-github-username">
          <FaGithub size={32} />
        </a>
        <a href="https://twitter.com/your-twitter-username">
          <FaTwitter size={32} />
        </a>
        <a href="https://your-resume-url.com">
          <FaFileAlt size={32} />
        </a>
      </div>
    </main>
  )
}
