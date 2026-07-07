import ScrollOpacity from "@/common/components/ScrollOpacity";

import Project from "./Project";

const ProjectsList = () => {
  return (
    <section
      // Switch from grid to a wrapping flex container:
    className="flex flex-wrap justify-center gap-5 md:gap-10"
      id="projects"
    >
      <ScrollOpacity>
        <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          <Project
            title="Auction & Tender Aggregator Tool"
            description="Scraped auction data using Selenium and stored/query structured records via SQL. Built Spring Boot REST APIs and integrated Gemini chatbot for natural language search."
          />
          <Project
            title="Zero-Day Attack Detection Model"
            description="Trained ML classifier models on labeled intrusion datasets using Python. Deployed via AWS with API-based alert system and automated anomaly detection logs."
          />
          <Project
            title="SafeShore – Real-Time Beach Safety Platform"
            description="Built hybrid ML classifier for beach safety alerts with ~90% F1-score. Integrated Firebase for real-time alerts and developed responsive frontend."            
          />
          <Project
            title="Email Verification CLI Tool"
            description="Developed a CLI tool in GoLang to validate email addresses via DNS/SMTP checks. Optimized for bulk processing in marketing data pipelines."           
          />

        </div>

      </ScrollOpacity>
    </section>
  );
};

export default ProjectsList;
