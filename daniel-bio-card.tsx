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
                    <CIcon icon={cibTypescript} />
                    <span className="text-xs">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CIcon icon={cibReact} />
                    <span className="text-xs">React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CIcon icon={cibPython} />
                    <span className="text-xs">Python</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CIcon icon={cibGo} />
                    <span className="text-xs">Go</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CIcon icon={cibMongodb} />
                    <span className="text-xs">MongoDB</span>
                  </div>
                </div>
              </div>

              <div className="mb-2 font-semibold text-gray-700">Projects</div>

              <div className="mb-3 bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Code size={16} className="text-black" />
                  <span className="font-semibold">Neo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database size={16} className="text-black" />
                  <span className="font-semibold">NeoMovies</span>
                </div>
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
          <Link href="https://t.me/foxix_bio" target="_blank" className="text-black hover:text-blue-500">
            <CIcon icon={cibTelegram} />
          </Link>
          <Link href="https://www.youtube.com/@foxix_us" target="_blank" className="text-black hover:text-red-500">
            <Youtube size={20} />
          </Link>
          <Link
            href="https://discord.com/users/853853984485801994"
            target="_blank"
            className="text-black hover:text-indigo-500"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </Link>
          <Link href="mailto:neo.movies.mail@gmail.com" className="text-black hover:text-red-600">
            <Mail size={20} />
          </Link>
          <Link href="https://github.com/foxixus1" target="_blank" className="text-black hover:text-purple-600">
            <Github size={20} />
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
            <span className="text-xs font-medium text-black">{currentTime} AM</span>
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

