import { ArrowRight } from "lucide-react";

export function UserFlows() {
  return (
    <section className="mb-16">
      <h2 className="mb-4">User Flows</h2>
      <p className="text-muted-foreground mb-8">Key user journeys through the app</p>
      
      <div className="space-y-8">
        {/* First User Flow - Onboarding */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 className="mb-6">New User Onboarding Flow</h3>
          <div className="flex flex-wrap items-center gap-4">
            <FlowStep number={1} label="Download App" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={2} label="Welcome Screen" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={3} label="Set Goals" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={4} label="Fitness Level" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={5} label="Create Account" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={6} label="First Workout" highlight />
          </div>
        </div>

        {/* Second User Flow - Complete Workout */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 className="mb-6">Complete Workout Flow</h3>
          <div className="flex flex-wrap items-center gap-4">
            <FlowStep number={1} label="Home Screen" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={2} label="Select Workout" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={3} label="View Details" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={4} label="Start Exercise" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={5} label="Complete Sets" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={6} label="Next Exercise" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={7} label="Finish & Log" highlight />
          </div>
        </div>

        {/* Third User Flow - Track Progress */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 className="mb-6">View Progress Flow</h3>
          <div className="flex flex-wrap items-center gap-4">
            <FlowStep number={1} label="Home Screen" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={2} label="Progress Tab" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={3} label="Select Period" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={4} label="View Charts" />
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <FlowStep number={5} label="Detailed Stats" highlight />
          </div>
        </div>
      </div>

      {/* Decision Flow Diagram */}
      <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
        <h3 className="mb-6">Workout Selection Decision Tree</h3>
        <div className="flex flex-col items-center gap-6">
          {/* Start */}
          <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
            User Opens App
          </div>
          
          <div className="flex items-center gap-1">
            <div className="w-0.5 h-8 bg-blue-400" />
          </div>

          {/* First Decision */}
          <div className="bg-white border-2 border-blue-400 px-6 py-3 rounded-lg shadow-md">
            Has recommended workout?
          </div>

          <div className="flex items-start gap-12">
            {/* Yes Path */}
            <div className="flex flex-col items-center gap-4">
              <div className="text-sm font-medium text-green-600">Yes</div>
              <div className="w-0.5 h-8 bg-green-400" />
              <div className="bg-green-100 border border-green-400 px-4 py-2 rounded-lg text-center text-sm">
                Show Quick Start<br />with Today's Plan
              </div>
              <div className="w-0.5 h-8 bg-green-400" />
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm shadow-md">
                Start Workout
              </div>
            </div>

            {/* No Path */}
            <div className="flex flex-col items-center gap-4">
              <div className="text-sm font-medium text-orange-600">No</div>
              <div className="w-0.5 h-8 bg-orange-400" />
              <div className="bg-orange-100 border border-orange-400 px-4 py-2 rounded-lg text-center text-sm">
                Browse Workout<br />Library
              </div>
              <div className="w-0.5 h-8 bg-orange-400" />
              <div className="bg-orange-100 border border-orange-400 px-4 py-2 rounded-lg text-center text-sm">
                Filter by Goal<br />or Time
              </div>
              <div className="w-0.5 h-8 bg-orange-400" />
              <div className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm shadow-md">
                Select & Start
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FlowStepProps {
  number: number;
  label: string;
  highlight?: boolean;
}

function FlowStep({ number, label, highlight }: FlowStepProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
        highlight ? 'bg-blue-600 shadow-lg' : 'bg-gray-400'
      }`}>
        {number}
      </div>
      <div className={`text-sm text-center ${highlight ? 'font-semibold' : ''}`}>
        {label}
      </div>
    </div>
  );
}
