"use client"
import SupportedPlatforms from "./components/supported"
import Image from "next/image";
import * as React from "react"
import GeoLocation from "./components/geo";
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import DdosProtection from "./components/ddos";
import ManualReview from "./components/manual";

const chartData = [
  { browser: "Rate Limited", visitors: 4, fill: "#7f27ff" },
  { browser: "Blocked", visitors: 74, fill: "#4901B0" },
  { browser: "Refunded", visitors: 14, fill: "#4D3DFD" },
  { browser: "Chargebacks", visitors: 8, fill: "#ffff" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig
export function Component() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])
}
export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] text-white bg-black">
      <div className="px-4 py-2 border-b">
        <div>
        <h1 className="mt-10 scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0">Vulnity</h1>
        </div>
      </div>
     <div className="lg:flex lg:justify-between lg:items-center lg:align-middle lg:px-72 lg:mt-12 lg:space-x-6 ">
      <div className="mt-12 items-center flex flex-col ">
        <h1 className="text-4xl lg:text-5xl font-semibold ">Frustated With </h1>
        <h1 className="text-4xl lg:text-5xl font-semibold ">Fraud Payment ?</h1>
        <h1 className="text-2xl font-semibold opacity-60 lg:text-5xl">We Can Fix It</h1>
      </div>
      <div className="hidden lg:block w-1 h-64 bg-gray-500 opacity-55">
        
      </div>
      <div>
      <Card className="flex flex-col bg-black text-white border-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>Global Scale</CardTitle>
        <CardDescription>January - October 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={76}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                         
                        </tspan>
                        
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          11,022
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 12}
                          className="fill-muted-foreground text-white"
                        >
                         Payments Secured
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
         Payments Secured By 99.9% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground text-center">
          Payments Passed Through Multiple Authentications And Rules.
        </div>
      </CardFooter>
    </Card>
      </div>
      </div>
      <div>
      
      </div>
      <div className="mt-14 lg:mt-24 items-center justify-center flex flex-col">
      <h1 className="text-2xl font-semibold lg:text-5xl ">Want To Secure Your Site ? </h1>
      <h1 className="text-2xl font-semibold opacity-60 lg:text-2xl"> What You Can Expect  </h1>
      <div className="mt-12">
      <SupportedPlatforms />
      <div className="w-full h-1 bg-white m-8 opacity-55"></div>
      <div className="  flex flex-col space-y-4 mt-8 text-center opacity-60 lg:hidden">
      <h1 className="text-xl font-regular">Custom Rules Upon Geo Location</h1>
      <h1 className="text-xl font-regular">Manually Reviewing Risk Payments </h1>
      <h1 className="text-xl font-regular">Ddos Protection </h1>
      <h1 className="text-xl font-regular">Rate Limiting </h1>
      <h1 className="text-xl font-regular">Customer Support</h1>
      <h1 className="text-xl font-regular">Rate Limiting </h1>
      </div>

      </div>
      
      </div>
      <div className="mt-12 hidden lg:block px-8">
      <GeoLocation />
      <ManualReview />
      <DdosProtection />
      </div>
      <div className="mt-12 bg-black">
        <div className="w-full h-0.5">

        </div>
        <div>
          
        </div>
<div className="flex flex-col items-center justify-center align-middle mt-14">
  <h1 className="lg:text-8xl text-2xl font-semibold">
  Want To Work With Us ?
  </h1>
  <h5 className="lg:text-4xl text-xl">We'd Be Glad To Work</h5>

  <div className="mt-8 mb-60 border-b">
    <span className="opacity-50">Email Us At </span><span className=" text-blue-600">onboard@vulnity.io</span>
  </div>
</div>
      </div>
    </div>
  );
}
