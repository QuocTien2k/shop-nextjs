import { useEffect, useRef } from "react";

export function  useOutsideClick <T extends HTMLElement>(callback: () => void){
    const ref = useRef<T>(null);

    useEffect(() =>{
        const handleClickdOutside = (e:MouseEvent) =>{
            if(ref.current && !ref.current.contains(e.target as Node)){
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickdOutside);

        return () =>{
            document.removeEventListener("mousedown", handleClickdOutside)
        }
    }, [callback])

    return ref;
}