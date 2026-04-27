// ===== timber block =====
const timberData = {
  "finger-jointed": {
    title: "Сращенный брус",
    list: [
      "До 12 м",
      "Высокая прочность",
      "Снимается ствольное напряжение",
      "Удаление дефектов",
    ],
    price: "52 000 ₽ / м³",
    image: "img/finger-jointed-timber.jpg",
    alt: "Сращенный брус",
  },

  "solid-lamella": {
    title: "Цельноламельный брус",
    list: ["До 6 м", "Доступная цена", "Однородная текстура дерева"],
    price: "46 000 ₽ / м³",
    image: "img/solid-lamella-timber.jpg",
    alt: "Цельноламельный брус",
  },
};

const timberTabs = document.querySelectorAll("[data-timber-tab]");
const timberTitle = document.querySelector("[data-timber-title]");
const timberList = document.querySelector("[data-timber-list]");
const timberPrice = document.querySelector("[data-timber-price]");
const timberImage = document.querySelector("[data-timber-image]");

timberTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.timberTab;
    const data = timberData[tabName];

    if (!data) return;

    timberTabs.forEach((item) => {
      item.classList.remove("glued-timber__tab--active");
      item.setAttribute("aria-selected", "false");
    });

    tab.classList.add("glued-timber__tab--active");
    tab.setAttribute("aria-selected", "true");

    timberTitle.textContent = data.title;
    timberPrice.textContent = data.price;
    timberImage.src = data.image;
    timberImage.alt = data.alt;

    timberList.innerHTML = data.list.map((item) => `<li>${item}</li>`).join("");
  });
});

// ===== timber sizes block =====
const timberSizeButtonsHeight = document.querySelectorAll(
  "[data-timber-height]"
);
const timberSizeButtonsWidth = document.querySelectorAll("[data-timber-width]");
const timberSizeImage = document.querySelector("[data-timber-size-image]");

let timberSelectedHeight = "185";
let timberSelectedWidth = "160";

function updateTimberSizeImage() {
  if (!timberSizeImage) return;

  const imagePath = `img/timber-size-${timberSelectedHeight}-${timberSelectedWidth}.jpg`;

  timberSizeImage.src = imagePath;
  timberSizeImage.alt = `Брус сечением ${timberSelectedHeight} на ${timberSelectedWidth} мм`;
}

timberSizeButtonsHeight.forEach((button) => {
  button.addEventListener("click", () => {
    timberSelectedHeight = button.dataset.timberHeight;

    timberSizeButtonsHeight.forEach((item) => {
      item.classList.remove("timber-sizes__btn--active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("timber-sizes__btn--active");
    button.setAttribute("aria-pressed", "true");

    updateTimberSizeImage();
  });
});

timberSizeButtonsWidth.forEach((button) => {
  button.addEventListener("click", () => {
    timberSelectedWidth = button.dataset.timberWidth;

    timberSizeButtonsWidth.forEach((item) => {
      item.classList.remove("timber-sizes__btn--active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("timber-sizes__btn--active");
    button.setAttribute("aria-pressed", "true");

    updateTimberSizeImage();
  });
});

// ===== ready kits slider =====
const readyKitsData = [
  {
    title: "Проект Алтай",
    description:
      "Современный дом для круглогодичного проживания с продуманной планировкой и панорамными окнами",
    area: "Площадь: 69 м²",
    size: "Габариты: 8x10 м",
    floors: "Количество этажей: 1",
    profile: "Профиль: европейский",
    section: "Сечение: 160 × 185 мм",
    price: "от 1 350 000 ₽",
    mainImage: "img/altai-main.jpg",
    mainAlt: "Проект Алтай",
    thumbOne: "img/altai-plan.jpg",
    thumbOneAlt: "Планировка проекта Алтай",
    thumbTwo: "img/altai-3d.jpg",
    thumbTwoAlt: "3D-модель проекта Алтай",
  },
];

const readySection = document.querySelector("[data-ready-kits]");

if (readySection) {
  const readyPrev = readySection.querySelector("[data-ready-prev]");
  const readyNext = readySection.querySelector("[data-ready-next]");

  const readyTitle = readySection.querySelector("[data-ready-title]");
  const readyDescription = readySection.querySelector(
    "[data-ready-description]"
  );
  const readyArea = readySection.querySelector("[data-ready-area]");
  const readySize = readySection.querySelector("[data-ready-size]");
  const readyFloors = readySection.querySelector("[data-ready-floors]");
  const readyProfile = readySection.querySelector("[data-ready-profile]");
  const readySectionText = readySection.querySelector("[data-ready-section]");
  const readyPrice = readySection.querySelector("[data-ready-price]");

  const readyMainImage = readySection.querySelector("[data-ready-main-image]");
  const readyThumbOne = readySection.querySelector("[data-ready-thumb-one]");
  const readyThumbTwo = readySection.querySelector("[data-ready-thumb-two]");

  let readyCurrentIndex = 0;

  const readyDotsContainer = readySection.querySelector("[data-ready-dots]");
  readyKitsData.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "ready-kits__dot";
    dot.type = "button";

    if (index === 0) {
      dot.classList.add("ready-kits__dot--active");
      dot.setAttribute("aria-current", "true");
    }

    dot.addEventListener("click", () => {
      readyCurrentIndex = index;
      updateReadyKit(index);
    });

    readyDotsContainer.appendChild(dot);
  });

  function updateReadyKit(index) {
    const readyDots = readyDotsContainer.querySelectorAll(".ready-kits__dot");
    const item = readyKitsData[index];

    if (!item) return;

    readyTitle.textContent = item.title;
    readyDescription.textContent = item.description;
    readyArea.textContent = item.area;
    readySize.textContent = item.size;
    readyFloors.textContent = item.floors;
    readyProfile.textContent = item.profile;
    readySectionText.textContent = item.section;
    readyPrice.textContent = item.price;

    readyMainImage.src = item.mainImage;
    readyMainImage.alt = item.mainAlt;

    readyThumbOne.src = item.thumbOne;
    readyThumbOne.alt = item.thumbOneAlt;

    readyThumbTwo.src = item.thumbTwo;
    readyThumbTwo.alt = item.thumbTwoAlt;

    readyDots.forEach((dot, dotIndex) => {
      dot.classList.toggle("ready-kits__dot--active", dotIndex === index);

      if (dotIndex === index) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  }

  readyNext.addEventListener("click", () => {
    readyCurrentIndex = (readyCurrentIndex + 1) % readyKitsData.length;
    updateReadyKit(readyCurrentIndex);
  });

  readyPrev.addEventListener("click", () => {
    readyCurrentIndex =
      (readyCurrentIndex - 1 + readyKitsData.length) % readyKitsData.length;
    updateReadyKit(readyCurrentIndex);
  });
}
