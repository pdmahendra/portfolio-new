// src/components/TimelineDemo.tsx
import { Timeline } from "@/components/ui/timeline";
import { experienceData } from "@/constant/data";

export function TimelineDemo() {
  const timelineItems = experienceData.map((exp) => {
    const yearRange = `${exp.startYear} – ${exp.endYear ?? "Present"}`;

    return {
      title: yearRange, // shown on the timeline side
      content: (
        <div>
          {/* ✅ Role title now matches the timeline year style */}
          <p className="text-xl md:text-3xl font-bold text-neutral-500 mb-2">
            {exp.title}
          </p>

          {/* Company and period */}
          <p className="text-xs md:text-sm text-neutral-400 mb-4">
            {exp.company} | {exp.period}
          </p>

          {/* Role description */}
          {exp.description.map((desc, idx) => (
            <p
              key={idx}
              className="mb-2 text-xs font-normal md:text-sm text-neutral-200"
            >
              ▪ {desc}
            </p>
          ))}

          {/* Project highlight */}
          {exp.project && (
            <div className="mt-4">
              <p className="text-xs font-semibold md:text-sm text-neutral-100 mb-2">
                {exp.project.title}
              </p>
              {exp.project.details.map((detail, i) => (
                <p
                  key={i}
                  className="mb-2 text-xs font-normal md:text-sm text-neutral-200"
                >
                  ▪ {detail}
                </p>
              ))}
            </div>
          )}
        </div>
      ),
    };
  });

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineItems} />
    </div>
  );
}
