import { Github, Instagram, Linkedin, Mail, MapPin, Twitter, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BioPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-black">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-black">Иван Иванов</h1>
          <p className="text-center text-gray-600">Веб-разработчик & Дизайнер</p>
          <div className="flex items-center space-x-1 text-gray-500">
            <MapPin size={16} className="text-black" />
            <span>Москва, Россия</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <Link href="#" className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <Twitter size={24} className="text-black" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <Instagram size={24} className="text-black" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <Github size={24} className="text-black" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="#" className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <Linkedin size={24} className="text-black" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <Mail size={24} className="text-black" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        {/* Bio Section */}
        <div className="space-y-4 rounded-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-2">
            <User size={20} className="text-black" />
            <h2 className="text-xl font-semibold">Обо мне</h2>
          </div>
          <p className="text-gray-600">
            Привет! Я специализируюсь на создании современных веб-приложений и дизайне пользовательских интерфейсов.
            Имею более 5 лет опыта работы с React, Next.js и различными фреймворками CSS.
          </p>
        </div>

        {/* Projects/Skills */}
        <div className="space-y-4">
          <h2 className="flex items-center space-x-2 text-xl font-semibold">
            <span>Навыки</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "Figma"].map((skill) => (
              <span key={skill} className="rounded-full border border-black px-3 py-1 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="pt-4">
          <Link
            href="mailto:contact@example.com"
            className="block w-full rounded-full bg-black py-3 text-center font-medium text-white transition-colors hover:bg-gray-800"
          >
            Связаться со мной
          </Link>
        </div>
      </div>
    </div>
  )
}

