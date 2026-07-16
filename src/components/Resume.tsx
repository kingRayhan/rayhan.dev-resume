import { ResumeContent } from "./resume/ResumeContent";
import { ResumeSidebar } from "./resume/ResumeSidebar";

export function Resume() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl lg:grid lg:grid-cols-[280px_1fr]">
      <ResumeSidebar />
      <main>
        <ResumeContent />
      </main>
    </div>
  );
}
