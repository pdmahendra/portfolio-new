import { Github, Instagram, Linkedin } from 'lucide-react';

export const profileData = {
  name: "Ayur Mahendra",
  role: "Data Analyst",
  insta:     Instagram,
  linked_in: Linkedin ,
  github: Github,
  description:"with 4 years of experience turning complex data into clear, actionable insights. Skilled in SQL, Python, Power BI, and Excel, I specialize in data visualization, process automation, and building scalable data solutions that support smarter business decisions."
};

// data/experienceData.ts

// src/constant/data.ts

export const experienceData = [
  {
    startYear: 2023,
    endYear: null,
    title: "Data Analyst (Operations)",
    company: "Ascendion Engineering – Vadodara",
    period: "March 2023 – Present",
    description: [
      "Conducted end-to-end data analysis using Python (Pandas) and SQL connectors, extracting actionable insights.",
      "Built and maintained relational databases using SQL Workbench for daily transaction monitoring and MIS reporting.",
      "Performed DML and DDL operations for data accuracy and client data requests.",
      "Generated WBR, MBR, LOB reports, and newsletters using Excel, SQL, and Power BI.",
      "Presented insights to stakeholders, aiding strategic decision-making.",
      "Created pricing sheets from SOWs to streamline project estimation.",
      "Collaborated across business units for analytics alignment.",
    ],
    project: {
      title: "Project Highlight – Resource Tracking Dashboard",
      details: [
        "Built Excel, SQL, and Power BI dashboard for monitoring allocation, bench time, and utilization.",
        "Implemented slicers and drill-downs in Power BI for real-time insights.",
        "Used SQL for backend joins and views to automate refresh.",
        "Applied KPIs and pivot tables in Excel for workforce planning.",
        "Reduced manual reporting time by 30%.",
      ],
    },
  },
  {
    startYear: 2021,
    endYear: 2023,
    title: "Data Analyst (Customer Success)",
    company: "Teleperformance – Mohali",
    period: "July 2021 – February 2023",
    description: [
      "Performed customer-centric analysis to reduce churn and improve satisfaction.",
      "Maintained MIS reports with strong validation and mapping.",
      "Analyzed SLA and TAT to optimize response time.",
      "Created Tableau dashboards for feedback and KPI insights.",
      "Collaborated with internal teams and clients to resolve pain points.",
      "Conducted data literacy training for support teams.",
    ],
    project: {
      title: "Project Highlight – Feedback Analysis & Predictive Modeling",
      details: [
        "Analyzed customer feedback using Python (Pandas, scikit-learn) and SQL.",
        "Built sentiment prediction models to forecast satisfaction.",
        "Delivered actionable Power BI dashboards.",
        "Helped improve retention and service quality.",
      ],
    },
  },
];
