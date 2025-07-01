"use client"
import projects from "../../data/projects"
import { BackgroundGradient } from "../ui/background-gradient"
import Link from "next/link"
import Image from "next/image"

export default function FeaturedProjects() {
    interface Project {
        id: number,
        name: string,
        liveLink: string,
        github: string,
        techStack: {
            frontend: string;
            backend?: string;
            database?: string;
        },
        description: string,
        image: string,
        keyFeatures: string[]
    }

    const projectsList: Project[] = projects;

    const getTechLogo = (tech: string): string => {
        switch(tech.toLowerCase()) {
            case 'next.js':
                return '/logos/nextjs.svg';
            case 'react':
            case 'react.js':
                return '/logos/react.svg';
            case 'node.js':
                return '/logos/nodejs.svg';
            case 'mongodb':
                return '/logos/mongodb.svg';
            case 'python':
                return '/logos/python.svg';
            case 'tailwind css':
                return '/logos/tailwind.svg';
            default:
                return '';
        }
    };

    return (
        <div id="projects" className="min-h-screen bg-black p-12 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-2">
                  My <span className="text-sky-400">Projects</span>
                </h1>
                <div className="h-1 w-48 bg-sky-400 mx-auto rounded mb-6" />
                <p className="text-gray-400 text-xl mb-8">Here are some projects that I&apos;ve built</p>
            </div>
            <div className="mt-16 w-full flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
                    {projectsList.map((project) => (
                        <div key={project.id} className="flex justify-center">
                            <BackgroundGradient className="relative h-full rounded-[18px] max-w-xs p-3 bg-zinc-900">
                                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                                    <Image
                                        src={project.image.replace('public/', '/')}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="relative z-10 p-3">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {Object.entries(project.techStack).map(([key, tech]) => (
                                            <div key={`${project.id}-${key}`} className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full px-2 py-1">
                                                {getTechLogo(tech) && (
                                                    <div className="relative w-4 h-4 mr-1">
                                                        <Image
                                                            src={getTechLogo(tech)}
                                                            alt={tech}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                )}
                                                <span className="text-[10px] text-gray-300">{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link 
                                        href={project.liveLink}
                                        target="_blank"
                                        className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                                    >
                                        View Project
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200" 
                    href="https://github.com/Sainath9866/"
                >
                    View All Projects
                </Link>
            </div>
        </div>
    )
}