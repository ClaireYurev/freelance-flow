import { CalendarDays } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Activity {
  id: string
  user: {
    name: string
    avatar: string
  }
  action: string
  target: string
  date: string
}

const activities: Activity[] = [
  {
    id: "1",
    user: {
      name: "John Doe",
      avatar: "JD",
    },
    action: "completed",
    target: "Website Redesign",
    date: "2 hours ago",
  },
  {
    id: "2",
    user: {
      name: "Jane Smith",
      avatar: "JS",
    },
    action: "commented on",
    target: "Mobile App Development",
    date: "5 hours ago",
  },
  {
    id: "3",
    user: {
      name: "Bob Johnson",
      avatar: "BJ",
    },
    action: "started",
    target: "Brand Identity Design",
    date: "1 day ago",
  },
  {
    id: "4",
    user: {
      name: "Alice Brown",
      avatar: "AB",
    },
    action: "updated",
    target: "E-commerce Platform",
    date: "2 days ago",
  },
]

export function ActivityFeed() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{activity.user.avatar}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user.name}{" "}
              <span className="text-muted-foreground">
                {activity.action}
              </span>{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              <CalendarDays className="mr-1 h-3 w-3" />
              {activity.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

