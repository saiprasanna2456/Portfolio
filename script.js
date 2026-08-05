/* ===================================================================
   SAI PRASANNA H — SCRAPBOOK PORTFOLIO JS
   Configuration Data and Application Logic
   =================================================================== */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     [1] CONFIGURATION DATA
     Edit the content below to update the portfolio information.
     --------------------------------------------------------- */
  const portfolioData = {
    contact: {
      name: "SAI PRASANNA H",
      tagline: "CSE (CYBERSECURITY) STUDENT · 3RD YEAR",
      phone: "+91 7338312009",
      email: "sai5665.prasanna@gmail.com",
      location: "Chennai, Tamil Nadu",
      socials: {
        linkedin: "https://www.linkedin.com/in/sai-prasanna-h-6b9400323/",
        github: "https://github.com/saiprasanna2456",
        instagram: "https://instagram.com/sai.prasannaa"
      }
    },
    hero: {
      bio: "Yellow! I'm a third-year Computer Science Engineering student specializing in Cybersecurity, with a curious habit of exploring everything from security and AI to UI/UX and whatever catches my attention next. I enjoy turning ideas into projects, learning by building, and occasionally figuring things out somewhere between too many tabs and a lot of trial and error. I'm always looking to grow, collaborate, and work on meaningful problems while becoming a more adaptable, creative, and security-minded engineer.",
      currently: [
        "Pursuing B.Tech. CSE (Cybersecurity) at SRMIST",
        "CGPA 9.76",
        "Actively building AI/ML and cybersecurity projects"
      ]
    },
    about: {
      bio: "Beyond the projects, code, and probably too many open tabs, I'm someone who genuinely enjoys meeting people, exchanging ideas, and learning from different perspectives. I love conversations that turn into ideas and ideas that somehow turn into projects. I'm always open to connecting, collaborating, trying something new, or simply hearing about what someone else is building. There's still a lot I'm figuring out, and honestly, that's part of what keeps things interesting."
    },
    education: [
      {
        institution: "SRMIST University, Ramapuram",
        degree: "B.Tech. Computer Science Engineering (Cybersecurity)",
        duration: "2024–Present",
        score: "CGPA: 9.76"
      },
      {
        institution: "IIT Patna",
        degree: "Minor Degree in UI/UX Design",
        duration: "2026–Present",
        score: "Currently Pursuing"
      },
      {
        institution: "Sri Chaitanya Techno School, Bangalore",
        degree: "Higher Secondary (Class XII)",
        duration: "2022–2024",
        score: "Percentage: 81.34"
      }
    ],
    skills: [
      {
        title: "TECHNICAL SKILLS",
        tapeColor: "washi-tape-green",
        items: ["HTML", "CSS", "Python", "C++"]
      },
      {
        title: "TOOLS & DESIGN",
        tapeColor: "washi-tape-coral",
        items: ["VS Code", "AutoCAD", "MATLAB"]
      },
      {
        title: "SOFTWARE",
        tapeColor: "washi-tape-olive",
        items: ["Canva", "Figma", "MySQL"]
      },
      {
        title: "ACTIVELY LEARNING",
        tapeColor: "washi-tape-green",
        items: ["German (A1, inlingua 2025)", "Cybersecurity fundamentals"]
      }
    ],
    projects: [
      {
        id: 1,
        name: "CipherSprint",
        category: ["Poster Design", "Branding"],
        discColor: "#5A8B7F",
        discDescription: "Deep teal/cyan base, lock & shield stickers, 'fast & secure' handwritten note, torn paper, green washi tape",
        hoverNote: "made this at 2am.",
        imageUrl: "DATE.png",
        imageAspectRatio: "portrait",
        aboutText: "Designed for the CipherSprint for a club event. Wanted to capture the energy of fast problem-solving and security-first mindset. My favourite part was the minimalist icon layout that still felt playful.",
        role: "Designer",
        tools: "Canva",
        timeTaken: "3 days",
        year: "2025",
        client: "Club Design",
        easterEgg: "this version was number 14.",
        stickers: ["🔒", "🛡️"],
        doodles: ["⭐", "❤️", "🌸"],
        tapeColor: "green"
      },
      {
        id: 2,
        name: "Web Shenanigans",
        category: ["Poster Design", "UI/UX"],
        discColor: "#E8967D",
        discDescription: "Warm coral/salmon, bracket stickers, chaotic doodles",
        hoverNote: "chaos & code.",
        imageUrl: "Purple and Blue Modern Cybersecurity Poster.png",
        imageAspectRatio: "portrait",
        aboutText: "A quirky poster designed to promote a cybersecurity workshop. I wanted it to feel like the moment a developer is confused but excited to debug. The chaotic doodles and terminal windows try to capture that.",
        role: "Lead Designer",
        tools: "Figma, Canva",
        timeTaken: "1 day",
        year: "2026",
        client: "For ELEET",
        easterEgg: "i actually broke prod during this.",
        stickers: ["< >", "🌐"],
        doodles: ["📝", "✨"],
        tapeColor: "coral"
      },
      {
        id: 3,
        name: "Chocolate Day",
        category: ["Social Media", "Event Creative"],
        discColor: "#8B6F47",
        discDescription: "Rich brown with gold accents",
        hoverNote: "sweet memories.",
        imageUrl: "HAPPY.png",
        imageAspectRatio: "square",
        aboutText: "A warm and inviting post designed for Chocolate Day. The focus was on rich tones, gold highlights, and typography that felt elegant but sweet. Used a vintage-inspired aesthetic for the layout.",
        role: "Creative Director",
        tools: "Photoshop, Canva",
        timeTaken: "1 day",
        year: "2026",
        client: "For ELEET ",
        easterEgg: "ate a whole bar while making this.",
        stickers: ["🍫", "🤎"],
        doodles: ["✨", "🍫"],
        tapeColor: "olive"
      },
      {
        id: 4,
        name: "Hacked?",
        category: ["Event Creative", "Security Concept"],
        discColor: "#3A3A3A",
        discDescription: "Dark charcoal with neon green accents",
        hoverNote: "found it!",
        imageUrl: "AM I HACKED.png",
        imageAspectRatio: "portrait",
        aboutText: "A cybersecurity awareness poster using glitch art and neon green typography to evoke the feeling of a system intrusion. Wanted to make the visual arresting so students would stop and read the tips.",
        role: "Designer",
        tools: "Figma, Canva",
        timeTaken: "2 days",
        year: "2026",
        client: "Personal Project",
        easterEgg: "password is 'password123'.",
        stickers: ["⛔", "⌨️"],
        doodles: ["💀", "🔒"],
        tapeColor: "green"
      },
      {
        id: 5,
        name: "Diwali",
        category: ["Social Media", "Branding"],
        discColor: "#F5A623",
        discDescription: "Rich saffron/gold with burgundy",
        hoverNote: "lights & colours.",
        imageUrl: "WELCOMING ALL TO DIWALI.png",
        imageAspectRatio: "landscape",
        aboutText: "Designed to celebrate Diwali, incorporating traditional motifs like diyas and rangoli directly into the layout. Balancing the bright gold/saffron colors with deep burgundy allowed the typography to remain legible.",
        role: "Designer",
        tools: "Canva",
        timeTaken: "2 days",
        year: "2024",
        client: "Club events",
        easterEgg: "the diya took forever to draw.",
        stickers: ["🪔", "💥"],
        doodles: ["✨", "🏮"],
        tapeColor: "coral"
      },

    ],
    experience: [
      {
        title: "Design Intern",
        company: "Dhobi G, Chennai",
        date: "June 2025 – July 2025",
        description: "Gained experience in brand identity design and marketing collateral creation. Mastered Canva to produce logos, posters, and promotional materials aligned with brand guidelines.",
        iconType: "circle"
      },
      {
        title: "Design Member",
        company: "ELEET",
        date: "2024 – June 2026",
        description: "Contributed as a design member for club initiatives and creatives.",
        iconType: "square"
      },
      {
        title: "Design Member",
        company: "CCEE",
        date: "2024 – June 2026",
        description: "Contributed as a design member for club initiatives and creatives.",
        iconType: "square"
      },
      {
        title: "Event Coordinator",
        company: "Skillo DIY Crafts, Chennai",
        date: "September 2025 – Present",
        description: "Coordinated and executed corporate and social events. Enhanced teamwork, problem-solving, and time management skills collaborating with cross-functional teams.",
        iconType: "rect"
      },
      {
        title: "Media and Branding Lead",
        company: "Algorand",
        date: "Present",
        description: "Leading media and branding initiatives, creating engaging collateral, and overseeing design strategy.",
        iconType: "square"
      }
    ],
    certifications: [
      {
        title: "Runner-up Prize, Startup Spark",
        issuer: "Medeasein",
        year: "2026",
        certificateFile: "assets/certificates/startup-spark.jpg",
        type: "certificate",
        hasProof: false
      },
      {
        title: "German Language Certificate (A1)",
        issuer: "inlingua",
        year: "2025",
        certificateFile: "German A1.png",
        type: "certificate"
      },
      {
        title: "YUVA-AI-THON Hackathon",
        issuer: "VIT Chennai",
        year: "2025",
        certificateFile: "YUVA-AI-THON.jpg",
        type: "certificate"
      },
      {
        title: "DEVHUB 1.0 Hackathon",
        issuer: "VIT Chennai",
        year: "2026",
        certificateFile: "assets/certificates/devhub-1.jpg",
        type: "certificate",
        hasProof: false
      }
    ]
  };

  /* ---------------------------------------------------------
     [2] RENDER CONTENT
     Populate the DOM with the config data above.
     --------------------------------------------------------- */

  // Hero & About
  document.getElementById('heroName').textContent = portfolioData.contact.name;
  document.getElementById('heroTagline').textContent = portfolioData.contact.tagline;
  document.getElementById('heroBio').textContent = portfolioData.hero.bio;
  document.getElementById('aboutBio').textContent = portfolioData.about.bio;

  // Currently List
  const currentlyList = document.getElementById('currentlyList');
  portfolioData.hero.currently.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    currentlyList.appendChild(li);
  });

  // Education
  const educationList = document.getElementById('educationList');
  portfolioData.education.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="edu-head">
        <span class="edu-inst">${item.institution}</span>
        <span class="mono-tag edu-date">${item.duration}</span>
      </div>
      <div class="edu-degree">${item.degree}</div>
      <div class="edu-score mono-tag">${item.score}</div>
    `;
    educationList.appendChild(li);
  });

  // Skills
  const skillsContainer = document.getElementById('skillsContainer');
  portfolioData.skills.forEach(skillSet => {
    const card = document.createElement('div');
    card.className = "skill-card";

    let listHtml = '';
    skillSet.items.forEach(item => { listHtml += `<li>${item}</li>`; });

    card.innerHTML = `
      <div class="washi-tape ${skillSet.tapeColor} skill-tape"></div>
      <h3 class="skill-card-title mono-tag">${skillSet.title}</h3>
      <ul class="skill-list">${listHtml}</ul>
    `;
    skillsContainer.appendChild(card);
  });

  // Projects - CD Collection Rendering
  const cdGridContainer = document.getElementById('cdGridContainer');
  const cdRightPanel = document.getElementById('cdRightPanel');
  let selectedCdId = null;

  if (cdGridContainer && cdRightPanel && portfolioData.projects) {
    portfolioData.projects.forEach(project => {
      const caseWrapper = document.createElement('div');
      caseWrapper.className = 'jewel-case-wrapper reveal-item';
      caseWrapper.dataset.id = project.id;

      const stickerHtml = project.stickers.map((s, i) =>
        `<div class="cd-disc-sticker" style="top: ${25 + i * 15}%; right: ${20 + i * 10}%; transform: rotate(${Math.random() * 30 - 15}deg);">${s}</div>`
      ).join('');

      const doodleHtml = project.doodles.map((d, i) =>
        `<div class="doodle-element" style="bottom: ${25 + i * 15}%; left: ${20 + i * 10}%; transform: rotate(${Math.random() * 40 - 20}deg);">${d}</div>`
      ).join('');

      caseWrapper.innerHTML = `
        <div class="jewel-case">
          <div class="cd-disc-inner" style="background: radial-gradient(circle, ${project.discColor} 30%, rgba(255,255,255,0.2) 100%);">
            <span class="cd-disc-text" style="color: #fff; font-size: 11px; transform: rotate(-5deg); text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">${project.name.toUpperCase()}</span>
            ${stickerHtml}
            ${doodleHtml}
          </div>
          <div class="cd-hole"></div>
          <div class="cd-spine-text">${project.name.toUpperCase()} - ${project.year}</div>
        </div>
        <div class="hover-sticky-note">${project.hoverNote}</div>
      `;

      caseWrapper.addEventListener('click', () => {
        openCdBooklet(project.id);
      });

      cdGridContainer.appendChild(caseWrapper);
    });
  }

  function openCdBooklet(projectId) {
    if (selectedCdId === projectId) return;

    if (cdGridContainer) {
      cdGridContainer.classList.add('has-selection');
      const wrappers = cdGridContainer.querySelectorAll('.jewel-case-wrapper');
      wrappers.forEach(w => {
        if (parseInt(w.dataset.id) === projectId) {
          w.classList.add('selected');
        } else {
          w.classList.remove('selected');
        }
      });
    }

    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;
    selectedCdId = projectId;

    const tagsHtml = project.category.map(tag => `<span class="badge-tag">${tag}</span>`).join('');
    const tapeClasses = ['top-left', 'top-right', 'bottom'];
    const randomTape = tapeClasses[Math.floor(Math.random() * tapeClasses.length)];

    const contentHtml = `
      <div class="booklet-content" id="bookletContent-${project.id}">
        <div class="booklet-image-container" onclick="openLightbox('${project.imageUrl}')">
          <img src="${project.imageUrl}" alt="${project.name}" class="booklet-image" />
          <div class="booklet-tape ${randomTape}"></div>
        </div>
        
        <div class="booklet-header">
          <h3 class="booklet-title">${project.name}</h3>
          <div class="booklet-tags">${tagsHtml}</div>
        </div>
        
        <div class="booklet-body">
          <div class="booklet-about">
            <h4>ABOUT THIS DESIGN</h4>
            <p>${project.aboutText}</p>
          </div>
          
          <div class="booklet-details">
            <div class="detail-item">
              <span class="detail-label">ROLE</span>
              <span class="detail-value">${project.role}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">TOOLS</span>
              <span class="detail-value">${project.tools}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">TIME TAKEN</span>
              <span class="detail-value">${project.timeTaken}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">YEAR</span>
              <span class="detail-value">${project.year}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">CLIENT / CLUB</span>
              <span class="detail-value">${project.client}</span>
            </div>
          </div>
        </div>
        
        <div class="booklet-actions">
          <button class="btn btn-secondary" onclick="openLightbox('${project.imageUrl}')">View Full Image ↗</button>
          <button class="btn btn-primary" onclick="navigateCd('prev', ${project.id})">Previous Design ←</button>
          <button class="btn btn-primary" onclick="navigateCd('next', ${project.id})">Next Design →</button>
        </div>
        
        <div class="easter-egg">${project.easterEgg}</div>
      </div>
    `;

    if (cdRightPanel.querySelector('.booklet-content')) {
      const oldContent = cdRightPanel.querySelector('.booklet-content');
      oldContent.style.opacity = '0';
      setTimeout(() => {
        cdRightPanel.innerHTML = contentHtml;
      }, 200);
    } else {
      cdRightPanel.innerHTML = contentHtml;
    }
  }

  window.navigateCd = function (direction, currentId) {
    const idx = portfolioData.projects.findIndex(p => p.id === currentId);
    let nextIdx = 0;
    if (direction === 'next') {
      nextIdx = (idx + 1) % portfolioData.projects.length;
    } else {
      nextIdx = (idx - 1 + portfolioData.projects.length) % portfolioData.projects.length;
    }
    openCdBooklet(portfolioData.projects[nextIdx].id);
  };

  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxImage = document.getElementById('lightboxImage');

  window.openLightbox = function (src) {
    if (!lightboxOverlay || !lightboxImage) return;
    lightboxImage.src = src;
    lightboxOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', (e) => {
      if (e.target === lightboxOverlay) closeLightbox();
    });
  }

  function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxOverlay && !lightboxOverlay.classList.contains('hidden')) {
      closeLightbox();
    }
  });

  // Experience
  const experienceContainer = document.getElementById('experienceContainer');
  portfolioData.experience.forEach((exp, idx) => {
    const item = document.createElement('div');
    item.className = "exp-item";

    // Choose icon based on iconType
    let iconSvg = '';
    if (exp.iconType === 'circle') iconSvg = `<circle cx="11" cy="11" r="9" stroke="var(--olive)" stroke-width="1.5" fill="none"/><path d="M8 11l2 2 4-4" stroke="var(--olive)" stroke-width="1.5" fill="none"/>`;
    else if (exp.iconType === 'rect') iconSvg = `<rect x="3" y="6" width="16" height="12" rx="2" stroke="var(--olive)" stroke-width="1.5" fill="none"/><path d="M3 6l8 5 8-5" stroke="var(--olive)" stroke-width="1.5" fill="none"/>`;
    else iconSvg = `<path d="M4 4h14v14H4z" stroke="var(--olive)" stroke-width="1.5" fill="none"/><path d="M8 11h6M11 8v6" stroke="var(--olive)" stroke-width="1.5" fill="none"/>`;

    item.innerHTML = `
      <div class="exp-icon"><svg width="22" height="22" viewBox="0 0 22 22">${iconSvg}</svg></div>
      <div class="exp-content">
        <span class="mono-tag exp-date">${exp.date}</span>
        <h3 class="exp-role">${exp.title}</h3>
        <span class="exp-company">${exp.company}</span>
        <p class="exp-desc">${exp.description}</p>
      </div>
    `;
    experienceContainer.appendChild(item);

    // Add divider if not the last item
    if (idx < portfolioData.experience.length - 1) {
      const divider = document.createElement('div');
      divider.className = "exp-divider";
      experienceContainer.appendChild(divider);
    }
  });

  // Certifications
  const certsContainer = document.getElementById('certsContainer');
  portfolioData.certifications.forEach(cert => {
    const li = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = `✦ ${cert.title} — ${cert.issuer}, ${cert.year}`;
    li.appendChild(textSpan);

    if (cert.hasProof !== false) {
      li.tabIndex = 0;
      li.setAttribute('role', 'button');
      li.setAttribute('aria-label', `View certificate: ${cert.title}`);
      li.style.cursor = 'pointer';

      const proofSpan = document.createElement('span');
      proofSpan.className = 'cert-proof-text';
      proofSpan.textContent = 'view proof ↗';
      li.appendChild(proofSpan);

      li.addEventListener('click', () => openCertModal(cert));
      li.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCertModal(cert);
        }
      });
    } else {
      li.style.cursor = 'default';
    }

    certsContainer.appendChild(li);
  });

  // ── CERTIFICATE MODAL LOGIC ──
  const certModalOverlay = document.getElementById('certModalOverlay');
  const certModalClose = document.getElementById('certModalClose');
  const certModalContent = document.getElementById('certModalContent');
  const certModalTitle = document.getElementById('certModalTitle');
  const certModalMeta = document.getElementById('certModalMeta');
  const certModalLink = document.getElementById('certModalLink');

  function openCertModal(cert) {
    if (!certModalOverlay) return;

    // Prevent background scroll
    document.body.style.overflow = 'hidden';

    // Clear and populate content
    certModalContent.innerHTML = '';
    const fileExt = cert.certificateFile.split('.').pop().toLowerCase();

    if (fileExt === 'pdf') {
      const iframe = document.createElement('iframe');
      iframe.src = cert.certificateFile;
      iframe.setAttribute('title', cert.title);
      certModalContent.appendChild(iframe);
    } else {
      const img = document.createElement('img');
      img.src = cert.certificateFile;
      img.alt = cert.title;
      certModalContent.appendChild(img);
    }

    // Populate metadata
    certModalTitle.textContent = cert.title;
    certModalMeta.textContent = `${cert.issuer}, ${cert.year}`;
    certModalLink.href = cert.certificateFile;

    // Display modal and trigger animation
    certModalOverlay.classList.remove('hidden');
    void certModalOverlay.offsetWidth; // force a reflow
    certModalOverlay.classList.add('active');
  }

  function closeCertModal() {
    if (!certModalOverlay) return;

    certModalOverlay.classList.remove('active');

    // Wait for transition duration (~350ms) before hiding
    setTimeout(() => {
      if (!certModalOverlay.classList.contains('active')) {
        certModalOverlay.classList.add('hidden');
        document.body.style.overflow = ''; // restore scrolling
        certModalContent.innerHTML = '';
      }
    }, 350);
  }

  if (certModalClose) {
    certModalClose.addEventListener('click', closeCertModal);
  }

  // Close on backdrop click
  if (certModalOverlay) {
    certModalOverlay.addEventListener('click', (e) => {
      if (e.target === certModalOverlay || e.target.classList.contains('cert-modal-container')) {
        closeCertModal();
      }
    });
  }

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModalOverlay && certModalOverlay.classList.contains('active')) {
      closeCertModal();
    }
  });

  // Contact links
  const contactLinksContainer = document.getElementById('contactLinksContainer');
  const d = portfolioData.contact;
  contactLinksContainer.innerHTML = `
    <a href="tel:${d.phone.replace(/\s+/g, '')}" class="social-link-item">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      <span>${d.phone}</span>
    </a>
    <a href="mailto:${d.email}" class="social-link-item">
      <svg width="20" height="20" viewBox="0 0 20 20"><rect x="1" y="4" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M1 4l9 6 9-6" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
      <span>${d.email}</span>
    </a>
    <a href="${d.socials.linkedin}" target="_blank" rel="noopener" class="social-link-item">
      <svg width="20" height="20" viewBox="0 0 20 20"><path d="M4 2a2 2 0 100 4 2 2 0 000-4zM2 8h4v10H2V8zm7 0h3.5v1.4h.05C13.2 8.5 14.6 8 16 8c3.2 0 4 2.1 4 4.8V18h-4v-4.6c0-1.1 0-2.5-1.5-2.5S13 12.2 13 13.3V18H9V8z" fill="currentColor"/></svg>
      <span>LinkedIn</span>
    </a>
    <a href="${d.socials.github}" target="_blank" rel="noopener" class="social-link-item">
      <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 0C4.5 0 0 4.5 0 10c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7C5 17.9 4.4 16 4.4 16c-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0020 10C20 4.5 15.5 0 10 0z" fill="currentColor"/></svg>
      <span>GitHub</span>
    </a>
    <div class="social-link-item" style="opacity: 1; pointer-events: none; margin-top: 8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      <span>${d.location}</span>
    </div>
  `;


  /* ---------------------------------------------------------
     [3] APP LOGIC (Audio, Nav, Scroll Animations)
     --------------------------------------------------------- */
  const audio = document.getElementById('bgAudio');
  const sidebarCdBtn = document.getElementById('sidebarCdBtn');
  const sidebarDisc = document.getElementById('sidebarDisc');
  const sidebarPlayIcon = document.getElementById('sidebarPlayIcon');
  const sidebarPauseIcon = document.getElementById('sidebarPauseIcon');
  const heroCdBtn = document.getElementById('heroCdBtn');
  const heroDisc = document.getElementById('heroDisc');
  const playerPlayBtn = document.getElementById('playerPlayBtn');
  const playerPlayIcon = document.getElementById('playerPlayIcon');
  const playerPauseIcon = document.getElementById('playerPauseIcon');
  const playerDisc = document.getElementById('playerDisc');
  const waveform = document.getElementById('waveform');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const topNavLinks = document.querySelectorAll('.top-nav .nav-link');
  const sidebarNavLinks = document.querySelectorAll('.sidebar-nav-link');
  const mobileTabItems = document.querySelectorAll('.tab-item');
  const sections = document.querySelectorAll('.section');

  // Because reveal items are generated, we must re-select them here
  const revealItems = document.querySelectorAll('.reveal-item, .project-card, .skill-card, .exp-item');
  const contactForm = document.getElementById('contactForm');

  // ── AUDIO PLAYER ──
  let isPlaying = false;
  let hasPlayedAudioBefore = false;
  const heroMusicStatus = document.getElementById('heroMusicStatus');
  const heroWaveform = document.getElementById('heroWaveform');

  function togglePlay() {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().then(() => {
        if (!hasPlayedAudioBefore) {
          hasPlayedAudioBefore = true;
          const aboutTarget = document.getElementById('about');
          if (aboutTarget) {
            aboutTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }).catch(() => {
        // Browser blocked autoplay
      });
    }
  }

  function updatePlayState(playing) {
    isPlaying = playing;
    if (sidebarDisc) sidebarDisc.classList.toggle('spinning', playing);
    if (sidebarPlayIcon) sidebarPlayIcon.classList.toggle('hidden', playing);
    if (sidebarPauseIcon) sidebarPauseIcon.classList.toggle('hidden', !playing);
    if (heroDisc) heroDisc.classList.toggle('spinning', playing);
    if (playerDisc) playerDisc.classList.toggle('spinning', playing);
    if (playerPlayIcon) playerPlayIcon.classList.toggle('hidden', playing);
    if (playerPauseIcon) playerPauseIcon.classList.toggle('hidden', !playing);
    if (waveform) waveform.classList.toggle('playing', playing);

    // Show hero status widget and toggle waveform
    if (heroMusicStatus && hasPlayedAudioBefore) {
      heroMusicStatus.classList.remove('hidden');
    }
    if (heroWaveform) heroWaveform.classList.toggle('playing', playing);
  }

  if (audio) {
    audio.addEventListener('play', () => updatePlayState(true));
    audio.addEventListener('pause', () => updatePlayState(false));
    audio.addEventListener('ended', () => updatePlayState(false));
  }

  [sidebarCdBtn, heroCdBtn, playerPlayBtn].forEach(btn => {
    if (btn) btn.addEventListener('click', togglePlay);
  });

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.addEventListener('click', () => { if (audio) { audio.currentTime = 0; } });
  if (nextBtn) nextBtn.addEventListener('click', () => { if (audio) { audio.currentTime = 0; } });

  // ── MOBILE HAMBURGER ──
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ── SMOOTH SCROLL NAV ──
  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  topNavLinks.forEach(link => link.addEventListener('click', scrollToSection));
  sidebarNavLinks.forEach(link => link.addEventListener('click', scrollToSection));
  mobileTabItems.forEach(link => link.addEventListener('click', scrollToSection));
  document.querySelectorAll('.nav-cta, .hero-buttons a[href^="#"]').forEach(link => {
    link.addEventListener('click', scrollToSection);
  });

  // ── ACTIVE SECTION TRACKING ──
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          topNavLinks.forEach(link => link.classList.toggle('active', link.dataset.section === id));
          sidebarNavLinks.forEach(link => link.classList.toggle('active', link.dataset.section === id));
          mobileTabItems.forEach(item => item.classList.toggle('active', item.dataset.section === id));
        }
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
  );

  sections.forEach(section => sectionObserver.observe(section));

  // ── SCROLL REVEAL ANIMATIONS ──
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
  );

  // Setup stagger and observe
  // Note: Since items load synchronously, we query them inside each section
  sections.forEach(section => {
    // Collect reveal elements, ensuring they start in correct state
    const items = section.querySelectorAll('.reveal-item, .project-card, .skill-card, .exp-item');
    items.forEach((item, idx) => {
      if (!item.classList.contains('reveal-item')) {
        item.classList.add('reveal-item'); // Add class to dynamically generated things to ensure animation
      }
      item.style.transitionDelay = `${idx * 0.1}s`;
      revealObserver.observe(item);
    });
  });

  // ── CONTACT FORM ──
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-submit');
      const original = btn.textContent;
      btn.textContent = 'Message Sent! ✓';
      btn.style.background = 'var(--terracotta)';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        contactForm.reset();
      }, 2500);
    });
  }

  // ── CURSOR STAR EFFECT ──
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

  if (!isReducedMotion && !isCoarsePointer) {
    const cursorContainer = document.createElement('div');
    cursorContainer.id = 'cursor-stars-container';
    document.body.appendChild(cursorContainer);

    let lastStarTime = 0;
    const STAR_THROTTLE = 100;

    function createStar(x, y, isClick = false, isTiny = false) {
      const star = document.createElement('div');
      star.className = 'cursor-star';

      let size;
      if (isClick && !isTiny) {
        size = Math.random() * 10 + 15;
      } else if (isClick && isTiny) {
        size = Math.random() * 4 + 4;
      } else {
        size = Math.random() * 6 + 5;
      }

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 20 20"><polygon points="10,0 12.5,7 20,7.5 14.5,12.5 16,20 10,16 4,20 5.5,12.5 0,7.5 7.5,7" fill="none" stroke="var(--olive)" stroke-width="1.5"/></svg>`;

      const rot = Math.random() * 360;
      star.style.setProperty('--rot', `${rot}deg`);

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * (isClick ? (isTiny ? 60 : 20) : 15);
      const dy = (Math.random() - 0.5) * (isClick ? (isTiny ? 60 : 20) : 15) - (isClick ? 0 : 15);

      star.style.setProperty('--dx', `${dx}px`);
      star.style.setProperty('--dy', `${dy}px`);

      if (isClick) {
        star.classList.add(isTiny ? 'star-burst-tiny' : 'star-burst');
      } else {
        star.classList.add('star-trail');
      }

      cursorContainer.appendChild(star);

      const duration = isClick ? (Math.random() * 200 + 400) : (Math.random() * 300 + 600);

      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      }, duration);
    }

    window.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastStarTime > STAR_THROTTLE) {
        createStar(e.clientX, e.clientY);
        lastStarTime = now;
      }
    }, { passive: true });

    window.addEventListener('click', (e) => {
      createStar(e.clientX, e.clientY, true, false);
      const numStars = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < numStars; i++) {
        setTimeout(() => {
          createStar(e.clientX, e.clientY, true, true);
        }, i * 20);
      }
    }, { passive: true });
  }

})();
