import { useState } from "react";
import { ResearchSummary } from "@/app/components/ResearchSummary";
import { UserPersona } from "@/app/components/UserPersona";
import { UserFlows } from "@/app/components/UserFlows";
import { LowFidelityWireframes } from "@/app/components/LowFidelityWireframes";
import { HighFidelityMockups } from "@/app/components/HighFidelityMockups";
import { DesignRationale } from "@/app/components/DesignRationale";
import { FileText, Download } from "lucide-react";

export default function App() {
  const [personaImage] = useState("https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-1">FitFlow - UX Case Study</h1>
              <p className="text-muted-foreground">A Mobile Fitness Tracking Application</p>
            </div>
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              <Download className="w-4 h-4" />
              Export PDF
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm">Complete UX Case Study</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4 text-white">Designing FitFlow</h1>
            <p className="text-xl text-blue-100 mb-6">
              A comprehensive mobile fitness app that helps busy professionals maintain consistent workout routines through personalized, time-efficient training plans.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <strong>Duration:</strong> 6 weeks
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <strong>Role:</strong> Lead UX Designer
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <strong>Platform:</strong> iOS & Android
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Project Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="mb-4">Project Overview</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="mb-2">The Challenge</h3>
                <p className="text-muted-foreground">
                  Busy professionals struggle to maintain consistent fitness routines due to unpredictable schedules and overwhelming app interfaces.
                </p>
              </div>
              <div>
                <h3 className="mb-2">The Solution</h3>
                <p className="text-muted-foreground">
                  An adaptive fitness app with personalized quick workouts, clear progress tracking, and a simplified interface focused on user motivation.
                </p>
              </div>
              <div>
                <h3 className="mb-2">The Impact</h3>
                <p className="text-muted-foreground">
                  85% of beta users reported improved workout consistency, with average session times under 25 minutes fitting seamlessly into their schedules.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ResearchSummary />
        <UserPersona image={personaImage} />
        <UserFlows />
        <LowFidelityWireframes />
        <HighFidelityMockups />
        <DesignRationale />

        {/* Next Steps */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="mb-6">Next Steps & Future Enhancements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-3">Planned Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                  <span>Social features for community challenges and motivation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                  <span>AI-powered workout recommendations based on user behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                  <span>Integration with popular wearables and health apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                  <span>Nutrition tracking and meal planning module</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">User Testing Insights</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                  <span>Users want more workout variety within the same time constraints</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                  <span>Video demonstrations are preferred over static images</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                  <span>Offline mode is essential for users who work out in areas with poor connectivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                  <span>Apple Watch companion app would significantly improve user experience</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2026 FitFlow UX Case Study - Designed for demonstration purposes</p>
        </div>
      </footer>
    </div>
  );
}
