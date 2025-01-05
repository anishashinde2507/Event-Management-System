import { Footer, Navbar } from '../components';
import { About, Explore, Feedback,  Hero, Insights, World } from '../sections';
import '@fontsource/cinzel'; // Add this line to your global styles or `_app.js`

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    
    <div className="relative">
      <Insights />
      <World />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
