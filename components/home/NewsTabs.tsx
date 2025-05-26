"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NewsCard from "./NewsCard"

interface NewsItem {
  id: number;
  title: string;
  content: string;
  category: string;
  image?: string;
  time: string;
}

interface NewsTabsProps {
  newsData: {
    local: NewsItem[];
    regions: NewsItem[];
    world: NewsItem[];
    more: NewsItem[];
  };
  isDarkMode: boolean;
}

export default function NewsTabs({ newsData, isDarkMode }: NewsTabsProps) {
  const [activeTab, setActiveTab] = useState("local")

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <Tabs
      defaultValue="local"
      value={activeTab}
      onValueChange={handleTabChange}
      className="w-full"
    >
      <TabsList
        className={`grid grid-cols-4 mb-6 p-1 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <TabsTrigger
          value="local"
          className={`text-sm md:text-base font-medium transition-colors ${isDarkMode ? "data-[state=active]:bg-gray-700 data-[state=active]:text-white" : "data-[state=active]:bg-white"}`}
        >
          محلي
        </TabsTrigger>
        <TabsTrigger
          value="regions"
          className={`text-sm md:text-base font-medium transition-colors ${isDarkMode ? "data-[state=active]:bg-gray-700 data-[state=active]:text-white" : "data-[state=active]:bg-white"}`}
        >
          مناطق
        </TabsTrigger>
        <TabsTrigger
          value="world"
          className={`text-sm md:text-base font-medium transition-colors ${isDarkMode ? "data-[state=active]:bg-gray-700 data-[state=active]:text-white" : "data-[state=active]:bg-white"}`}
        >
          عالمي
        </TabsTrigger>
        <TabsTrigger
          value="more"
          className={`text-sm md:text-base font-medium transition-colors ${isDarkMode ? "data-[state=active]:bg-gray-700 data-[state=active]:text-white" : "data-[state=active]:bg-white"}`}
        >
          المزيد
        </TabsTrigger>
      </TabsList>

      <TabsContent value="local" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.local.map((news, index) => (
            <NewsCard
              key={news.id}
              {...news}
              isDarkMode={isDarkMode}
              featured={index === 0}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="regions" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.regions.map((news, index) => (
            <NewsCard
              key={news.id}
              {...news}
              isDarkMode={isDarkMode}
              featured={index === 0}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="world" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.world.map((news, index) => (
            <NewsCard
              key={news.id}
              {...news}
              isDarkMode={isDarkMode}
              featured={index === 0}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="more" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.more.map((news, index) => (
            <NewsCard
              key={news.id}
              {...news}
              isDarkMode={isDarkMode}
              featured={index === 0}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}