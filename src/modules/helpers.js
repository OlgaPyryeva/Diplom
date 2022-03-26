const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const scrollWidthSize = () => {
  // создадим элемент с прокруткой
  let div = document.createElement("div");

  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";

  // мы должны вставить элемент в документ, иначе размеры будут равны 0
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();
};

export { animate, scrollWidthSize };
