import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    "title": "AI-Powered Job & Internship Discovery",
    "description": "Automatically scans job platforms like LinkedIn, Internshala, and startup boards to find the best-matching roles for your resume and skills.",
    
  },
  {
    "title": "Automated Resume & Cover Letter Customization",
    "description": "Creates tailored cover letters and optimizes your resume for each application to increase ATS (Applicant Tracking System) compatibility and interview chances.",
    
  },
  {
    "title": "Auto-Application Engine",
    "description": "Applies to multiple internships and jobs on your behalf — ethically and intelligently — saving hours of manual effort.",
    
  },
  {
    "title": "Application Tracking Dashboard",
    "description": "Get a centralized dashboard to monitor where you’ve applied, see application statuses, and view real-time progress updates.",
    
  },
  {
    "title": "Profile Feedback & AI Coaching",
    "description": "Receive actionable suggestions to improve your LinkedIn, resume, and GitHub profiles through AI-driven feedback and ranking.",
   
  },
  {
    "title": "Privacy-Focused AI Agent",
    "description": "Your data, your control. We apply on your behalf only with consent and store information securely, respecting all platform terms and your privacy.",

  }
]
