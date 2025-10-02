export async function getGitHubStats() {
  try {
    const response = await fetch(
      'https://camo.githubusercontent.com/912be1579d3900206e7625c0ffe48a1df056cea52c7a6372e608dbe3513f395e/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d4c756361732d43687269737469616e2673686f775f69636f6e733d74727565267468656d653d6769746875625f6461726b26696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565'
    );

    if (!response.ok) {
      throw new Error('Error fetching GitHub stats');
    }

    const svgText = (await response.text()).toString().trim();
    const parseGitHubStats = (str: string) => {
      const rank = str.match(/<text[^>]*data-testid="level-rank-icon"[^>]*>\s*([\w+-]+)\s*<\/text>/)?.[1];
      const desc = str.match(/<desc[^>]*>(.*?)<\/desc>/)?.[1];

      const totalStars = desc?.match(/Total Stars Earned:\s*(\d+)/)?.[1];
      const totalCommits = desc?.match(/Total Commits\s*:\s*([\d.kM]+)/)?.[1]; 
      const totalPRs = desc?.match(/Total PRs:\s*(\d+)/)?.[1];
      const totalContributions = desc?.match(/Contributed to \(last year\):\s*(\d+)/)?.[1];
      return {
        totalStars: totalStars ? Number(totalStars) : undefined,
        totalCommits: totalCommits ? Number(totalCommits) : undefined,
        totalPRs: totalPRs ? Number(totalPRs) : undefined,
        totalContributions: totalContributions ? Number(totalContributions) : undefined,
        rank
      };
    };
    
    return parseGitHubStats(svgText);
  } catch (error) {    
    return null;
  }
}
