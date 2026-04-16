import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ResumeAnalyzerPage from './components/ResumeAnalyzerPage'
import TestAnalysisPage from './components/TestAnalysisPage'
import ResumeBasedTestPage from './components/ResumeBasedTestPage'
import AIStudyPlannerPage from './components/AIStudyPlannerPage'
import InterviewSimulationPage from './components/InterviewSimulationPage'
import CompanyRecommendationPage from './components/CompanyRecommendationPage'
import ChatbotAssistancePage from './components/ChatbotAssistancePage'
import PerformanceDashboardPage from './components/PerformanceDashboardPage'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import Team from './components/Team'
import Footer from './components/Footer'
import SignIn from './components/SignIn'

function App() {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showResumeAnalyzer, setShowResumeAnalyzer] = useState(false)
  const [showTestAnalysis, setShowTestAnalysis] = useState(false)
  const [showResumeBasedTest, setShowResumeBasedTest] = useState(false)
  const [showAIStudyPlanner, setShowAIStudyPlanner] = useState(false)
  const [showInterviewSimulation, setShowInterviewSimulation] = useState(false)
  const [showCompanyRecommendation, setShowCompanyRecommendation] = useState(false)
  const [showChatbotAssistance, setShowChatbotAssistance] = useState(false)
  const [showPerformanceDashboard, setShowPerformanceDashboard] = useState(false)

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&display=swap'
    document.head.appendChild(link)
  }, [])

  return (
    <div className="app-container">
      {/* Ambient background glow */}
      <div className="ambient-bg" />

      <NavBar onSignInClick={() => setShowSignIn(true)} />
      {showSignIn ? (
        <SignIn onBack={() => setShowSignIn(false)} />
      ) : showResumeAnalyzer ? (
        <ResumeAnalyzerPage onBack={() => setShowResumeAnalyzer(false)} />
      ) : showTestAnalysis ? (
        <TestAnalysisPage onBack={() => setShowTestAnalysis(false)} />
      ) : showResumeBasedTest ? (
        <ResumeBasedTestPage onBack={() => setShowResumeBasedTest(false)} />
      ) : showAIStudyPlanner ? (
        <AIStudyPlannerPage onBack={() => setShowAIStudyPlanner(false)} />
      ) : showInterviewSimulation ? (
        <InterviewSimulationPage onBack={() => setShowInterviewSimulation(false)} />
      ) : showCompanyRecommendation ? (
        <CompanyRecommendationPage onBack={() => setShowCompanyRecommendation(false)} />
      ) : showChatbotAssistance ? (
        <ChatbotAssistancePage onBack={() => setShowChatbotAssistance(false)} />
      ) : showPerformanceDashboard ? (
        <PerformanceDashboardPage onBack={() => setShowPerformanceDashboard(false)} />
      ) : (
        <>
          <Hero />
          <Features
            onOpenResumeAnalyzer={() => setShowResumeAnalyzer(true)}
            onOpenTestAnalysis={() => setShowTestAnalysis(true)}
            onOpenResumeBasedTest={() => setShowResumeBasedTest(true)}
            onOpenAIStudyPlanner={() => setShowAIStudyPlanner(true)}
            onOpenInterviewSimulation={() => setShowInterviewSimulation(true)}
            onOpenCompanyRecommendation={() => setShowCompanyRecommendation(true)}
            onOpenChatbotAssistance={() => setShowChatbotAssistance(true)}
            onOpenPerformanceDashboard={() => setShowPerformanceDashboard(true)}
          />
          <Dashboard />
          <Team />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
