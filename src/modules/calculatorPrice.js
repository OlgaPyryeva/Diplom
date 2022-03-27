import { animate } from "./helpers";

const calculatorPrice = (price = 1000) => {
  const calcType = document.getElementById("calc-type");
  const calcArea = document.getElementById("calc-input");
  const calcMaterial = document.getElementById("calc-type-material");
  const calcTotal = document.getElementById("calc-total");
  const calcBlock = document.getElementById("calc");

  // На странице Балконов необходимо реализовать калькулятор стоимости услуг:
  // 5) При отправке форм добавлять свойство calc-total к отправляемым данным в JSON-формате

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcArea.value;
    let calcMaterialValue =
      +calcMaterial.options[calcMaterial.selectedIndex].value;

    let totalValue = 0;

    // 1) Селекты с id=”calc-type” и инпут площади балкона с id=”calc-type-material” – обязательные поля
    // 3) Цена рассчитывается по формуле:
    // площадь умножить на value типа балкона и умножить на value типа материала

    if (calcTypeValue && calcArea.value && calcMaterialValue) {
      totalValue = price * calcSquareValue * calcTypeValue * calcMaterialValue;
    } else {
      totalValue = 0;
    }

    // 4) Записывать итог в инпут c id=”calc-total”
    // calcTotal.textContent = totalValue;
    // calcTotal.setAttribute("placeholder", totalValue);

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        calcTotal.textContent = Math.floor(totalValue * progress);
        calcTotal.setAttribute(
          "placeholder",
          Math.floor(totalValue * progress)
        );
      },
    });
  };

  if (calcBlock) {
    calcBlock.addEventListener("input", (e) => {
      if (
        e.target === calcType ||
        e.target === calcArea ||
        e.target === calcMaterial
      ) {
        countCalc();
      }
    });

    // 2) В инпут с id=”calc-input” разрешить вводить только цифры

    calcArea.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d]+/, "");
    });
  }
};
export default calculatorPrice;
