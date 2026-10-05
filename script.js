:root {
  --bg: #0f172a;
  --card: #111827;
  --card-alt: #1f2937;
  --text: #e5e7eb;
  --accent: #38bdf8;
  --muted: #94a3b8;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #020817, #0f172a 50%, #111827);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
}

.container {
  width: min(1100px, 90%);
  text-align: center;
}

h1 {
  margin-bottom: 28px;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: 1px;
}

.clock-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.clock-card {
  background: rgba(17, 24, 39, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 16px;
  padding: 22px 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.clock-card h2 {
  color: var(--accent);
  margin-bottom: 14px;
  font-size: 1.1rem;
}

.time {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.date {
  color: var(--muted);
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .clock-grid {
    grid-template-columns: 1fr;
  }
}
