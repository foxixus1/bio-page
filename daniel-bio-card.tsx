"use client"

import {
  Grid,
  Globe,
  Search,
  ChevronUp,
  User,
  Home,
  Lock,
  MessageCircle,
  Youtube,
  Mail,
  Github,
  Code,
  Database,
  Discord
} from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CIcon } from '@coreui/icons-react'
import { 
  cibMongodb, 
  cibGo, 
  cibTypescript, 
  cibPython, 
  cibReact,
  cibTelegram 
} from '@coreui/icons'

export default function DanielBioCard() {
  const [currentTime, setCurrentTime] = useState("09:08")
  const [currentDate, setCurrentDate] = useState("Fri, September 2, 2022")
  const [showBio, setShowBio] = useState(false)

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}`)

      const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "long", day: "numeric", year: "numeric" }
      setCurrentDate(now.toLocaleDateString("en-US", options))
    }

    updateTime()
    const timer = setInterval(updateTime, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7bfb4] p-4">
      <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
        {/* Phone Header */}
        <div className="flex items-center justify-between bg-white p-2 px-4">
          <div className="h-5 w-5 rounded-full border border-gray-300"></div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-8 rounded border border-gray-800 pr-1">
              <div className="h-full w-3/4 bg-gray-800"></div>
            </div>
            <span className="text-xs font-medium">{currentDate}</span>
          </div>
          <div className="space-y-1">
            <div className="h-0.5 w-5 bg-gray-800"></div>
            <div className="h-0.5 w-5 bg-gray-800"></div>
            <div className="h-0.5 w-5 bg-gray-800"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative bg-[#f2e9e9] p-4" onClick={() => setShowBio(!showBio)}>
          {!showBio ? (
            <div className="flex">
              <div className="w-1/2">
                <h1 className="text-6xl font-bold text-black">{currentTime}</h1>
                <p className="text-sm text-gray-600">mostly cloudy</p>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-black">
                  <Image
                    src="https://github.com/foxixus1.png"
                    alt="Daniel (Foxix)"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="py-2 text-sm">
              <div className="text-center mb-4 text-xl font-bold">BIO</div>

              <div className="mb-4 bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <User size={18} className="text-black" />
                  <span className="font-semibold">Daniel (Foxix)</span>
                </div>
                <p className="text-gray-600 text-xs ml-6">Developer & Creator</p>
              </div>

              <div className="mb-2 font-semibold text-gray-700">Skills</div>

              <div className="mb-4 bg-white rounded-lg p-3 shadow-sm">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CIcon icon={cibTypescript} className="h-8 w-8" />
                    <span className="text-xs">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CIcon icon={cibReact} className="h-8 w-8" />
                    <span className="text-xs">React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CIcon icon={cibPython} className="h-8 w-8" />
                    <span className="text-xs">Python</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CIcon icon={cibGo} className="h-8 w-8" />
                    <span className="text-xs">Go</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CIcon icon={cibMongodb} className="h-8 w-8" />
                    <span className="text-xs">MongoDB</span>
                  </div>
                </div>
              </div>

              <div className="mb-2 font-semibold text-gray-700">Projects</div>

              <div className="bg-white rounded-lg p-3 shadow-sm">
                <ul className="space-y-2">
                  <li>
                    <Link href="https://t.me/neo_news_c" target="_blank" className="flex items-center gap-2 text-black hover:text-blue-500">
                      <Code size={16} />
                      <span>Neo</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://neo-movies.vercel.app" target="_blank" className="flex items-center gap-2 text-black hover:text-blue-500">
                      <Database size={16} />
                      <span>NeoMovies</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Right arrow */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-[#e5d5d5] p-2 flex justify-center space-x-4">
          <Link href="https://youtube.com/@foxixus1" target="_blank" className="text-black hover:text-red-500">
            <Youtube size={20} />
          </Link>
          <Link href="https://discord.gg/your-discord" target="_blank" className="text-black hover:text-indigo-500">
            <Discord size={20} />
          </Link>
          <Link href="mailto:contact@example.com" target="_blank" className="text-black hover:text-blue-500">
            <Mail size={20} />
          </Link>
          <Link href="https://github.com/foxixus1" target="_blank" className="text-black hover:text-gray-700">
            <Github size={20} />
          </Link>
          <Link href="https://t.me/foxix_bio" target="_blank" className="text-black hover:text-blue-500">
            <CIcon icon={cibTelegram} className="h-5 w-5" />
          </Link>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between bg-[#f7bfb4] p-2 px-6">
          <div className="flex gap-4">
            <Grid size={18} className="text-black" />
            <Link href="https://neo-movies.vercel.app" target="_blank">
              <Globe size={18} className="text-black hover:text-blue-600" />
            </Link>
            <Search size={18} className="text-black" />
          </div>
          <div className="flex items-center gap-1">
            <ChevronUp size={18} className="text-black" />
            <User size={18} className="text-black" />
            <span className="text-xs font-medium text-black">{currentTime}</span>
          </div>
          <div className="flex gap-4">
            <Home size={18} className="text-black" />
            <Lock size={18} className="text-black" />
          </div>
        </div>
      </div>
    </div>
  )
}

