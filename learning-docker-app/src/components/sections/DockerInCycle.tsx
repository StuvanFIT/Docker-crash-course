import { ImageWithSkeleton } from "../../utils/ImageWithSkeleton"

const DockerInCycle = () => {

    const industryStats = [
        { metric: "87%", description: "of enterprises use containers in production" },
        { metric: "3.5B+", description: "Docker image pulls per month" },
        { metric: "75%", description: "faster deployment with containerisation" },
        { metric: "60%", description: "reduction in infrastructure costs" }
    ]

    return (
        <section id="docker-cycle" className="py-20">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl mb-4 pb-2 md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        Docker in Software Development
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Modern software engineering relies heavily on containerisation to ensure consistency, 
                        scalability, and efficiency across the entire development lifecycle. Here's how today's 
                        engineering teams leverage Docker from code to production.
                    </p>
                </div>

                <div className="flex items-center justify-center mb-12">
                    <ImageWithSkeleton
                        src="/DockerDevelopmentProcess.drawio.svg"
                        alt="Docker in Software Development Process"
                    />
                </div>

                {/* Industry Statistics */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
                        Docker in Modern Engineering (2025)
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {industryStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                                <div className="text-sm text-gray-600">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DockerInCycle;
