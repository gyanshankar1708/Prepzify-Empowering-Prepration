import { useState } from 'react'

const ARCHITECTURE_LAYERS = [
  {
    layer: 'Output Layer',
    items: ['Dashboard', 'Recommendations', 'Study Plans'],
    color: '#6EE7B7',
    number: '01',
  },
  {
    layer: 'Application Layer',
    items: ['React.js Frontend', 'Interactive UI', 'Module Interfaces'],
    color: '#93C5FD',
    number: '02',
  },
  {
    layer: 'Logic Layer',
    items: ['Node.js Backend', 'REST APIs', 'Authentication'],
    color: '#F9A8D4',
    number: '03',
  },
  {
    layer: 'AI Layer',
    items: ['Resume AI', 'Test AI', 'Study Planner', 'Chatbot', 'Interview Sim'],
    color: '#FCD34D',
    number: '04',
  },
  {
    layer: 'Data Layer',
    items: ['MongoDB / Firebase', 'User Data', 'Test Results'],
    color: '#FCA5A5',
    number: '05',
  },
]

const USER_DATA = [
  { name: 'Abhinav', role: 'Pod Leader', score: 92, status: 'Active' },
  { name: 'Aditya', role: 'AI Engineer', score: 88, status: 'Active' },
  { name: 'Anurag', role: 'AI Engineer', score: 85, status: 'Active' },
  { name: 'Himanshu', role: 'AI Engineer', score: 90, status: 'Active' },
  { name: 'Aryan', role: 'Dashboard Dev', score: 87, status: 'Active' },
]

function ArchitectureLayer({ layer, number, items, color }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="architecture-layer"
      style={{ '--layer-color': color }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="layer-header">
        <div className="layer-number">{number}</div>
        <div className="layer-name">{layer}</div>
      </div>
      {expanded && (
        <div className="layer-items">
          {items.map(item => (
            <span key={item} className="layer-item">
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function UserRow({ user }) {
  return (
    <tr className="user-row">
      <td>{user.name}</td>
      <td>{user.role}</td>
      <td>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${user.score}%` }}></div>
        </div>
        <span>{user.score}%</span>
      </td>
      <td>
        <span className={`status-badge ${user.status.toLowerCase()}`}>
          {user.status}
        </span>
      </td>
    </tr>
  )
}

export default function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState('overview')

  return (
    <>
      <section id="dashboard" className="dashboard-section">
        <div className="dashboard-container">
          <div className="section-header">
            <div className="section-label">System Design</div>
            <h2>Built on a 5-Layer Architecture</h2>
          </div>

          <div className="architecture-stack">
            {ARCHITECTURE_LAYERS.map(layer => (
              <ArchitectureLayer
                key={layer.layer}
                {...layer}
              />
            ))}
          </div>

          <div className="metrics-section">
            <h3>Performance Metrics</h3>
            <div className="metrics-tabs">
              <button
                className={`metric-tab ${selectedMetric === 'overview' ? 'active' : ''}`}
                onClick={() => setSelectedMetric('overview')}
              >
                Overview
              </button>
              <button
                className={`metric-tab ${selectedMetric === 'users' ? 'active' : ''}`}
                onClick={() => setSelectedMetric('users')}
              >
                Users
              </button>
              <button
                className={`metric-tab ${selectedMetric === 'progress' ? 'active' : ''}`}
                onClick={() => setSelectedMetric('progress')}
              >
                Progress
              </button>
            </div>

            {selectedMetric === 'overview' && (
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-title">Total Users</div>
                  <div className="metric-value">10+</div>
                  <div className="metric-change">↑ Growing</div>
                </div>
                <div className="metric-card">
                  <div className="metric-title">Avg Score</div>
                  <div className="metric-value">88.4%</div>
                  <div className="metric-change">↑ +2.3% from last week</div>
                </div>
                <div className="metric-card">
                  <div className="metric-title">Tests Completed</div>
                  <div className="metric-value">124</div>
                  <div className="metric-change">↑ 18 new tests</div>
                </div>
                <div className="metric-card">
                  <div className="metric-title">Completion Rate</div>
                  <div className="metric-value">92%</div>
                  <div className="metric-change">↑ Excellent engagement</div>
                </div>
              </div>
            )}

            {selectedMetric === 'users' && (
              <div className="users-table-wrapper">
                <table className="users-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Performance</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {USER_DATA.map(user => (
                      <UserRow key={user.name} user={user} />
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {selectedMetric === 'progress' && (
              <div className="progress-section">
                <div className="progress-item">
                  <div className="progress-info">
                    <span>Resume Analysis Module</span>
                    <span>75%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-info">
                    <span>Testing System</span>
                    <span>60%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-info">
                    <span>Interview Simulation</span>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-info">
                    <span>Study Planner</span>
                    <span>55%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '55%' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
