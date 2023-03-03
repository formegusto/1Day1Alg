public class 단체사진찍기 {
    static String[] MEMBER = {"A", "C", "F", "J", "M", "N", "R", "T"};
    static String[] CONDS;
    static int answer = 0;

    public static boolean 내가너옆에서도될까(String arr, String newMem) {
        for(int i=0;i<CONDS.length;i++) {
            String newArr = arr + newMem;
            String m1 = CONDS[i].charAt(0) + "";
            String m2 = CONDS[i].charAt(2) + "";

            int findIdx1 = newArr.indexOf(m1);
            int findIdx2 = newArr.indexOf(m2);

            if(findIdx1 == -1 || findIdx2 == -1) 
                continue;
                
            String cond = CONDS[i].charAt(3) + "";
            int limit = CONDS[i].charAt(4) - '0';
            switch(cond) {
                case "=":
                    if(Math.abs(findIdx1 - findIdx2) != limit + 1) return false;
                    break;
                case ">":
                    if(Math.abs(findIdx1 - findIdx2) <= limit + 1) return false;
                    break;
                case "<":
                    if(Math.abs(findIdx1 - findIdx2) >= limit + 1) return false;
                    break;
            }

        }

        return true;
    }

    public static void DFS(String arr) {
        if(arr.length() == MEMBER.length) {
            answer++;
            return;
        }

        for(int i=0;i<MEMBER.length;i++) {
            if(!arr.contains(MEMBER[i]) && 내가너옆에서도될까(arr, MEMBER[i])) {
                DFS(arr + MEMBER[i]);
            };
        }
    }

    public static int solution(int n, String[] data) {
        CONDS = data;
        DFS("");
        
        return answer;
    }

    public static void main(String[] args) {
        solution(2, new String[]{"N~F=0", "R~T>2"});

        System.out.println(answer);
    }
}
