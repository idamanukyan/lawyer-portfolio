const expertise = [
  'Criminal Defense',
  'Corporate Law',
  'Banking Regulations',
  'International Law',
  'Human Rights',
  'Legal Research',
]

const values = [
  {
    title: 'Integrity',
    description: 'Honest, transparent counsel at every stage of representation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Precision',
    description: 'Meticulous attention to detail in research, drafting, and case preparation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Commitment',
    description: 'Dedicated advocacy for justice, human rights, and the public interest.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Discretion',
    description: 'Absolute confidentiality in all client matters.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Professional Summary */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
            Nare Manukyan is a junior lawyer with a distinctive international profile,
            combining academic training from both Armenian and French legal institutions
            with hands-on experience in criminal defense, corporate law, and multilateral diplomacy.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center mt-6">
            Her professional journey includes work at the United Nations Office at Geneva,
            where she represented Armenia during sessions of the UN Human Rights Council
            and the Universal Periodic Review. This international exposure, paired with
            practical courtroom and investigative experience in Armenia, provides her with
            a nuanced understanding of both domestic and international legal frameworks.
          </p>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-semibold text-primary text-center mb-8">
            Areas of Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((item) => (
              <span
                key={item}
                className="px-5 py-2.5 bg-primary/5 text-primary font-medium rounded-full border border-primary/10 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-primary text-center mb-10">
            Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group p-6 bg-background rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {value.title}
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
