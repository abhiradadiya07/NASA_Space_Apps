import React, { useState } from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react" // Adjust icon imports
import { cn } from "@/lib/utils" // Replace with your own utility or CSS class joining function
import { Button } from "@/components/ui/button" // Replace with your Button component
import { Calendar } from "@/components/ui/calendar" // Replace with your Calendar component
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover" // Adjust these imports

export function DatePickerWithRange({ className }) {
  // Define the date range state without relying on DateRange from react-day-picker
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  return (
    <div className={cn("grid gap-2 mt-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            wriant="outline"
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
