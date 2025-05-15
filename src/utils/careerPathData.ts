import { Calculator, Heart, Code, BookCheck, Briefcase, BookOpen, Palette, Trophy, GraduationCap, Lightbulb, Globe } from "lucide-react";

export function getPathData(pathId: string | undefined) {
  const paths: Record<string, any> = {
    "commerce": {
      title: "Commerce Stream",
      description: "Explore the world of business, finance, and economics through commerce education",
      icon: Briefcase,
      timeline: "2 years (11th-12th) + 3-4 years higher education",
      jobProspects: "Excellent opportunities in banking, finance, and corporate sectors",
      entryRequirements: "Minimum 50% in 10th, basic mathematics aptitude",
      courseStructure: {
        duration: "3-4 years (Bachelor's)",
        semesters: "6-8 semesters",
        mainSubjects: [
          "Accountancy",
          "Business Studies",
          "Economics",
          "Commercial Mathematics",
          "Banking",
          "Marketing"
        ],
        specializations: [
          {
            name: "Accounting & Finance",
            subjects: ["Financial Accounting", "Cost Accounting", "Corporate Accounting", "Taxation"]
          },
          {
            name: "Banking & Insurance",
            subjects: ["Banking Operations", "Insurance Management", "Financial Markets", "Risk Management"]
          }
        ]
      },
      feeStructure: {
        undergraduate: {
          government: {
            range: "₹10,000 - ₹50,000 per year",
            notes: "Government colleges offer affordable commerce education"
          },
          private: {
            range: "₹50,000 - ₹2,00,000 per year",
            notes: "Private institutions charge based on reputation and facilities"
          }
        }
      },
      entranceExams: [
        {
          name: "Common Entrance Test for Commerce",
          description: "State-level exam for admission to top commerce colleges",
          level: "State",
          timing: "After 12th board exams",
          eligibility: "12th with Commerce or Mathematics",
          freeShips: "Merit-based scholarships available for top ranks"
        },
        {
          name: "Chartered Accountancy Foundation",
          description: "Entry level exam for CA program",
          level: "National",
          timing: "Twice a year (May and November)",
          eligibility: "12th pass with minimum 50%",
          freeShips: "Fee reduction for economically weaker sections"
        }
      ],
      scholarships: [
        {
          name: "Merit-cum-Means Scholarship",
          amount: "₹10,000 per annum",
          eligibility: "Based on 12th marks and family income",
          link: "#"
        },
        {
          name: "National Scholarship Portal",
          amount: "₹5,000 - ₹20,000 per annum",
          eligibility: "For SC/ST/OBC and economically weaker sections",
          link: "#"
        }
      ],
      educationPath: [
        {
          title: "Higher Secondary (11th & 12th)",
          description: "Study core commerce subjects including Accountancy, Business Studies, Economics",
          keyPoints: [
            "Focus on understanding business fundamentals",
            "Learn accounting principles and practices",
            "Study micro and macroeconomics",
            "Optional subjects like Mathematics, Statistics"
          ]
        },
        {
          title: "Undergraduate Options",
          description: "Various specialized courses in commerce and business",
          keyPoints: [
            "B.Com (3 years) - Bachelor of Commerce",
            "BBA (3 years) - Bachelor of Business Administration",
            "CA Foundation - Start of Chartered Accountancy",
            "CS Foundation - Company Secretary program"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Accounting",
            description: "Understanding of financial statements and accounting principles"
          },
          {
            name: "Business Analytics",
            description: "Ability to analyze business data and make informed decisions"
          },
          {
            name: "Financial Planning",
            description: "Skills in budgeting and financial management"
          }
        ],
        soft: [
          {
            name: "Communication",
            description: "Strong verbal and written business communication"
          },
          {
            name: "Analytical Thinking",
            description: "Problem-solving and strategic planning abilities"
          }
        ]
      },
      careerOptions: [
        {
          title: "Chartered Accountant",
          description: "Professional accounting and auditing",
          salary: "₹7-30 lakhs per annum",
          growth: "High demand in all sectors"
        },
        {
          title: "Investment Banker",
          description: "Financial analysis and investment management",
          salary: "₹10-40 lakhs per annum",
          growth: "Growing with market expansion"
        }
      ]
    },
    "arts": {
      title: "Arts/Humanities Stream",
      description: "Explore language, literature, history, and social sciences",
      icon: BookOpen,
      timeline: "2 years (11th-12th) + 3-4 years higher education",
      jobProspects: "Diverse opportunities in education, media, civil services",
      entryRequirements: "No specific percentage requirement, strong interest in humanities",
      courseStructure: {
        duration: "3 years (Bachelor's)",
        semesters: "6 semesters",
        mainSubjects: [
          "History",
          "Political Science",
          "Sociology",
          "Psychology",
          "Economics",
          "Languages"
        ]
      },
      feeStructure: {
        undergraduate: {
          government: {
            range: "₹5,000 - ₹30,000 per year",
            notes: "Most affordable stream in government colleges"
          },
          private: {
            range: "₹30,000 - ₹1,50,000 per year",
            notes: "Private institutions charge based on courses offered"
          }
        }
      },
      entranceExams: [
        {
          name: "Liberal Arts Entrance Test",
          description: "For premium liberal arts universities",
          level: "National",
          timing: "After 12th exams",
          eligibility: "12th in any stream",
          freeShips: "Scholarships based on test performance"
        }
      ],
      scholarships: [
        {
          name: "Arts Excellence Scholarship",
          amount: "₹8,000 per annum",
          eligibility: "Based on academic performance in humanities",
          link: "#"
        }
      ],
      educationPath: [
        {
          title: "Higher Secondary (11th & 12th)",
          description: "Study various humanities subjects",
          keyPoints: [
            "Languages (English and regional)",
            "History and Political Science",
            "Geography and Economics",
            "Psychology or Sociology"
          ]
        },
        {
          title: "Undergraduate Options",
          description: "Various specialized courses in humanities",
          keyPoints: [
            "BA in various subjects",
            "Mass Communication",
            "Bachelor in Foreign Languages",
            "Bachelor in Social Work"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Research",
            description: "Advanced research and analysis skills"
          },
          {
            name: "Content Creation",
            description: "Writing and content development abilities"
          }
        ],
        soft: [
          {
            name: "Critical Thinking",
            description: "Analysis and interpretation of information"
          },
          {
            name: "Cultural Awareness",
            description: "Understanding of diverse perspectives"
          }
        ]
      },
      careerOptions: [
        {
          title: "Content Writer",
          description: "Creating content for various media",
          salary: "₹3-15 lakhs per annum",
          growth: "High demand in digital age"
        },
        {
          title: "Civil Services",
          description: "Government administrative services",
          salary: "₹6-15 lakhs per annum",
          growth: "Stable government positions"
        }
      ]
    },
    "science-pcm": {
      title: "Science Stream (PCM)",
      description: "Physics, Chemistry, and Mathematics - Gateway to engineering, technology, and research careers",
      icon: Calculator,
      timeline: "2 years (11th-12th) + 3-5 years higher education",
      jobProspects: "Excellent with growing demand in engineering and technology sectors",
      entryRequirements: "Minimum 60% in 10th with strong aptitude in mathematics and science",
      educationPath: [
        {
          title: "After 10th (Higher Secondary - 11th & 12th)",
          description: "Science stream with Physics, Chemistry, and Mathematics (PCM) as core subjects. Additional subjects may include Computer Science, Biology, or other electives.",
          keyPoints: [
            "Focus on building strong fundamentals in PCM",
            "Prepare simultaneously for board exams and competitive entrance tests",
            "Consider additional coaching for JEE/other engineering entrance exams",
            "Develop practical skills through science projects and laboratories"
          ]
        },
        {
          title: "After 12th (Undergraduate Education)",
          description: "Bachelor's degree in Engineering, Technology, or Pure Sciences. Popular options include B.Tech, BE, BSc, and BCA programs.",
          keyPoints: [
            "Engineering: 4-year B.Tech/BE programs in various specializations",
            "Pure Sciences: 3-year BSc in Physics, Mathematics, Chemistry, etc.",
            "Computer Applications: 3-year BCA for IT and software roles",
            "Prepare for entrance exams like JEE (Main/Advanced), state engineering exams"
          ]
        },
        {
          title: "Higher Education (Optional)",
          description: "Master's and doctoral programs for specialization and research opportunities. Options include M.Tech, MSc, PhD, and more.",
          keyPoints: [
            "M.Tech/ME: 2-year programs for advanced engineering expertise",
            "MSc: 2-year programs in pure sciences for specialized knowledge",
            "PhD: Research-focused doctoral programs for academic careers",
            "Prepare for entrance exams like GATE, JAM, GRE, etc."
          ]
        }
      ],
      entranceExams: [
        {
          name: "JEE Main & Advanced",
          description: "National level engineering entrance exams for IITs, NITs, and other premier institutions",
          level: "National",
          timing: "Usually conducted 2-4 times a year",
          eligibility: "12th PCM with minimum 75% marks",
          freeShips: "SC/ST/PwD candidates get complete fee waiver, merit scholarships available",
          preparationTips: "Focus on NCERT books, join test series, practice previous papers"
        },
        {
          name: "BITSAT",
          description: "Online entrance test for admission to BITS Pilani campuses",
          level: "National",
          timing: "Usually in May-June",
          eligibility: "12th PCM with minimum 75% marks",
          freeShips: "Merit scholarships available based on BITSAT score",
          preparationTips: "Practice computer-based tests, focus on speed and accuracy"
        },
        {
          name: "State Engineering CETs",
          description: "State-level entrance tests for engineering colleges",
          level: "State",
          timing: "After board exams (May-June)",
          eligibility: "12th PCM from respective state board",
          freeShips: "State government scholarships available for eligible candidates",
          preparationTips: "Focus on state board syllabus along with entrance exam topics"
        }
      ],
      
      feeStructure: {
        undergraduate: {
          government: {
            range: "₹30,000 - ₹1,50,000 per year",
            details: "Includes tuition, hostel, and other mandatory fees",
            notes: "Government colleges have subsidized fees"
          },
          private: {
            range: "₹1,00,000 - ₹4,00,000 per year",
            details: "Includes tuition, development fees, and other charges",
            notes: "Can vary significantly based on college reputation and location"
          }
        },
        coaching: {
          jee: {
            range: "₹25,000 - ₹1,50,000 per year",
            details: "For JEE preparation coaching",
            notes: "Many institutes offer scholarships based on entrance tests"
          },
          extras: {
            range: "₹5,000 - ₹20,000",
            details: "For study materials, test series, etc.",
            notes: "Optional but recommended for better preparation"
          }
        }
      },
      
      scholarships: [
        {
          name: "AICTE Pragati Scholarship",
          amount: "₹50,000 per annum",
          eligibility: "Girl students from families with income less than 8 lakhs",
          link: "#"
        },
        {
          name: "Central Sector Scheme",
          amount: "₹10,000 per month",
          eligibility: "Top 500 ranks in JEE Advanced",
          link: "#"
        },
        {
          name: "State Merit Scholarships",
          amount: "Varies by state",
          eligibility: "Based on entrance exam rank and category",
          link: "#"
        }
      ],

      courseStructure: {
        duration: "4 years",
        semesters: "8 semesters",
        mainSubjects: [
          "Engineering Mathematics",
          "Physics",
          "Chemistry",
          "Programming",
          "Basic Electronics",
          "Engineering Drawing"
        ],
        specializations: [
          {
            name: "Computer Science",
            subjects: ["Data Structures", "Algorithms", "Database Management", "Operating Systems"]
          },
          {
            name: "Mechanical",
            subjects: ["Thermodynamics", "Machine Design", "Manufacturing Processes", "CAD/CAM"]
          },
          {
            name: "Electrical",
            subjects: ["Circuit Theory", "Power Systems", "Control Systems", "Microprocessors"]
          }
        ],
        practicals: {
          labs: ["Physics Lab", "Chemistry Lab", "Programming Lab", "Workshop"],
          projects: ["Mini Project (6th sem)", "Major Project (8th sem)"],
          internships: "Mandatory internship in 3rd year summer"
        }
      },
      
      skills: {
        technical: [
          {
            name: "Mathematics",
            description: "Strong foundation in calculus, algebra, and statistics"
          },
          {
            name: "Physics",
            description: "Understanding of mechanics, thermodynamics, and electromagnetism"
          },
          {
            name: "Programming",
            description: "Basic coding skills in languages like C, Python, or Java"
          },
          {
            name: "Problem Solving",
            description: "Analytical approach to complex technical challenges"
          }
        ],
        soft: [
          {
            name: "Critical Thinking",
            description: "Ability to analyze situations and make informed decisions"
          },
          {
            name: "Communication",
            description: "Clearly explaining technical concepts to various audiences"
          },
          {
            name: "Teamwork",
            description: "Collaborating effectively on group projects and research"
          },
          {
            name: "Time Management",
            description: "Balancing multiple subjects, projects, and deadlines"
          }
        ]
      },
      
      skillResources: [
        {
          title: "Khan Academy",
          description: "Free online courses in mathematics, physics, and programming fundamentals",
          link: "#"
        },
        {
          title: "Coursera Engineering Courses",
          description: "University-level courses on various engineering disciplines",
          link: "#"
        },
        {
          title: "GitHub Student Developer Pack",
          description: "Free access to coding tools and platforms for students",
          link: "#"
        }
      ],
      
      careerOptions: [
        {
          title: "Software Engineer",
          description: "Develop and maintain software applications and systems",
          salary: "₹5-25 lakhs per annum",
          growth: "25% over the next 10 years",
          environment: "IT companies, tech startups, or remote work"
        },
        {
          title: "Mechanical Engineer",
          description: "Design and develop mechanical systems and products",
          salary: "₹4-20 lakhs per annum",
          growth: "15% over the next 10 years",
          environment: "Manufacturing, automotive, aerospace industries"
        },
        {
          title: "Data Scientist",
          description: "Analyze complex data to help organizations make decisions",
          salary: "₹8-30 lakhs per annum",
          growth: "30% over the next 10 years",
          environment: "Tech companies, research firms, financial institutions"
        }
      ],
      
      jobProfiles: [
        {
          title: "Software Developer",
          description: "Build and maintain applications using programming languages",
          skills: ["Java", "Python", "JavaScript", "Problem Solving"]
        },
        {
          title: "System Analyst",
          description: "Analyze an organization's systems to improve efficiency",
          skills: ["System Design", "Business Analysis", "Project Management"]
        },
        {
          title: "Product Engineer",
          description: "Design and develop new products and improve existing ones",
          skills: ["CAD", "Manufacturing Processes", "Quality Control"]
        }
      ],
      
      resources: {
        books: [
          {
            title: "Concepts of Physics",
            author: "H.C. Verma"
          },
          {
            title: "Higher Engineering Mathematics",
            author: "B.S. Grewal"
          },
          {
            title: "Introduction to Algorithms",
            author: "Cormen, Leiserson, Rivest, Stein"
          }
        ],
        courses: [
          {
            title: "Introduction to Computer Science",
            platform: "edX (CS50)"
          },
          {
            title: "Machine Learning",
            platform: "Coursera (Stanford)"
          },
          {
            title: "Engineering Mathematics",
            platform: "NPTEL"
          }
        ],
        websites: [
          {
            name: "GeeksforGeeks",
            description: "Computer science and programming resources"
          },
          {
            name: "NPTEL",
            description: "Free engineering and science courses from IITs"
          },
          {
            name: "Engineering Career Hub",
            description: "Career guidance and preparation resources"
          }
        ]
      },
      relatedPaths: [
        {
          title: "Science Stream (PCB)",
          description: "For those interested in medical and biological sciences",
          icon: Heart,
          link: "/career-paths/science-pcb"
        },
        {
          title: "Computer Science & IT",
          description: "Specialized focus on programming and information technology",
          icon: Code,
          link: "/career-paths/technical"
        },
        {
          title: "Diploma in Engineering",
          description: "Shorter, more hands-on alternative to engineering degrees",
          icon: BookCheck,
          link: "/career-paths/diploma-engineering"
        }
      ]
    },
    "science-pcb": {
      title: "Science Stream (PCB)",
      description: "Physics, Chemistry, and Biology - Gateway to medical, healthcare, and life sciences careers",
      icon: Heart,
      timeline: "2 years (11th-12th) + 4-7 years higher education",
      jobProspects: "Excellent with growing demand in healthcare and biotechnology sectors",
      entryRequirements: "Minimum 60% in 10th with strong aptitude in biology and science",
      skills: {
        technical: [
          {
            name: "Biology",
            description: "Strong understanding of anatomy, physiology, and cellular processes"
          },
          {
            name: "Chemistry",
            description: "Knowledge of organic, inorganic, and biochemistry"
          },
          {
            name: "Laboratory Skills",
            description: "Proficiency in lab techniques and safety protocols"
          }
        ],
        soft: [
          {
            name: "Empathy",
            description: "Understanding patients' needs and concerns"
          },
          {
            name: "Attention to Detail",
            description: "Precision in procedures and documentation"
          },
          {
            name: "Ethics",
            description: "Understanding medical ethics and patient confidentiality"
          }
        ]
      },
      skillResources: [
        {
          title: "Khan Academy",
          description: "Free online courses in biology, chemistry, and healthcare",
          link: "#"
        },
        {
          title: "Coursera Medical Courses",
          description: "University-level courses on various medical disciplines",
          link: "#"
        }
      ],
      careerOptions: [
        {
          title: "Doctor",
          description: "Diagnose and treat medical conditions",
          salary: "₹8-60 lakhs per annum",
          growth: "20% over the next 10 years",
          environment: "Hospitals, clinics, private practice"
        }
      ],
      jobProfiles: [
        {
          title: "General Physician",
          description: "Provide primary healthcare services",
          skills: ["Diagnosis", "Patient Care", "Medical Knowledge"]
        }
      ],
      resources: {
        books: [
          {
            title: "Gray's Anatomy",
            author: "Henry Gray"
          }
        ],
        courses: [
          {
            title: "Introduction to Biology",
            platform: "edX"
          }
        ],
        websites: [
          {
            name: "PubMed",
            description: "Medical research articles and resources"
          }
        ]
      },
      relatedPaths: [
        {
          title: "Science Stream (PCM)",
          description: "For those interested in engineering through academic route",
          icon: Calculator,
          link: "/career-paths/science-pcm"
        }
      ],
      entranceExams: [
        {
          name: "NEET",
          description: "National Eligibility cum Entrance Test for medical programs",
          level: "National",
          timing: "Once a year (May)",
          eligibility: "12th PCB with minimum 50% marks",
          freeShips: "Reserved category students get fee waivers"
        }
      ],
      courseStructure: {
        duration: "5.5 years (MBBS)",
        semesters: "9 semesters plus internship",
        mainSubjects: [
          "Anatomy",
          "Physiology",
          "Biochemistry",
          "Pathology",
          "Pharmacology",
          "Medicine"
        ]
      },
      feeStructure: {
        undergraduate: {
          government: {
            range: "₹25,000 - ₹1,00,000 per year",
            notes: "Government medical colleges have highly subsidized fees"
          },
          private: {
            range: "₹5,00,000 - ₹25,00,000 per year",
            notes: "Private medical colleges can be very expensive"
          }
        }
      },
      scholarships: [
        {
          name: "ICMR Scholarship",
          amount: "₹60,000 per annum",
          eligibility: "Merit-based for medical students",
          link: "#"
        }
      ]
    },
    "diploma-engineering": {
      title: "Diploma in Engineering",
      description: "3-year hands-on technical program offering practical skills in various engineering fields",
      icon: Code,
      timeline: "3 years after 10th grade",
      jobProspects: "Good opportunities in manufacturing, technical services, and maintenance",
      entryRequirements: "Minimum 45-50% in 10th with interest in technical subjects",
      educationPath: [
        {
          title: "Diploma (3 Years)",
          description: "Practical training in specialized engineering fields",
          keyPoints: [
            "Hands-on laboratory and workshop experience",
            "Industry-focused curriculum",
            "Technical drawing and design skills",
            "Specialization in mechanical, electrical, civil, or computer engineering"
          ]
        },
        {
          title: "Further Education Options",
          description: "Pathways after completing diploma",
          keyPoints: [
            "Lateral entry to 2nd year B.Tech/BE (saving 1 year)",
            "Advanced diploma in specialized fields",
            "Industry certification courses",
            "Apprenticeship programs"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Technical Drawing",
            description: "Creating and interpreting engineering drawings"
          },
          {
            name: "Workshop Skills",
            description: "Hands-on experience with tools and equipment"
          },
          {
            name: "Basic Programming",
            description: "Understanding of computer programming fundamentals"
          }
        ],
        soft: [
          {
            name: "Problem Solving",
            description: "Practical approaches to technical challenges"
          },
          {
            name: "Teamwork",
            description: "Collaboration in laboratory and project settings"
          }
        ]
      },
      careerOptions: [
        {
          title: "Junior Engineer",
          description: "Technical support and maintenance roles",
          salary: "₹2.5-5 lakhs per annum",
          growth: "Good growth with experience",
          environment: "Manufacturing plants, construction sites, service centers"
        },
        {
          title: "Technical Supervisor",
          description: "Overseeing technical operations and maintenance",
          salary: "₹3.5-7 lakhs per annum",
          growth: "Moderate growth with additional certifications",
          environment: "Production facilities, technical departments"
        }
      ],
      relatedPaths: [
        {
          title: "Science Stream (PCM)",
          description: "For those interested in engineering through academic route",
          icon: Calculator,
          link: "/career-paths/science-pcm"
        }
      ]
    },
    "iti": {
      title: "ITI Courses",
      description: "Industrial Training Institute programs focusing on practical skills",
      icon: Trophy,
      timeline: "6 months to 2 years after 10th grade",
      jobProspects: "Direct entry to skilled workforce with high demand for certified technicians",
      entryRequirements: "Minimum pass in 10th, selection based on entrance test",
      educationPath: [
        {
          title: "ITI Training (1-2 Years)",
          description: "Specialized training in various trades",
          keyPoints: [
            "Electrician, fitter, plumber, machinist trades",
            "NCVT (National Council for Vocational Training) certification",
            "Practical workshop training",
            "Basic theoretical knowledge"
          ]
        },
        {
          title: "After ITI Options",
          description: "Further education and career advancement",
          keyPoints: [
            "Apprenticeship under skilled professionals",
            "Advanced skill development courses",
            "Diploma through lateral entry",
            "Self-employment opportunities"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Trade Skills",
            description: "Specialized skills in chosen trade (electrical, mechanical, etc.)"
          },
          {
            name: "Tool Handling",
            description: "Proper use and maintenance of trade tools"
          },
          {
            name: "Safety Procedures",
            description: "Understanding of workplace safety protocols"
          }
        ],
        soft: [
          {
            name: "Work Discipline",
            description: "Following procedures and timelines"
          },
          {
            name: "Basic Communication",
            description: "Effective workplace communication"
          }
        ]
      },
      careerOptions: [
        {
          title: "Skilled Technician",
          description: "Specialized trade work in various industries",
          salary: "₹1.8-4 lakhs per annum",
          growth: "Steady demand for skilled trades",
          environment: "Factories, service centers, construction sites"
        },
        {
          title: "Self-Employed Contractor",
          description: "Independent service provider in trained trade",
          salary: "Variable based on work volume",
          growth: "High potential with reputation building",
          environment: "Flexible working conditions"
        }
      ],
      relatedPaths: [
        {
          title: "Diploma in Engineering",
          description: "More extensive technical education",
          icon: Code,
          link: "/career-paths/diploma-engineering"
        },
        {
          title: "Vocational Courses",
          description: "Alternative skill-based training programs",
          icon: BookCheck,
          link: "/career-paths/vocational"
        }
      ]
    },
    "vocational": {
      title: "Vocational Courses",
      description: "Skill-based education in various service and industry sectors",
      icon: BookCheck,
      timeline: "3 months to 1 year after 10th grade",
      jobProspects: "Quick entry into specialized service sectors",
      entryRequirements: "Typically 10th pass, some courses accept 8th pass",
      educationPath: [
        {
          title: "Short-term Courses (3-6 months)",
          description: "Quick skill development in specific areas",
          keyPoints: [
            "Beauty & wellness, retail, healthcare assistance",
            "Hospitality, tourism, and customer service",
            "Practical training with minimal theory",
            "Industry-recognized certifications"
          ]
        },
        {
          title: "Long-term Courses (6-12 months)",
          description: "More comprehensive skill development",
          keyPoints: [
            "Digital marketing, web design, animation",
            "Cooking, bakery, and food service",
            "Includes both practical and theoretical components",
            "Often includes internship opportunities"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Specialized Skills",
            description: "Practical skills specific to chosen vocation"
          },
          {
            name: "Basic Digital Literacy",
            description: "Computer usage relevant to the field"
          },
          {
            name: "Equipment Operation",
            description: "Proper use of field-specific equipment"
          }
        ],
        soft: [
          {
            name: "Customer Service",
            description: "Effective client/customer interaction"
          },
          {
            name: "Time Management",
            description: "Efficient work scheduling and delivery"
          }
        ]
      },
      careerOptions: [
        {
          title: "Service Professional",
          description: "Specialized service provider in chosen field",
          salary: "₹1.5-3.5 lakhs per annum",
          growth: "Quick employment but moderate salary growth",
          environment: "Retail outlets, salons, restaurants, service centers"
        },
        {
          title: "Entrepreneur",
          description: "Small business owner in trained vocation",
          salary: "Variable based on business success",
          growth: "High potential with proper business management",
          environment: "Self-managed workplace"
        }
      ],
      relatedPaths: [
        {
          title: "ITI Courses",
          description: "Technical skill-based training",
          icon: Trophy,
          link: "/career-paths/iti"
        },
        {
          title: "Arts/Humanities",
          description: "For those interested in creative and service fields",
          icon: BookOpen,
          link: "/career-paths/arts"
        }
      ]
    },
    "engineering": {
      title: "Engineering",
      description: "4-year B.Tech/BE programs in various engineering disciplines",
      icon: Code,
      timeline: "4 years undergraduate + optional higher studies",
      jobProspects: "Excellent opportunities in technology, manufacturing, and infrastructure sectors",
      entryRequirements: "12th PCM with 60-75% marks, entrance exam qualification",
      educationPath: [
        {
          title: "Undergraduate (4 Years)",
          description: "B.Tech or BE degree program",
          keyPoints: [
            "Core engineering subjects in first year",
            "Specialization courses from second year",
            "Laboratory and practical work",
            "Final year project and internship"
          ]
        },
        {
          title: "Postgraduate Options",
          description: "Higher studies after engineering",
          keyPoints: [
            "M.Tech/ME (2 years)",
            "MS by Research (2-3 years)",
            "MBA for management roles",
            "Specialized certifications"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Engineering Fundamentals",
            description: "Strong grasp of core engineering principles"
          },
          {
            name: "Technical Design",
            description: "Ability to design and analyze engineering solutions"
          },
          {
            name: "Software Tools",
            description: "Proficiency in field-specific software applications"
          }
        ],
        soft: [
          {
            name: "Analytical Thinking",
            description: "Systematic problem-solving approach"
          },
          {
            name: "Project Management",
            description: "Planning and executing technical projects"
          }
        ]
      },
      careerOptions: [
        {
          title: "Design Engineer",
          description: "Creating and developing new products and systems",
          salary: "₹4-12 lakhs per annum",
          growth: "Good growth with specialized expertise",
          environment: "R&D departments, technology companies"
        },
        {
          title: "Project Engineer",
          description: "Managing technical projects and implementations",
          salary: "₹5-15 lakhs per annum",
          growth: "Excellent with project management skills",
          environment: "Construction, manufacturing, IT sectors"
        }
      ],
      relatedPaths: [
        {
          title: "Science Stream (PCM)",
          description: "Preparation path for engineering",
          icon: Calculator,
          link: "/career-paths/science-pcm"
        },
        {
          title: "Diploma in Engineering",
          description: "Alternative technical education route",
          icon: Code,
          link: "/career-paths/diploma-engineering"
        }
      ]
    },
    "medical": {
      title: "Medical & Healthcare",
      description: "Programs leading to careers in healthcare and medicine",
      icon: Heart,
      timeline: "4-5.5 years undergraduate + specialized training",
      jobProspects: "High demand in hospitals, clinics, research, and public health",
      entryRequirements: "12th PCB with 50-60% marks, NEET qualification",
      educationPath: [
        {
          title: "MBBS (5.5 Years)",
          description: "Bachelor of Medicine and Surgery",
          keyPoints: [
            "Pre-clinical, para-clinical, and clinical phases",
            "Internship in final year",
            "Rigorous medical training",
            "Patient interaction and case studies"
          ]
        },
        {
          title: "Alternative Medical Programs",
          description: "Other healthcare education paths",
          keyPoints: [
            "BDS (Dental) - 5 years",
            "BAMS (Ayurveda) - 5.5 years",
            "B.Pharm (Pharmacy) - 4 years",
            "BSc Nursing - 4 years"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Clinical Skills",
            description: "Patient examination and treatment"
          },
          {
            name: "Medical Knowledge",
            description: "Understanding of human anatomy and disease"
          },
          {
            name: "Diagnostic Ability",
            description: "Identifying health conditions accurately"
          }
        ],
        soft: [
          {
            name: "Empathy",
            description: "Understanding patient concerns and emotions"
          },
          {
            name: "Communication",
            description: "Clear explanation of medical information"
          }
        ]
      },
      careerOptions: [
        {
          title: "General Physician",
          description: "Primary healthcare provider",
          salary: "₹6-20 lakhs per annum",
          growth: "Steady demand in healthcare sector",
          environment: "Hospitals, clinics, private practice"
        },
        {
          title: "Specialist Doctor",
          description: "Focused expertise in specific medical field",
          salary: "₹12-50 lakhs per annum",
          growth: "Excellent with specialization",
          environment: "Specialized hospitals, multispecialty clinics"
        }
      ],
      relatedPaths: [
        {
          title: "Science Stream (PCB)",
          description: "Preparation path for medical careers",
          icon: Heart,
          link: "/career-paths/science-pcb"
        },
        {
          title: "Vocational (Healthcare)",
          description: "Shorter healthcare training programs",
          icon: BookCheck,
          link: "/career-paths/vocational"
        }
      ]
    },
    "business": {
      title: "Business & Management",
      description: "Education in business, commerce, and management disciplines",
      icon: Briefcase,
      timeline: "3-4 years undergraduate + optional MBA",
      jobProspects: "Wide range of opportunities in corporate, finance, and entrepreneurship",
      entryRequirements: "12th with 50-60% marks, commerce background preferred",
      educationPath: [
        {
          title: "Undergraduate Programs",
          description: "Bachelor's degrees in business fields",
          keyPoints: [
            "BBA (Bachelor of Business Administration) - 3 years",
            "B.Com (Bachelor of Commerce) - 3 years",
            "BMS (Bachelor of Management Studies) - 3 years",
            "Focus on business fundamentals and specializations"
          ]
        },
        {
          title: "Professional Programs",
          description: "Specialized business qualifications",
          keyPoints: [
            "CA (Chartered Accountancy) - 4-5 years",
            "CS (Company Secretary) - 3-4 years",
            "CMA (Cost Management Accountant) - 3-4 years",
            "Multiple levels of examinations and training"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Financial Analysis",
            description: "Understanding and interpreting financial data"
          },
          {
            name: "Marketing Strategy",
            description: "Planning and executing marketing campaigns"
          },
          {
            name: "Business Operations",
            description: "Managing organizational processes"
          }
        ],
        soft: [
          {
            name: "Leadership",
            description: "Guiding teams and organizations"
          },
          {
            name: "Negotiation",
            description: "Effective business discussions and agreements"
          }
        ]
      },
      careerOptions: [
        {
          title: "Management Trainee",
          description: "Entry-level corporate management position",
          salary: "₹3.5-7 lakhs per annum",
          growth: "Good growth to middle management",
          environment: "Corporate offices, business organizations"
        },
        {
          title: "Financial Analyst",
          description: "Analysis of financial data for business decisions",
          salary: "₹4-12 lakhs per annum",
          growth: "Excellent in financial sector",
          environment: "Banks, consulting firms, corporate finance"
        }
      ],
      relatedPaths: [
        {
          title: "Commerce Stream",
          description: "Preparation path for business careers",
          icon: Briefcase,
          link: "/career-paths/commerce"
        },
        {
          title: "MBA & Business",
          description: "Advanced business education",
          icon: Briefcase,
          link: "/career-paths/mba"
        }
      ]
    },
    "arts-design": {
      title: "Arts & Design",
      description: "Creative education in visual arts, design, and digital media",
      icon: Palette,
      timeline: "3-4 years undergraduate + portfolio development",
      jobProspects: "Growing opportunities in design, media, and creative industries",
      entryRequirements: "Portfolio of creative work, design aptitude test",
      educationPath: [
        {
          title: "Undergraduate Programs",
          description: "Bachelor's degrees in creative fields",
          keyPoints: [
            "BFA (Fine Arts) - 4 years",
            "B.Des (Design) - 4 years",
            "BVA (Visual Arts) - 4 years",
            "Specializations in graphic, product, fashion design"
          ]
        },
        {
          title: "Diploma Programs",
          description: "Focused creative skill development",
          keyPoints: [
            "Graphic Design Diploma - 1-2 years",
            "Animation Diploma - 1-2 years",
            "Fashion Design Diploma - 1-2 years",
            "Practical skills with industry applications"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Design Software",
            description: "Proficiency in industry-standard creative applications"
          },
          {
            name: "Visual Composition",
            description: "Understanding of layout, color, and form"
          },
          {
            name: "Technical Drawing",
            description: "Creating precise technical illustrations"
          }
        ],
        soft: [
          {
            name: "Creativity",
            description: "Innovative thinking and problem-solving"
          },
          {
            name: "Client Communication",
            description: "Understanding and implementing client requirements"
          }
        ]
      },
      careerOptions: [
        {
          title: "Graphic Designer",
          description: "Creating visual content for various media",
          salary: "₹2.5-8 lakhs per annum",
          growth: "Good with specialized portfolio",
          environment: "Design agencies, marketing departments, freelance"
        },
        {
          title: "UX/UI Designer",
          description: "Designing user interfaces for digital products",
          salary: "₹4-15 lakhs per annum",
          growth: "Excellent in technology sector",
          environment: "Tech companies, digital agencies, product firms"
        }
      ],
      relatedPaths: [
        {
          title: "Arts/Humanities",
          description: "Foundation for creative careers",
          icon: BookOpen,
          link: "/career-paths/arts"
        },
        {
          title: "Vocational Courses",
          description: "Short-term creative skill development",
          icon: BookCheck,
          link: "/career-paths/vocational"
        }
      ]
    },
    "law": {
      title: "Law",
      description: "Education in legal studies and practices",
      icon: BookOpen,
      timeline: "3-5 years undergraduate + specialization",
      jobProspects: "Stable demand in legal services, corporate, and judiciary",
      entryRequirements: "Law entrance exam (CLAT, LSAT), 50-60% in 12th",
      educationPath: [
        {
          title: "Undergraduate Programs",
          description: "Bachelor's degrees in law",
          keyPoints: [
            "5-year integrated BA LLB/BBA LLB/B.Sc LLB",
            "3-year LLB (after graduation)",
            "Study of constitutional, civil, criminal law",
            "Legal research and moot courts"
          ]
        },
        {
          title: "Specialization Options",
          description: "Focused legal expertise",
          keyPoints: [
            "LLM (Master of Laws) - 1-2 years",
            "Specialized diploma in taxation, IP, corporate law",
            "Judicial services examination preparation",
            "Legal internships and clerkships"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Legal Research",
            description: "Finding and analyzing legal precedents"
          },
          {
            name: "Case Analysis",
            description: "Evaluating legal situations and applicable laws"
          },
          {
            name: "Document Drafting",
            description: "Preparing legal documents and contracts"
          }
        ],
        soft: [
          {
            name: "Argumentation",
            description: "Presenting logical legal arguments"
          },
          {
            name: "Critical Thinking",
            description: "Analyzing complex legal situations"
          }
        ]
      },
      careerOptions: [
        {
          title: "Advocate",
          description: "Legal representation and counsel",
          salary: "₹3-20 lakhs per annum",
          growth: "Variable based on specialization and practice",
          environment: "Law firms, private practice, chambers"
        },
        {
          title: "Legal Advisor",
          description: "In-house legal consultation for organizations",
          salary: "₹5-25 lakhs per annum",
          growth: "Stable with corporate experience",
          environment: "Corporate legal departments, organizations"
        }
      ],
      relatedPaths: [
        {
          title: "Arts/Humanities",
          description: "Foundation for legal studies",
          icon: BookOpen,
          link: "/career-paths/arts"
        },
        {
          title: "Government Exams",
          description: "Preparation for judicial services",
          icon: BookCheck,
          link: "/career-paths/government-exams"
        }
      ]
    },
    "hotel-management": {
      title: "Hotel Management",
      description: "Education in hospitality, tourism, and service management",
      icon: Globe,
      timeline: "3-4 years undergraduate + industry experience",
      jobProspects: "Growing opportunities in hospitality, tourism, and service sectors",
      entryRequirements: "Hotel management entrance exams, 50% in 12th",
      educationPath: [
        {
          title: "Undergraduate Programs",
          description: "Bachelor's degrees in hospitality",
          keyPoints: [
            "BHM (Hotel Management) - 3-4 years",
            "BA in Hospitality - 3 years",
            "BSc in Hospitality and Tourism - 3 years",
            "Practical training in food production, service, housekeeping"
          ]
        },
        {
          title: "Diploma Programs",
          description: "Focused hospitality training",
          keyPoints: [
            "Diploma in Hotel Management - 1-2 years",
            "Diploma in Food & Beverage - 1 year",
            "Culinary Arts Diploma - 1-2 years",
            "Practical industry-oriented training"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Food & Beverage Service",
            description: "Professional food service techniques"
          },
          {
            name: "Front Office Management",
            description: "Guest relations and property management systems"
          },
          {
            name: "Housekeeping Operations",
            description: "Accommodation and facility maintenance"
          }
        ],
        soft: [
          {
            name: "Customer Service",
            description: "Exceptional guest experience delivery"
          },
          {
            name: "Team Management",
            description: "Coordinating hospitality staff operations"
          }
        ]
      },
      careerOptions: [
        {
          title: "Hotel Operations Trainee",
          description: "Entry-level hotel management position",
          salary: "₹2.5-5 lakhs per annum",
          growth: "Good progression to department manager",
          environment: "Hotels, resorts, restaurants, cruise ships"
        },
        {
          title: "Food & Beverage Manager",
          description: "Managing restaurant and catering operations",
          salary: "₹4-12 lakhs per annum",
          growth: "Excellent with luxury brand experience",
          environment: "Fine dining, hotels, catering companies"
        }
      ],
      relatedPaths: [
        {
          title: "Business & Management",
          description: "Complementary business education",
          icon: Briefcase,
          link: "/career-paths/business"
        },
        {
          title: "Vocational Courses",
          description: "Short-term hospitality training",
          icon: BookCheck,
          link: "/career-paths/vocational"
        }
      ]
    },
    "government-exams": {
      title: "Government Exams",
      description: "Preparation for civil services and other government positions",
      icon: BookCheck,
      timeline: "1-3 years preparation after graduation",
      jobProspects: "Secure employment in public sector with stability and benefits",
      entryRequirements: "Bachelor's degree in any discipline, age limits vary",
      educationPath: [
        {
          title: "Civil Services",
          description: "Prestigious administrative services",
          keyPoints: [
            "UPSC Civil Services Examination",
            "Three stages: Prelims, Mains, Interview",
            "IAS, IPS, IFS, IRS and other services",
            "Extensive preparation in general studies and optional subjects"
          ]
        },
        {
          title: "Other Government Exams",
          description: "Various public sector opportunities",
          keyPoints: [
            "Banking exams (IBPS, SBI)",
            "SSC (Staff Selection Commission)",
            "Railway Recruitment Board",
            "State Public Service Commissions"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Current Affairs",
            description: "In-depth knowledge of national and international events"
          },
          {
            name: "General Knowledge",
            description: "Wide-ranging information across disciplines"
          },
          {
            name: "Analytical Writing",
            description: "Structured essay writing on complex topics"
          }
        ],
        soft: [
          {
            name: "Time Management",
            description: "Efficient study planning and execution"
          },
          {
            name: "Stress Management",
            description: "Maintaining focus during competitive preparation"
          }
        ]
      },
      careerOptions: [
        {
          title: "Civil Servant",
          description: "Administrative and policy implementation roles",
          salary: "₹6-15 lakhs per annum",
          growth: "Structured progression based on seniority",
          environment: "Government departments, public administration"
        },
        {
          title: "Bank Officer",
          description: "Banking operations and management",
          salary: "₹4-12 lakhs per annum",
          growth: "Regular promotions through internal exams",
          environment: "Public sector banks, financial institutions"
        }
      ],
      relatedPaths: [
        {
          title: "Arts/Humanities",
          description: "Helpful background for civil services",
          icon: BookOpen,
          link: "/career-paths/arts"
        },
        {
          title: "Law",
          description: "Complementary for administrative roles",
          icon: BookOpen,
          link: "/career-paths/law"
        }
      ]
    },
    "masters": {
      title: "Master's Degrees",
      description: "Advanced academic and professional qualifications",
      icon: GraduationCap,
      timeline: "2-3 years postgraduate study",
      jobProspects: "Enhanced opportunities in specialized and senior roles",
      entryRequirements: "Bachelor's degree with 50-60%, entrance exams",
      educationPath: [
        {
          title: "Academic Master's",
          description: "Advanced study in academic disciplines",
          keyPoints: [
            "M.Sc (Science) - 2 years",
            "MA (Arts) - 2 years",
            "M.Com (Commerce) - 2 years",
            "Research methodology and specialized knowledge"
          ]
        },
        {
          title: "Professional Master's",
          description: "Career-focused advanced degrees",
          keyPoints: [
            "M.Tech/ME (Engineering) - 2 years",
            "MBA (Business) - 2 years",
            "MCA (Computer Applications) - 2 years",
            "Industry projects and practical applications"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Research Methods",
            description: "Systematic investigation and analysis"
          },
          {
            name: "Advanced Theory",
            description: "In-depth understanding of specialized concepts"
          },
          {
            name: "Academic Writing",
            description: "Scholarly writing and publication"
          }
        ],
        soft: [
          {
            name: "Critical Analysis",
            description: "Evaluating complex information and theories"
          },
          {
            name: "Presentation Skills",
            description: "Effective communication of specialized knowledge"
          }
        ]
      },
      careerOptions: [
        {
          title: "Specialist Professional",
          description: "Advanced role in chosen discipline",
          salary: "₹6-20 lakhs per annum",
          growth: "Better than bachelor's graduates",
          environment: "Specialized departments, research organizations"
        },
        {
          title: "Educator/Lecturer",
          description: "Teaching at college or university level",
          salary: "₹5-15 lakhs per annum",
          growth: "Stable with academic publications",
          environment: "Educational institutions, training centers"
        }
      ],
      relatedPaths: [
        {
          title: "PhD",
          description: "Further academic specialization",
          icon: Lightbulb,
          link: "/career-paths/phd"
        },
        {
          title: "MBA",
          description: "Business management specialization",
          icon: Briefcase,
          link: "/career-paths/mba"
        }
      ]
    },
    "phd": {
      title: "Doctoral Programs",
      description: "Highest academic qualification focused on original research",
      icon: Lightbulb,
      timeline: "3-5 years research and dissertation",
      jobProspects: "Specialized opportunities in academia, research, and development",
      entryRequirements: "Master's degree, research proposal, entrance test",
      educationPath: [
        {
          title: "PhD Structure",
          description: "Doctoral research journey",
          keyPoints: [
            "Coursework (1 year)",
            "Research proposal and approval",
            "Independent research (2-4 years)",
            "Thesis writing and defense"
          ]
        },
        {
          title: "Funding Options",
          description: "Supporting doctoral studies",
          keyPoints: [
            "UGC/CSIR fellowships",
            "Institutional scholarships",
            "Project-based funding",
            "Teaching assistantships"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Research Design",
            description: "Planning and executing original investigations"
          },
          {
            name: "Data Analysis",
            description: "Advanced statistical and qualitative methods"
          },
          {
            name: "Academic Publishing",
            description: "Writing research papers for scholarly journals"
          }
        ],
        soft: [
          {
            name: "Independent Work",
            description: "Self-directed research management"
          },
          {
            name: "Scholarly Communication",
            description: "Presenting complex findings to diverse audiences"
          }
        ]
      },
      careerOptions: [
        {
          title: "Professor",
          description: "Senior academic teaching and research position",
          salary: "₹8-25 lakhs per annum",
          growth: "Progressive academic career path",
          environment: "Universities, research institutions"
        },
        {
          title: "Research Scientist",
          description: "Leading research in specialized domains",
          salary: "₹8-30 lakhs per annum",
          growth: "Advanced with publications and patents",
          environment: "R&D departments, research laboratories"
        }
      ],
      relatedPaths: [
        {
          title: "Master's Degrees",
          description: "Prerequisite for doctoral studies",
          icon: GraduationCap,
          link: "/career-paths/masters"
        },
        {
          title: "Science Stream",
          description: "Foundation for research careers",
          icon: Calculator,
          link: "/career-paths/science-pcm"
        }
      ]
    },
    "mba": {
      title: "MBA & Business",
      description: "Advanced management education for business leadership",
      icon: Briefcase,
      timeline: "1-2 years postgraduate study",
      jobProspects: "Excellent for management and leadership positions",
      entryRequirements: "Bachelor's degree, CAT/GMAT/XAT scores, work experience",
      educationPath: [
        {
          title: "Regular MBA",
          description: "Full-time management program",
          keyPoints: [
            "Core business subjects (marketing, finance, operations)",
            "Specializations in second year",
            "Case studies and business simulations",
            "Internships and industry projects"
          ]
        },
        {
          title: "Alternative Formats",
          description: "Flexible MBA options",
          keyPoints: [
            "Executive MBA (for working professionals)",
            "Online/Distance MBA",
            "Part-time MBA",
            "Global/International MBA"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Strategic Planning",
            description: "Long-term business vision and execution"
          },
          {
            name: "Financial Management",
            description: "Budget planning and financial analysis"
          },
          {
            name: "Marketing Strategy",
            description: "Market analysis and campaign development"
          }
        ],
        soft: [
          {
            name: "Leadership",
            description: "Team motivation and organizational direction"
          },
          {
            name: "Business Communication",
            description: "Effective professional communication"
          }
        ]
      },
      careerOptions: [
        {
          title: "Management Consultant",
          description: "Advisory services for business improvement",
          salary: "₹10-30 lakhs per annum",
          growth: "Excellent with top-tier MBA",
          environment: "Consulting firms, independent practice"
        },
        {
          title: "Business Manager",
          description: "Overseeing business operations and strategy",
          salary: "₹8-25 lakhs per annum",
          growth: "Good progression to senior management",
          environment: "Corporations, multinational companies"
        }
      ],
      relatedPaths: [
        {
          title: "Business & Management",
          description: "Undergraduate business foundation",
          icon: Briefcase,
          link: "/career-paths/business"
        },
        {
          title: "Commerce Stream",
          description: "Early preparation for business careers",
          icon: Briefcase,
          link: "/career-paths/commerce"
        }
      ]
    },
    "certifications": {
      title: "Professional Certifications",
      description: "Specialized credentials for career advancement",
      icon: BookCheck,
      timeline: "2 months to 1 year, course-dependent",
      jobProspects: "Targeted improvement in specific career paths",
      entryRequirements: "Varies by certification, often requires basic qualification",
      educationPath: [
        {
          title: "Technical Certifications",
          description: "Industry-specific technical credentials",
          keyPoints: [
            "IT certifications (AWS, Microsoft, Cisco)",
            "Project Management (PMP, PRINCE2)",
            "Digital Marketing (Google, HubSpot)",
            "Self-paced or instructor-led programs"
          ]
        },
        {
          title: "Professional Development",
          description: "Skill enhancement certifications",
          keyPoints: [
            "Financial certifications (CFA, FRM)",
            "HR certifications (SHRM, HRCI)",
            "Six Sigma and quality management",
            "Continuing education requirements"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Specialized Tools",
            description: "Proficiency in industry-specific software/tools"
          },
          {
            name: "Current Methodologies",
            description: "Up-to-date professional practices"
          },
          {
            name: "Industry Standards",
            description: "Knowledge of best practices and regulations"
          }
        ],
        soft: [
          {
            name: "Continuous Learning",
            description: "Commitment to professional development"
          },
          {
            name: "Adaptability",
            description: "Quickly applying new skills to workplace"
          }
        ]
      },
      careerOptions: [
        {
          title: "Certified Professional",
          description: "Specialized role requiring specific credentials",
          salary: "10-30% premium over non-certified",
          growth: "Enhanced through continuing education",
          environment: "Various industries based on certification"
        },
        {
          title: "Consultant",
          description: "Advisory role based on certified expertise",
          salary: "Variable based on certification value",
          growth: "Good with multiple complementary certifications",
          environment: "Consulting firms, independent practice"
        }
      ],
      relatedPaths: [
        {
          title: "Master's Degrees",
          description: "More comprehensive advanced education",
          icon: GraduationCap,
          link: "/career-paths/masters"
        },
        {
          title: "Vocational Courses",
          description: "Initial skill development",
          icon: BookCheck,
          link: "/career-paths/vocational"
        }
      ]
    },
    "study-abroad": {
      title: "Foreign Education",
      description: "International educational opportunities and global exposure",
      icon: Globe,
      timeline: "1-4 years depending on program",
      jobProspects: "Access to global job market and multinational companies",
      entryRequirements: "Strong academic record, standardized tests, language proficiency",
      educationPath: [
        {
          title: "Undergraduate Abroad",
          description: "Bachelor's degrees in foreign universities",
          keyPoints: [
            "USA (4 years), UK (3 years), Australia (3-4 years)",
            "Liberal arts or specialized programs",
            "Application through Common App or direct",
            "Standardized tests: SAT, ACT, IELTS/TOEFL"
          ]
        },
        {
          title: "Postgraduate Abroad",
          description: "Master's and PhD programs internationally",
          keyPoints: [
            "Master's: 1-2 years depending on country",
            "Research or coursework-based options",
            "Standardized tests: GRE, GMAT, IELTS/TOEFL",
            "Scholarship and assistantship opportunities"
          ]
        }
      ],
      skills: {
        technical: [
          {
            name: "Global Perspective",
            description: "Understanding international practices"
          },
          {
            name: "Cross-cultural Communication",
            description: "Effective interaction across cultures"
          },
          {
            name: "Foreign Language",
            description: "Proficiency in additional languages"
          }
        ],
        soft: [
          {
            name: "Adaptability",
            description: "Adjusting to new environments and systems"
          },
          {
            name: "Independence",
            description: "Self-reliance in foreign settings"
          }
        ]
      },
      careerOptions: [
        {
          title: "International Professional",
          description: "Career in global organizations",
          salary: "Variable by country and industry",
          growth: "Excellent with international network",
          environment: "Multinational corporations, international organizations"
        },
        {
          title: "Global Entrepreneur",
          description: "Business ventures with international scope",
          salary: "Variable based on business success",
          growth: "High potential with cross-border operations",
          environment: "Global startups, international markets"
        }
      ],
      relatedPaths: [
        {
          title: "Master's Degrees",
          description: "Domestic advanced education option",
          icon: GraduationCap,
          link: "/career-paths/masters"
        },
        {
          title: "MBA & Business",
          description: "International business education popular choice",
          icon: Briefcase,
          link: "/career-paths/mba"
        }
      ]
    }
  };
  
  return pathId ? paths[pathId] : null;
}
