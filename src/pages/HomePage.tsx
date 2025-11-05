import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { NewsSection } from '../components/NewsSection';
import { AboutUsSection } from '../components/AboutUsSection';
import { EventsSection } from '../components/EventsSection';
import { LibrarySection } from '../components/LibrarySection';
import { SocialsSection } from '../components/SocialsSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <NewsSection />
      <AboutUsSection />
      <EventsSection />
      <LibrarySection />
      <SocialsSection />
    </>
  );
};