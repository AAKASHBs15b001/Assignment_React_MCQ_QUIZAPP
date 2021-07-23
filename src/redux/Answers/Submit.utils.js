export const Submittheoption = (Ques, Ans,Ans_Arr) => {
    Ans_Arr[Ques]=Ans
    
    return Ans_Arr
  };
  
  export const Skiptheoption = (Ques,Ans_Arr) => {
    Ans_Arr[Ques]=' '

    return Ans_Arr
  };