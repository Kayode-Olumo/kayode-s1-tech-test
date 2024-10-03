import React, { useEffect, useState } from "react";
import { MoreHorizontal, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AccessibilityDialog = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.documentElement.style.lineHeight = lineHeight.toString();
  }, [isDarkMode, fontSize, lineHeight]);

  return (
    <Dialog open={isAccessibilityOpen} onOpenChange={setIsAccessibilityOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4 text-gray-700 dark:text-gray-300" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <DialogHeader>
          <DialogTitle>Edit accessibility settings</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6">
            <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200">
              Current settings
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
              Customize your viewing experience.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Dark Mode</span>
              <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">
                Text Size
              </label>
              <Slider
                min={12}
                max={24}
                step={1}
                value={[fontSize]}
                onValueChange={(value) => setFontSize(value[0])}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">
                Line Height
              </label>
              <Slider
                min={1}
                max={2}
                step={0.1}
                value={[lineHeight]}
                onValueChange={(value) => setLineHeight(value[0])}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAccessibilityOpen(false)}
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            Help
          </Button>
          <div>
            <Button
              variant="outline"
              size="sm"
              className="mr-2"
              onClick={() => setIsAccessibilityOpen(false)}
            >
              Cancel
            </Button>
            <Button size="sm" onClick={() => setIsAccessibilityOpen(false)}>
              Save changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AccessibilityDialog;
