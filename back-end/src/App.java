import static org.junit.jupiter.api.Assertions.*;

import java.util.*;
import java.util.Arrays;
import java.util.Collections;
import org.junit.Test;
public class App {
    public static void main(String[] args) throws Exception {
        int arrayLength; 
        Scanner scanner=new Scanner(System.in);  
        System.out.print("Enter the length of the array: ");  
        arrayLength=scanner.nextInt();  
        Integer[] array = new Integer[arrayLength];  
        System.out.println("Enter the elements of the array: ");  
        for(int i=0; i<arrayLength; i++)  
        {  
            array[i]=scanner.nextInt();  
        }  
        scanner.close();
        System.out.println("");
        int min = Collections.min(Arrays.asList(array));
        int max = Collections.max(Arrays.asList(array));
        Map<Integer, Integer> freqMap = new HashMap<Integer, Integer>();
        FillMap(freqMap, min, max);
        CalcFrequency(array, freqMap);
        PrintFrequency(freqMap, min, max);
        PrintNumbers(min, max);    
        PrintGraph(freqMap, min, max);    
    }
    public static void CalcFrequency(Integer[] array, Map<Integer, Integer> freqMap) {        
        for(int i = 0; i<array.length; i++){           
            freqMap.put(array[i], freqMap.get(array[i]) + 1);            
        }
    }
    public static void FillMap(Map<Integer, Integer> map, int min, int max){
        for(int i = min; i<=max; i++){         
            map.put(i, 0);        
        }
    }
    public static void PrintNumbers(int min, int max){
        System.out.print("Numbers: ");
        for(int i = min; i<=max; i++){           
            if(i==max){               
                System.out.print(i);
            } else {                
                System.out.print(i + ", ");
            }            
        }
        System.out.println("");
        System.out.println("");
    }
    public static void PrintFrequency(Map<Integer, Integer> map,int min, int max){
        System.out.print("Frequency: ");
        for(int i = min; i<=max; i++){
            if(i==max){
                System.out.print(map.get(i));   
            } else {
                System.out.print(map.get(i) + ", ");        
            }              
        }
        System.out.println("");
    }
    public static void PrintGraph(Map<Integer, Integer> map, int min, int max){
        int maxValueInMap=(Collections.max(map.values()));
        String [][] graph = new String [maxValueInMap][max-min+1];
        for(int i = 0; i<maxValueInMap; i++){
            int mapX = min;     
            for(int j = 0; j<max-min+1; j++){     
                int length = String.valueOf(mapX).length();
                String emptyStringLength = new String(new char[length]).replace("\0", " ");       
                if(maxValueInMap - map.get(mapX) <= i ){                    
                    graph[i][j] = "*" + emptyStringLength;
                } else {
                    graph[i][j] = " " + emptyStringLength;
                }              
                mapX++;           
                System.out.print(graph[i][j]);         
            }
            System.out.println("");        
        }
        for(int i = min; i<=max; i++){           
            System.out.print(i + " ");  
        }
        System.out.println("");
        System.out.println("");
    }

    @Test
    public void testCalcFrequency(){
        Integer[] array = {1, 3, 3};
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        Map<Integer, Integer> expectedMap = Map.of(1, 1, 2, 0, 3, 2);
        int min = Collections.min(Arrays.asList(array));
        int max = Collections.max(Arrays.asList(array));
        FillMap(map, min, max);
        CalcFrequency(array, map);
        assertTrue(expectedMap.keySet().equals(map.keySet()));
    }
}
   
