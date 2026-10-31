
import { useState } from 'react'
import {
  Waves,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle2,
} from 'lucide-react'
import WhatsAppButton from './components/WhatsAppButton'

const classes = [
  {
    title: 'Beginner Swimming',
    subtitle: 'START YOUR JOURNEY',
    description:
      'Build confidence in the water and learn essential swimming fundamentals.',
    image:
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=850&q=85',
  },
  {
    title: 'Swimming Training',
    subtitle: 'IMPROVE YOUR TECHNIQUE',
    description:
      'Develop better swimming technique, breathing, coordination and endurance.',
    image:
      'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&w=850&q=85',
  },
  {
    title: 'Fitness Swimming',
    subtitle: 'MOVE WITH PURPOSE',
    description:
      'Enjoy swimming as part of an active lifestyle with guided practice.',
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=850&q=85',
  },
]

const advantages = [
  {
    icon: ShieldCheck,
    title: 'Safety conscious',
    description:
      'Learn water awareness and follow responsible swimming practices.',
  },
  {
    icon: Users,
    title: 'Learning for all levels',
    description:
      'Explore suitable swimming opportunities based on your experience.',
  },
  {
    icon: Clock,
    title: 'Flexible enquiries',
    description:
      'Ask about available sessions and find a suitable training schedule.',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    program: 'Beginner Swimming',
    message: '',
  })
  const [status, setStatus] = useState('')

  const links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Programs', '#programs'],
    ['Our Approach', '#approach'],
    ['Contact', '#contact'],
  ]

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setStatus('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus(
      'Your details have been checked in this demo. They have not yet been sent or saved. Laravel integration is our next step.'
    )
  }

  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-#082b3a/95 backdrop-blur-lg">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#home" className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-#50d6d0/60">
              <Waves size={26} className="text-#50d6d0" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-0.12em">
                CHAUNTRA
              </div>
              <div className="text-[10px] tracking-[0.38em] text-#50d6d0">
                AQUA ZONE
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="text-sm text-white/75 transition hover:text-#50d6d0"
              >
                {name}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-#50d6d0 px-6 py-3 text-sm font-bold text-#082b3a transition hover:bg-white"
            >
              Make an enquiry
              <ArrowUpRight className="ml-2 inline" size={16} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-#082b3a p-5 md:hidden">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-white"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-720px items-center overflow-hidden bg-#082b3a pt-20"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=2000&q=90')",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-#082b3a via-#082b3a/85 to-#082b3a/25" />
          <div className="absolute inset-0 bg-linear-to-t from-#082b3a/80 via-transparent to-#082b3a/20" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
            <div>
              <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-#50d6d0">
                <span className="h-px w-10 bg-#50d6d0" />
                WELCOME TO CHAUNTRA AQUA ZONE
              </p>

              <h1 className="max-w-3xl font-display text-6xl leading-[1.12] text-white sm:text-7xl lg:text-8xl">
                Discover the
                <span className="block italic text-#50d6d0">joy of</span>
                swimming.
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-white/75">
                A place to learn, improve and enjoy swimming. Begin with
                confidence and discover what you can achieve in the water.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#programs"
                  className="rounded-full bg-#50d6d0 px-7 py-4 font-bold text-#082b3a transition hover:bg-white"
                >
                  Explore programs
                  <ArrowRight className="ml-3 inline" size={17} />
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Discover our club
                </a>
              </div>
            </div>

            <div className="hidden justify-end lg:flex">
              <div className="max-w-xs border-l border-#50d6d0 pl-7">
                <Waves size={35} className="text-#50d6d0" />
                <p className="mt-6 font-display text-4xl leading-tight text-white">
                  Every stroke begins with a first step.
                </p>
                <p className="mt-5 text-sm leading-7 text-white/60">
                  Learn at your pace. Practice with purpose. Enjoy the journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section id="about" className="scroll-mt-24 px-5 py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-teal-600">
                ABOUT OUR CLUB
              </p>
              <h2 className="mt-5 font-display text-5xl leading-tight text-#082b3a sm:text-6xl">
                A refreshing way to build confidence.
              </h2>
              <p className="mt-7 leading-8 text-slate-600">
                Chauntra Aqua Zone focuses on swimming lessons, swimming
                training and helping people develop confidence in the water.
                Whether you are a beginner or looking to improve your skills,
                we welcome your enquiry.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 font-bold text-teal-700 hover:text-#082b3a"
              >
                GET IN TOUCH <ArrowRight size={18} />
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&w=1100&q=85"
                alt="Beautiful blue swimming pool"
                className="h-420px w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 left-5 rounded-xl bg-#082b3a p-6 text-white shadow-xl sm:left-10">
                <Waves className="text-#50d6d0" size={30} />
                <p className="mt-3 font-display text-2xl">
                  Learn. Practice. Progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="scroll-mt-20 bg-#e9f7f6 px-5 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold tracking-[0.3em] text-teal-700">
                  OUR SWIMMING PROGRAMS
                </p>
                <h2 className="mt-4 font-display text-5xl text-#082b3a sm:text-6xl">
                  Find your rhythm.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-slate-600">
                Discover a suitable starting point for your swimming journey.
                Contact us for details about classes and availability.
              </p>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {classes.map((item, index) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[10px] font-bold tracking-widest text-teal-800">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="p-7">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-teal-700">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-#082b3a">
                      {item.title}
                    </h3>
                    <p className="mt-4 min-h-16 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-800"
                    >
                      Enquire now <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className="scroll-mt-20 px-5 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold tracking-[0.3em] text-teal-700">
                THE AQUA ZONE EXPERIENCE
              </p>
              <h2 className="mt-4 font-display text-5xl text-#082b3a">
                Learn with confidence.
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {advantages.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-slate-200 p-8">
                  <Icon size={35} className="text-teal-600" />
                  <h3 className="mt-6 font-display text-2xl">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENQUIRY */}
        <section id="contact" className="scroll-mt-20 bg-#082b3a px-5 py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-2">
            <div className="text-white">
              <p className="text-xs font-bold tracking-[0.3em] text-#50d6d0">
                START YOUR JOURNEY
              </p>
              <h2 className="mt-5 font-display text-6xl leading-tight">
                Let's talk about swimming.
              </h2>
              <p className="mt-7 max-w-lg leading-8 text-white/65">
                Interested in swimming classes or training? Send us an enquiry
                and tell us what you are looking for.
              </p>
              <div className="mt-9 space-y-4 text-sm text-white/80">
                {[
                  'Tell us about your swimming experience',
                  'Select your preferred program',
                  'Ask about schedules and availability',
                ].map((text) => (
                  <p key={text} className="flex items-center gap-3">
                    <CheckCircle2 className="text-#50d6d0" size={19} />
                    {text}
                  </p>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-7 sm:p-9"
            >
              <h3 className="font-display text-3xl text-#082b3a">
                Make an enquiry
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                All fields marked with * are required.
              </p>

              <label className="mt-7 block text-sm font-semibold">
                Full name *
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-teal-600"
                />
              </label>

              <label className="mt-5 block text-sm font-semibold">
                Phone number *
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  pattern="[0-9+() -]{7,20}"
                  placeholder="Your contact number"
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-teal-600"
                />
              </label>

              <label className="mt-5 block text-sm font-semibold">
                Interested program *
                <select
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-600"
                >
                  <option>Beginner Swimming</option>
                  <option>Swimming Training</option>
                  <option>Fitness Swimming</option>
                  <option>Other / Need Guidance</option>
                </select>
              </label>

              <label className="mt-5 block text-sm font-semibold">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Your questions or requirements"
                  className="mt-2 w-full resize-y rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-teal-600"
                />
              </label>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-#082b3a px-5 py-4 font-bold text-white transition hover:bg-teal-700"
              >
                Submit enquiry <ArrowRight className="ml-2 inline" size={18} />
              </button>

              {status && (
                <p role="status" className="mt-4 rounded-lg bg-amber-50 p-3 text-sm leading-6 text-amber-900">
                  {status}
                </p>
              )}

              <p className="mt-4 text-xs text-slate-400">
                Demo form only. Your details are not transmitted or stored yet.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#051f2b] px-5 py-10 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center">
          <a href="#home" className="flex items-center gap-3">
            <Waves size={30} className="text-#50d6d0" />
            <div>
              <p className="font-bold tracking-widest">CHAUNTRA</p>
              <p className="text-[10px] tracking-[0.35em] text-#50d6d0">
                AQUA ZONE
              </p>
            </div>
          </a>
          <p className="text-sm text-white/55">
            Swimming lessons · Training · Water confidence
          </p>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Chauntra Aqua Zone
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  )
}
