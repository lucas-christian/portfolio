import { useState, useEffect } from 'react';

interface GitHubStats {
  totalStars: number;
  totalCommits: number;
  totalPRs: number;
  totalContributions: number;
  rank: string;
  isLoading: boolean;
  error: string | null;
}

export const useGitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats>({
    totalStars: 12,
    totalCommits: 1008,
    totalPRs: 20,
    totalContributions: 12,
    rank: 'B-',
    isLoading: false,
    error: null
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setStats(prev => ({ ...prev, isLoading: true, error: null }));
        
        const response = await fetch('/api/github-stats');
        
        if (!response.ok) return;

        const data = await response.json();
        
        setStats({
          totalStars: data.totalStars || stats.totalStars,
          totalCommits: data.totalCommits || stats.totalCommits,
          totalPRs: data.totalPRs || stats.totalPRs,
          totalContributions: data.totalContributions || stats.totalContributions,
          rank: data.rank || stats.rank,
          isLoading: false,
          error: null
        });
      } catch (error) {}
    };

    fetchGitHubStats();
  }, []);

  return stats;
};