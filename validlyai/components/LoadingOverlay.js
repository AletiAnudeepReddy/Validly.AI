"use client";
import { Loader2 } from "lucide-react";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <Loader2 className="w-12 h-12 text-[#12EAB5] animate-spin" />
    </div>
  );
}
