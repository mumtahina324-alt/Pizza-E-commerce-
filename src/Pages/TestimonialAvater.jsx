import { Star } from "lucide-react";
import Testimonial from "./Testimonial";

import ImgTes1 from "../assets/Image/A_1 (1).jpg";
import ImgTes2 from "../assets/Image/A_1 (2).jpg";
import ImgTes3 from "../assets/Image/A_1 (3).jpg";

export default function TestimonialAvater() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Our <span className="text-red-600">Clients</span> Say
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Testimonial
          img={ImgTes1}
          name="John Doe"
          star={<Star size={16} fill="currentColor" />}
          comment="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."
        />

        <Testimonial
          img={ImgTes2}
          name="Mike Smith"
          star={<Star size={16} fill="currentColor" />}
          comment="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."
        />

        <Testimonial
          img={ImgTes3}
          name="Robert Smith"
          star={<Star size={16} fill="currentColor" />}
          comment="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."
        />
      </div>
    </section>
  );
}
