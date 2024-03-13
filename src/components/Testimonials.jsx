import styles from "../style";
import { feedback } from "../constants"; 
import FeedbackCard from "./FeedbackCard";

const Testimonials = () =>  (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
     <div className="absolute z-[3] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>

     <div className="absolute z-[0] w-[40%] h-[40%] -right-[60%] bottom-0 rounded-full pink__gradient"></div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>What people are <br className="sm:block hidden"/> saying about us</h1>
        <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>

      <div className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]`}>
            {feedback.map((card) => (
              <FeedbackCard key={card.id} {...card} /> //...card helps in explanding the card objs into individual props examp:- it will expand content={card.content} etc etc, all the properties of obj
            ))}

      </div>
    
    </section>
  )

export default Testimonials;