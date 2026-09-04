export type CaseSection = {
  title: string
  /** paragraphs; can include simple text */
  body: string[]
  /** optional image shown at the end of the section */
  image?: string
}

export type Project = {
  slug: string
  name: string
  /** secondary label under name on title, e.g. "Engineering INC." */
  suffix?: string
  category: string
  image: string
  /** optional hero videos for the case study page — replaces the static image */
  heroVideos?: { label: string; src: string }[]
  /** video that plays on card hover */
  hoverVideo?: string
  /** optional font-family for the hero title (CSS value) */
  titleFont?: string
  roles: string
  shortRoles: string[]
  description: string
  tags: string[]
  /** 'UI/UX' | 'Social Media' — used for Works page filter tabs (defaults to UI/UX if omitted) */
  filterCategory?: 'UI/UX' | 'Social Media'
  figmaUrl?: string
  figmaLabel?: string
  overview: string[]
  table: {
    tools: string
    role: string
    timeline: string
    industry: string
  }
  sections: CaseSection[]
}

export const projects: Project[] = [
  {
    slug: 'zagrosia-engineering',
    name: 'Zagrosia',
    suffix: 'Engineering INC.',
    category: 'UI/UX & Graphic Designer',
    image: '/Zagrosia.png',
    hoverVideo: '/Zagrosia_Desktop.mp4',
    heroVideos: [
      { label: 'Preview', src: '/Zagrosia_StudyCase.mp4' },
    ],
    roles: 'UI/UX Designer & UX Researcher',
    shortRoles: ['UI/UX', 'Product Designer', 'Branding'],
    description:
      'Designed wireframes, interactive prototypes, branding, and marketing materials for modern, user-centered digital experiences.',
    tags: ['Figma', 'Illustrator', 'Photoshop'],
    figmaUrl: 'https://www.zagrosia.ca/',
    figmaLabel: 'View the Website',
    overview: [
      'Zagrosia Engineering is a newly established structural engineering firm backed by more than **35 years of industry experience** and **200+ completed projects**. As the company prepared to launch its digital presence, it needed a website and visual identity that would communicate credibility, innovation, and technical expertise while differentiating itself within a competitive engineering industry.',
      'As the **UI/UX Designer and UX Researcher**, I was responsible for designing the company\'s digital experience from the ground up. My role extended beyond website design to include **competitive analysis, brand refinement, visual identity, business card redesign, wireframing, interface design, and interactive prototyping**.',
      'The primary goal was to create a **professional, user-centered website** that effectively communicates Zagrosia\'s expertise, simplifies complex engineering services, and establishes trust with potential clients while reflecting the company\'s modern, technology-driven approach.',
    ],
    table: {
      tools: 'Figma, Illustrator, Photoshop',
      role: 'UI/UX Designer & UX Researcher',
      timeline: '10 Weeks',
      industry: 'Structural Engineering',
    },
    sections: [
      {
        title: 'Challenge',
        body: [
          'Designing Zagrosia\'s digital presence involved more than creating a visually appealing website. As a newly established company, the challenge was to communicate **decades of engineering expertise** while building credibility with prospective clients who had no prior familiarity with the brand.',
          'The project presented several design and communication challenges that required balancing business goals with user-centered design principles.',
          '**Establishing Trust for a New Brand**',
          'Although Zagrosia was backed by more than 35 years of professional experience and over 200 completed projects, its digital presence was starting from scratch. The website needed to **immediately communicate credibility, professionalism, and technical expertise**.',
          '**Designing Within Existing Brand Constraints**',
          'Rather than creating a completely new identity, the client wanted to preserve important elements of the existing logo and branding. The challenge was to **modernize the visual identity** while respecting the company\'s vision and established symbolism.',
          '**Communicating Complex Engineering Services**',
          'Structural engineering involves highly technical information that can feel overwhelming to potential clients. The interface needed to **organize complex services into clear, approachable content** that users could easily understand.',
          '**Bridging the Gap Between Design and Client Understanding**',
          'One of the biggest challenges emerged during the wireframing stage. While low-fidelity wireframes clearly communicated the structure from a designer\'s perspective, they were difficult for the client to interpret due to their unfamiliarity with UX design processes. This required **adapting both the design workflow and the presentation style** to better support stakeholder understanding and collaboration.',
          '**Balancing Creativity with Client Expectations**',
          'Throughout the project, the client\'s vision evolved as new ideas emerged. Successfully navigating these changes required **flexibility, open communication, and iterative refinement** while maintaining a consistent design direction.',
        ],
      },
      {
        title: 'Research',
        body: [
          'Before beginning the design process, I conducted **competitive analysis** to better understand the structural engineering industry and identify opportunities for Zagrosia to differentiate itself.',
          'Because I entered the project with no prior experience in structural engineering, research became an essential first step. Understanding the industry, the client\'s services, and the expectations of potential customers allowed me to make **informed design decisions** rather than relying on assumptions.',
          '**Research Insights**',
          'The competitive analysis revealed several recurring patterns across engineering websites.',
          '**Technical Information Often Overwhelmed Users**',
          'Many competitor websites relied on dense paragraphs and technical terminology, making services difficult to understand for prospective clients without engineering knowledge.',
          '**Limited Visual Storytelling**',
          'Most competitors emphasized technical information but lacked engaging visuals and clear content hierarchy, resulting in websites that felt dated and difficult to navigate.',
          '**Trust Was a Primary Decision Factor**',
          'Engineering clients seek confidence before contacting a company. Credentials, project experience, certifications, and professional presentation all played an important role in establishing credibility.',
          '**Opportunity for Innovation**',
          'Few competitors highlighted technological innovation or modern engineering workflows. This created an opportunity to position Zagrosia as a **forward-thinking firm** that combines decades of engineering expertise with automation, AI-assisted workflows, and digital innovation.',
          '"Design Opportunity: Create a website that balances professionalism with accessibility by simplifying technical information, strengthening visual hierarchy, and showcasing Zagrosia\'s unique blend of engineering expertise and innovation."',
        ],
      },
      {
        title: 'Design Process',
        body: [
          'The project began by refining Zagrosia\'s visual identity before expanding into a complete digital experience. Every stage of the process combined **research, client collaboration, and iterative design** to ensure that business goals and user needs remained aligned.',
          '**Brand Identity**',
          'Working closely with the client, I refined the company\'s visual identity while preserving the elements that were most meaningful to the brand. Blue was selected as the primary color to communicate **trust, professionalism, and reliability**. Multiple typography and color combinations were explored before establishing a cohesive identity.',
          'The logo refinement presented a unique challenge. Rather than creating an entirely new mark, I modernized the existing concept inspired by the **Zagros mountain range**, where the letters Z and E are integrated into the mountain form. Through several iterations, the design evolved into a cleaner and more versatile identity while preserving its original meaning.',
          '**Business Card Design**',
          'The client initially provided an existing business card and requested a modern redesign while maintaining the established brand identity. As the project progressed, the client\'s vision evolved, leading to a **completely new concept** that required multiple rounds of refinement before reaching the final approved design.',
          '**Wireframing**',
          'I began the website design by creating low-fidelity wireframes that defined the **information architecture, content hierarchy, and overall page structure**. While these wireframes effectively communicated the layout from a design perspective, they proved difficult for the client to visualize.',
          'Recognizing this communication gap, I adapted the process by moving directly into **medium-fidelity wireframes** with realistic layouts and visual elements. This adjustment significantly improved collaboration and helped the project progress more efficiently toward the final interface.',
          '**Interface Design**',
          'With a stronger shared understanding of the project vision, I explored multiple interface concepts before developing the final high-fidelity designs. Each iteration refined the **visual hierarchy, layout, typography, and interaction patterns** while balancing creativity with the client\'s evolving expectations.',
          '**Interactive Prototype**',
          'After the interface was approved, I developed an interactive prototype to demonstrate the complete user experience. To create a distinctive yet intuitive navigation system, I designed a **collapsible sidebar with expandable labels** — providing a unique navigation experience while maintaining accessibility and maximizing available screen space.',
        ],
      },
      {
        title: 'Solution',
        body: [
          'The final solution combines **strategic branding with user-centered interface design** to establish Zagrosia as a modern, trustworthy engineering firm.',
          'The website organizes complex engineering services into clear, accessible sections while emphasizing the company\'s decades of experience, innovative technologies, and client-focused approach. A **strong visual hierarchy, intuitive navigation, and carefully structured content** help users quickly understand available services and confidently explore the website.',
          'Beyond usability, the solution creates a **consistent brand experience across every touchpoint** — from the refined logo and business card to the responsive website and interactive prototype — ensuring that every element communicates professionalism, innovation, and technical excellence.',
        ],
      },
      {
        title: 'Final Design',
        body: [
          'The final website presents Zagrosia Engineering as a **forward-thinking structural engineering firm** that successfully combines decades of industry experience with modern technology.',
          'The interface emphasizes clarity through organized content sections, intuitive navigation, and strong visual hierarchy, making complex engineering services easier to understand **without compromising technical credibility**.',
          'The **collapsible sidebar navigation** creates a distinctive browsing experience while remaining intuitive for first-time visitors. Throughout the website, consistent branding, thoughtful typography, and carefully balanced layouts reinforce professionalism while guiding users naturally through the company\'s services, projects, educational platform, and areas of expertise.',
          'The result is a **scalable digital experience** that strengthens Zagrosia\'s brand, builds trust with prospective clients, and supports the company\'s long-term growth.',
        ],
      },
      {
        title: 'Reflection',
        body: [
          'Working on Zagrosia Engineering was a valuable opportunity to experience the **complete lifecycle of a real-world design project** — from research and brand development to interface design and stakeholder collaboration.',
          'One of the most important lessons I learned was that **successful communication is just as important as strong visual design**. Adapting my workflow to better align with the client\'s understanding, rather than expecting them to understand traditional UX processes, led to more productive collaboration and better design outcomes.',
          'This project also strengthened my ability to **balance user needs, business objectives, and evolving client feedback** while maintaining a cohesive design direction. Most importantly, it reinforced that thoughtful UX design extends beyond creating attractive interfaces — it requires empathy, flexibility, strategic thinking, and the ability to translate complex ideas into intuitive digital experiences.',
        ],
      },
    ],
  },
  {
    slug: 'dogwood-landscaping',
    name: 'Dogwood',
    suffix: 'Landscaping & Gardening',
    category: 'UI/UX Design • Digital Creative',
    image: '/Dogwood.png',
    hoverVideo: '/Dogwood.mp4',
    heroVideos: [{ label: 'Preview', src: '/Dogwood_StudyCase.mp4' }],
    roles: 'UI/UX Design, Branding, Web Development',
    shortRoles: ['UI/UX', 'Branding', 'Web Dev'],
    description:
      'Freelance project involving wireframes, responsive web design, and front-end development tailored to the brand\'s identity.',
    tags: ['Figma', 'Photoshop', 'Web Dev', 'Canva'],
    figmaUrl: 'https://www.dogwoodlandgardening.com/',
    figmaLabel: 'View the Website',
    overview: [
      'Dogwood Landscaping is a **locally owned Canadian** landscaping and property maintenance company offering services such as **landscaping, gardening, pressure washing, gutter cleaning, and seasonal outdoor maintenance**.',
      'The client\'s goal was to establish a **professional online presence** that clearly communicates their services while making it easy for potential customers to request quotes and contact the business. Because the company\'s target audience ranges from **young homeowners to seniors**, usability and accessibility were key priorities.',
      'As the UI/UX designer, my objective was to create a **clean, intuitive, and user-friendly website** with straightforward navigation, ensuring visitors of all ages could easily find information, explore services, and take action with confidence.',
    ],
    table: {
      tools: 'Figma, Illustrator, Photoshop, Canva, React, VSC',
      role: 'UI/UX Designer, Branding, Developer',
      timeline: '4 Weeks',
      industry: 'Landscaping & Gardening',
    },
    sections: [
      {
        title: 'Challenge',
        body: [
          'Dogwood Landscaping serves a **broad audience**, including homeowners with varying levels of digital experience. Many visitors arrive with a single goal: to **quickly determine whether the company offers the service they need** and how to get in touch.',
          'The challenge was to design an experience that **minimizes effort** and guides users naturally through the website. Visitors should be able to understand the company\'s services simply by scrolling, with each section featuring a **clear call-to-action** that encourages them to request a quote or make contact.',
          'To support usability for all age groups, **essential information** — including the company\'s primary services, value proposition, and contact options — was placed prominently within the **hero section** and reinforced throughout the homepage. The navigation was intentionally kept **simple, predictable, and easy to understand**, ensuring users could find what they needed without confusion.',
          '"How might we help users find the right service with minimal effort?"',
        ],
      },
      {
        title: 'Research',
        body: [
          '**Brand Research**',
          'The project began with developing a **brand identity** that reflects both the company\'s services and its local roots. The objective was to create a visual identity that feels authentic to **British Columbia** while communicating professionalism, trust, and a strong connection to nature.',
          '**Finding the Right Symbol**',
          'As part of the research process, I explored plants and natural elements native to British Columbia to identify a **meaningful symbol** for the brand. This led to the **Dogwood flower**, the province\'s official floral emblem. Its clean, elegant form aligned with the desired brand values of **reliability, quality, and natural beauty**, making it a strong foundation for the company\'s visual identity.',
          '"The Dogwood flower is British Columbia\'s provincial floral emblem, making it a meaningful symbol that reinforces the company\'s local identity and strengthens brand recognition."',
          '**Naming the Brand**',
          'The name **Dogwood Landscaping & Gardening** was selected to combine memorability with clarity. By pairing a recognizable local symbol with a descriptive service name, the brand immediately communicates both its identity and the services it provides, helping customers **understand the business at first glance**.',
          '**Competitive Analysis**',
          'To better understand industry standards and identify opportunities for differentiation, I analyzed several landscaping and property maintenance websites. The review revealed common usability and communication patterns that informed the design direction for this project.',
          '**Key Findings**',
          '* Most websites prioritized **large amounts of information** over clear visual hierarchy.',
          '* Service offerings were often **difficult to scan**, requiring users to read lengthy blocks of text.',
          '* Calls-to-action **lacked prominence**, making it harder for users to take the next step.',
          '* Many websites relied on **generic layouts with limited visual storytelling**, reducing engagement and brand memorability.',
          '"Design Opportunity: Create a website that balances clear information with an engaging visual experience, allowing users to quickly understand the company\'s services and confidently take action."',
          '**UX Goals**',
          'The research findings established the following design goals:',
          '* Present services in a **clear, scannable format**.',
          '* **Minimize friction** when requesting a quote or contacting the business.',
          '* Build trust through **authentic visuals, strong branding, and clear calls-to-action**.',
          '* Create a **calm, intuitive experience** that is accessible to users of all ages and levels of digital familiarity.',
        ],
      },
      {
        title: 'Design Process',
        body: [
          '**Visual Identity**',
          'The visual identity was designed to communicate **professionalism, reliability, and a strong connection to nature** while remaining approachable. Inspired by the Dogwood flower, the logo combines organic forms with a circular composition to create a **balanced and timeless mark** that reflects growth, stability, and continuity.',
          'Typography follows the circular form, creating a **seal-like aesthetic** that reinforces craftsmanship, trust, and a locally established brand.',
          '**Colour Palette**',
          'The colour palette draws inspiration from **British Columbia\'s natural landscape**.',
          '* **Warm neutrals** (#E2CFA9, #F6EDE0, #FFFBF8) — create a welcoming and approachable foundation.',
          '* **Earthy greens** (#6F9A73, #585E47) — reinforce nature, growth, and sustainability.',
          '* **Accent tones** (#E4AEB5, #111111) — provide contrast while adding warmth and visual emphasis.',
          '**Typography**',
          'The typography system balances **personality with readability**.',
          '* **Libre Baskerville** — Used for headings to establish elegance, credibility, and a premium feel.',
          '* **Roboto** — Used for body copy to ensure excellent readability across desktop and mobile devices.',
          '**Wireframing**',
          '**Low-Fidelity Exploration**',
          'The design process began with **low-fidelity wireframes** to establish the website\'s overall structure before focusing on visual details. Early exploration centered on creating a clear **content hierarchy**, intuitive navigation, and a logical user flow that would help visitors quickly find relevant information.',
          '**Layout Exploration**',
          'Multiple layout variations were explored to determine the most effective content organization. The final structure prioritized:',
          '* Immediate visibility of **key services**',
          '* A strong first impression through the **hero section**',
          '* Natural progression toward the gallery, testimonials, and contact sections',
          '* **Clear calls-to-action** throughout the user journey',
          'Once the layout was validated, the design evolved into **high-fidelity wireframes**, where branding, typography, spacing, and visual hierarchy were refined into a cohesive interface.',
          '**Designed for Action**',
          'Every design decision was guided by a single objective: **helping users find information quickly and take action with confidence**. From the homepage to the contact form, the interface minimizes unnecessary complexity, allowing visitors to navigate effortlessly, request a quote, and connect with the business.',
          '**Responsiveness** was considered throughout the design process, ensuring layouts, spacing, typography, and interactive elements adapt seamlessly across different screen sizes without compromising usability.',
        ],
      },
      {
        title: 'Solution',
        body: [
          'The solution focused on creating a website that **balances visual appeal with usability**, making it easy for visitors to understand the company\'s services and confidently take the next step.',
          'The experience was designed around a **clear information hierarchy** that guides users naturally from discovering the company\'s value proposition to exploring services, viewing completed projects, and requesting a quote. Rather than overwhelming users with excessive information, content is organized into **concise, scannable sections** supported by meaningful imagery and clear calls-to-action.',
          'Because the target audience includes users with **varying levels of digital experience**, the interface prioritizes simplicity, accessibility, and intuitive navigation. Key information is surfaced early, allowing visitors to quickly determine whether the company offers the services they need without unnecessary searching.',
          '"Every design decision was made with a single objective: reduce friction, build trust, and create a seamless journey from the first visit to customer inquiry."',
        ],
      },
      {
        title: 'Final Design',
        body: [
          'The final design reflects Dogwood Landscaping\'s identity through a **modern, nature-inspired interface** that feels professional, approachable, and locally rooted.',
          'The homepage immediately establishes the company\'s value through a **prominent hero section**, followed by clearly organized service categories that allow users to scan and identify relevant services at a glance. Authentic project photography showcases completed work, reinforcing credibility while helping potential clients **visualize the quality** of the company\'s services.',
          'A **natural colour palette** inspired by British Columbia\'s landscape, combined with refined typography and generous spacing, creates a calm and welcoming visual experience. Consistent design patterns and intuitive navigation improve readability while encouraging users to continue exploring the website.',
          'Strategically placed **calls-to-action** throughout the experience make it easy for visitors to request a quote, contact the company, or learn more about available services. The interface was designed **responsively from the outset**, ensuring a consistent and accessible experience across desktop, tablet, and mobile devices.',
          '"The result is a cohesive digital experience that strengthens the company\'s brand while helping users accomplish their goals quickly and confidently."',
        ],
      },
      {
        title: 'Reflection',
        body: [
          'This project reinforced that **effective design extends far beyond visual aesthetics**. Every design decision should solve a user problem while supporting meaningful business objectives.',
          'Through brand research, competitive analysis, wireframing, and iterative design, I learned the importance of **balancing business goals with user needs**. Research revealed opportunities to improve information hierarchy, simplify navigation, and create a more engaging visual experience than many existing landscaping websites.',
          'One of the most valuable lessons from this project was understanding how **thoughtful design choices** — from branding and typography to layout and interaction design — work together to **build trust and improve usability**. By prioritizing clarity, accessibility, and consistency throughout the process, I was able to create a solution that is both visually engaging and easy to use.',
          'This project strengthened my ability to **translate research into purposeful design decisions** while creating an experience that feels intuitive for users and valuable for the client.',
        ],
      },
    ],
  },
  {
    slug: 'alpinelink',
    name: 'ALPINELINK',
    category: 'UI/UX Design',
    image: '/Alpine.png',
    hoverVideo: '/ALPINELINK.mp4',
    heroVideos: [{ label: 'Preview', src: '/Alpine_StudyCase.mp4' }],
    roles: 'UI/UX Designer',
    shortRoles: ['UI/UX', 'Product', 'Mobile'],
    description:
      'An app concept for hikers and outdoor enthusiasts, focused on accessibility, usability, and a more practical, visually appealing experience.',
    tags: ['Figma', 'Photoshop', 'Illustrator'],
    figmaUrl: 'https://www.figma.com/proto/shmElE2YMrEHtmo37AlTfj/Untitled?node-id=1-2&t=KV2yPrrBPHsGq9gg-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    overview: [
      'AlpineLink is an **all-season outdoor adventure mobile app** designed for hikers, skiers, cyclists, and snowboarders. It brings together trail discovery, weather updates, activity tracking, and community features into a single platform, helping outdoor enthusiasts **plan adventures with greater confidence and convenience**.',
      'The primary goal was to create an **intuitive mobile experience** that enables users to quickly find reliable trail information, monitor changing weather conditions, record their activities, and connect with other adventurers — all while minimizing the effort required to access essential information.',
      'As the **UX Researcher and UI Designer**, my focus was to design an experience that balances exploration with usability. Every interaction was guided by three key principles: **delivering information with clarity**, supporting safer decision-making through accessible environmental data, and fostering a **sense of community** among outdoor enthusiasts.',
    ],
    table: {
      tools: 'Figma, Photoshop, Illustrator',
      role: 'UI/UX Designer',
      timeline: '3 Weeks',
      industry: 'Outdoor / Mobile App',
    },
    sections: [
      {
        title: 'Challenge',
        body: [
          'Designing an all-in-one outdoor adventure app required **balancing a wide range of user needs** without overwhelming the experience. Outdoor enthusiasts rely on accurate, accessible information to plan activities safely, yet many existing solutions require users to **switch between multiple apps** or navigate complex interfaces to find essential information.',
          'To better understand these challenges, I conducted **user interviews and a competitive analysis** of existing outdoor adventure applications. The research revealed several recurring pain points that informed the design direction.',
          '**Key Insights**',
          '* **Fragmented Experience** — Users often rely on multiple apps for trail discovery, weather forecasts, navigation, and community features, creating an inefficient planning process.',
          '* **Information Overload** — Large amounts of data are presented without clear hierarchy, making it difficult to quickly identify the most relevant information.',
          '* **Limited Offline Access** — Many existing solutions depend on a constant internet connection, reducing reliability in remote outdoor environments.',
          '* **Lack of Personalization** — Content is rarely tailored to users\' preferred activities, experience levels, or individual interests, resulting in a less relevant experience.',
          '"Design Challenge: How might we create a unified outdoor adventure app that delivers essential information clearly, supports safer decision-making, and reduces the need for users to switch between multiple applications?"',
        ],
      },
      {
        title: 'Research',
        body: [
          'To better understand the needs of outdoor enthusiasts, I conducted **user research** to identify common behaviors, goals, and challenges experienced before and during outdoor activities. The findings helped establish key design priorities and informed the app\'s **navigation, information architecture, and interaction patterns**.',
          '**User Persona**',
          '**Alex Torres** — Age: 29 · Location: Whistler, BC · Occupation: Software Developer & Weekend Adventurer',
          'Alex enjoys hiking, skiing, and mountain biking on weekends. He values efficiency and safety, preferring a **single platform** that helps him plan trips, monitor changing conditions, navigate unfamiliar trails, and record his adventures without switching between multiple apps.',
          '**User Goals**',
          '* Plan outdoor activities using **reliable trail and weather information**.',
          '* Discover new routes based on location and activity type.',
          '* Track and share completed adventures with friends.',
          '* Access essential maps and trail information in areas with **limited or no cellular service**.',
          '**Key Design Insights**',
          'The research highlighted that outdoor users often make decisions in **dynamic environments** where time, weather, and safety are critical. Information must be easy to understand at a glance, interactions should require minimal effort, and important features must remain accessible even in challenging conditions.',
          'These insights guided several core UX decisions:',
          '* Prioritize the most important information using a **clear visual hierarchy**.',
          '* Minimize cognitive load by presenting only the information users need at each stage of their journey.',
          '* Design for **one-handed interaction** to support use while wearing gloves or carrying equipment.',
          '* Ensure critical navigation and safety features remain available **offline**.',
          '**User Journey**',
          'The user journey maps how outdoor enthusiasts interact with the app before, during, and after each adventure.',
          '* **Plan** — Explore trails, review weather forecasts, and prepare a route before leaving.',
          '* **Start** — Launch the app with previously cached maps and essential trip information for quick access.',
          '* **Navigate** — Follow offline maps while monitoring location, elevation, and trail progress in real time.',
          '* **Monitor** — Receive live weather updates and changing trail conditions to support safer decision-making.',
          '* **Complete** — Automatically save completed activities and share achievements with the outdoor community.',
          '**UX Solutions**',
          'The research directly influenced several key design decisions:',
          '* **One-handed navigation** supports quick interactions during outdoor activities.',
          '* **Offline-first functionality** ensures essential information remains available in remote locations.',
          '* **Adaptive information hierarchy** prioritizes relevant content based on the user\'s activity and context.',
          '* **Persistent emergency access** keeps the SOS feature visible and accessible throughout the experience.',
        ],
      },
      {
        title: 'Design Process',
        body: [
          '**Designing for Outdoor Exploration**',
          'The interface was designed to support users **before, during, and after every adventure**. Because outdoor activities often require quick decisions in changing environments, the experience prioritizes glanceable information, intuitive navigation, and minimal interaction.',
          'Large immersive imagery reinforces the connection to nature, while layered interface components ensure essential information remains readable without distracting from the experience.',
          '**Information Architecture**',
          'The app is organized around **four primary experiences** that reflect a user\'s outdoor journey:',
          '* **Home** — Prepare and review upcoming adventures.',
          '* **Map** — Explore routes and navigate confidently.',
          '* **Weather** — Monitor changing environmental conditions.',
          '* **Profile** — Track progress, achievements, and personal activity history.',
          'This simplified navigation reduces cognitive load by keeping the most frequently used features **accessible within a single tap**.',
          '**Home Dashboard**',
          'The Home screen serves as the user\'s **personalized adventure hub**. Instead of overwhelming users with excessive information, the dashboard surfaces the most relevant content at a glance — including personal goals, recent activity, weekly progress, and recommended trails. The modular card layout allows users to quickly scan information while maintaining a clean and organized interface.',
          '**Interactive Map**',
          'Navigation is one of the most critical parts of the experience. The map combines **route visualization, elevation data, environmental information, and quick actions** into a single screen, allowing users to stay oriented without switching between multiple views. Floating controls provide easy access to map modes while preserving maximum visibility of the surrounding terrain.',
          '**Weather Experience**',
          'Weather conditions directly influence outdoor safety. Rather than presenting dense weather reports, the interface prioritizes the information users need most — including **temperature, hourly forecasts, terrain conditions, and avalanche risk**. Critical alerts are visually emphasized to support faster decision-making before and during an adventure.',
          '**Profile & Progress**',
          'The Profile screen transforms activity tracking into an engaging experience. Personal statistics, achievements, and yearly progress are displayed using clear visual hierarchy, encouraging users to **monitor their growth** while maintaining quick access to account settings and premium features.',
          '**Visual Design**',
          'The visual language draws inspiration from **alpine landscapes, crisp mountain air, and natural lighting** to create an experience that feels immersive, calm, and adventurous. A combination of full-screen photography, soft transparency, and rounded interface components allows the scenery to remain central while preserving readability and usability.',
          '**Colour Palette**',
          'The palette reflects the natural environment.',
          '* **Sky Blue** — Establishes trust and reinforces the outdoor theme.',
          '* **Deep Slate Blue** — Provides structure and contrast.',
          '* **Snow White** — Improves readability and creates visual balance.',
          '* **Accent Colours** — Highlight important actions, notifications, and safety information without overwhelming the interface.',
          '**Typography & Iconography**',
          'A **clean sans-serif typeface** was selected to maximize readability across different lighting conditions and screen sizes. Rounded icons complement the organic visual language while remaining simple enough to be recognized at a glance. Strong contrast ratios improve visibility in bright outdoor environments where screen readability is especially important.',
          '**Design Principles**',
          '* **Clarity** — Present essential information in a way that users can understand within seconds.',
          '* **Safety** — Prioritize weather conditions, navigation, and emergency features to support informed outdoor decisions.',
          '* **Trust** — Use consistent visual patterns, authentic imagery, and clear hierarchy to build confidence throughout the experience.',
          '* **Adventure** — Capture the excitement of outdoor exploration through immersive visuals while maintaining a clean and functional interface.',
        ],
      },
      {
        title: 'Solution',
        body: [
          'The solution was designed to **unify every stage of an outdoor adventure** into a single, intuitive mobile experience. Rather than requiring users to switch between separate apps for navigation, weather, activity tracking, and community features, AlpineLink brings these essential tools together within **one cohesive platform**.',
          'Guided by user research, the interface prioritizes the information users need most while **minimizing cognitive load**. A simplified navigation structure, clear visual hierarchy, and glanceable information allow users to quickly access trails, monitor weather conditions, navigate routes, and track personal progress with minimal interaction.',
          'Because outdoor environments present unique challenges, the experience was designed with **usability and safety at its core**. Critical information — including trail conditions, weather updates, and emergency features — is surfaced prominently to support informed decision-making before and during every adventure.',
          '"By combining immersive visuals with purposeful interactions, AlpineLink delivers an experience that is both engaging and highly functional, allowing users to focus on exploring rather than managing multiple tools."',
        ],
      },
      {
        title: 'Final Design',
        body: [
          'The final interface reflects the **energy and freedom of outdoor exploration** while maintaining a strong focus on clarity and usability.',
          'Large full-screen mountain photography creates an immersive connection to nature, while **translucent interface panels** preserve the surrounding scenery without compromising readability. Rounded components, generous spacing, and consistent visual patterns establish a calm, approachable interface that remains easy to navigate in dynamic outdoor environments.',
          'The **Home screen** provides a personalized dashboard where users can review goals, recent activity, and recommended trails at a glance. The **Map experience** combines route visualization, terrain information, and navigation tools into a single interface, reducing the need to switch between multiple screens while exploring.',
          'The **Weather screen** presents essential environmental information through a clear visual hierarchy, highlighting temperature, hourly forecasts, terrain conditions, and avalanche risk to support safer outdoor decisions. The **Profile screen** encourages continued engagement by organizing personal statistics, achievements, and activity history into an intuitive and motivating experience.',
          'Throughout the application, a consistent bottom navigation, scannable content, and strategically placed actions reduce friction and create a **seamless journey across every feature**. The interface was designed responsively to ensure a consistent experience across a variety of mobile devices while supporting one-handed interaction during outdoor activities.',
          '"The result is a cohesive digital experience that simplifies adventure planning, strengthens user confidence, and transforms complex outdoor information into an interface that feels natural, accessible, and enjoyable to use."',
        ],
      },
      {
        title: 'Reflection',
        body: [
          'This project strengthened my ability to **translate user research into thoughtful design solutions**. It reinforced the importance of balancing usability, safety, and visual design to create an experience that feels both intuitive and engaging.',
          '"Most importantly, it reminded me that great UX isn\'t about adding more features — it\'s about helping users achieve their goals with confidence and ease."',
        ],
      },
    ],
  },
  {
    slug: 'reddit-redesign',
    name: 'Reddit',
    suffix: 'Redesign',
    category: 'UI/UX Design',
    image: '/Reddit.png',
    hoverVideo: '/Reddit.mp4',
    heroVideos: [{ label: 'Preview', src: '/Reddit_StudyCase.mp4' }],
    roles: 'UI/UX Designer',
    shortRoles: ['UI/UX', 'Concept', 'Mobile'],
    description:
      'BCIT UI/UX project focused on redesigning Reddit with a cleaner, more modern, and user-friendly experience.',
    tags: ['Figma', 'Illustrator', 'Photoshop'],
    figmaUrl: 'https://www.figma.com/proto/Lm7j5gPEe7puHmVruRaYv6/Untitled?node-id=79-1182&t=x4iX0ZnA5cu9ehFV-1&scaling=scale-down&content-scaling=fixed&page-id=79%3A1181',
    overview: [
      'Reddit is one of the world\'s largest online discussion platforms, bringing together millions of users across thousands of communities to share knowledge, ask questions, and participate in conversations. Its community-driven content is one of its greatest strengths, but the mobile experience can sometimes make that content difficult to discover and navigate.',
      'This redesign reimagines the Reddit mobile app with a stronger focus on **usability, visual clarity, and personalization**. Rather than changing Reddit\'s core functionality, the project aims to refine the user experience by reducing interface complexity, improving content discovery, and creating a more engaging profile experience while preserving the platform\'s community-first identity.',
      '**Project Goals**',
      '* **Clarity** — Improve readability through stronger visual hierarchy, cleaner layouts, and reduced interface clutter.',
      '* **Discovery** — Help users find relevant communities, discussions, and answers more efficiently.',
      '* **Personalization** — Create richer user profiles that encourage self-expression and strengthen community identity.',
    ],
    table: {
      tools: 'Figma, Illustrator, Photoshop',
      role: 'UI/UX Designer',
      timeline: '3 Weeks',
      industry: 'Social / Mobile App',
    },
    sections: [
      {
        title: 'Challenge',
        body: [
          'To better understand the existing experience, I conducted a **UX audit** of Reddit\'s mobile application, focusing on how users browse content, discover communities, create posts, and interact with others. While Reddit excels at fostering community-driven discussions, several usability issues reduce the overall experience and make everyday tasks less efficient.',
          '**Cluttered Content Layout**',
          'Posts, advertisements, and promoted content often share similar visual treatments, making it difficult for users to quickly distinguish between different types of content. This increases cognitive load and slows content discovery.',
          '**Limited Profile Experience**',
          'User profiles provide limited opportunities for personalization, making it difficult for users to showcase their interests, achievements, and community identity.',
          '**Inefficient Content Discovery**',
          'Finding relevant discussions frequently depends on manual searching rather than intuitive exploration, making it harder for users to discover communities aligned with their interests.',
          '**Unclear Content Creation**',
          'The posting interface provides limited guidance when creating different types of posts, increasing friction for both new and returning users.',
          '**Underutilized Chat Experience**',
          'The messaging interface functions primarily as a conversation tool but lacks personalization and opportunities to discover related communities or continue meaningful engagement.',
          '"How might we redesign Reddit\'s mobile experience to reduce interface complexity, improve content discovery, and encourage stronger user identity without compromising the familiarity and authenticity that make Reddit unique?"',
        ],
        image: '/Reddit_Before.png',
      },
      {
        title: 'Research',
        body: [
          'Before redesigning the interface, I explored how users interact with Reddit to better understand their **goals, behaviors, and frustrations**. The research combined a UX audit with user-centered methods, including a User Persona, User Scenario, Empathy Map, and Journey Map, to identify opportunities for improving navigation, content discovery, and personalization.',
          'Together, these research activities revealed that while Reddit offers an enormous amount of valuable content, the overall experience often feels overwhelming due to **visual clutter, inconsistent hierarchy, and limited opportunities for users to express their identity**.',
          '**Research Insights**',
          'The research uncovered four key opportunities that guided the redesign:',
          '**Improve Content Clarity**',
          'Users want to scan posts quickly without feeling overwhelmed. A clearer visual hierarchy and better separation between posts, advertisements, and links can reduce cognitive load and make browsing more efficient.',
          '**Simplify Content Discovery**',
          'Users frequently visit Reddit to find answers, follow trending discussions, and discover new communities. Relying primarily on search slows exploration, creating an opportunity to introduce more intuitive discovery features.',
          '**Strengthen User Identity**',
          'Profiles should represent more than basic account information. Users want richer profiles that showcase their interests, achievements, and community involvement, creating a stronger sense of belonging.',
          '**Encourage Community Engagement**',
          'Beyond reading posts, users expect meaningful ways to participate. Providing clearer content creation, personalized recommendations, and community-focused features encourages ongoing engagement throughout the platform.',
          '**User Persona**',
          'To represent Reddit\'s primary audience, I developed **Jordan Lee**, a 23-year-old university student who uses Reddit daily to stay informed about gaming, technology, and online communities. Jordan values speed, personalization, and intuitive navigation but becomes frustrated when cluttered layouts make information difficult to find.',
          '[image:/Reddit_User Persona.jpg]',
          '**User Scenario**',
          '[image:/Reddit_User Scenario.jpg]',
          '**Empathy Map**',
          'The empathy mapping exercise provided a deeper understanding of Jordan\'s motivations and emotional responses.',
          '[image:/Reddit_Empathy map.jpg]',
          '**Journey Map**',
          'The journey map highlighted opportunities at every stage: improving visibility of trending content on the Home feed, reducing clutter through a card-based layout, introducing guided discovery with Trending Questions and Top Answers, creating richer user profiles, and recommending communities based on user interests.',
          '[image:/Reddit_Journey map.jpg]',
        ],
      },
      {
        title: 'Design Process',
        body: [
          'The redesign maintains Reddit\'s recognizable identity while **modernizing its visual experience**.',
          '**Colour Palette**',
          'The interface continues to use Reddit\'s signature orange color, helping maintain brand recognition while adding warmer tones and improved visual hierarchy.',
          '**Visual Style**',
          'The design introduces playful illustrations, rounded cards, consistent icons, and warm color accents — elements that align with Reddit\'s **friendly and community-driven personality**.',
          '**Design Direction**',
          'The visual approach focuses on creating a platform that feels approachable, modern, interactive, and community-oriented. Identified five high-impact screens to redesign: the **home feed, answers, create-post flow, chat, and user profiles**. Each was explored in multiple directions before committing to a high-fidelity solution.',
          'Focused on consistent card sizing, clearer community identity at the post level, guided content creation, and expanded profile and chat experiences.',
        ],
      },
      {
        title: 'Solution',
        body: [
          'The redesign focused on creating a **cleaner, more intuitive Reddit experience** by improving the platform\'s most frequently used screens. Each redesign addressed a specific usability challenge identified during the UX audit while preserving Reddit\'s familiar community-driven experience.',
          '**Home Feed**',
          'The Home Feed was redesigned to improve readability and reduce visual clutter. A card-based layout, stronger visual hierarchy, and increased spacing make it easier to distinguish posts, advertisements, and community content at a glance.',
          '* Card-based post layout for improved readability.',
          '* Clear separation between organic and promoted content.',
          '* Improved visual hierarchy and spacing.',
          '* Simplified navigation with a more balanced footer.',
          '**Answers**',
          'The Answers experience was redesigned to encourage exploration rather than relying solely on search. New discovery sections help users quickly find relevant discussions, frequently asked questions, and trending conversations.',
          '* Trending Questions',
          '* Frequently Asked Questions',
          '* Explore Topics',
          '* Top Answers',
          '* Community-driven content recommendations',
          '**Create Post**',
          'The content creation flow was redesigned to make posting more intuitive and approachable. Clear post-type options reduce decision-making, while guided prompts encourage users to participate with confidence.',
          '* Quick post-type selection for Image, Video, Link, and Text.',
          '* "Ask Me Anything" prompt featuring trending topics and hashtags.',
          '* Preview option before publishing.',
          '* Cleaner, more structured composition flow.',
          '**Chat**',
          'The Chat experience was expanded beyond messaging by introducing community discovery and personalized recommendations.',
          '* Discover Channels section.',
          '* Recommended Communities based on user interests.',
          '* Improved visual hierarchy and engaging illustrations.',
          '**Profile**',
          'The profile experience was redesigned to **strengthen user identity** and encourage long-term engagement.',
          '* Personalized bio section.',
          '* Prominent Karma and Reddit Age statistics.',
          '* Achievements and badges.',
          '* Community creation tools.',
          '* Reddit Premium call-to-action.',
          '"Together, these improvements transform Reddit into a cleaner, more discoverable, and more personalized mobile experience."',
          '[image:/Reddit_After2.png]',
        ],
      },
      {
        title: 'Final Design',
        body: [
          'The final redesign transforms Reddit into a **cleaner, more intuitive, and engaging mobile experience** while preserving the platform\'s community-first identity. Rather than reinventing the product, the redesign enhances the way users discover content, participate in discussions, and express themselves through thoughtful UX improvements and a more modern visual language.',
          'The redesigned interface introduces stronger visual hierarchy, card-based content organization, and guided discovery features that make browsing feel more **focused and less overwhelming**. Richer user profiles, personalized recommendations, and a more engaging chat experience strengthen users\' sense of identity while encouraging deeper participation within Reddit\'s communities.',
          '[carousel:/Reddit_Home.png|/Reddit_Answers.png|/Reddit_Create.png|/Reddit_Chat.png|/Reddit_Profile.png]',
          '**Key Features**',
          '* **Improved Readability** — Card-based layouts and clearer visual hierarchy make posts easier to scan and distinguish from advertisements.',
          '* **Enhanced Content Discovery** — Trending Questions, Top Answers, and curated discovery sections help users explore communities without relying solely on search.',
          '* **Richer User Profiles** — Personalized bios, achievements, and community features create a stronger sense of identity and ownership.',
          '* **More Engaging Community Experience** — Personalized chat recommendations and community suggestions encourage ongoing interaction beyond the home feed.',
          '* **Modern Visual Language** — Refined spacing, consistent components, and Reddit\'s signature color palette create a cleaner and more approachable interface.',
          'The result is a redesign that **improves usability without compromising the familiarity** that existing Reddit users expect, creating a more accessible, engaging, and user-centered mobile experience.',
        ],
      },
      {
        title: 'Reflection',
        body: [
          'Redesigning Reddit challenged me to **balance innovation with familiarity**. Instead of introducing unnecessary changes, I focused on understanding the platform\'s core strengths and identifying opportunities to improve usability while respecting the behaviors of existing users.',
          'This project strengthened my ability to evaluate complex digital products, translate research into meaningful design decisions, and create interfaces that **balance functionality with visual clarity**. It also reinforced the importance of designing complete user journeys rather than isolated screens, ensuring every improvement contributes to a more cohesive and engaging experience.',
          'Most importantly, this redesign reminded me that **successful UX isn\'t about changing everything** — it\'s about recognizing what already works, solving genuine user problems, and creating experiences that feel both intuitive and familiar.',
        ],
      },
    ],
  },
  {
    slug: 'sugarcloud-cupcake',
    name: 'SugarCloud',
    suffix: 'Cupcake',
    titleFont: 'var(--font-sugar)',
    category: 'UI/UX Design',
    image: '/SugarCloud.png',
    hoverVideo: '/SugarCloud.mp4',
    heroVideos: [{ label: 'Preview', src: '/SugarCloud_StudyCase.mp4' }],
    roles: 'UI/UX Designer',
    shortRoles: ['UI/UX', 'Prototyping', 'Branding'],
    description:
      'Individual UI/UX project focused on creating a fully interactive Figma prototype using advanced prototyping techniques.',
    tags: ['Figma', 'Photoshop', 'Canva'],
    figmaUrl: 'https://www.figma.com/proto/ST0WcHHTo9lmOlJTD7e8IK/Untitled?node-id=487-2571&t=IuX4SAhZC8L6WqdB-1&scaling=scale-down&content-scaling=fixed&page-id=340%3A4540',
    overview: [
      'SugarCloud Cupcakes is a **branding and UI/UX design project** that reimagines the online bakery experience through a playful, visually engaging, and user-centered e-commerce platform. The goal was to create a **premium yet approachable digital experience** that makes discovering, customizing, and ordering desserts both intuitive and enjoyable.',
      'The project included the development of a **complete digital product** — from brand identity and marketing assets to a fully responsive website prototype. Every element was designed to create a cohesive brand experience while simplifying the customer journey from product discovery to checkout.',
      'To bring the experience to life, I created a **fully interactive e-commerce prototype in Figma using Variables**, simulating real-time cart interactions and dynamic user flows to closely replicate the behavior of a functional online store.',
    ],
    table: {
      tools: 'Figma, Photoshop, Canva',
      role: 'UI/UX Designer',
      timeline: '5 Weeks',
      industry: 'Food & Beverage / E-commerce',
    },
    sections: [
      {
        title: 'Challenge',
        body: [
          'Researching existing bakery websites revealed a common pattern: many felt outdated, visually static, and lacked meaningful interaction. Product discovery often relied on long lists and basic layouts, making the browsing experience feel **transactional rather than engaging**. There were few opportunities to create excitement or encourage users to explore the menu before making a purchase.',
          'The challenge was to design an experience that felt **as delightful as visiting a bakery** — combining a playful visual identity with an intuitive shopping journey that encourages exploration while keeping the ordering process simple and frictionless.',
          '**Technical Challenge**',
          'Beyond the user experience, I wanted the prototype to **behave like a real e-commerce website** rather than a collection of static screens. My goal was to create fully interactive product cards, shopping cart functionality, animations, and realistic user flows entirely within Figma.',
          'Achieving this required an advanced prototyping approach using **Figma Variables, Components, and Interactive Components** to simulate dynamic interactions and state changes. While implementing these features was technically challenging, it significantly strengthened my prototyping skills and allowed me to create a more realistic and engaging user experience.',
        ],
      },
      {
        title: 'Research',
        body: [
          'Before designing the interface, I explored how users discover and purchase desserts online to better understand their **expectations, behaviors, and pain points**. Through competitive analysis and user research, I identified opportunities to create a more engaging, intuitive, and visually memorable shopping experience.',
          '**User Insights**',
          'The research revealed that users value an experience that is both **efficient and enjoyable**. While convenience remains essential, visual presentation plays a significant role in influencing purchasing decisions.',
          '* **Fast & Effortless Ordering** — Users expect a streamlined checkout process with as few steps as possible.',
          '* **Visually Appealing Experience** — High-quality imagery and thoughtful presentation help build trust and increase product appeal.',
          '* **Interactive & Responsive Design** — Subtle interactions and animations create a more engaging shopping experience and encourage exploration.',
          '**Competitive Analysis**',
          'A review of existing bakery websites revealed several recurring usability issues:',
          '* **Cluttered layouts** that make browsing products more difficult.',
          '* **Weak visual hierarchy**, making important information harder to find.',
          '* **Limited interactivity**, resulting in static experiences that fail to engage users.',
          '* **Generic branding** that lacks personality and emotional connection.',
          '"Design Opportunity: Create a modern bakery experience that combines playful branding with intuitive navigation, making product discovery enjoyable while keeping the ordering process simple and efficient."',
          '**User Persona**',
          '**Emily Carter** — Age: 29 · Occupation: Marketing Coordinator · Location: Vancouver, BC',
          'Emily is a busy professional who enjoys hosting small gatherings and celebrating special moments with friends and family. She frequently orders desserts online and values **speed, convenience, and a seamless shopping experience**.',
          'She is naturally drawn to visually rich websites where products are beautifully presented, allowing her to browse confidently and make quick purchasing decisions. However, she becomes frustrated by cluttered interfaces, lengthy ordering processes, or websites that require her to call or email to complete an order.',
          '"Emily represents users who expect online shopping to feel effortless, engaging, and enjoyable — from discovering products to completing their purchase."',
        ],
      },
      {
        title: 'Design Process',
        body: [
          '**Brand Identity**',
          'Building a strong, cohesive brand identity was the foundation of the entire design process. Every visual and interactive decision was guided by the goal of creating an experience that felt **sweet, modern, and effortlessly enjoyable**.',
          '**Naming the Brand**',
          'The name "SugarCloud" was chosen to evoke a sense of **lightness, indulgence, and whimsy** — qualities that instantly communicate the playful, premium nature of the product.',
          '**Logo Design**',
          'The logo was designed to be clean and memorable, combining a soft wordmark with a subtle visual element that reflects the brand\'s playful personality without overwhelming the overall aesthetic.',
          '**Visual Design**',
          '**Colour Palette**',
          'The colour palette was carefully curated to balance warmth, sweetness, and sophistication:',
          '* **Blush Pink (#F4B8C1)** — the primary brand colour, evoking warmth, softness, and sweetness.',
          '* **Cream White (#FFF8F0)** — used for backgrounds to create a clean, airy feel.',
          '* **Deep Chocolate (#3B2A2A)** — applied to text and key UI elements for contrast and elegance.',
          '* **Soft Gold (#E8C87A)** — used as an accent colour for highlights and calls to action.',
          '**Typography**',
          '* **Playfair Display** — selected for headings to add a sense of elegance and artisan quality.',
          '* **Lato** — chosen for body text and UI elements to ensure clarity and readability across all screen sizes.',
          '**Design System**',
          'A comprehensive design system was developed in Figma, including reusable components, defined spacing rules, interactive states, and a consistent icon library. This ensured **visual coherence** across every screen and interaction.',
          '**Interactive Prototyping**',
          'The prototype was built with **Figma Smart Animate** to create smooth, app-like transitions between screens. Interactive components — including product cards that expand into customization overlays, a live-updating cart, and animated confirmation states — were carefully crafted to simulate a **real, fluid mobile experience**.',
        ],
      },
      {
        title: 'Solution',
        body: [
          'The solution focused on transforming the traditional online bakery experience into one that feels **engaging, intuitive, and emotionally connected to the brand**. Rather than treating the website as a simple ordering platform, the goal was to create an experience that captures the excitement of browsing a boutique bakery while keeping the purchasing journey fast and effortless.',
          'Research highlighted the need for clearer product discovery, stronger visual storytelling, and a more interactive shopping experience. To address these insights, the interface was designed with a **clean information hierarchy, playful branding, and intuitive navigation** that guides users naturally from exploring products to completing their purchase.',
          'To further enhance realism, the prototype was built using **Figma Variables, Auto Layout, and Interactive Components**, enabling dynamic cart interactions, live quantity updates, and automatic price calculations. These interactions closely replicate the behavior of a functional e-commerce website, allowing the prototype to demonstrate both the visual design and the user experience of a real product.',
          'By combining thoughtful UX principles with expressive branding and advanced prototyping, the final solution creates a seamless shopping experience that is **visually memorable, easy to navigate, and enjoyable** from the first interaction through checkout.',
        ],
      },
      {
        title: 'Final Design',
        body: [
          'The final design delivers a **playful yet polished e-commerce experience** that combines engaging visuals with intuitive interactions. Every element was designed to make browsing, selecting, and purchasing cupcakes feel effortless while reinforcing SugarCloud\'s warm and premium brand identity.',
          'The interface follows a clear user journey — from discovering products on the homepage to exploring the menu, managing the shopping cart, and completing checkout. **Thoughtful visual hierarchy, generous spacing, and consistent calls-to-action** help users navigate confidently while keeping the focus on the products.',
          'To create a more realistic user experience, the prototype was built using **Figma Variables and Interactive Components**, allowing the interface to respond dynamically to user actions. Product quantities, cart totals, and shopping cart states update automatically, closely simulating the behavior of a live e-commerce website.',
          '**Key Features**',
          '* Dynamic shopping cart with real-time quantity and price updates.',
          '* State-based cart interactions for empty and populated shopping experiences.',
          '* A streamlined purchasing flow with minimal steps from product discovery to checkout.',
          '* Reusable components and Auto Layout to maintain consistency and scalability throughout the interface.',
          'The result is an **interactive prototype that goes beyond static mockups**, demonstrating both thoughtful UX design and advanced prototyping techniques while delivering a seamless and engaging online shopping experience.',
        ],
      },
      {
        title: 'Reflection',
        body: [
          'SugarCloud Cupcakes strengthened my ability to **design beyond individual screens** by combining branding, UX, and interactive prototyping into one cohesive product experience. Throughout the project, I refined my skills in building scalable design systems, creating advanced Figma prototypes with Variables, and balancing visual storytelling with usability.',
          'Most importantly, it reinforced that **successful digital products are more than beautiful interfaces** — they create meaningful, intuitive experiences that connect with users while supporting real business goals.',
        ],
      },
    ],
  },

  /* ── Social Media ── */
  {
    slug: 'breaking-the-feed',
    name: 'Breaking the Feed',
    category: 'Social Media & Motion Design',
    filterCategory: 'Social Media',
    image: '/CoverCrispup.png',
    hoverVideo: '/CoverCrispup.mp4',
    heroVideos: [
      { label: 'Preview', src: '/Crispupherosection.mp4' },
    ],
    roles: 'Social Media Designer & Motion Designer',
    shortRoles: ['Social Media', 'Motion Design', 'AI-Assisted'],
    description:
      'An exploration of AI-assisted motion marketing — where one intentional movement, connected to the brand\'s message, transforms a static post into a scroll-stopping experience.',
    tags: ['Canva', 'Canva AI', 'ChatGPT'],
    overview: [
      'This project began as an exploration of a social media trend I discovered on Instagram, where motion and visual layering were used to make products appear as though they were interacting with the social media interface itself.',
      'I wanted to explore the concept in my own way and understand how this style could be used to create scroll-stopping marketing content.',
      'What started with a fictional fast-food brand, **CrispUp**, gradually developed into a broader experiment: Could the same creative approach work for completely different products, brands, and industries?',
    ],
    table: {
      tools: 'Canva, Canva AI, ChatGPT',
      role: 'Social Media Designer & Motion Designer',
      timeline: 'Personal Project',
      industry: 'Social Media & Marketing',
    },
    sections: [
      {
        title: 'Inspiration & Idea',
        body: [
          'The original trend caught my attention because it transformed an ordinary social media post into something more immersive. Instead of keeping the content contained within the post, the subject appeared to break through the interface, creating an unexpected sense of depth and movement.',
          'Inspired by this idea, I developed my first concept around an exaggerated cheese pull.',
          'The goal wasn\'t to reproduce the trend exactly, but to understand the visual principle behind it and develop my own approach that could be adapted to different marketing scenarios.',
        ],
      },
      {
        title: 'Creative Direction',
        body: [
          'For the first experiment, I created CrispUp, a fictional fast-food brand, and designed an Instagram-style advertisement where a continuous cheese pull visually passes through the social media interface.',
          'From there, I explored another food-focused variation: hot ranch sauce pouring onto a crispy nugget.',
          'Although both concepts promote food, the movement communicates something different:',
          '* **Cheese pull** → texture, indulgence and anticipation',
          '* **Sauce pour** → flavor, freshness and appetite appeal',
          'The motion was intentionally kept simple so that one strong visual action became the focus of each advertisement.',
        ],
      },
      {
        title: 'Expanding the Concept',
        body: [
          'After experimenting with food marketing, I wanted to see whether the same visual approach could work outside the food industry.',
          'I applied it to **Dogwood Landscaping & Gardening**, this time replacing the food interaction with a leaf blower sending autumn leaves across the social media interface.',
          'This changed the purpose of the motion completely.',
          'Instead of highlighting a product, the movement demonstrates a service in action — visually communicating fall cleanup without needing a lengthy explanation.',
          'That experiment showed me that the concept wasn\'t limited to food or product advertising. The same framework could be adapted around whatever movement best represents a brand.',
        ],
      },
      {
        title: 'A Flexible Social Media System',
        body: [
          'Through these experiments, I realized that the strength of the concept is not one particular effect — it is the relationship between motion, message, and the social media interface.',
          'For CrispUp, that interaction became a cheese pull and flowing sauce. For Dogwood, it became leaves being blown across the screen.',
          'The visual language stays consistent while the hero interaction changes according to the brand, product, or service.',
          'This makes the approach flexible enough to explore across different industries:',
          '* **Product** → highlight a feature',
          '* **Food** → emphasize texture and appetite appeal',
          '* **Service** → demonstrate an action',
          '* **Brand** → create a memorable visual moment',
          'Rather than treating motion as decoration, each movement supports the message being communicated.',
        ],
      },
      {
        title: 'Outcome',
        body: [
          'What began as an experiment inspired by a social media trend developed into a repeatable creative approach for short-form marketing content.',
          'Testing the concept across both CrispUp and Dogwood Landscaping & Gardening demonstrated that the technique can adapt to very different audiences and objectives while still producing visually engaging results.',
          'The project also allowed me to explore the intersection of branding, social media design, visual storytelling, and AI-assisted motion.',
          '"The most effective motion doesn\'t need to be complicated — one intentional movement, connected to the brand\'s message, can transform a static post into a more engaging visual experience."',
          '[video:/CoverCrispup.mp4]',
        ],
      },
    ],
  },

  {
    slug: 'one-logo-many-places',
    name: 'One Logo, Many Places',
    category: 'Brand Marketing & Social Media',
    filterCategory: 'Social Media',
    image: '/CoverReel.png',
    hoverVideo: '/CoverReel.mp4',
    heroVideos: [
      { label: 'Preview', src: '/Reelherossection.mp4' },
    ],
    roles: 'Creative Direction, Photography, Social Media Design & Video Editing',
    shortRoles: ['Brand Awareness', 'Photography', 'Video Editing'],
    description:
      'A brand awareness reel for Dogwood Landscaping & Gardening — one logo, sixty environments, one recognizable identity.',
    tags: ['Photography', 'Canva', 'Video Editing'],
    overview: [
      'For Dogwood Landscaping & Gardening, I wanted to create a brand-focused reel that felt different from traditional service advertisements.',
      'Instead of directly promoting a specific landscaping service, the concept focused on something simpler: making the **Dogwood identity memorable**.',
      'The result was a fast-paced social media reel built around one consistent element — the Dogwood logo — appearing across a constantly changing series of outdoor environments.',
    ],
    table: {
      tools: 'Photography, Canva, Video Editing',
      role: 'Creative Direction, Photography, Social Media Design & Video Editing',
      timeline: 'Personal Project',
      industry: 'Landscaping & Social Media Marketing',
    },
    sections: [
      {
        title: 'The Idea',
        body: [
          'The concept started with a simple question:',
          '"How can I make a logo itself interesting enough to become the content?"',
          'I printed the Dogwood logo and photographed it in approximately **60 different locations, surfaces, textures, and natural environments**.',
          'Flowers, gravel, pavement, plants, and other outdoor settings continually changed, while the logo remained the visual anchor.',
          'Rather than telling viewers about the brand, the reel was designed to make them repeatedly see and recognize it.',
        ],
      },
      {
        title: 'Creative Direction',
        body: [
          'Consistency became the most important part of the concept.',
          'Across every photograph, I kept the logo in approximately the same position and scale, while intentionally changing the environment surrounding it.',
          'When the images were placed sequentially, this created the illusion that the **logo remained still while the world around it changed**.',
          'The contrast between the simple black-and-white identity and the variety of natural colors and textures also helped keep the logo recognizable throughout the reel.',
        ],
      },
      {
        title: 'From Photography to Motion',
        body: [
          'After photographing the logo across dozens of environments, I arranged the images into a rapid sequence and synchronized the transitions with music.',
          'Each photograph appears briefly before immediately changing to the next environment.',
          'The repetition creates a simple visual rhythm:',
          '"Same Brand → New Environment → Same Brand → New Environment"',
          'Instead of relying on complex animation, the movement comes entirely from the transition between real photographs.',
          'This gives the reel an energetic, handmade quality while keeping the brand consistently at the center of attention.',
        ],
      },
      {
        title: 'Marketing Strategy',
        body: [
          'The purpose of this reel was **brand awareness** rather than direct promotion.',
          'Landscaping marketing often focuses heavily on before-and-after images or individual services. For this piece, I explored a different approach by making the brand identity itself the subject of the content.',
          'Repeated exposure to the same logo across changing scenes creates visual consistency while giving viewers something new to look at with every transition.',
          'The outdoor locations also naturally connect the identity to the environment in which Dogwood operates.',
          '"One constant. Many environments. One recognizable brand."',
        ],
      },
      {
        title: 'Outcome',
        body: [
          'The final reel transformed approximately **60 individual photographs** into one cohesive piece of short-form branded content.',
          'What made the experiment successful creatively was the balance between consistency and change: the surroundings continuously shift, while the logo provides a recognizable visual anchor.',
          'The project demonstrates how a relatively simple idea can become engaging social media content through creative direction, photography, composition, repetition, rhythm, and editing.',
          'It also reinforced an important idea in my marketing work:',
          '"Not every advertisement needs to explain a service. Sometimes the goal is simply to make the brand memorable."',
          '[video:/CoverReel.mp4]',
        ],
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getOtherProjects(slug: string) {
  return projects.filter((p) => p.slug !== slug)
}

/* ---------- Draft / experimental work ---------- */

export type DraftCategory = 'Illustration' | 'Motion Graphic' | '3D'

export type DraftItem = {
  name: string
  description: string
  tools: string[]
  /** one or more categories — item appears under each filter */
  category: DraftCategory | DraftCategory[]
  /** image path (.png/.jpg) or video path (.mp4) */
  media: string
}

export const draftFilters = ['All', 'Illustration', 'Motion Graphic', '3D'] as const

export const draftItems: DraftItem[] = [
  {
    name: '3D Perfume Bottle',
    description:
      'A faceted perfume bottle modeled in Maya, refined in Adobe Dimension, and finalized in Photoshop.',
    tools: ['Maya', 'Photoshop', 'Adobe Dimension'],
    category: '3D',
    media: '/PerfumeBottle.png',
  },
  {
    name: 'Seattle Layered City Skyline',
    description:
      'A layered vector illustration of the Seattle skyline exploring depth, silhouette, and a bold monochrome palette.',
    tools: ['Illustrator'],
    category: 'Illustration',
    media: '/Seattle.png',
  },
  {
    name: 'Cartoony Introduction',
    description:
      'A character-driven animated intro built with rigging and motion, exploring personality and timing.',
    tools: ['Adobe Character Animator', 'Adobe After Effects'],
    category: 'Motion Graphic',
    media: '/CartoonyIntroduction.mp4',
  },
  {
    name: 'Autumn Festival Poster',
    description:
      'A warm seasonal illustration exploring layered color, atmosphere, and editorial composition.',
    tools: ['Illustrator', 'Photoshop'],
    category: 'Illustration',
    media: '/AutumnFestival.png',
  },
  {
    name: 'Music Flow Motion',
    description:
      'An experiment in flowing line work and rhythm-driven motion graphics synced to sound.',
    tools: ['After Effects'],
    category: 'Motion Graphic',
    media: '/MV.mp4',
  },
  {
    name: 'Motion Trailer',
    description:
      'A dynamic motion graphic trailer exploring cinematic transitions, typography animation, and visual storytelling.',
    tools: ['After Effects', 'Premiere Pro'],
    category: 'Motion Graphic',
    media: '/Trailer.mp4',
  },
  {
    name: 'Lighthouse',
    description:
      'A 3D lighthouse scene built in Project Neo and refined in Illustrator, blending three-dimensional structure with hand-crafted illustration style.',
    tools: ['Project Neo', 'Illustrator'],
    category: ['3D', 'Illustration'],
    media: '/Lighhouse.png',
  },
  {
    name: '3D Phone Holder',
    description:
      'A functional phone holder designed in Tinkercad and physically produced on a 3D printer, from digital model to real-world object.',
    tools: ['Tinkercad', '3D Printing'],
    category: '3D',
    media: '/PhoneHolder.png',
  },
  {
    name: 'Package Design',
    description:
      'A packaging concept designed in Photoshop and brought to life as a 3D mockup through After Effects, exploring brand identity, structure, and shelf presence.',
    tools: ['Photoshop', 'After Effects'],
    category: '3D',
    media: '/Package.png',
  },
  {
    name: 'Digital Illustration',
    description:
      'A detailed digital illustration piece created in Illustrator, exploring composition, color, and narrative through imagery.',
    tools: ['Illustrator'],
    category: 'Illustration',
    media: '/Illustrator.png',
  },
]
