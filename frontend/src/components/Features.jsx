import { useState } from 'react'

function FeatureCard({ feature, idx }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      className={`feature-card ${feature.onClick ? 'clickable' : ''} ${hov ? 'hovered' : ''}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={feature.onClick}
      role={feature.onClick ? 'button' : undefined}
      tabIndex={feature.onClick ? 0 : undefined}
      style={{
        '--feature-color': feature.color,
        animationDelay: `${idx * 0.07}s`,
      }}
    >
      <div className="feature-icon">{feature.icon}</div>
      <div className="feature-title">{feature.title}</div>
      <div className="feature-desc">{feature.desc}</div>
    </div>
  )
}

const FEATURES = [
  {
    icon: '📄',
    title: 'Resume Analyzer',
    desc: 'Upload your resume, extract skills automatically, and receive an AI-generated score with actionable feedback.',
    color: '#6EE7B7',
  },
  {
    icon: '🧪',
    title: 'Test Analysis System',
    desc: 'Conduct mock tests, analyze performance across domains, and identify precise skill gaps.',
    color: '#93C5FD',
  },
  {
    icon: '🎯',
    title: 'Resume-Based Test',
    desc: 'Generate personalised test questions derived directly from the skills listed on your resume.',
    color: '#FCA5A5',
  },
  {
    icon: '📅',
    title: 'AI Study Planner',
    desc: 'Receive a structured preparation roadmap generated from your test results.',
    color: '#F9A8D4',
  },
  {
    icon: '🎤',
    title: 'Interview Simulation',
    desc: 'Practice with realistic interview scenarios, get instant feedback on your responses.',
    color: '#FCD34D',
  },
  {
    icon: '🏢',
    title: 'Company Recommendation',
    desc: 'Get matched to companies that fit your skills and performance profile.',
    color: '#A5B4FC',
  },
  {
    icon: '🤖',
    title: 'Chatbot Assistance',
    desc: 'Ask anything about your preparation journey. The AI chatbot guides you 24/7.',
    color: '#6EE7B7',
  },
  {
    icon: '📊',
    title: 'Performance Dashboard',
    desc: 'Visualise improvement trends, track progress across all modules.',
    color: '#93C5FD',
  },
]

export default function Features({ onOpenResumeAnalyzer, onOpenTestAnalysis, onOpenResumeBasedTest, onOpenAIStudyPlanner, onOpenInterviewSimulation, onOpenCompanyRecommendation, onOpenChatbotAssistance, onOpenPerformanceDashboard }) {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <div className="section-label">Platform Modules</div>
          <h2>Everything you need to get placed</h2>
          <p>10 deeply integrated modules working together to take you from resume to offer letter.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <FeatureCard
              key={f.title}
              feature={{
                ...f,
                onClick:
                  f.title === 'Resume Analyzer'
                    ? onOpenResumeAnalyzer
                    : f.title === 'Test Analysis System'
                    ? onOpenTestAnalysis
                    : f.title === 'Resume-Based Test'
                    ? onOpenResumeBasedTest
                    : f.title === 'AI Study Planner'
                    ? onOpenAIStudyPlanner
                    : f.title === 'Interview Simulation'
                    ? onOpenInterviewSimulation
                    : f.title === 'Company Recommendation'
                    ? onOpenCompanyRecommendation
                    : f.title === 'Chatbot Assistance'
                    ? onOpenChatbotAssistance
                    : f.title === 'Performance Dashboard'
                    ? onOpenPerformanceDashboard
                    : undefined,
              }}
              idx={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
