const actions = {
   
    SUBMIT_THE_ANSWER  : 'SUBMIT_THE_ANSWER',
    SKIP_THE_ANSWER  : 'SKIP_THE_ANSWER',


submittheAnswer:(QuesNo,Answer_selected)=>(
    {
        type:'SUBMIT_THE_ANSWER',
        payload:[QuesNo,Answer_selected]

    }),

    skiptheAnswer:(Ques_No)=>(
        {
            type:'SKIP_THE_ANSWER',
            payload:Ques_No
        })

};
export default actions;