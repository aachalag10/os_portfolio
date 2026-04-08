import {create} from "zustand";
import { immer } from 'zustand/middleware/immer'
import { WINDOW_CONFIG,INITIAL_Z_INDEX } from "@/constants";
const usewindowstore=create(
    immer((set)=>({
    windows:WINDOW_CONFIG,
        nextZIndex:INITIAL_Z_INDEX+1,

         OpenWindow:(windowKey,data=null)=>
        set((state)=>{
            const win=state.windows[windowKey];
            win.isOpen=true;
            win.zIndex=state.nextZIndex;
            win.data=data ?? win.data;

            state.nextZIndex++;
        }),

        closeWindow:(windowKey)=>set((state)=>{
            const win=state.windows[windowKey];
            win.isOpen=true;
            win.zIndex=state.nextZIndex;
            win.data=data ??win.data;

        }),
        focusWindow:(windowKey)=>set((state)=>{
            set((state)=>{
                const win=state.windows[windowKey];
                win.zIndex=state.zIndex++;

            })
        }),

})))

export default usewindowstore; 