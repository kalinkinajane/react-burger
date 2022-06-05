import React, { useRef, FC } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { deleteIngredient } from "../../../services/actions/ingredients-constructor";

import { TIngredient } from "../../../utils/type";

import elementsStyle from "./burger-elements.module.css";
import { useDispatch } from "../../../utils/hooks";


type TIngredientProps = {
  item: TIngredient;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}
type TItemHover = {
  id: string;
  index: number;
}

const Ingredient: FC<TIngredientProps> = ({ item, index, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const [{ handlerId }, drop] = useDrop({
    accept: "card",

    hover(item: TItemHover, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset: any | null = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
    collect(monitor: DropTargetMonitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => ({ id: item.itemId, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  if (item.type !== "bun") drag(drop(ref));

  const preventDefault = (e: React.SyntheticEvent) => e.preventDefault();
  return (
    <div
      ref={ref}
      className={`${elementsStyle.element} mb-4`}
      key={item.itemId}
      style={{ opacity }}
      onDrop={preventDefault}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_large}
        handleClose={() => dispatch(deleteIngredient(item.itemId))}
      />
    </div>
  );
};

export default Ingredient;
