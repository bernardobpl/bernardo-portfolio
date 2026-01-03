import { ReactNode, useRef, useState } from "react"
import Draggable, { DraggableProps } from "react-draggable"

class DragCompIndex {
  static index = 0;
  static updateIndex() { DragCompIndex.index++; }
}

interface WindowProps extends Omit<Partial<DraggableProps>, 'children'>{
  children?: ReactNode
}
export const Window = ({children, ...props}: WindowProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [currentZIndex, setZIndex] = useState<number>(DragCompIndex.index);

  const prioritise = () => {
    setZIndex(DragCompIndex.index);
  }

  const deprioritise = () => {
    DragCompIndex.updateIndex();
  }

  return (
    <Draggable 
      defaultPosition={{x: 0, y: 0}}
      grid={[5, 5]}
      nodeRef={ref}
      onStart={prioritise}
      onStop={deprioritise}
      {...props}
    >
      <div 
        ref={ref} 
        style={{
          zIndex: currentZIndex,
          position: "absolute"
        }}
      >
        {children}
      </div>
    </Draggable>
  )
}
