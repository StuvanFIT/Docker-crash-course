import { ImageWithSkeleton } from "../../utils/ImageWithSkeleton";

const LimitationsDocker = () => {
  return (
    <section id="limitations" className="py-20">
      <div className="space-y-8">

        <h2 className="text-3xl mb-4 pb-2 md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Docker Limitations
        </h2>

        <p>
          While Docker has revolutionised containerisation and application deployment, it does come with several
          limitations that developers and operations teams need to consider. Docker is excellent for packaging
          applications and their dependencies into portable containers, but it wasn't designed to handle complex
          orchestration scenarios out of the box.
        </p>

        <p>
          One of the primary limitations of Docker is its lack of built-in clustering and orchestration capabilities.
          When you're running a single container or a few containers on a single host, Docker works brilliantly. However,
          as your application grows and you need to run multiple containers across multiple hosts, Docker alone becomes 
          insufficient. You'll find yourself manually managing container placement, networking between hosts, and load
          balancing, which quickly becomes unwieldy and error-prone.
        </p>

        <p>
          Docker also lacks sophisticated health checking and automatic recovery mechanisms. While you can define basic health
          checks in your Dockerfiles, Docker doesn't provide advanced monitoring, alerting, or automatic restart policies for
          failed containers across a distributed environment. If a container crashes on one host, Docker won't automatically
          reschedule it to another available host.
        </p>

        <p>
          Another significant limitation is Docker's basic networking model. When you run the Docker containers on a single host 
          like a laptop or server, Docker uses something called a bridge network by default.
          Essentially, this allows containers to communicate with each other. When you scale to multiple hosts host A and host B each running containers - the built-in Docker networking doesn’t
          let containers talk to each other natively across those machines.
        </p>

        <p>
            For example: if CONTAINER_1 on HOST A wants to say hello to CONTAINER_2 on HOST B, it can't find it automatically!
        </p>

        <p>
            This also means that service discovery becomes difficult. The ability of services containers to find and connect to each other
            when containers move hosts or IP changes, is quite low. Docker by itself has no built-in DNS across hosts and no native distrubuted
            search discovery mechanism.
        </p>

        <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Docker Compose Limitations
        </h3>

        <p>
          Docker Compose addresses some of Docker's limitations by allowing you to define and run multi-container
          applications using a simple YAML configuration file. It's particularly useful for development environments
          and simple production deployments on a single host. However, Docker Compose has its own set of limitations
          that become apparent when scaling beyond basic use cases.
        </p>

        <p>
          The most significant limitation of Docker Compose is that it's designed primarily for single-host deployments.
          While Docker Compose can manage multiple containers and their relationships effectively, it cannot orchestrate
          containers across multiple hosts or machines. This means that as your application grows and requires more resources
          than a single machine can provide, Docker Compose becomes inadequate for your orchestration needs.
        </p>

        <p>
          Docker Compose also lacks advanced scaling and load balancing features. While you can specify the number of replicas
          for a service, Docker Compose doesn't provide intelligent load distribution, automatic scaling based on resource
          utilisation, or sophisticated traffic routing. If one instance of your service fails, Docker Compose will restart
          it, but it doesn't have the intelligence to redistribute load or manage rolling updates seamlessly.
        </p>

        <p>
          Another limitation is Docker Compose's basic approach to secrets and configuration management. While it supports
          environment variables and basic secrets, it doesn't provide the security and management features required for
          production environments. Sensitive information like database passwords, API keys, and certificates need more
          sophisticated handling than what Docker Compose offers natively.
        </p>

        <p>
          Resource management is another area where Docker Compose falls short. While you can set resource limits for individual
          services, Docker Compose doesn't provide cluster-wide resource management, intelligent scheduling based on resource 
          availability, or the ability to guarantee resource allocation across multiple hosts.
        </p>

        <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          How Kubernetes Addresses These Limitations
        </h3>
        
        <div className="flex items-center justify-center mb-12">
            <ImageWithSkeleton
                src="/Kubernetes-originate.png"
                alt="Docker in Software Development Process"
            />
        </div>

        <p>
          Kubernetes was specifically designed to address the orchestration limitations that both Docker and Docker Compose face. 
          As a container orchestration platform, Kubernetes provides a comprehensive solution for managing containerised
          applications across clusters of machines, making it the natural evolution for applications that have outgrown
          Docker Compose.
        </p>

        <p>
          One of Kubernetes' primary strengths is its native clustering capability. Unlike Docker Compose, which is limited to
          single-host deployments, Kubernetes can manage containers across multiple nodes in a cluster. It handles node failures
          gracefully by automatically rescheduling containers to healthy nodes, ensuring your applications maintain high availability
          without manual intervention. This cluster-aware orchestration eliminates the single point of failure that exists with Docker
          Compose deployments.
        </p>

        <div className="flex items-center justify-center mb-12">
            <ImageWithSkeleton
                src="/Docker-Kubernetes-together.png"
                alt="Docker in Software Development Process"
            />
        </div>

        <p>
          Kubernetes provides sophisticated service discovery and networking capabilities that far exceed what Docker Compose offers.
          Through its Service abstraction, Kubernetes automatically handles load balancing and provides stable network endpoints for
          your applications. Containers can easily discover and communicate with other services using DNS names, regardless of which 
          nodes they're running on. The platform also supports advanced networking policies, ingress controllers for external traffic
          management, and seamless integration with cloud provider load balancers.
        </p>

        <p>
          Where Docker Compose offers basic restart policies, Kubernetes provides comprehensive health monitoring and self-healing
          capabilities. It continuously monitors the health of your applications through liveness and readiness probes, automatically
          restarting failed containers, and removing unhealthy instances from service rotation. This proactive approach to health
          management ensures your applications remain available and responsive without manual intervention.
        </p>

        <p>
          Kubernetes excels in resource management and scheduling, areas where Docker Compose is limited. The Kubernetes scheduler
          intelligently places containers based on resource requirements, node capacity, and various constraints.
          It can guarantee resource allocation through resource requests and limits, prevent resource starvation, and even
          automatically scale applications based on CPU usage or custom metrics through the Horizontal Pod Autoscaler.
        </p>

        <p>
          Security and secrets management are also significantly enhanced in Kubernetes compared to Docker Compose. Kubernetes
          provides native secrets management with encryption at rest, role-based access control (RBAC) for fine-grained permissions,
          network policies for traffic isolation, and pod security policies to enforce security standards. These features make
          Kubernetes much more suitable for production environments where security is paramount.
        </p>

        <p>
          Finally, Kubernetes supports advanced deployment strategies that Docker Compose simply cannot provide. Rolling updates,
          blue-green deployments, canary releases, and automatic rollbacks are all built into Kubernetes, allowing for zero-downtime
          deployments and safe release management. This makes Kubernetes an essential tool for organisations that need to deploy
          updates frequently while maintaining service availability.
        </p>

      </div>
    </section>
  )
}

export default LimitationsDocker;