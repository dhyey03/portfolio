import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Shield, Terminal, Code, Server, Bug, Brain, FileText, Download, ExternalLink, ArrowUp, Monitor, Database, Lock, PenToolIcon, Wrench } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const profileImage = "src/img/2025-04-11_19-42-38_1113.png"
  const backgroundImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80";

  return (
    <div className="min-h-screen bg-black text-white">
      <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      {/* Background with overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center relative overflow-hidden">
          {/* Technology Icons Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="flex flex-wrap gap-20 justify-center items-center p-10">
              {Array(20).fill(null).map((_, i) => (
                <Terminal key={i} size={40} className="animate-pulse" style={{
                  animationDelay: `${i * 0.2}s`,
                  opacity: Math.random() * 0.5 + 0.5
                }} />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600/30 relative z-10">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse" />
              </div>

              {/* Hero Text */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Cybersecurity Analyst
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6">
                  Protecting Digital Assets • Ethical Hacker • Security Researcher
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  
                  <a href="https://www.linkedin.com/in/dhyey-dalal/" className=" relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href = "mailto:Dhyeydalal18@gmail.com"
                    className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                    <Mail className="w-6 h-6" />
                  </a>
                  <a 
                    href="src/img/DDCV2.pdf" 
                    download 
                    className=" relative flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">About</span>
              {" "}
              <span className="text-blue-400">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              {/* Tools & Environments */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-blue-400">
                  <Terminal className="w-5 h-5" />
                  Tools & Environments
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-blue-600" />
                    <span>Virtualization with VMware, UTM & VirtualBox</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-blue-600" />
                    <span>Linux administration (Kali, Ubuntu, CentOS)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>Incident response frameworks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-blue-600" />
                    <span>SIEM systems & log analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-blue-600" />
                    <span>Splunk, Tennable nessus & AWS</span>
                  </li>
                </ul>
              </div>

              {/* Center Profile */}
              <div className="text-center space-y-6 relative">
  <div className="relative w-48 h-48 mx-auto">
    {/* Glow behind the image */}
    <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse z-0"></div>

    {/* Profile Image in front of the glow */}
    <div className="relative z-10 overflow-hidden rounded-full border-4 border-blue-600/30 w-full h-full">
      <img 
        src={profileImage} 
        alt="Profile" 
        className="w-full h-full object-cover"
      />
      {/* Optional blend effect */}
      <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" />
    </div>
  </div>

  <h3 className="text-2xl font-bold">Dhyey Dalal</h3>
  <p className="text-gray-400">Cybersecurity Graduate & Enthusiast</p>
  <div className="flex justify-center gap-2">
    <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm">Blue Team</span>
    <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm">Threat Hunter</span>
    <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm">SOC Analyst</span>
  </div>
  <p className="text-gray-400 max-w-md mx-auto">
    I'm a passionate cybersecurity student focused on defensive security operations and threat hunting. 
    Currently pursuing my degree in Computer Science with a specialization in Cybersecurity.
  </p>
</div>

              {/* Technical Background */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-blue-400">
                  <Code className="w-5 h-5" />
                  Technical Background
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-blue-600" />
                    <span>Programming in Python, Bash, & PowerShell</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>Network security fundamentals & Cloud security</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-blue-600" />
                    <span>MITRE ATT&CK framework knowledge & Digital Forensics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Bug className="w-5 h-5 text-blue-600" />
                    <span>Web application security testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Skills & Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-blue-600" />,
                  title: "Security Tools",
                  skills: ["Nmap", "Wireshark", "Burp Suite", "Metasploit"]
                },
                {
                  icon: <Terminal className="w-8 h-8 text-blue-600" />,
                  title: "Programming",
                  skills: ["Python", "Bash", "PowerShell", "SQL"]
                },
                {
                  icon: <Brain className="w-8 h-8 text-blue-600" />,
                  title: "Specializations",
                  skills: ["Threat Hunting", "Malware Analysis", "Incident Response","Digital forensics"]
                }
                
              ].map((category, i) => (
                <div key={i} className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-600/50 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                
                  {
                    icon: <Bug className="w-6 h-6" />,
                    title: "ShadowLog (Keylogger)",
                    description: "Built a stealthy Python keylogger with keystroke logging, encryption, voice recording, and persistent execution.",
                    tools: ["Python", "Cryptography", "Email", "Persistence"]
                  },
                  {
                    icon: <Server className="w-6 h-6" />,
                    title: "Cloud-Based Honeypot for Threat Intelligence",
                    description: "Deployed TPOT/MHN honeypots on AWS EC2, capturing and analyzing real-world cyber attacks and automating threat reports.",
                    tools: ["TPOT", "MHN", "AWS", "ELK", "Make.com"]
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Vulnerability Assessment & Network Scanning",
                    description: "Performed Nessus-based scanning of vulnerable systems, reducing critical vulnerabilities by 40%.",
                    tools: ["Nessus", "Metasploitable", "Windows XP/7", "Risk Analysis"]
                  },
                  {
                    icon: <Lock className="w-6 h-6" />,
                    title: "Python-Based Password Manager",
                    description: "Created a CLI password manager using AES encryption, bcrypt hashing, and SQLite for secure storage.",
                    tools: ["Python", "AES", "bcrypt", "SQLite"]
                  },
                  {
                    icon: <Code className="w-6 h-6" />,
                    title: "IDS/IPS Implementation (Snort)",
                    description: "Configured Snort IDS/IPS with custom rules and testing, achieving 99% detection accuracy.",
                    tools: ["Snort", "Wireshark", "hping3", "Linux"]
                  },
                  {
                    icon: <Brain className="w-6 h-6" />,
                    title: "Devote (Blockchain Voting Platform)",
                    description: "Led the development of a secure, full-stack blockchain voting system to modernize university elections.",
                    tools: ["React", "MongoDB", "Tailwind", "AWS", "Blockchain"]
                  },
                
                {
                  icon: <Bug className="w-6 h-6" />,
                  title: "Vulnerability Assessment Platform",
                  description: "Developed an automated security scanning platform using Python and Docker",
                  tools: ["Python", "Docker", "REST APIs"]
                },
                {
                  icon: <Server className="w-6 h-6" />,
                  title: "SOC Monitoring Dashboard",
                  description: "Created a real-time security monitoring dashboard using ELK Stack",
                  tools: ["Elasticsearch", "Kibana", "SIEM"]
                }
              ].map((project, i) => (
                <div key={i} className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-600/50 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    {project.icon}
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-400 text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "CEH",
                  date: "Preparing",
                  image: "https://plus.unsplash.com/premium_photo-1714618835760-5b2175ad3249?q=80&w=3578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  description: "Industry-leading certification validating cybersecurity skills",
                  link: "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh-v13-north-america/"
                },
                {
                  title: "CompTIA Security+",
                  date: "Preparing",
                  image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
                  description: "Industry-leading certification validating cybersecurity skills",
                  link: "https://www.comptia.org/certifications/security"
                },
                {
                  title: "Elastic Security For SIEM",
                  date: "March 2025",
                  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=200&fit=crop",
                  description: "Enhanced my skills in threat detection, log analysis, and security monitoring using Elastic SIEM.",
                  link: "#"
                },
                {
                  title: "TryHackMe",
                  date: "March 2025",
                  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
                  description: "Advanced Tranning in cybersecurity training platform",
                  link: "https://tryhackme.com/p/ddalal"
                },
                {
                  title: "Splunk",
                  date: "November 2024",
                  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  description: "Advanced Tranning in cybersecurity training platform",
                  link: "https://www.linkedin.com/in/dhyey-dalal/"
                },
                {
                  title: "ICS2",
                  date: "June 2024",
                  image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  description: "Advanced Tranning in cybersecurity training platform",
                  link: "https://www.linkedin.com/in/dhyey-dalal/"
                }

              ].map((cert, i) => (
                <div key={i} className="group backdrop-blur-lg bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-600/50 transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-400">{cert.date}</span>
                      <a href={cert.link} className="text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Writeups Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Security Writeups
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "HTB Machine Walkthrough: Cyber Apocalypse",
                  date: "March 2024",
                  category: "CTF Writeup",
                  description: "A detailed walkthrough of solving the Cyber Apocalypse machine on HackTheBox",
                  readTime: "15 min read"
                },
                {
                  title: "Analyzing Modern Ransomware Techniques",
                  date: "February 2024",
                  category: "Malware Analysis",
                  description: "Deep dive into recent ransomware attacks and their technical analysis",
                  readTime: "12 min read"
                },
                {
                  title: "Implementing Zero Trust Architecture",
                  date: "January 2024",
                  category: "Security Architecture",
                  description: "Guide to implementing zero trust security in enterprise environments",
                  readTime: "20 min read"
                },
                {
                  title: "Red Team Tool Development",
                  date: "December 2023",
                  category: "Red Teaming",
                  description: "Creating custom tools for red team engagements using Python",
                  readTime: "18 min read"
                }
              ].map((post, i) => (
                <div key={i} className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-600/50 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-sm text-blue-400">{post.category}</span>
                      <h3 className="text-xl font-semibold mt-1">{post.title}</h3>
                    </div>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{post.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                      Read More
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 relative border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Dhyey Dalal
                </h3>
                <p className="text-gray-400">Cybersecurity Analyst</p>
              </div>
              <div className="flex gap-4">
                <a href="https://linkedin.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:contact@example.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400">© 2025 All rights reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;