import java.util.*;

public class 카카오프렌즈_컬러링북 {
    static int M, N;
    static int[][] graph;
    static boolean[][] visited;

    public static int BFS(int sr, int sc, int num) {
        int[] dr = {-1, 1, 0, 0};
        int[] dc = {0, 0, -1, 1};

        int count = 0;
        visited[sr][sc] = true;
        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{sr, sc});
        while(!q.isEmpty()) {
            int[] now = q.poll();
            int r = now[0], c = now[1];
            count++;
            for(int i=0;i<4;i++) {
                int nr = r + dr[i];
                int nc = c + dc[i];

                if(nr < 0 || nr >= M) continue;
                if(nc < 0 || nc >= N) continue;
                if(!visited[nr][nc] && graph[nr][nc] == num) {
                    visited[nr][nc] = true;
                    q.offer(new int[]{nr, nc});
                }
            }
        }

        return count;
    }

    public static int[] solution(int m, int n, int[][] picture) {
        M = m; N = n;
        graph = picture;
        visited = new boolean[M][N];
        
        int areaCount = 0;
        int maxAreaSize = 0;
        for(int i=0;i<M;i++) {
            for(int j=0;j<N;j++) {
                if(!visited[i][j] && graph[i][j] != 0) {
                    areaCount++;
                    int areaSize = BFS(i, j, graph[i][j]);
                    maxAreaSize = Math.max(maxAreaSize, areaSize);
                }
            }
        }
        

        return new int[]{areaCount, maxAreaSize};
    }

    public static void main(String[] args) {
        int[] result = solution(6, 4, new int[][]{
            {1, 1, 1, 0},
            {1, 2, 2, 0},
            {1, 0, 0, 1},
            {0, 0, 0, 1},
            {0, 0, 0, 3},
            {0, 0, 0, 3},
        });
        System.out.println(result[0] + " " + result[1]);
    }
}
