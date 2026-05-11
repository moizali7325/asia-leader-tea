import { motion } from 'motion/react';

export default function SkeletonLoader() {
  return (
    <div className="glass p-6 rounded-[32px] border border-white/10 overflow-hidden">
      <div className="w-full h-48 bg-white/5 rounded-2xl mb-4 animate-pulse" />
      <div className="h-6 bg-white/10 rounded w-3/4 mb-2 animate-pulse" />
      <div className="h-4 bg-white/5 rounded w-full mb-4 animate-pulse" />
      <div className="h-4 bg-white/5 rounded w-2/3 mb-6 animate-pulse" />
      <div className="space-y-2">
        <div className="h-8 bg-white/10 rounded animate-pulse" />
        <div className="h-10 bg-primary/20 rounded-xl animate-pulse" />
      </div>
    </div>
  );
}
