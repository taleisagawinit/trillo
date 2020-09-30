import React from 'react';
import Card from '../../components/card/Card';
import ReviewCard from '../../components/review-card/ReviewCard';
import Button from '../../components/button/Button';

export default function() {
  const cardPerks = ['Close to the beach', 'Free airport shuttle', 'Air conditioning & heating', 'We speak all languages', 'Breakfast included', 'Free wifi', 'Pets allowed', 'Perfect for families'];
  const cardUsers = ['user-3.jpg', 'user-4.jpg', 'user-5.jpg', 'user-6.jpg']
  return (
    <section className="main">
      <Card
      info1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero laborum excepturi id odit sequi doloremque ullam aut? Sint dolore asperiores perferendis porro. Id hic, similique dolorem enim quasi modi."}
      info2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero laborum excepturi id"}
      perks={cardPerks}
      recommend={"Lucy and 3 other friends recommend this hotel"}
      users={cardUsers}
       />
       <div className="main__reviews">
        <ReviewCard
        quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero laborum excepturi id"}
        name={"Nick Smith"}
        date={"Feb 23, 2017"}
        rating={"7.8"}
        img={"user-1.jpg"}
        />
        <ReviewCard
        quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero laborum excepturi id"}
        name={"Mary Thomas"}
        date={"Sept 13, 2017"}
        rating={"9.3"}
        img={"user-2.jpg"}
        />
        <Button
        type={"inline"}
        text="Show all &rarr;"
        />
       </div>
      
    </section>
  )
} 