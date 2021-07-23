const actions = {
   
    GET_TIMER_ON  : 'GET_TIMER_ON',
    GET_TIMER_OFF  : 'GET_TIMER_OFF',
    RESET_TIMER:'RESET_TIMER',


swtichtheTimerON:()=>(
    {
        type:'GET_TIMER_ON'
    }),

    swtichtheTimerFF:()=>(
        {
            type:'GET_TIMER_OFF'
        }),
        ResetTimer:()=>(
            {
                type:'RESET_TIMER'
            })

};
export default actions;