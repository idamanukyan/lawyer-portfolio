const education = [
  {
    degree: "Bachelor's Degree in Law",
    institution: 'French University of Armenia',
    period: '2021 - Present',
    highlight: false,
  },
  {
    degree: "Bachelor's Degree in Law",
    institution: 'Jean Moulin Lyon 3 University (France)',
    period: '2022 - Present',
    highlight: true,
  },
  {
    degree: 'High School Diploma - Humanistic Studies',
    institution: 'Photon College',
    period: '2013 - 2021',
    highlight: 'Gold Medal',
  },
]

const languages = [
  { name: 'Armenian', level: 'Native', percentage: 100 },
  { name: 'English', level: 'C1 (Advanced)', percentage: 90 },
  { name: 'French', level: 'B2 (DELF Certified)', percentage: 75 },
  { name: 'Russian', level: 'B2 (Upper Intermediate)', percentage: 75 },
]

const skills = [
  'Legal Research and Analysis',
  'Legal Writing and Drafting',
  'Contract Negotiation',
  'Case Preparation and Management',
  'Multilingual Communication',
]

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Education & Qualifications
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Education */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Academic Degrees
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="group p-6 bg-background rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-foreground/70 mt-1">{edu.institution}</p>
                      <p className="text-sm text-foreground/50 mt-2">{edu.period}</p>
                    </div>
                    {edu.highlight && (
                      <span className="shrink-0 px-3 py-1 text-xs font-semibold text-white bg-secondary rounded-full">
                        {typeof edu.highlight === 'string' ? edu.highlight : 'Dual Degree'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Languages & Skills */}
          <div className="space-y-12">
            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                Languages
              </h3>

              <div className="space-y-5">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-sm text-foreground/60">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Professional Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/5 text-primary font-medium rounded-lg border border-primary/10 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
