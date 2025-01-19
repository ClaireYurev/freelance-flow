import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, FileText, TrendingUp } from 'lucide-react'
import { RecentProjects } from "@/components/dashboard/recent-projects"
import { ActivityFeed } from "@/components/dashboard/activity-feed"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    icon: DollarSign,
    description: "Revenue this month",
  },
  {
    title: "Active Projects",
    value: "12",
    icon: FileText,
    description: "Projects in progress",
  },
  {
    title: "Total Clients",
    value: "24",
    icon: Users,
    description: "Clients this year",
  },
  {
    title: "Growth",
    value: "+25.1%",
    icon: TrendingUp,
    description: "Revenue growth from last month",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentProjects />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ActivityFeed />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

