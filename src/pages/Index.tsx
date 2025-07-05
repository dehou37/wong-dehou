import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, MapPin, Code, Briefcase, GraduationCap, User, Star, Zap, Database, Terminal, Cpu, Globe, Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-purple-500/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Terminal className="text-purple-400" size={24} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Wong Dehou
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105">About</a>
              <a href="#experience" className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                  <Code size={60} className="text-white" />
                </div>
                <div className="absolute inset-0 w-32 h-32 border-2 border-purple-400 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
              Hello, I'm <span className="text-white">Wong Dehou</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Bachelor Of Science (Information System)
              </span>
              <br />
              <span className="text-gray-400">
                Major in Business Analytics & Product Development
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-colors">
                <Phone size={20} className="text-purple-400" />
                <span>+65 9826 5872</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-colors">
                <Mail size={20} className="text-purple-400" />
                <span>dehou37@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-colors">
                <Linkedin size={20} className="text-purple-400" />
                <a href="https://www.linkedin.com/in/wong-dehou/" className="hover:text-purple-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-colors">
                <MapPin size={20} className="text-purple-400" />
                <span>Singapore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* About Section */}
        <section id="about" className="py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <User className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-2xl hover:shadow-purple-500/20 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-purple-500/20">
                    <h4 className="text-lg font-semibold text-white">Singapore Management University</h4>
                    <p className="text-purple-400 font-medium">Bachelor of Science (Information Systems)</p>
                    <p className="text-gray-400">2021 - 2025</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20">
                    <h4 className="text-lg font-semibold text-white">Temasek Polytechnic</h4>
                    <p className="text-blue-400 font-medium">Diploma in Business Intelligence & Analytics</p>
                    <p className="text-gray-400">2016 - 2019</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-2xl hover:shadow-purple-500/20 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Interests</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    When I'm not coding or optimizing systems, you'll find me playing table tennis, 
                    discovering new music, or binge-watching the latest tech documentaries and sci-fi series.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Table Tennis", "Music", "Tech Shows", "Sci-Fi"].map((interest, index) => (
                      <Badge key={interest} variant="outline" className={`border-purple-400 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 transition-colors animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <Briefcase className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Work Experience</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {[
              {
                company: "Red Dot Payment",
                role: "Quality Assurance Intern",
                period: "01/2025 – 04/2025",
                icon: Zap,
                color: "from-red-500 to-orange-500",
                points: [
                  "Leveraged Postman for comprehensive API testing and ensuring API robustness and functionality",
                  "Review requirements and craft comprehensive, well-structured test cases",
                  "Development, automation and implementation of testing process through Watermelon software"
                ]
              },
              {
                company: "Singapore Tourism Board",
                role: "Product Management Intern",
                period: "05/2024 – 08/2024",
                icon: Globe,
                color: "from-green-500 to-blue-500",
                points: [
                  "Support in development, testing and rollout of feature enhancements, including product documentation",
                  "Assist in user acceptance testing (UAT), investigate reported issues and come up with recommendations",
                  "Support in detailed analysis and comparison of technical products options to address business needs"
                ]
              },
              {
                company: "National Youth Council Singapore",
                role: "Software/Data Engineering Intern",
                period: "08/2023 – 02/2024",
                icon: Cpu,
                color: "from-purple-500 to-pink-500",
                points: [
                  "Part of a change management team, with a goal to improve efficiency of business processes using automation via VBA, UiPath",
                  "Operated in a scrum environment, using JIRA/Confluence as the main documentation and scrum tool",
                  "Analyzed As-If processes, explored tools and recommended To-Be processes based on requirements"
                ]
              },
              {
                company: "Singapore University of Technology & Design (SUTD)",
                role: "Data Analyst Intern",
                period: "07/2018 – 02/2019",
                icon: Database,
                color: "from-blue-500 to-purple-500",
                points: [
                  "Created project charter, work breakdown structure, project schedule (Gantt Chart) and weekly progress report documents to keep track of project's progression",
                  "Created dashboards and provided an overall view on data, while including multiple drill-down levels to aid business users monitor and transform data into useful information",
                  "Explored and recommended new softwares to help users understand and predict trends better, boosted decision making process by 30%"
                ]
              }
            ].map((job, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-2xl hover:shadow-purple-500/20 group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${job.color} rounded-lg group-hover:scale-110 transition-transform`}>
                        <job.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.company}</h3>
                        <p className="text-purple-400 font-semibold text-lg">{job.role}</p>
                      </div>
                    </div>
                    <span className="text-gray-400 font-medium mt-2 md:mt-0 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30">{job.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {job.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Code className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-2xl hover:shadow-purple-500/20 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Web Development Projects</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Developed full-stack applications using React, Vue, TypeScript with Java, Laravel backends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Architected databases in MySQL and MongoDB, integrated via REST APIs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Implemented version control workflows using Git and collaborative development practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-2xl hover:shadow-purple-500/20 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Cpu className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Business Process Engineering</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Analyzed current processes and engineered optimized workflows for enhanced efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Conducted comprehensive root cause analysis with data-driven solution recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Performed resource optimization analysis for cost-effective organizational solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Designed comprehensive solution blueprints with use case and function models</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
                <Terminal className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Technical Arsenal</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black/40 backdrop-blur-md border border-blue-500/30 hover:border-blue-400 transition-all hover:shadow-2xl hover:shadow-blue-500/20 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="text-blue-400" size={20} />
                  <h4 className="font-bold text-white">Programming</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "Python", "PHP", "HTML", "JavaScript", "Java", "VBA"].map((skill, index) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border border-green-500/30 hover:border-green-400 transition-all hover:shadow-2xl hover:shadow-green-500/20 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="text-green-400" size={20} />
                  <h4 className="font-bold text-white">Frameworks</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Vue", "Bootstrap", "Laravel", "React", "Next.js"].map((skill, index) => (
                    <Badge key={skill} variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30 transition-colors animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-2xl hover:shadow-purple-500/20 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="text-purple-400" size={20} />
                  <h4 className="font-bold text-white">Databases</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "MongoDB"].map((skill, index) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border border-orange-500/30 hover:border-orange-400 transition-all hover:shadow-2xl hover:shadow-orange-500/20 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="text-orange-400" size={20} />
                  <h4 className="font-bold text-white">Tools & Platforms</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Qliksense", "Tableau", "JIRA", "Confluence", "UiPath", "Watermelon", "Google Cloud"].map((skill, index) => (
                    <Badge key={skill} variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30 hover:bg-orange-500/30 transition-colors animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg">
                <Mail className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <Card className="bg-black/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-2xl hover:shadow-purple-500/20 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm currently exploring opportunities for a full-time position, preferably in a software development role, but am open to others as well!
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full border-2 border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                  <Phone className="text-purple-400" size={24} />
                  <span className="text-white font-medium">+65 9826 5872</span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border-2 border-blue-500/30 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                  <Mail className="text-blue-400" size={24} />
                  <a href="mailto:dehou37@gmail.com" className="text-white font-medium hover:text-blue-400 transition-colors">
                    dehou37@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 px-6 py-3 rounded-full border-2 border-green-500/30 hover:border-green-400 transition-all hover:shadow-lg hover:shadow-green-500/20">
                  <Linkedin className="text-green-400" size={24} />
                  <a href="https://www.linkedin.com/in/wong-dehou/" className="text-white font-medium hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-md border-t border-purple-500/30 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">Thanks for making it to the end, feel free to reach out to me! </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
