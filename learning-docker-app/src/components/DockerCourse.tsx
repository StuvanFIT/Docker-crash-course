import Introduction from './sections/Introduction'
import Installation from './sections/Installation'
import DockerRegistries from './sections/DockerRegistries'
import Dockerfiles from './sections/Dockerfiles'
import ImageAndContainers from './sections/ImageAndContainers'
import Header from './sections/Header'
import DockerInCycle from './sections/DockerInCycle'
import DockerCompose from './sections/DockerComposes'
import LimitationsDocker from './sections/LimitationsDocker'

import { useEffect } from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'


const DockerCourse = () => {

  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    {id:'header', title:'What is this document for?'},
    {id:'intro', title:'Introduction to Docker'},
    {id:'install', title:'How to install Docker?'},
    {id:'image-and-containers', title:'Image & Containers'},
    {id:'registries', title:'Docker Registries'},
    {id:'docker-file', title:'The Dockerfile'},
    {id:'docker-compose', title:'Docker Compose'},
    {id:'limitations', title:'Docker Limitations'},
    {id:'docker-cycle', title:'Docker in Software Development'}
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sectionsIds = sections.map((item) =>item.id);
      //150: it accounts for fixed headers or to highlight a section slightly before it reaches the top of the screen.
      const scrollToPosition = window.scrollY +150;

      for (const id of sectionsIds) {
        const element = document.getElementById(id);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          //if the scroll position is between the top and bottom of the section
          if (scrollToPosition >= offsetTop && scrollToPosition < offsetBottom){
            setActiveSection(id);
            break;
          }
        }
      }
    }
    //every time the user scroll, run handleScroll
    window.addEventListener('scroll', handleScroll);

    //When the component unmounts 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); //ensure that we run the component once on component mount and clean up on unmount


  const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
    setIsMobileMenuOpen(false);
  };





  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-white'>

      {/*If < md : mobile */}
      <button
        className='md:hidden fixed top-4 left-4 z-50 p-2 bg-white shadow-lg rounded-lg border border-blue-500 text-black cursor-pointer'
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ): (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/*Mobile menu option */}
      {isMobileMenuOpen && (
        <div className='md:hidden fixed top-16 left-4 right-4 z-40 bg-white shadow-xl rounded-lg border border-blue-500 max-h-96 overflow-y-auto'>
          <ul className='p-2 space-y-2'>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left w-full font-semibold p-3 rounded-lg transition-all cursor-pointer
                      ${activeSection === section.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:bg-blue-50'
                      }
                  `}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className='md:hidden fixed inset-0 z-30 bg-gray-500/50'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className='flex flex-col md:flex-row '>
        {/*If > md : desktop */}
        <nav className='hidden md:flex md:flex-col w-72 p-6 fixed top-0 left-0 h-screen overflow-y-auto border-r border-blue-500/30 bg-gradient-to-br from-blue-600 to-blue-800 z-20'>
          <ul className='space-y-4'>
            {sections.map((section) => (
              <button
                onClick={()=> scrollToSection(section.id)}
                className={`md:text-xl text-left text-white w-full font-bold p-3 transition-all cursor-pointer
                    ${activeSection === section.id
                      ? 'underline'
                      : 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:bg-blue-50'
                    }
                  `}
              >
                {section.title}
              </button>
            ))}
          </ul>
        </nav>
        
        <div className="w-full md:ml-80 max-w-7xl mx-auto px-6 pt-16 md:pt-6 text-justify">
            <Header/>
            <Introduction/>
            <Installation/>
            <ImageAndContainers/>
            <DockerRegistries/>
            <Dockerfiles/>
            <DockerCompose/>
            <LimitationsDocker/>
            <DockerInCycle/>
        </div>
        

      </div>
    </div>
  )
}

export default DockerCourse