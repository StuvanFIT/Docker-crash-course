import Introduction from './sections/Introduction'
import Installation from './sections/Installation'
import DockerRegistries from './sections/DockerRegistries'
import Dockerfiles from './sections/Dockerfiles'
import ImageAndContainers from './sections/ImageAndContainers'
import Header from './sections/Header'
import DockerInCycle from './sections/DockerInCycle'
import DockerCompose from './sections/DockerComposes'

const DockerCourse = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-white'>
        <div className="max-w-6xl mx-auto px-6 text-justify">
            <Header/>
            <Introduction/>
            <Installation/>
            <ImageAndContainers/>
            <DockerRegistries/>
            <Dockerfiles/>
            <DockerCompose/>
            <DockerInCycle/>
        </div>
    </div>
  )
}

export default DockerCourse