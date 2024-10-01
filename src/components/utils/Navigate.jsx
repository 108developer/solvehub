"use client"
import { useSearchParams } from "next/navigation";

export async function FetchService() {
    const { services } = useSearchParams(); // Get courseId from the URL params
    return services
}