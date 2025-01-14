import React from "react";
import CoursesScreen from "@/components/CoursesScreen";

export const metadata = {
    title: "EduVerse - Explore Courses",
    description: "Explore our wide range of courses in EduVerse",
};

export default function HomePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <CoursesScreen />
        </div>
    );
}
