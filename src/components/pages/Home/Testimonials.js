import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Mary Jones',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I visited this restaurant for a family celebration, 
    and it exceeded all our expectations. The quality of the food, 
    the warm atmosphere, and the personalized service made the occasion truly memorable.`,
  },
  {
    fullName: 'Antony Klifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `The ambiance of the restaurant was perfect for a cozy dinner. 
    The flavors in each dish were so unique and mouthwatering. 
    I'm already recommending this place to my friends!`,
  },
  {
    fullName: 'Tamika Jack',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The service here was exceptional. 
    Not only did they accommodate my dietary restrictions, 
    but the chef also prepared a special dish just for me. 
    I felt truly valued as a customer.`,
  },
  {
    fullName: 'Brandon W. Mings',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `I'm blown away by the creativity of the menu. 
    The fusion of flavors and presentation of each dish were unlike anything I've ever tasted. 
    This restaurant is a hidden gem!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
