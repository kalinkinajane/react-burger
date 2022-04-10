import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { ingredientsPropTypes } from "../../../utils/types";
import { deleteIngredient } from "../../../services/actions/ingredients-constructor";

import elementsStyle from "./burger-elements.module.css";


const Ingredient = ({ item, index, moveCard }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [{ handlerId }, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
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

      const clientOffset = monitor.getClientOffset();

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

  const preventDefault = (e) => e.preventDefault();
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

Ingredient.propTypes = {
  item: ingredientsPropTypes.isRequired,
  index: PropTypes.number,
  moveCard: PropTypes.func.isRequired,
};

export default Ingredient;
