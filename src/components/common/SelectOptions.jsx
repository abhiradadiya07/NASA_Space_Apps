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

export function SelectOptions() {
    return (
        <Select>
            <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select Threshold" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Select Cloud Storage threshold</SelectLabel>
                    <SelectItem value="0%">0%</SelectItem>
                    <SelectItem value="10%">10%</SelectItem>
                    <SelectItem value="20%">20%</SelectItem>
                    <SelectItem value="50%">50%</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
