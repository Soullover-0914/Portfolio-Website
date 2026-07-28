export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "disaster-management-ai-dashboard",
    title: "Disaster Management AI Dashboard",
    description:
      "AI-powered disaster management system that predicts environmental risks and generates real-time alerts based on location input. Designed and implemented RESTful APIs using Flask for alert processing, authority management, and user incident reporting. Integrated real-time weather data and map visualization via OpenWeather API and Leaflet.js. Deployed on Render and Vercel with automated email alerts and cloud logging using Firebase Firestore.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "OpenWeather API", "Leaflet.js", "Firebase Firestore"],
    demo: "https://weather-ruby-ten.vercel.app",
    featured: true,
  },
  {
    slug: "classroom-attention-monitoring-system",
    title: "Classroom Attention Monitoring System",
    description:
      "Real-time classroom attention monitoring system using computer vision to detect and track students from live video streams. Implemented person detection and multi-object tracking with YOLOv8 and ByteTrack to maintain consistent identities across frames. Designed attention estimation logic using movement analysis and temporal smoothing to classify students as attentive or distracted. Optimized for real-time performance with frame resolution reduction, frame skipping, and lightweight models — delivering live bounding box annotations, output video generation, and summary analytics.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tech: ["Python", "OpenCV", "YOLOv8", "ByteTrack", "Computer Vision"],
    github: "https://github.com/Soullover-0914/Student-Managament-System",
    featured: true,
  },
];
