'use client';

import { useState } from "react";
import Image from "next/image";
import ExecutiveCard from "@/components/ExecutiveCard";

interface Executive {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
}

interface Department {
  name: string;
  image: string;
  executives: Executive[];
}

export default function ExecutiveDepartments({ departments }: { departments: Department[] }) {
  const [expandedDepartment, setExpandedDepartment] = useState<string | null>(null);

  return (
    <div className="mx-auto mt-8 max-w-7xl space-y-5 px-6 pb-12">
      {departments.map((department) => {
        const expanded = expandedDepartment === department.name;
        const panelId = `department-${department.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

        return (
          <section key={department.name} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setExpandedDepartment(expanded ? null : department.name)}
              className="group relative flex min-h-48 w-full items-end overflow-hidden text-left sm:min-h-80 lg:min-h-96"
            >
              <Image
                src={department.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:object-[center_10%]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
              <h3 className="relative z-10 p-6 text-2xl font-bold text-white sm:p-8 sm:text-3xl">{department.name}</h3>
              <span aria-hidden="true" className={`absolute right-6 top-6 z-10 text-3xl leading-none text-white transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}>+</span>
            </button>
            <div id={panelId} hidden={!expanded}>
              {expanded && (
                <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
                  {department.executives.map((executive) => <ExecutiveCard key={executive.name} {...executive} />)}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
