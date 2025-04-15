import React from 'react'
import FailureCard from './components/FailureCard';

const About = () => {
  const dummyFailure = {
    title: "Trigger Trouble in Tennessee",
    location: "Backyard Range, TN",
    cause: "Safety was accidentally on the whole time",
    comment: "He kept pulling it harder and harder... nothing happened.",
  };
  return (
    <div>
        <h1>🔫 A_Study_Of_Funny_Gun_Firing_Failures 🔫 </h1>
        Welcome to A Study of Funny Gun Firing Failures, a lighthearted exploration of the most unexpected and comical mishaps in firearm operation. From misfires and dud rounds to bizarre mechanical failures, this study highlights the amusing side of things going wrong when pulling the trigger.
        <FailureCard failure={dummyFailure} />
    </div>
  )
}

export default About
