import { FaDocker, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Header = () => {
  return (

    <section className="py-24">
      <div className="text-center space-y-12">
        {/* Main Hero Content */}
        <div className="space-y-8 border-b border-gray-400 pb-12">
          {/* Docker Icon and Title */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="bg-blue-600 p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <FaDocker className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 text-center md:text-left">
              <span className="text-blue-600">Docker</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Tutorial
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium leading-relaxed">
              Explore the concept of containerisation and learn how to{' '}
              <span className="text-blue-600 font-semibold">build</span>,{' '}
              <span className="text-blue-600 font-semibold">deploy</span>, and{' '}
              <span className="text-blue-600 font-semibold">scale</span>{' '}
              your applications to the cloud with Docker!
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
                href="https://github.com/StuvanFIT/Docker-crash-course" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center group"
            >
              <FaGithub className="mr-2 w-5 h-5" />
              View on GitHub
              <FaExternalLinkAlt className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
                href='https://github.com/StuvanFIT'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all  duration-200 flex items-center group'
            >
                Authored & Developed by Steven Kaing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header