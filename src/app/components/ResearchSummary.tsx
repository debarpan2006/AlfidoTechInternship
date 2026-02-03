import { Users, TrendingUp, Target, AlertCircle } from "lucide-react";

export function ResearchSummary() {
  return (
    <section className="mb-16">
      <h2 className="mb-8">User Research Summary</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Research Methods */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="mb-4">Research Methods</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong>User Interviews:</strong> 15 participants aged 25-35</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong>Surveys:</strong> 120 responses from fitness app users</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong>Competitive Analysis:</strong> 8 leading fitness apps</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong>Usage Analytics:</strong> Behavior patterns from 500+ users</span>
            </li>
          </ul>
        </div>

        {/* Key Statistics */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="mb-4">Key Statistics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-muted-foreground">Lack consistent routine</span>
                <span className="font-semibold">73%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '73%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-muted-foreground">Want quick workouts (&lt;30 min)</span>
                <span className="font-semibold">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-chart-1 h-2 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-muted-foreground">Find most apps too complex</span>
                <span className="font-semibold">68%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-chart-4 h-2 rounded-full" style={{ width: '68%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-gradient-to-br from-primary/5 to-chart-1/5 rounded-xl p-8 border border-primary/10">
        <h3 className="mb-6">Key Insights</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="mb-1">Time Constraints</h4>
              <p className="text-muted-foreground">Busy professionals struggle to find time for traditional gym routines and need flexible, adaptive workout solutions.</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-chart-1 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="mb-1">Progress Visibility</h4>
              <p className="text-muted-foreground">Users stay motivated when they can clearly see their progress through visual data and achievement milestones.</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-chart-4 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="mb-1">Personalization</h4>
              <p className="text-muted-foreground">One-size-fits-all approaches fail. Users want workouts tailored to their fitness level, goals, and available time.</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-destructive rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="mb-1">Simplicity Matters</h4>
              <p className="text-muted-foreground">Complex interfaces with overwhelming features lead to app abandonment. Simple, focused solutions win.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
