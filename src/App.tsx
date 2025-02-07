import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink,Instagram, ChevronDown, Menu, X, Building2, Code2, Briefcase, GraduationCap, User } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'profile', 'organization', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-emerald-400 font-bold text-xl">Pedro Marcel Hutagaol</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'profile', 'organization', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-400 capitalize hover:text-emerald-400 transition-colors ${
                    activeSection === section ? 'text-emerald-400' : ''
                  }`}
                >

            
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                {['home', 'profile', 'organization', 'skills', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-gray-400 capitalize hover:text-emerald-400 transition-colors ${
                      activeSection === section ? 'text-emerald-400' : ''
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="min-h-screen flex flex-col items-center justify-center text-white px-4 relative pt-16">
  <video
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/backgorund.mp4" type="video/mp4" />
  </video>

  <div className="animate-fade-in-down relative z-10">
    <div className="mb-8 relative">
      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-emerald-500/30 shadow-xl">
        <img
          src="/formal.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-900/20 to-transparent"></div>
    </div>
    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
      Hello, I'm
      <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
        Pedro Marcel Hutagaol
      </span>
    </h1>
    <p className="text-xl md:text-2xl text-center mb-8 text-gray-400">
      Full Stack Developer & UI/UX Designer
    </p>
    <div className="flex gap-4 justify-center mb-12">
      <SocialLink href="https://github.com/CallMeMarcel" icon={<Github />} />
      <SocialLink href="www.linkedin.com/in/pedro-marcel-hutagaol-92b2052b4" icon={<Linkedin />} />
      <SocialLink href="https:gmail.com/pedromhutagaol@gmail.com" icon={<Mail />} />
      <SocialLink href="https://instagram.com/if323034" icon={<Instagram />} />

    </div>
  </div>

  <ChevronDown
    className="absolute bottom-8 animate-bounce w-8 h-8 cursor-pointer text-emerald-400"
    onClick={() => scrollToSection('profile')}
  />
</header>


      {/* Profile Section */}
      <section id="profile" className="py-20 px-4 bg-gray-800/30">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Profile Image with Hover Animation */}
      <div className="relative flex justify-center group">
        <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg shadow-emerald-500/25 transition-all duration-700 transform group-hover:scale-105">
          <img 
            src="/pedro.png"
            alt="Pedro Marcel Hutagaol"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full">
          <User className="w-5 h-5" />
          <span>About Me</span> 
        </div>
        <h2 className="text-4xl font-bold text-white">Pedro Marcel Hutagaol</h2>
        <p className="text-gray-400 leading-relaxed">
          I am an active student majoring in Information Engineering at the Del Institute of Technology with a GPA of 3.2.
          I have valuable experience contributing to open-source projects and possess expertise in website and mobile 
          application development. With strong teamwork and communication skills, I am highly committed to creating 
          efficient, innovative, and user-friendly technology solutions in the field of software development.
        </p>

        {/* Profile Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-semibold">Location:</span>
            <span className="text-gray-400">Medan, Indonesia</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-semibold">Experience:</span>
            <span className="text-gray-400">1+ Years</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-semibold">Email:</span>
            <span className="text-gray-400">pedromhhutagaol@gmail.com</span>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="pt-4">
          <a href="/cv.pdf" download="PedroMarcelHutagaol_Resume.pdf">
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25">
              Download CV
            </button>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Organization Section */}
      <section 
  id="organization" 
  className="py-20 px-4 bg-gray-800/30 bg-cover bg-center relative" 
  style={{ backgroundImage: "url('/background.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
  <div className="max-w-6xl mx-auto relative">
    <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience & Education</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-emerald-400 flex items-center gap-2 mb-6">
          <Briefcase className="w-6 h-6" /> Work Experience
        </h3>
        <TimelineItem
          title="Head of Design Division"
          organization="IT DEL FESTIVAL 2024"
          date="Aug 2024 - Sep 2024 "
          description={[
            "Creating a visual identity, including the IT Del Festival 2024 logo, to ensure strong brand recognition.",
            "Designing posters, banners, and billboards for offline promotions.",
            "Creating templates for certificates, invitations, and tickets.",
            "Designing ID cards or badges for committee members and participants.",
            "Creating t-shirt designs for the IT Del Festival 2024 committee."
          
          ]}
          image="/itd.jpg"
        />
        <TimelineItem
          title="LCC Supervisor Committee"
          organization="Lomba Cerdas Cermat IT DEL 2024"
          date="Sep 2024"
          description="Ensure that the competition starts, takes place and finishes according to the predetermined schedule.
                        Ensure that there is no cheating between participants taking part in the LCC"
          image="/del.png" // Ganti dengan path gambar yang sesuai
                        
        />
        <TimelineItem
          title="IDG facilities and infrastructure committee"
          organization="Inauguration & Graduation IT DEL"
          date="Sep 2024"
          description="Ensure the venue is ready before the event, including cleanliness, layout and tidiness"
          image="/del.png" // Ganti dengan path gambar yang sesuai
        />
      </div>
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-emerald-400 flex items-center gap-2 mb-6">
          <GraduationCap className="w-6 h-6"/> Education
        </h3>
        <TimelineItem
          image="/del.png" // Ganti dengan path gambar yang sesuai
          title="Institut Teknologi Del - Laguboti, Toba, Sumatera Utara 22381"
          organization="Diploma in information Technology, 3.13/4.00"
          date="Aug 2023 - Sep 2026 (Expected)"
          description="Design and Build an Information System for the HKBP Sidikalang City With Laravel
          learning course mobile applications and successfully build mobile-based applications with flutter
          Get a development platform certificate like Laravel"
        />
      </div>
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-emerald-400 flex items-center gap-2 mb-6">
          <GraduationCap className="w-6 h-6"/> Organization Experience
        </h3>
        <TimelineItem
          image="/himatif.jpg" // Ganti dengan path gambar yang sesuai
          title="HIMATIF IT DEL - Laguboti, Toba, Sumatera Utara 22381"
          organization="Education Division"
          date="Sep 2024 - Present"
          description="Tutorials with juniors according to the subjects they want every 3 weeks 2 tutorials, increase knowledge in these course.
          hold a quiz every meeting with 50% theory and 50% practical"
        />
        <TimelineItem
          image="/dsdc.png" // Ganti dengan path gambar yang sesuai
          title="Del Software Development - Laguboti, Toba, Sumatera Utara 22381"
          organization="Web Developer"
          date="Nov 2024 - Present"
          description="Assist in internal club projects involving web-based application development.
          Supports web needs for event promotion or organizational activities."
        />
      </div>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SkillCard
        icon={<Code2 />}
        title="Frontend Development"
        skills={[
          { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
          { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
          { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
          { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
          { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
          { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg' }
        ]}
      />
      <SkillCard
        icon={<Building2 />}
        title="Backend Development"
        skills={[
          { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
          { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
          { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
          { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
        ]}
      />
      <SkillCard
        icon={<Code2 />}
        title="Framework"
        skills={[
          { name: 'Laravel', logo: 'https://github.com/devicons/devicon/tree/v2.16.0/icons/laravel/laravel-plain.svg' },
          { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
          { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' }
        ]}
      />
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section 
  id="projects" 
  className="py-20 px-4 bg-gray-800/50 backdrop-blur-lg bg-cover bg-center relative" 
  style={{ backgroundImage: "url('/background.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
  <div className="max-w-6xl mx-auto relative">
    <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        title="Sistem Informasi Website HKBP Sidikalang Kota"
        description="A modern e-commerce platform built with React and Node.js"
        image="/projectHKBP.png"
        technologies={[
          { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
          { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
          { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
        ]}
        githubLink="https://github.com/CallMeMarcel/Proyek-Akhir---I"
      />
      <ProjectCard
        title="Mobile Music App SOTRIFY"
        description="Music Application for Project Mobile Application Develop"
        image="/SotrifyProject.png"
        technologies={[
          { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
          { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
        ]}
        githubLink="https://github.com/CallMeMarcel/Spotrify"
      />
      <ProjectCard
        title="ORENO DIARY"
        description="Aplikasi catatan dengan tema minimalis futuristik..."
        image="/OrenoProject.png"
        technologies={[
          { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
          { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
        ]}
        githubLink="https://github.com/CallMeMarcel/diary"
      />
      <ProjectCard
        title="Monitoring and Analysis System for Number of People"
        description="View and monitor people around you"
        image="/Iot.jpg"
        technologies={[
          { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' }
        ]}
        githubLink="https://github.com/username/IotProject"
      />
      <ProjectCard
        title="UI/UX KASIH FARMA"
        description="Design for Apotek Kasih Farma"
        image="/KasihProject.png"
        technologies={[
          { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
        ]}
        githubLink="https://github.com/username/KasihProject"
      />
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
  <div className="max-w-4xl mx-auto text-center text-white">
    <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
    <p className="text-xl mb-8 text-gray-400">
      I'm always open to discussing new projects and opportunities.
    </p>
    <div className="flex justify-center space-x-6 mb-8">
      <a
        href="mailto:your.email@example.com"
        className="text-white hover:text-emerald-400 transition-all"
      >
        <Mail size={32} />
      </a>
      <a
        href="https://github.com/CallMeMarcel"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-emerald-400 transition-all"
      >
        <Github size={32} />
      </a>
      <a
        href="https://instagram.com/if323034"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-emerald-400 transition-all"
      >
        <Instagram size={32} />
      </a>
      <a
        href="https://linkedin.com/in/pedro-marcel-hutagaol-92b2052b4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-emerald-400 transition-all"
      >
        <Linkedin size={32} />
      </a>
    </div>
   
  </div>

  {/* Copyright Text */}
  <div className="mt-12 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} Pedro Marcel Hutagaol. All Rights Reserved.
  </div>
</section>

    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-emerald-500/20 text-emerald-400 transition-all transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function TimelineItem({ 
  title, 
  organization, 
  date, 
  description, 
  image 
}: { 
  title: string; 
  organization: string; 
  date: string; 
  description: string;
  image: string;
}) {
  return (
    <div className="relative pl-8 border-l-2 border-gray-700 pb-8 group flex items-start space-x-4">
      {/* Icon Bulatan di Timeline */}
      <div className="absolute left-[-9px] top-2 w-4 h-4 bg-gray-900 border-2 border-emerald-400 rounded-full group-hover:scale-125 transition-transform"></div>
      
      {/* Gambar di sebelah kiri */}
      <img 
        src={image} 
        alt={title} 
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Konten Timeline */}
      <div>
        <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
        <p className="text-emerald-400 mb-2">{organization}</p>
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}


function SkillCard({ icon, title, skills }: { 
  icon: React.ReactNode; 
  title: string; 
  skills: { name: string; logo: string }[];
}) {
  return (
    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-colors">
      <div className="text-emerald-400 w-12 h-12 mb-4 flex items-center justify-center bg-emerald-500/10 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-800 text-emerald-400 rounded-full text-sm flex items-center gap-2"
          >
            <img src={skill.logo} alt={skill.name} className="w-4 h-4" />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ 
  title, 
  description, 
  image,
  technologies,
  githubLink 
}: { 
  title: string; 
  description: string; 
  image: string;
  technologies: { name: string; logo: string }[];
  githubLink?: string; 
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-900/50 p-4 hover:bg-gray-900/80 transition-all duration-300 transform hover:-translate-y-2 border border-gray-800">
      <div className="aspect-video overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-gray-800/50 rounded-md text-sm flex items-center gap-1"
          >
            <img src={tech.logo} alt={tech.name} className="w-4 h-4" />
            <span className="text-gray-400">{tech.name}</span>
          </span>
        ))}
      </div>
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          View Project <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      )}
    </div>
  );
}


export default App;