"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download, Check, Home } from "lucide-react";

interface BrochureDownloadDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BrochureDownloadDialog({
  isOpen,
  onOpenChange,
}: BrochureDownloadDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
  });
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const validateMobile = (mobile: string) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const numericValue = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
      if (errors.mobile) {
        setErrors((prev) => ({ ...prev, mobile: "" }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors.name) {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: "", mobile: "" });

    let hasErrors = false;
    const newErrors = { name: "", mobile: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      hasErrors = true;
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      hasErrors = true;
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);

      // Simulate actual PDF download
      const link = document.createElement("a");
      link.href = "/placeholder.pdf";
      link.download = "Ground-to-Sky-Aviation-Academy-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setFormData({ name: "", mobile: "" });
      setErrors({ name: "", mobile: "" });
      setIsDownloaded(false);
      setIsDownloading(false);
    }, 300);
  };

  const goToHomepage = () => {
    handleClose();
    window.location.href = "/";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto bg-white/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-primary gradient-text text-center">
            Download Our Premium Brochure
          </DialogTitle>
        </DialogHeader>

        {isDownloaded ? (
          <div className="py-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Brochure Downloaded!
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Thank you for your interest in Ground to Sky Aviation Academy.
                The brochure has been downloaded to your device.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={goToHomepage}
                  className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent-600 hover:to-secondary-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Go to Homepage
                </Button>
                <Button
                  variant="outline"
                  onClick={handleClose}
                  className="w-full border-gray-300 text-gray-700"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <p className="text-gray-600 text-center">
              Get detailed information about our courses, facilities, placement
              records, and success stories.
            </p>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Enter exactly 10 digits (e.g., 9876543210)
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isDownloading}
                  className="flex-1 bg-gradient-to-r from-accent to-secondary hover:from-accent-600 hover:to-secondary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isDownloading ? (
                    <>
                      <Download className="mr-2 h-4 w-4 animate-bounce" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
