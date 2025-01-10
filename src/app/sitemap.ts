import { MetadataRoute } from "next";
import axios from "axios";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mmw-pearl.vercel.app";


  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2025-01-09"),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date("2025-01-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/admin`,
      lastModified: new Date("2025-01-09"),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/story`,
      lastModified: new Date("2025-01-09"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/music`,
      lastModified: new Date("2025-01-09"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/connect`,
      lastModified: new Date("2025-01-09"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const response = await axios.get<{ _id: string; createdAt: string }[]>(
      "https://musicbackend-u27q.onrender.com/movies"
    );

    dynamicRoutes = response.data.map(({ _id, createdAt }) => ({
      url: `${baseUrl}/movies/${_id}`,
      lastModified: new Date(createdAt),
      changeFrequency: "weekly",
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Failed to fetch movies for sitemap:", error);
  }

  
  return [...staticRoutes, ...dynamicRoutes];
}
