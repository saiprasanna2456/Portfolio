import React, { useState } from "react";
import "./designworks.css";
// Optional: If 'react-medium-image-zoom' is used for the image lightbox, uncomment the imports.
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const designProjects = [
  {
    id: 1,
    name: "CyberSprint",
    category: ["Poster Design", "Branding"],
    discColor: "#5A8B7F",
    discDescription: "Deep teal/cyan base, lock & shield stickers, 'fast & secure' handwritten note, torn paper, green washi tape",
    hoverNote: "made this at 2am.",
    imageUrl: "./Purple and Blue Modern Cybersecurity Poster.png",
    imageAspectRatio: "portrait",
    aboutText: "Designed for the CyberSprint event at ELEET club. Wanted to capture the energy of fast problem-solving and security-first mindset. My favourite part was the minimalist icon layout that still felt playful.",
    role: "Designer",
    tools: "Figma, Photoshop, Illustrator",
    timeTaken: "3 days",
    year: "2025",
    client: "ELEET Design Club",
    easterEgg: "this version was number 14.",
    stickers: ["🔒", "🛡️"],
    doodles: ["⭐", "❤️"],
    tapeColor: "washi-tape-green"
  },
  {
    id: 2,
    name: "Web Shenanigans",
    category: ["Poster Design"],
    discColor: "#E8967D",
    discDescription: "Warm coral/salmon base",
    hoverNote: "chaos & code.",
    imageUrl: "./assets/placeholder.jpg",
    imageAspectRatio: "portrait",
    aboutText: "A quirky poster designed to promote a web development workshop. I wanted it to feel like the moment a developer is confused but excited to debug.",
    role: "Lead Designer",
    tools: "Figma, Sketch",
    timeTaken: "1 week",
    year: "2025",
    client: "ELEET Design Club",
    easterEgg: "i actually broke prod during this.",
    stickers: ["< >", "🌐"],
    doodles: ["✨", "📝"],
    tapeColor: "washi-tape-coral"
  },
  {
    id: 3,
    name: "Chocolate Day",
    category: ["Event Creative"],
    discColor: "#8B6F47",
    discDescription: "Rich brown/chocolate with gold accents",
    hoverNote: "sweet memories.",
    imageUrl: "./assets/placeholder.jpg",
    imageAspectRatio: "square",
    aboutText: "A warm and inviting post designed for Chocolate Day. The focus was on rich tones, gold highlights, and typography that felt elegant but sweet.",
    role: "Creative Director",
    tools: "Photoshop, Canva",
    timeTaken: "2 days",
    year: "2025",
    client: "Personal Project",
    easterEgg: "ate a whole bar while making this.",
    stickers: ["🍫", "🤎"],
    doodles: ["✨", "〰️"],
    tapeColor: "washi-tape-olive"
  },
  {
    id: 4,
    name: "Hacked?",
    category: ["Event Creative", "Security Concept"],
    discColor: "#3A3A3A",
    discDescription: "Dark charcoal with neon green accents",
    hoverNote: "found it!",
    imageUrl: "./AM I HACKED.png",
    imageAspectRatio: "portrait",
    aboutText: "A cybersecurity awareness poster using glitch art and neon green typography to evoke the feeling of a system intrusion.",
    role: "Designer",
    tools: "Figma, Photoshop",
    timeTaken: "4 days",
    year: "2025",
    client: "Cybersecurity Wing",
    easterEgg: "password is 'password123'.",
    stickers: ["⛔", "⌨️"],
    doodles: ["💀", "🔒"],
    tapeColor: "washi-tape-green"
  },
  {
    id: 5,
    name: "Diwali",
    category: ["Social Media", "Branding"],
    discColor: "#F5A623",
    discDescription: "Rich saffron/gold with deep burgundy accents",
    hoverNote: "lights & colours.",
    imageUrl: "./WELCOMING ALL TO DIWALI.png",
    imageAspectRatio: "landscape",
    aboutText: "Designed to celebrate Diwali, incorporating traditional motifs like diyas and rangoli directly into the layout.",
    role: "Designer",
    tools: "Illustrator, Photoshop",
    timeTaken: "1 week",
    year: "2024",
    client: "University Event",
    easterEgg: "the diya took forever to draw.",
    stickers: ["🪔", "💥"],
    doodles: ["✨", "🏮"],
    tapeColor: "washi-tape-coral"
  },
  {
    id: 6,
    name: "TOOLS EXPO",
    category: ["Print"],
    discColor: "#7A8B5E",
    discDescription: "Olive green to cream gradient",
    hoverNote: "building things.",
    imageUrl: "./assets/placeholder.jpg",
    imageAspectRatio: "portrait",
    aboutText: "Event branding for a tools and tech exhibition. Designed a clean, industrial look with subtle blueprint textures.",
    role: "UI/UX Designer",
    tools: "Figma",
    timeTaken: "2 weeks",
    year: "2024",
    client: "SRMIST",
    easterEgg: "my favorite texture is the subtle grid.",
    stickers: ["🛠️", "⚙️"],
    doodles: ["📐", "✏️"],
    tapeColor: "washi-tape-olive"
  }
];

