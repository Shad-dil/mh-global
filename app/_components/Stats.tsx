"use client";

import CountUp from "react-countup";
import { MapPin, Users, Briefcase, Headphones } from "lucide-react";

const stats = [
  { label: "States Covered", value: 15, icon: MapPin },
  { label: "Active Clients", value: 110, icon: Users },
  { label: "Projects Delivered", value: 250, icon: Briefcase },
  { label: "Team Members", value: 30, icon: Headphones },
];

export default function Stats() {
  return (
    <section className="py-14 border-t border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, i) => {
          const Icon = stat.icon;

          return (
            <div
              key={i}
              className="
                flex flex-col md:flex-row
                items-center md:items-start
                text-center md:text-left
                gap-4 md:gap-5
              "
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#0b4f6c] text-white">
                <Icon size={26} />
              </div>

              {/* Text */}
              <div>
                <p className="text-3xl font-bold text-teal-500 leading-none">
                  <CountUp start={0} end={stat.value} duration={2.2} />+
                </p>
                <p className="text-sm font-semibold text-[#0b4f6c] uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
