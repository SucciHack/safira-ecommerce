"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from '../ui/button';
import { Plus, Sun } from 'lucide-react';
import { SidebarTrigger } from '../ui/sidebar';
export default function HeaderComp() {
    const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <div className="flex h-16 items-center fixed top-0 w-full z-40 gap-4 
    border-b px-4 bg-white/45 backdrop-blur-md">
    <SidebarTrigger />
    <div className="flex-1">
      <Input
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-sm"
      />
    </div>
    <Button variant="outline" size="icon">
      <span className="sr-only">Toggle theme</span>
      <Sun className="h-5 w-5" />
    </Button>
    <Button variant="outline" size="icon">
      <Plus className="h-5 w-5" />
      <span className="sr-only">Add new</span>
    </Button>
    <Avatar>
      <AvatarImage src="/placeholder.svg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </div>
  )
}
