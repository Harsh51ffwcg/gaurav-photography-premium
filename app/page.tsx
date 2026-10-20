'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Camera, Check, ChevronDown, Heart, Instagram, Menu, MessageCircle, Play, Sparkles, X } from 'lucide-react';

const phone = '918178416148';
const whatsapp = (message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const photos = [
  { title: 'The Wedding Story', category: 'Weddings', image: 'photo-1519741497674-611481863552', size: 'tall' },
  { title: 'A Quiet Kind of Love', category: 'Pre-wedding', image: 'photo-1537633552985-df8429e8048b', size: 'wide' },
  { title: 'Golden Hour', category: 'Portraits', image: 'photo-1529636798458-92182e662485', size: 'normal' },
  { title: 'The Little Things', category: 'Celebrations', image: 'photo-1464366400600-7168b8af9bc3', size: 'normal' },
  { title: 'Forever Starts Here', category: 'Weddings', image: 'photo-1583939003579-730e3918a45a', size: 'wide' },
  { title: 'Family, Always', category: 'Portraits', image: 'photo-1511895426328-dc8714191300', size: 'tall' },
];
const services = [
  ['01', 'Wedding photography', 'Honest emotion, beautiful details, and the moments in between.'],
  ['02', 'Pre-wedding stories', 'A little adventure, a lot of chemistry, and your story in every frame.'],
  ['03', 'Birthday & celebrations', 'Big milestones and spontaneous little moments, all remembered.'],
  ['04', 'Portraits & family', 'Photographs that feel like you, with the people who matter most.'],
  ['05', 'Maternity & newborn', 'The soft, fleeting beginnings you will want to remember forever.'],
  ['06', 'Events & videography', 'Thoughtful coverage and films that bring the day back to life.'],
];
const reviews = [
  { name: 'Gourav Aggarwal', date: 'September 2026', text: 'Excellent photography and videography service! Very professional and punctual. Photos and videos were really good, and the delivery was exactly on time.' },
  { name: 'Yogesh Jaipuria', date: 'September 2026', text: 'A very good photographer. I am fully satisfied with their work. The quality of pictures and album were superb.' },
  { name: 'Pawan Kumar Sharma', date: 'September 2026', text: 'Excellent photography and timely delivery. We recommend Gaurav Photography Studio for any event memory coverage.' },
];
const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } } as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const categories = ['All', 'Weddings', 'Pre-wedding', 'Portraits', 'Celebrations'];
  const visiblePhotos = photos.filter((p) => filter === 'All' || p.category === filter);
  return <main>
    <div className="topline"><span>INDIRAPURAM · GHAZIABAD · DELHI NCR</span><span>MON–SUN&nbsp; 10:15 AM – 9:00 PM</span></div>
    <header className="nav wrap">
      <a className="brand" href="#home" aria-label="Gaurav Photography home"><span className="brand-mark"><Camera size={19}/></span><span>GAURAV <i>PHOTOGRAPHY</i><small>STUDIO · EST. WITH LOVE</small></span></a>
      <nav className={menuOpen ? 'navlinks open' : 'navlinks'}><a href="#work" onClick={() => setMenuOpen(false)}>Our work</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#story" onClick={() => setMenuOpen(false)}>Our approach</a><a href="#reviews" onClick={() => setMenuOpen(false)}>Kind words</a><a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={15}/></a></nav>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero wrap" id="home">
      <div className="hero-copy"><motion.div initial="hidden" animate="visible" variants={reveal} className="eyebrow"><span className="eyebrow-line"/> MORE THAN A PHOTOGRAPH</motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={reveal} transition={{delay:.08}}>Some moments<br/>deserve to be <em>forever.</em></motion.h1>
        <motion.p className="hero-sub" initial="hidden" animate="visible" variants={reveal} transition={{delay:.16}}>Real emotion. Beautifully told stories. Photographs that take you right back to how it felt.</motion.p>
        <motion.div className="hero-actions" initial="hidden" animate="visible" variants={reveal} transition={{delay:.24}}><a className="btn btn-dark" href="#work">Explore our work <ArrowRight size={16}/></a><a className="text-link" href={whatsapp('Hi Gaurav Photography Studio, I would like to enquire about a photoshoot.')} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Start an enquiry</a></motion.div>
        <div className="hero-foot"><div className="stars">★★★★★ <span>4.6 / 5</span></div><span>272+ Google reviews</span><span className="hero-foot-divider"/><span>Capturing stories since 2011*</span></div>
      </div>
      <motion.div className="hero-visual" initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{duration:.9,ease:'easeOut'}}>
        <div className="hero-photo" style={{backgroundImage:'url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85)'}}/>
        <div className="hero-photo-shade"/><div className="hero-photo-caption"><span>01 / THE ART OF REMEMBERING</span><span>LOVE, IN EVERY FRAME</span></div>
        <div className="photo-stamp"><span>YOUR STORY</span><Heart size={20} strokeWidth={1.4}/><span>OUR LENS</span></div>
      </motion.div>
      <a className="scroll-cue" href="#intro"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
    </section>

    <section className="intro section-pad" id="intro"><div className="wrap intro-grid"><motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:.3}} variants={reveal}><div className="eyebrow"><span className="eyebrow-line"/> THE FEELING BEHIND THE FRAME</div><h2>Life moves fast.<br/><em>Let’s keep the good parts.</em></h2></motion.div><motion.div className="intro-copy" initial="hidden" whileInView="visible" viewport={{once:true,amount:.3}} variants={reveal}><p>From the nervous smile before “I do” to the chaos of a family celebration, the best photographs are about more than how a moment looked. They’re about how it felt.</p><p>At Gaurav Photography Studio, we turn fleeting moments into keepsakes you’ll come back to for years.</p><a href="#story" className="under-link">Get to know our approach <ArrowRight size={15}/></a></motion.div></div></section>

    <section className="work section-pad" id="work"><div className="wrap"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> A FEW FAVOURITE FRAMES</div><h2>Stories worth <em>stopping for.</em></h2></div><p>Every couple, every family, every celebration has its own rhythm. Here’s a little of what we love to capture.</p></div>
      <div className="filters" role="group" aria-label="Filter portfolio">{categories.map(c=><button key={c} className={filter===c?'filter active':'filter'} onClick={()=>setFilter(c)}>{c}</button>)}</div>
      <div className="portfolio-grid">{visiblePhotos.map((p)=>{const realIndex=photos.findIndex(x=>x.title===p.title);return <motion.button layout key={p.title} className={`portfolio-card ${p.size}`} onClick={()=>setActivePhoto(realIndex)} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.5}}><div className="portfolio-image" style={{backgroundImage:`url(https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=1000&q=82)`}}/><div className="portfolio-overlay"><span>{p.category}</span><h3>{p.title}</h3><span className="card-arrow"><ArrowUpRight size={18}/></span></div></motion.button>})}</div>
      <div className="portfolio-note"><span><Sparkles size={16}/> A small preview of the stories we love</span><a href={whatsapp('Hi, I would love to see more of your photography portfolio.')} target="_blank" rel="noreferrer" className="under-link">Ask for the full portfolio <ArrowRight size={15}/></a></div>
    </div></section>

    <section className="manifesto" id="story"><div className="manifesto-image"/><div className="manifesto-content"><div className="eyebrow light"><span className="eyebrow-line"/> HOW WE SEE IT</div><h2>Not just how<br/>it <em>looked.</em><br/>How it <em>felt.</em></h2><p>We look for the quiet glances, the happy tears, the unplanned laughter. We’ll guide you when you need it, step back when you don’t, and make space for the moments that are unmistakably yours.</p><div className="manifesto-sign"><span className="sign-mark">G.</span><span>Gaurav Photography Studio<small>Thoughtfully capturing your story</small></span></div></div></section>

    <section className="services section-pad" id="services"><div className="wrap"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> WHAT WE CAN CAPTURE</div><h2>Your moments.<br/><em>Our kind of magic.</em></h2></div><p>From once-in-a-lifetime celebrations to the everyday portraits you’ll treasure, let’s make something meaningful together.</p></div><div className="service-list">{services.map(([n,title,desc])=><a key={n} className="service-row" href={whatsapp(`Hi Gaurav Photography Studio, I would like to enquire about ${title.toLowerCase()}.`)} target="_blank" rel="noreferrer"><span className="service-num">{n}</span><h3>{title}</h3><p>{desc}</p><span className="service-arrow"><ArrowUpRight size={20}/></span></a>)}</div></div></section>

    <section className="quote-band"><div className="quote-mark">“</div><blockquote>Photographs are the little time machines<br/>we get to keep.</blockquote><span>MAKE A MEMORY. KEEP IT FOREVER.</span></section>

    <section className="reviews section-pad" id="reviews"><div className="wrap"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> KIND WORDS, REAL PEOPLE</div><h2>Don’t just take <em>our word.</em></h2></div><div className="review-score"><div className="stars">★★★★★</div><strong>4.6 <small>/ 5</small></strong><span>Based on 272+ Google reviews</span></div></div><div className="review-grid">{reviews.map((r,i)=><motion.article className="review-card" key={r.name} initial="hidden" whileInView="visible" viewport={{once:true,amount:.2}} variants={reveal} transition={{delay:i*.08}}><div className="stars">★★★★★</div><p>“{r.text}”</p><div className="review-author"><div className="review-avatar">{r.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div><div><strong>{r.name}</strong><span>Google review · {r.date}</span></div><Check size={16} className="review-check"/></div></motion.article>)}</div><div className="review-bottom"><span>Kind words from people who trusted us with their memories.</span><a className="under-link" href="https://www.google.com/search?q=Gaurav+Photography+Studio+Indirapuram+Ghaziabad+reviews" target="_blank" rel="noreferrer">Read more reviews <ArrowUpRight size={15}/></a></div></div></section>

    <section className="contact section-pad" id="contact"><div className="wrap contact-grid"><div><div className="eyebrow light"><span className="eyebrow-line"/> YOUR STORY STARTS HERE</div><h2>Have a date<br/>in <em>mind?</em></h2><p>Tell us what you’re celebrating. We’ll help you figure out the rest, one detail at a time.</p><a className="btn btn-light" href={whatsapp('Hi Gaurav Photography Studio! I would like to discuss a photography booking.')} target="_blank" rel="noreferrer">Let’s talk on WhatsApp <ArrowUpRight size={17}/></a></div><div className="contact-details"><div className="contact-item"><span>CALL / WHATSAPP</span><a href="tel:+918178416148">+91 81784 16148 <ArrowUpRight size={14}/></a></div><div className="contact-item"><span>COME SAY HELLO</span><p>SRD-35, First Floor, Gyan Khand III,<br/>Indirapuram, Ghaziabad, UP 201014</p><a href="https://www.google.com/maps/search/?api=1&query=Gaurav+Photography+Studio+SRD-35+Gyan+Khand+III+Indirapuram+Ghaziabad" target="_blank" rel="noreferrer" className="contact-map">Get directions <ArrowUpRight size={14}/></a></div><div className="contact-item"><span>STUDIO HOURS</span><p>Every day · 10:15 AM – 9:00 PM</p></div></div></div></section>

    <footer className="footer"><div className="wrap footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Camera size={19}/></span><span>GAURAV <i>PHOTOGRAPHY</i><small>STUDIO · INDIRAPURAM</small></span></a><p>Making the fleeting feel forever.</p><a className="back-top" href="#home">BACK TO TOP ↑</a></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Gaurav Photography Studio. All rights reserved.</span><span>MADE WITH CARE, FRAME BY FRAME.</span></div></footer>
    <a className="floating-whatsapp" href={whatsapp('Hi Gaurav Photography Studio, I would like to enquire about a booking.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22}/><span>Let’s chat</span></a>
    {activePhoto!==null&&<div className="lightbox" role="dialog" aria-modal="true" aria-label="Portfolio image" onClick={()=>setActivePhoto(null)}><button className="lightbox-close" onClick={()=>setActivePhoto(null)} aria-label="Close image"><X/></button><div className="lightbox-image" style={{backgroundImage:`url(https://images.unsplash.com/${photos[activePhoto].image}?auto=format&fit=crop&w=1800&q=90)`}} onClick={e=>e.stopPropagation()}><div><span>{photos[activePhoto].category}</span><h2>{photos[activePhoto].title}</h2></div></div></div>}
  </main>;
}
