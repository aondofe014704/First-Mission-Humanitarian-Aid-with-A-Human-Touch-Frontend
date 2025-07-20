import React from 'react'
import { Users, User, Building2, ChevronDown } from 'lucide-react'

interface OrgLevel {
    level: number
    title: string
    positions: string[]
}

interface OrganogramSectionProps {
    title: string
    structure: OrgLevel[]
    icon: React.ReactNode
}

const Organogram = () => {
    const operationsStructure: OrgLevel[] = [
        { level: 1, title: "Board of Directors (BOD)", positions: ["Board of Directors"] },
        { level: 2, title: "Executive Leadership", positions: ["Chief Executive Officer (CEO)"] },
        { level: 3, title: "Senior Management", positions: ["Country Programs and Operations Director"] },
        { level: 4, title: "Regional Leadership", positions: ["Regional Programs and Operations Directors"] },
        {
            level: 5, title: "Coordinators", positions: [
                "Grant And Reporting Coordinator", "Finance and Compliance Coordinator", "Supply Chain Coordinator", "M&E Coordinator",
                "HR/Admin Coordinator", "Security Networking Coordinator", "ICT Coordinator", "Communication and Engagement Coordinator",
                "Gender and PSEA Coordinator", "Knowledge Management Coordinator"
            ]
        },
        {
            level: 6, title: "Senior Officers", positions: [
                "Senior Grant and Reporting Officer", "Senior Finance and Compliance Officer", "Senior Logistics Officer",
                "Senior Procurement Officer", "Senior M&E Officer", "Senior AAP/Complaint and Feedback Officer", "Senior HR/Admin Officer",
                "Senior Security Networking Officer", "Senior ICT Officer", "Senior Communication and Engagement Officer",
                "Senior Gender and PSEA Officer", "Senior Knowledge Management Officer"
            ]
        },
        {
            level: 7, title: "Officers", positions: [
                "Grant and Reporting Officer", "Finance and Compliance Officer", "Logistics Officer", "Procurement Officer", "M&E Officer",
                "AAP/Complaint and Feedback Officer", "HR/Admin Officer", "Security Networking Officer", "ICT Officer",
                "Communication and Engagement Officer", "Gender and PSEA Officer", "Knowledge Management Officer"
            ]
        },
        {
            level: 8, title: "Assistant Officers", positions: [
                "Assistant Grant and Reporting Officer", "Assistant Finance and Compliance Officer", "Assistant Logistics Officer",
                "Assistant Procurement Officer", "Assistant M&E Officer", "Assistant AAP/Complaint and Feedback Officer",
                "Assistant HR/Admin Officer", "Assistant Security Networking Officer", "Assistant ICT Officer",
                "Assistant Communication and Engagement Officer", "Assistant Gender and PSEA Officer", "Assistant Knowledge Management Officer"
            ]
        },
        { level: 9, title: "Support Staff", positions: ["Interns", "Volunteers"] }
    ]

    const programmingStructure: OrgLevel[] = [
        { level: 1, title: "Board of Directors (BOD)", positions: ["Board of Directors"] },
        { level: 2, title: "Executive Leadership", positions: ["Chief Executive Officer (CEO)"] },
        { level: 3, title: "Senior Management", positions: ["Country Programs and Operations Director"] },
        { level: 4, title: "Regional Leadership", positions: ["Regional Programs and Operations Directors"] },
        {
            level: 5, title: "Program Coordinators", positions: [
                "Health and Nutrition Coordinator", "WASH Coordinator", "Programs Coordinator", "Protection and Advocacy Coordinator",
                "Women Empowerment and Advocacy Coordinator", "Education Coordinator", "Career Development and Research for International Development Coordinator",
                "Food Security and Sustainability Coordinator", "Livelihood and Early Recovery Coordinator"
            ]
        },
        {
            level: 6, title: "Senior Program Officers", positions: [
                "Senior Health Officer", "Senior Nutrition Officer", "Senior WASH Officer", "Senior Programs Officer",
                "Senior Protection Officer", "Senior Child Protection Officer", "Senior Women Empowerment and Advocacy Officer",
                "Senior Education Officer", "Senior Career Development and Research for International Development Officer",
                "Senior Food Security and Sustainability Officer", "Senior Livelihood and Early Recovery Officer"
            ]
        },
        {
            level: 7, title: "Program Officers", positions: [
                "Health Officer", "MHPSS Officer", "SRH Officer", "Nutrition Officer", "WASH Officer", "Programs Officer",
                "Protection Officer", "Child Protection Officer", "GBV Officer", "Women Empowerment and Advocacy Officer",
                "Education Officer", "Career Development Officer", "Research for International Development Officer",
                "Food Security and Sustainability Officer", "Livelihood and Early Recovery Officer"
            ]
        },
        {
            level: 8, title: "Assistant Program Officers", positions: [
                "Assistant Health Officer", "Assistant MHPSS Officer", "Assistant SRH Officer", "Assistant Nutrition Officer",
                "Assistant WASH Officer", "Assistant Programs Officer", "Assistant Protection Officer", "Assistant Child Protection Officer",
                "Assistant GBV Officer", "Assistant Women Empowerment and Advocacy Officer", "Assistant Education Officer",
                "Assistant Career Development Officer", "Assistant Research for International Development Officer",
                "Assistant Food Security and Sustainability Officer", "Assistant Livelihood and Early Recovery Officer"
            ]
        },
        { level: 9, title: "Field Staff", positions: ["Interns", "Community Volunteers", "Community Health Workers"] }
    ]

    const getLevelColor = (level: number) => {
        const colors = [
            'bg-blue-800 text-white', 'bg-blue-700 text-white', 'bg-blue-600 text-white',
            'bg-blue-500 text-white', 'bg-blue-400 text-white', 'bg-blue-300 text-gray-800',
            'bg-blue-200 text-gray-800', 'bg-blue-100 text-gray-800', 'bg-gray-100 text-gray-800'
        ]
        return colors[level - 1] || 'bg-gray-100 text-gray-800'
    }

    const OrganogramSection = ({ title, structure, icon }: OrganogramSectionProps) => (
        <div className="mb-12">
            <div className="flex items-center justify-center mb-8">
                {icon}
                <h2 className="text-3xl font-bold text-blue-800 ml-3">{title}</h2>
            </div>

            <div className="space-y-6">
                {structure.map((level, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className={`${getLevelColor(level.level)} rounded-lg p-4 shadow-lg max-w-4xl w-full`}>
                            <h3 className="text-lg font-semibold mb-3 text-center">{level.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                {level.positions.map((position, posIndex) => (
                                    <div key={posIndex} className="flex items-center justify-center p-2 rounded bg-white bg-opacity-10 text-sm">
                                        <User className="h-4 w-4 mr-2 flex-shrink-0" />
                                        <span className="text-center text-black">{position}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {index < structure.length - 1 && (
                            <ChevronDown className="h-6 w-6 text-blue-600 my-2" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-blue-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Building2 className="h-16 w-16 mx-auto mb-4" />
                    <h1 className="text-4xl font-bold mb-4">Organizational Structure</h1>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        Humanity First Mission for Children Women and the Disabled Populations (FIRST MISSION)
                    </p>
                    <p className="text-lg italic text-blue-300 mt-2">"Humanitarian Aid with a Human Touch"</p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Our organizational structure is designed to ensure effective delivery of humanitarian aid
                        and development programs across Nigeria. We operate through two main divisions:
                        Operations/Support and Programming, each with clear hierarchies and responsibilities.
                    </p>
                </div>

                <OrganogramSection
                    title="Operations/Support Structure"
                    structure={operationsStructure}
                    icon={<Building2 className="h-8 w-8 text-blue-800" />}
                />

                <OrganogramSection
                    title="Programming Structure"
                    structure={programmingStructure}
                    icon={<Users className="h-8 w-8 text-blue-800" />}
                />

                <div className="bg-blue-50 rounded-lg p-8 mt-12">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Governance Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                        <div>
                            <h4 className="font-semibold text-blue-700 mb-2">Board of Directors Tenure</h4>
                            <p>5 Years</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-700 mb-2">Meeting Quorum</h4>
                            <p>1/3 Majority or Simple Majority</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Organogram
