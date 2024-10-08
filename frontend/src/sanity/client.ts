import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "zjcp9p71",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false
})