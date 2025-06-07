"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PlacementCard from "@/components/cards/placement-card";
import { placements } from "@/data/placements";

export default function PlacementsPage() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedCompany, setSelectedCompany] = useState<string>("all");

  const years = [
    "all",
    ...Array.from(new Set(placements.map((p) => p.year)))
      .sort()
      .reverse(),
  ];
  const companies = [
    "all",
    ...Array.from(new Set(placements.map((p) => p.company))).sort(),
  ];

  const filteredPlacements = placements.filter((placement) => {
    const yearMatch = selectedYear === "all" || placement.year === selectedYear;
    const companyMatch =
      selectedCompany === "all" || placement.company === selectedCompany;
    return yearMatch && companyMatch;
  });

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="text-center mb-16">
        <Badge className="mb-4 to-blue-600 text-black border-0">
          Success Stories
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Our Students Achieve Excellence
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Meet our successful graduates who are now working with top airlines
          and hospitality brands across the globe.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Filter by Year" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year === "all" ? "All Years" : year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedCompany} onValueChange={setSelectedCompany}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Filter by Company" />
          </SelectTrigger>
          <SelectContent>
            {companies.map((company) => (
              <SelectItem key={company} value={company}>
                {company === "all" ? "All Companies" : company}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {(selectedYear !== "all" || selectedCompany !== "all") && (
          <Button
            variant="outline"
            onClick={() => {
              setSelectedYear("all");
              setSelectedCompany("all");
            }}
          >
            Clear Filters
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlacements.map((placement) => (
          <PlacementCard key={placement.id} placement={placement} />
        ))}
      </div>

      {filteredPlacements.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No placements found for the selected filters.
          </p>
        </div>
      )}

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">
            Want to Join Our Success Stories?
          </h3>
          <p className="mb-6 text-blue-100">
            Start your journey with us and become the next success story.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
