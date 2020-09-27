import React from 'react';
import Card from '../../components/card/Card'

export default function() {
  const cardPerks = ['Close to the beach', 'Free airport shuttle', 'Air conditioning & heating', 'We speak all languages', 'Breakfast included', 'Free wifi', 'Pets allowed', 'Perfect for families']
  return (
    <section className="main">
      <Card
      info1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero laborum excepturi id odit sequi doloremque ullam aut? Sint dolore asperiores perferendis porro. Id hic, similique dolorem enim quasi modi."}
      info2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero laborum excepturi id"}
      perks={cardPerks}
       />
    </section>
  )
} 