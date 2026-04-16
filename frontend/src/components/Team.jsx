import { useState } from 'react'

function TeamCard({ member }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      className={`team-card ${hov ? 'hovered' : ''}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="team-avatar">{member.emoji}</div>
      <div className="team-name">{member.name}</div>
      <div className="team-role">{member.role}</div>
    </div>
  )
}

const TEAM = [
  { name: 'Abhinav Raj', role: 'Pod Leader / PM', emoji: '🧭' },
  { name: 'Aditya Kumar', role: 'AI Engineer – Resume', emoji: '🤖' },
  { name: 'Anurag Gupta', role: 'AI Engineer – Testing', emoji: '🔬' },
  { name: 'Himanshu Kumar', role: 'AI Engineer – Test Analysis', emoji: '📈' },
  { name: 'Aryan Singh', role: 'AI Engineer & Dashboard', emoji: '📊' },
  { name: 'Gaurav Kumar Jha', role: 'Data Engineer', emoji: '🗄️' },
  { name: 'Haris Jamil', role: 'Backend Developer', emoji: '⚙️' },
  { name: 'Gyanshankar Singh', role: 'Backend & DevOps', emoji: '🚀' },
  { name: 'Md Akib', role: 'Frontend Developer', emoji: '🎨' },
  { name: 'Jakaria Eunus', role: 'Documentation', emoji: '📝' },
]

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="section-header">
          <div className="section-label team-label">The Builders</div>
          <h2>Meet the Team</h2>
          <p>
            10 specialists across AI, backend, frontend, data engineering, and DevOps — all aligned on one mission.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map(member => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
