int solution(int A, int B) {
	int myResultNumber;
    string myString1 = A.ToString();
    string myString2 = B.ToString();
    string myResult = " ";
    for (int i = 0; i < myString1.Length || i < myString2.Length; i++) {
        //finding the length of the strings
		if(i<myString1.Length)
        {
                myResult = myResult + myString1[i];
        }
        if(i<myString2.Length)
        {            
                myResult = myResult + myString2[i];
        }
    }
   myResultNumber = Convert.ToInt32(myResult);
    
    if (myResultNumber > 100000000) {
        return -1;
    } else {
        return(myResultNumber);
    }
}
