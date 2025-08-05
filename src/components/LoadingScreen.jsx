'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 90) progress = 90; // Don't go to 100% until actually loaded
            setLoadingProgress(Math.min(progress, 90));
        }, 200);

        // Function to check if all critical resources are loaded
        const checkResourcesLoaded = () => {
            const images = document.querySelectorAll('img');
            const videos = document.querySelectorAll('video');

            let loadedCount = 0;
            const totalResources = images.length + videos.length;

            if (totalResources === 0) {
                // If no resources to load, complete immediately
                setTimeout(() => {
                    setLoadingProgress(100);
                    setTimeout(() => setIsLoading(false), 500);
                }, 1000);
                return;
            }

            const checkComplete = () => {
                loadedCount++;
                const progress = Math.min(90 + (loadedCount / totalResources) * 10, 100);
                setLoadingProgress(progress);

                if (loadedCount >= totalResources) {
                    setTimeout(() => {
                        setLoadingProgress(100);
                        setTimeout(() => setIsLoading(false), 500);
                    }, 300);
                }
            };

            // Check images
            images.forEach(img => {
                if (img.complete) {
                    checkComplete();
                } else {
                    img.addEventListener('load', checkComplete);
                    img.addEventListener('error', checkComplete); // Count errors as loaded
                }
            });

            // Check videos
            videos.forEach(video => {
                if (video.readyState >= 2) { // HAVE_CURRENT_DATA
                    checkComplete();
                } else {
                    video.addEventListener('loadeddata', checkComplete);
                    video.addEventListener('error', checkComplete);
                }
            });
        };

        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(checkResourcesLoaded, 100);
            });
        } else {
            setTimeout(checkResourcesLoaded, 100);
        }

        // Fallback: Hide loading screen after maximum time
        const maxTimer = setTimeout(() => {
            setLoadingProgress(100);
            setTimeout(() => setIsLoading(false), 500);
        }, 5000); // Maximum 5 seconds

        return () => {
            clearInterval(progressInterval);
            clearTimeout(maxTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                >
                    <div className="text-center">
                        {/* Logo/Name */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                                Dulaj Hashmika
                            </h1>
                            <p className="text-gray-400 text-lg md:text-2xl">
                                Portfolio
                            </p>
                        </motion.div>

                        

                        {/* Progress Bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="w-64 mx-auto mb-4"
                        >
                            <div className="w-full bg-gray-800 rounded-full h-2">
                                <motion.div
                                    className="bg-blue-500 h-2 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${loadingProgress}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <p className="text-gray-400 text-sm mt-2">
                                {Math.round(loadingProgress)}% loaded
                            </p>
                        </motion.div>

                        {/* Loading Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="text-gray-400 text-lg mb-4"
                        >
                            Loading your experience...
                        </motion.p>

                        {/* Loading Dots */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="flex justify-center space-x-1"
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 bg-blue-500 rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 