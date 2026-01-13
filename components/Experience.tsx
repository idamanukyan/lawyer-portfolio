const experiences = [
  {
    title: 'United Nations Office at Geneva',
    role: 'Intern',
    period: 'March 2025 - May 2025',
    description: 'Represented Armenia during the 49th session of the Universal Periodic Review and the 58th session of the UN Human Rights Council. Delivered three speeches before international delegates, drafted analytical reports, and engaged in intergovernmental cooperation within a high-level multilateral environment.',
    type: 'international',
  },
  {
    title: 'Embassy of Armenia to Switzerland',
    role: 'Intern',
    period: 'March 2025 - May 2025',
    description: 'Supported the Embassy\'s legal functions through research, document drafting, and participation in international conferences on human rights. Prepared legal briefs and represented Armenian interests at UN-related events and other international forums.',
    type: 'international',
  },
  {
    title: 'Apex Consulting Law Firm',
    role: 'Junior Criminal Lawyer',
    period: 'September 2024 - April 2025',
    description: 'Contributed to criminal case preparation, conducted legal research, and drafted motions and legal documents. Provided support to senior attorneys during court proceedings and client consultations, ensuring strategic and thorough case management.',
    type: 'legal',
  },
  {
    title: 'Court of First Instance, Shengavit Community of Yerevan',
    role: 'Intern',
    period: 'July 2024 - September 2024',
    description: 'Observed and participated in court hearings across various case types. Engaged in substantive discussions with judges, prosecutors, and advocates. Gained practical insight into judicial administration, court procedures, and legal analytical work.',
    type: 'judicial',
  },
  {
    title: 'Investigative Committee of the Republic of Armenia',
    role: 'Intern',
    period: 'May 2024 - July 2024',
    description: 'Participated in active investigations, including crime scene inspections, searches, and document reviews. Developed firsthand understanding of investigative procedures and evidence handling within the criminal justice system.',
    type: 'investigative',
  },
  {
    title: 'Fast Bank',
    role: 'Junior Lawyer',
    period: 'May 2023 - September 2023',
    description: 'Assisted the legal team with document management, contract drafting, and legal research. Gained practical experience in corporate law and banking regulations, supporting the preparation of agreements and internal legal memoranda.',
    type: 'corporate',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A track record of meaningful contributions across legal, judicial,
            and international organizations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="group p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300">
                    {/* Period */}
                    <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
                      {exp.period}
                    </span>

                    {/* Title & Role */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-secondary font-medium mb-4">
                      {exp.role}
                    </p>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
