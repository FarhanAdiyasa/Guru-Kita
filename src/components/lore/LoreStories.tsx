'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { LORE_STORIES } from '@/data/lore'

export default function LoreStories() {
    return (
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <div className="text-center mb-12">
                <h3 className="text-4xl font-black text-gray-900 mb-4">
                    Di Balik <span className="text-emerald-600">Angka</span>
                </h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Wajah-wajah nyata di balik statistik.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {LORE_STORIES.map((story) => (
                    <div key={story.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                        {/* Image Header */}
                        <div className="relative w-full h-72 overflow-hidden">
                            <Image
                                src={story.image}
                                alt={story.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex justify-between items-end">
                                    <span className="inline-block px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-lg text-xs font-bold uppercase tracking-wider">
                                        {story.location}
                                    </span>
                                    <span className="text-white font-bold text-2xl drop-shadow-md">
                                        {story.salary}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                                {story.title}
                            </h3>

                            <div className="mb-4 flex-grow">
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    "{story.story}"
                                </p>
                                <blockquote className="pl-4 border-l-4 border-emerald-500 italic text-gray-500 text-base">
                                    "{story.quote}"
                                </blockquote>
                            </div>


                            {/* Footer */}
                            <div className="pt-6 border-t border-gray-100 mt-auto">
                                <div className="mb-4">
                                    <p className="text-lg font-bold text-gray-900">{story.name}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {story.role} • <span className="text-emerald-700 font-bold">{story.sideHustle}</span>
                                    </p>
                                </div>

                                <a
                                    href={story.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors uppercase tracking-wider"
                                >
                                    Sumber: {story.source} <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
