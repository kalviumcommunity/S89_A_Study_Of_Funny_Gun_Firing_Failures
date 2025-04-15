import React from 'react';
import FailureCard from './components/FailureCard';
const FunnyFailures = [
    {
      title: "The Safety Saga",
      location: "Oregon Forest Range",
      cause: "Safety was never turned off",
      comment: "Pulled the trigger five times before realizing… it was him, not the gun.",
    },
    {
      title: "Slide Surprise",
      location: "Garage Setup, Utah",
      cause: "Slide wasn’t racked",
      comment: "He blamed the ammo. It was the slide all along.",
    },
    {
      title: "Magazine Misery",
      location: "Nevada Backyard",
      cause: "Forgot to insert magazine",
      comment: "Dry fire with maximum confidence.",
    },
    {
      title: "Reverse Round",
      location: "Private Range, Arizona",
      cause: "Inserted a round backwards",
      comment: "Tried to innovate ammo design... it didn’t work.",
    },
    {
      title: "The Wet Wipe",
      location: "Swamp Camp, Louisiana",
      cause: "Gun was soaked and jammed",
      comment: "He brought WD-40 to a gunfight.",
    },
    {
      title: "Friendly Fire Alarm",
      location: "Indoor Range, New Jersey",
      cause: "Accidentally bumped the mag release mid-fire",
      comment: "One shot, one mag drop.",
    },
    {
      title: "Pocket Rocket Fail",
      location: "Backyard BBQ, Texas",
      cause: "Gun jammed from pocket lint",
      comment: "Lesson: guns and pockets don’t mix.",
    },
    {
      title: "The Ultimate Dud",
      location: "Desert Shootout, California",
      cause: "Dud round",
      comment: "Waited 10 seconds. Still nothing. Just awkward silence.",
    },
    {
      title: "Grip Slip",
      location: "Mountain Range, Colorado",
      cause: "Weak grip caused failure to cycle",
      comment: "Gun fired. Slide didn’t. Everyone laughed.",
    },
    {
      title: "Trigger Freeze",
      location: "Snow Range, Alaska",
      cause: "Trigger frozen solid",
      comment: "Should’ve brought gloves... and a blowtorch.",
    },
  ];

const Homepage = () => {
    return (
        <div>
            {
                FunnyFailures.map((gunFiring)=>(
                    <FailureCard gunFiring={gunFiring}/>
                ))
            }
        </div>
    );
};

export default Homepage;