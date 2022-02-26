import Modal from "../modal/modal";
import ingredientStyle from "./ingredient-details.module.css";

const IngredientDetails = ({ isOpen, closeModal, ingredient }) => {
  return (
    <Modal title="Детали ингредиента" isOpen={isOpen} closeModal={closeModal}>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <p className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</p>
      <div className={`${ingredientStyle.contant}`}>
        <div className={`${ingredientStyle.item} mr-5`}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Калории,ккал
          </p>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.calories}
          </span>
        </div>
        <div className={`${ingredientStyle.item} mr-5`}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Белки, г
          </p>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.proteins}
          </span>
        </div>
        <div className={`${ingredientStyle.item} mr-5`}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Жиры, г
          </p>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.fat}
          </span>
        </div>
        <div className={ingredientStyle.item}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Углеводы, г
          </p>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.carbohydrates}
          </span>
        </div>
      </div>
    </Modal>
  );
};
export default IngredientDetails;
