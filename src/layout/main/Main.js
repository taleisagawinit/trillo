import React from 'react';
import Card from '../../components/card/Card'

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
    </section>
  )
} 