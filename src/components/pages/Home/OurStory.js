import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        Welcome to the enchanting world of Little Lemon Restaurant, 
        where every dish is a celebration of flavor and creativity. 
        Nestled in the heart of a bustling city, our journey began with a simple yet powerful vision: 
        to craft exceptional dining experiences that linger in your memory. 
        Inspired by the zesty freshness of lemons, our culinary artisans weave magic into each dish, 
        transforming locally-sourced ingredients into vibrant masterpieces. As you step through our doors, 
        you're embraced by the warm ambience that feels like a home away from home. From the cozy corners to the elegant dining spaces, 
        every detail has been carefully curated to make your visit a delightful escape. Whether you're savoring our signature lemon-infused 
        delicacies or exploring innovative culinary fusions, Little Lemon Restaurant is a canvas of taste, a symphony of aromas, and a journey of culinary discovery. 
        Join us and embark on a gastronomic adventure that ignites your senses and leaves you craving for more.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
