import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
 
export const CVSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Curriculum Vitae</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <div>
          <div className="font-medium">Latest CV/Resume</div>
          <div className="text-sm text-muted-foreground">
            Last updated: February 2025
          </div>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download CV
        </Button>
      </CardContent>
    </Card>
  );
};