const DesignWorks = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleCDClick = (id) => {
    setSelectedProjectId(id);
  };

  const navigateProject = (direction) => {
    if (selectedProjectId === null) return;
    const currentIndex = designProjects.findIndex(p => p.id === selectedProjectId);
    let nextIndex;
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % designProjects.length;
    } else {
      nextIndex = (currentIndex - 1 + designProjects.length) % designProjects.length;
    }
    setSelectedProjectId(designProjects[nextIndex].id);
  };

  const selectedProject = designProjects.find(p => p.id === selectedProjectId);

  return (
    <section className="section section-projects cd-collection-section" id="projects">
      <div className="section-header reveal-item visible">
        <span className="handwritten section-label cd-archive-label">DESIGN ARCHIVE</span>
        <h2 className="section-heading">CD COLLECTION</h2>
        <p className="section-sub lowercase-sub">every design has its own story.</p>
      </div>

      <div className="cd-collection-layout reveal-item visible">
        {/* Left Panel */}
        <div className="cd-left-panel">
          <div className="handwritten pick-disc-cta">
            {["pick a disc.", "choose a side.", "find something interesting."][Math.floor(Math.random() * 3)]}
          </div>
          <div className={`cd-grid ${selectedProjectId ? "has-selection" : ""}`}>
            {designProjects.map((project) => (
              <div
                key={project.id}
                className={`jewel-case-wrapper ${selectedProjectId === project.id ? "selected" : ""}`}
                onClick={() => handleCDClick(project.id)}
              >
                <div className="jewel-case">
                  <div
                    className="cd-disc-inner"
                    style={{
                      background: `radial-gradient(circle, ${project.discColor} 30%, rgba(255,255,255,0.2) 100%)`
                    }}
                  >
                    <span className="cd-disc-text" style={{ color: '#fff', fontSize: '11px', transform: 'rotate(-5deg)', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                      {project.name.toUpperCase()}
                    </span>
                    {project.stickers.map((s, i) => (
                      <div
                        key={i}
                        className="cd-disc-sticker"
                        style={{
                          top: `${25 + i * 15}%`,
                          right: `${20 + i * 10}%`,
                          transform: `rotate(${Math.random() * 30 - 15}deg)`
                        }}
                      >{s}</div>
                    ))}
                    {project.doodles.map((d, i) => (
                      <div
                        key={i}
                        className="doodle-element"
                        style={{
                          bottom: `${25 + i * 15}%`,
                          left: `${20 + i * 10}%`,
                          transform: `rotate(${Math.random() * 40 - 20}deg)`
                        }}
                      >{d}</div>
                    ))}
                  </div>
                  <div className="cd-hole"></div>
                  <div className="cd-spine-text">{project.name.toUpperCase()} - {project.year}</div>
                </div>
                <div className="hover-sticky-note">{project.hoverNote}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="cd-right-panel" id="cdRightPanel">
          {selectedProject ? (
            <div className="booklet-content" key={selectedProject.id}>
              <div className="booklet-image-container">
                <Zoom>
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.name}
                    className="booklet-image"
                  />
                </Zoom>
                <div className={`booklet-tape top-left ${selectedProject.tapeColor}`}></div>
                <div className={`booklet-tape top-right ${selectedProject.tapeColor}`}></div>
              </div>

              <div className="booklet-header">
                <h3 className="booklet-title">{selectedProject.name}</h3>
                <div className="booklet-tags">
                  {selectedProject.category.map((tag, i) => (
                    <span key={i} className="badge-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="booklet-body">
                <div className="booklet-about">
                  <h4>ABOUT THIS DESIGN</h4>
                  <p>{selectedProject.aboutText}</p>
                </div>

                <div className="booklet-details">
                  <div className="detail-item">
                    <span className="detail-label">ROLE</span>
                    <span className="detail-value">{selectedProject.role}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">TOOLS</span>
                    <span className="detail-value">{selectedProject.tools}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">TIME TAKEN</span>
                    <span className="detail-value">{selectedProject.timeTaken}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">YEAR</span>
                    <span className="detail-value">{selectedProject.year}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">CLIENT / CLUB</span>
                    <span className="detail-value">{selectedProject.client}</span>
                  </div>
                </div>
              </div>

              <div className="booklet-actions">
                <button className="btn btn-primary" onClick={() => navigateProject('prev')}>Previous Design ←</button>
                <button className="btn btn-primary" onClick={() => navigateProject('next')}>Next Design →</button>
              </div>

              <div className="easter-egg">{selectedProject.easterEgg}</div>
            </div>
          ) : (
            <div className="cd-empty-state">
              <span className="mono-tag" style={{ fontSize: '12px' }}>NO DISC SELECTED</span>
              <span className="handwritten" style={{ color: '#2C2C2C', opacity: 0.7, fontSize: '18px', marginTop: '10px' }}>
                waiting for a track...
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DesignWorks;