import { Leaf, Heart, Sprout } from 'lucide-react';

export default function AboutUs() {
  return (
    <main className="page-shell">
      <section className="about-hero">
        <p className="eyebrow">OUR ROOTS, YOUR PARADISE</p>
        <h1>Making room for <em>more green.</em></h1>
        <p className="lead">Paradise Nursery helps you bring nature home with thoughtfully selected plants and simple care guidance.</p>
      </section>
      <section className="about-grid">
        <article className="info-card"><Leaf size={28} /><h2>Plants for every space</h2><p>From desk-friendly succulents to leafy statement plants, find a plant that fits your home and your routine.</p></article>
        <article className="info-card"><Heart size={28} /><h2>Carefully chosen</h2><p>We focus on healthy-looking plants, practical advice, and a shopping experience that feels easy and welcoming.</p></article>
        <article className="info-card"><Sprout size={28} /><h2>Grow at your pace</h2><p>New plant parent or experienced grower, we believe every little bit of green makes a difference.</p></article>
      </section>
    </main>
  );
}
