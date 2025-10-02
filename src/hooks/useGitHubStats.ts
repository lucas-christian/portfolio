import { getGitHubStats } from '@utils/getGithubStats';
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
  const [stats, _setStats] = useState<GitHubStats>({
    totalStars: 12,
    totalCommits: 1008,
    totalPRs: 20,
    totalContributions: 12,
    rank: 'B-',
    isLoading: false,
    error: null
  });

  return stats;
};