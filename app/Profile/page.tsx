import React from 'react';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileStats } from '@/components/profile/ProfileStats';
import { RecentActivity } from '@/components/profile/RecentActivity';
import { UserRatings } from '@/components/profile/UserRatings';
import { ProfileBadges } from '@/components/profile/ProfileBadges';
import { CompletedProjects } from '@/components/profile/CompletedProjects';
import { UserDetails } from '@/components/profile/UserDetails';
import { CVSection } from '@/components/profile/CVSection';
 
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
 
export default function ProfilePage() {
  return (
    <>
    <nav className="flex items-center justify-between p-4 bg-white text-gray-600">
                <div className="flex items-center">
                    <a href="/" className="text-xl font-bold">
                        <Image
                            src="/Logo-black.svg"
                            alt="CollabNest Logo"
                            width={160}
                            height={160}
                            className="mr-2"
                        />
                    </a>
                    <div className="flex items-center space-x-4 m-3">
                    <a href="/my-projects" className="hover:text-black">My Projects</a>
                    <a href="/discover" className="hover:text-black">Discover</a>
                    <a href="/leaderboard" className="hover:text-black">Leaderboard</a>
                    <a href="/profile" className="hover:text-black">Profile</a>
                </div>
                </div>
 
                <div className="flex items-center space-x-4">
                    <Input type="text" placeholder="Search..." />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </nav>
    <div className="container mx-auto py-8 px-4 md:px-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ProfileHeader />
          <ProfileStats />
          <UserRatings />
          <ProfileBadges />
          <CompletedProjects />
          <RecentActivity />
        </div>
        <div>
          <UserDetails />
          <CVSection />
        </div>
      </div>
    </div>
    </>
  );
}
