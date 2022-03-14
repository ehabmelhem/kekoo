import * as React from 'react'

function useDoubleClick() {
    const [elm, setElm]= React.useState(null)
    const countRef = React.useRef(0);
    const timerRef = React.useRef(null);
    const inputCallBackRef=React.useRef(null);
    const callbackRef = React.useCallback(node =>{
        setElm(node);
        callbackRef.current = node;
    },[]);
    React.useEffect(()=>{
        inputCallBackRef.current=callbackRef;
    })
    React.useEffect(()=>{
        function handler(){
            const isDoubleClick = countRef.current+1===2;
            const timerIsPresent =  timerRef.current;
            if(timerIsPresent && isDoubleClick){
                clearTimeout(timerRef.current);
                timerRef.current = null;
                countRef.current = 0;
                if(inputCallBackRef.current){
                    inputCallBackRef.current();
                }
            }
            if(!timerIsPresent){
                countRef.current = countRef.current + 1;
                const timer = setTimeout(()=>{
                    clearTimeout(timerRef.current);
                    timerRef.current = null;
                    countRef.current = 0;
                },200)
                timerRef.current = timer;

            }
        }
        if(elm){
            elm.addEventListener('click', handler)
        }
        return () => {
            if (elm) {
              elm.removeEventListener('click', handler)
            }
          }
    },[elm])
  return [callbackRef, elm];
}

export default useDoubleClick