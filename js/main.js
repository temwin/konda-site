// ===== timber block =====
const timberSettings = document.querySelector("[data-timber-settings]");
const timberTabs = document.querySelectorAll("[data-timber-tab]");
const timberTitle = document.querySelector("[data-timber-title]");
const timberList = document.querySelector("[data-timber-list]");
const timberPrice = document.querySelector("[data-timber-price]");
const timberImage = document.querySelector("[data-timber-image]");

if (
  timberSettings &&
  timberTabs.length &&
  timberTitle &&
  timberList &&
  timberPrice &&
  timberImage
) {
  const timberData = {
    "finger-jointed": {
      title: "Сращенный брус",
      list: [
        "До 12 м",
        "Высокая прочность",
        "Снимается ствольное напряжение",
        "Удаление дефектов",
      ],
      price: timberSettings.dataset.fingerPrice,
      image: timberSettings.dataset.fingerImage,
      alt: "Сращенный брус",
    },

    "solid-lamella": {
      title: "Цельноламельный брус",
      list: ["До 6 м", "Доступная цена", "Однородная текстура дерева"],
      price: timberSettings.dataset.solidPrice,
      image: timberSettings.dataset.solidImage,
      alt: "Цельноламельный брус",
    },
  };

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

      timberList.innerHTML = data.list
        .map((item) => `<li>${item}</li>`)
        .join("");
    });
  });
}

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

  const imagePath = `/modx-demo/assets/img/timber-size-${timberSelectedHeight}-${timberSelectedWidth}.jpg`;

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
    totalArea: "Общая площадь: 69 м²",
    warmArea: "Площадь теплого контура: —",
    terraceArea: "Площадь террасы/крыльца: —",
    size: "Габариты: 8x10 м",
    profile: "Профилированный клееный брус",
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
  const readyTotalArea = readySection.querySelector("[data-ready-total-area]");
  const readyWarmArea = readySection.querySelector("[data-ready-warm-area]");
  const readyTerraceArea = readySection.querySelector(
    "[data-ready-terrace-area]"
  );
  const readySize = readySection.querySelector("[data-ready-size]");
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
    readyTotalArea.textContent = item.totalArea;
    readyWarmArea.textContent = item.warmArea;
    readyTerraceArea.textContent = item.terraceArea;
    readySize.textContent = item.size;
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

// ===== certificates modal =====
const certificateImages = document.querySelectorAll(".certificates__image");
const certificateModal = document.querySelector("[data-certificate-modal]");
const certificateModalImage = document.querySelector(
  "[data-certificate-image]"
);
const certificateModalClose = document.querySelector(
  "[data-certificate-close]"
);

if (
  certificateImages.length &&
  certificateModal &&
  certificateModalImage &&
  certificateModalClose
) {
  certificateImages.forEach((image) => {
    image.addEventListener("click", () => {
      certificateModalImage.src = image.src;
      certificateModalImage.alt = image.alt;
      certificateModal.classList.add("certificate-modal--active");
    });
  });

  certificateModalClose.addEventListener("click", () => {
    certificateModal.classList.remove("certificate-modal--active");
    certificateModalImage.src = "";
  });

  certificateModal.addEventListener("click", (event) => {
    if (event.target === certificateModal) {
      certificateModal.classList.remove("certificate-modal--active");
      certificateModalImage.src = "";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      certificateModal.classList.remove("certificate-modal--active");
      certificateModalImage.src = "";
    }
  });
}

// ===== timber process slider =====
const timberProcessSlider = new Swiper(".timber-process__slider", {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: ".timber-process__arrow--next",
    prevEl: ".timber-process__arrow--prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
