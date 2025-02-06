"use client";

import { useEffect } from "react";

function RoadmapIntersectionObserver() {
  useEffect(() => {
    if (window) {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (document.querySelector('.roadmap-card__order--2')) document.querySelector('.roadmap-card__order--2')!.classList.add('active');
              if (document.querySelector('.roadmap-card__order--3')) document.querySelector('.roadmap-card__order--3')!.classList.add('active');
              if (document.querySelector('.roadmap-card__order--4')) document.querySelector('.roadmap-card__order--4')!.classList.add('active');
              if (document.querySelector('.roadmap-arrow__order--1')) document.querySelector('.roadmap-arrow__order--1')!.classList.add('active');
              if (document.querySelector('.roadmap-arrow__order--2')) document.querySelector('.roadmap-arrow__order--2')!.classList.add('active');
              if (document.querySelector('.roadmap-arrow__order--3')) document.querySelector('.roadmap-arrow__order--3')!.classList.add('active');
              observer.unobserve(el);
            }
          });
        });
        if(document.querySelector('.roadmap-card__order--1')) observer.observe(document.querySelector('.roadmap-card__order--1')!);
      }
    }
  }, []);

  return <></>;
}

export default RoadmapIntersectionObserver;