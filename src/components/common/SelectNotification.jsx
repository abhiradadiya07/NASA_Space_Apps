import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectNotifications() {
    return (
        <Select>
            <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select Notification Lead Time" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Select Notification Lead Time</SelectLabel>
                    <SelectItem value="1">1 hour early</SelectItem>
                    <SelectItem value="5">5 hour early</SelectItem>
                    <SelectItem value="10">10 hour early</SelectItem>
                    <SelectItem value="24">24 hour early</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
