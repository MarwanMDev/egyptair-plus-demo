import {
    Plane,
    CreditCard,
    Calendar,
    TrendingUp,
    MoreHorizontal,
    Award
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CircularProgress } from "@/components/dashboard/circular-progress"
import { MemberCard } from "@/components/dashboard/member-card"
import { MilesVisualizer } from "@/components/dashboard/miles-visualizer"
import { TravelPulse } from "@/components/dashboard/travel-pulse"
import { StarAllianceWeb } from "@/components/dashboard/star-alliance-web"
import { getDictionary } from "@/lib/get-dictionary"

// Mock Data
const user = {
    name: "Amr Hassan",
    membershipId: "099 887 7665",
    tier: "Gold",
    milesBalance: 54320,
    tierMiles: 68000,
    nextTier: "Platinum",
    milesToNextTier: 32000,
}

const recentActivity = [
    { id: 1, type: "Flight", description: "Cairo (CAI) - London (LHR)", date: "Oct 24, 2025", miles: "+ 3,240", status: "Posted" },
    { id: 2, type: "Credit Card", description: "CIB Miles Transfer", date: "Oct 20, 2025", miles: "+ 5,000", status: "Posted" },
    { id: 3, type: "Redemption", description: "Upgrade Award (CAI-DXB)", date: "Sep 15, 2025", miles: "- 15,000", status: "Redeemed" },
    { id: 4, type: "Flight", description: "Dubai (DXB) - Cairo (CAI)", date: "Sep 12, 2025", miles: "+ 1,800", status: "Posted" },
]

export default async function DashboardPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const dictionary = await getDictionary(lang as any)
    const d = dictionary.dashboard

    return (
        <div className="flex flex-col min-h-screen pb-12 relative">
            {/* Dashboard Header */}
            <div className="glass-surface pt-12 pb-32 border-none shadow-none">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-5xl font-extrabold text-secondary tracking-tight">
                                    {d.welcome}, {user.name}
                                </h1>
                                <p className="text-xl text-muted-foreground font-medium flex items-center gap-3">
                                    <span>{d.memberSince} 2018</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    <span className="text-secondary font-bold">{user.tier} {d.excellence}</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Button size="lg" className="font-bold px-8 active:scale-95 transition-transform">
                                    {d.myProfile}
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full px-8 font-bold active:scale-95 transition-transform">
                                    {d.memberBenefits}
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 w-full">
                            <MemberCard
                                name={user.name}
                                id={user.membershipId}
                                tier={user.tier}
                                dictionary={d.memberCard}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 -mt-16 relative z-10">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {/* Status Card */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {d.status.title}
                            </CardTitle>
                            <Award className="h-4 w-4 text-secondary" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <div className="text-2xl font-bold text-primary mb-1">{user.tier}</div>
                                    <Badge variant="glass" className="bg-secondary/20 text-secondary border-secondary/30">
                                        {user.tier}
                                    </Badge>
                                </div>
                                <CircularProgress
                                    value={user.tierMiles}
                                    max={100000}
                                    size={80}
                                    strokeWidth={8}
                                    color="var(--secondary)"
                                />
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between items-center py-1 border-b border-dashed">
                                    <span className="text-muted-foreground">{d.status.tierMiles}</span>
                                    <span className="font-medium">{user.tierMiles.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-muted-foreground">{d.status.to} {user.nextTier}</span>
                                    <span className="font-medium">{user.milesToNextTier.toLocaleString()}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Balance Card */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                {d.balance.title}
                            </CardTitle>
                            <Plane className="h-5 w-5 text-primary dark:text-secondary rotate-[-45deg]" />
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-5xl font-black text-primary dark:text-primary-foreground tracking-tighter">
                                        {user.milesBalance.toLocaleString()}
                                    </div>
                                    <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest mt-1">
                                        {d.balance.available}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3 pt-4">
                                    <Button size="sm" variant="glass" className="w-full font-bold">{d.balance.redeem}</Button>
                                    <Button size="sm" variant="outline" className="w-full font-bold">{d.balance.history}</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                {d.actions.title}
                            </CardTitle>
                            <TrendingUp className="h-5 w-5 text-green-500" />
                        </CardHeader>
                        <CardContent className="grid gap-3 pt-4">
                            <Button variant="ghost" className="w-full justify-start text-sm h-10 px-3 hover:bg-secondary/10 hover:text-secondary group">
                                <Calendar className="mr-3 h-4 w-4 transition-transform group-hover:scale-110" /> {d.actions.bookFlight}
                            </Button>
                            <Button variant="ghost" className="w-full justify-start text-sm h-10 px-3 hover:bg-secondary/10 hover:text-secondary group">
                                <CreditCard className="mr-3 h-4 w-4 transition-transform group-hover:scale-110" /> {d.actions.claimMiles}
                            </Button>
                            <Button variant="ghost" className="w-full justify-start text-sm h-10 px-3 hover:bg-secondary/10 hover:text-secondary group">
                                <Award className="mr-3 h-4 w-4 transition-transform group-hover:scale-110" /> {d.actions.viewBenefits}
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Miles Visualizer Section */}
                <div className="mt-8">
                    <MilesVisualizer currentBalance={user.milesBalance} dictionary={d.visualizer} />
                </div>

                {/* Intelligence & Network Section */}
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <TravelPulse dictionary={d.pulse} />
                    <StarAllianceWeb dictionary={d.network} />
                </div>

                {/* Recent Activity */}
                <div className="mt-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-primary dark:text-secondary tracking-tight">
                            {d.activity.title}
                        </h2>
                        <Button variant="link" size="sm" className="text-secondary font-bold">
                            {d.activity.download}
                        </Button>
                    </div>
                    <Card>
                        <CardContent className="p-0">
                            <div className="divide-y divide-muted/20">
                                {recentActivity.map((activity) => (
                                    <div key={activity.id} className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${activity.type === 'Redemption' ? 'bg-orange-100' : 'bg-blue-100'}`}>
                                                <Plane className={`h-5 w-5 ${activity.type === 'Redemption' ? 'text-orange-600 rotate-180' : 'text-blue-600 rotate-[-45deg]'}`} />
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm md:text-base">{activity.description}</div>
                                                <div className="text-xs text-muted-foreground">{activity.date} • {activity.type}</div>
                                            </div>
                                        </div>
                                        <div className={`font-bold ${activity.type === 'Redemption' ? 'text-orange-600' : 'text-green-600'}`}>
                                            {activity.miles}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <div className="p-4 border-t border-muted/20 flex justify-center">
                            <Button variant="ghost" size="sm" className="text-muted-foreground font-bold hover:text-secondary group">
                                {d.activity.viewHistory} <MoreHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:rotate-90" />
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

