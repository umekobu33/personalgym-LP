jQuery("#js--header__button").on("click", function (e) {
  e.preventDefault();
  jQuery("#js--header__button").toggleClass("is--checked");
  jQuery("#js--drawer").toggleClass("is-checked");
  // 下記の記述でドロワーコンテンツに設定したoverflowhiddenのつけ外しを行う
  if (jQuery("body").css("overflow") === "hidden") {
    jQuery("body").css({ height: "", overflow: "" });
  } else {
    jQuery("body").css({ height: "100%", overflow: "hidden" });
  }
});

// ページ内リンクドロワー開閉
jQuery("#js--drawer a[href^='#']").on("click", function () {
  jQuery("#js--header__button").toggleClass("is--checked");
  jQuery("#js--drawer").toggleClass("is-checked");
  if (jQuery("body").css("overflow") === "hidden") {
    jQuery("body").css({ height: "", overflow: "" });
  } else {
    jQuery("body").css({ height: "100%", overflow: "hidden" });
  }
});

// jQuery部分
jQuery(function () {
  let swiperInstance; // Swiperインスタンスを格納する変数
  function initSwiper() {
    const windowWidth = jQuery(window).width(); // 画面の幅を取得
    // 既存のSwiperを破棄（再初期化のため）
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
    }
    // 画面サイズに応じたSwiperの設定
    if (windowWidth > 768) {
      // PC用のSwiper設定
      swiperInstance = new Swiper(".equipment__swiper", {
        // Optional parameters
        slidesPerView: "auto",
        spaceBetween: 48,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 4000, // 3秒ごとに次のスライドへ
          disableOnInteraction: false, // ユーザーが操作しても自動再生を続行
        },
        speed: 1000,

        // If we need pagination
        pagination: {
          el: ".equipment__pagination",
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".equipment__next",
          prevEl: ".equipment__prev",
        },
      });
    } else {
      // スマートフォン用のSwiper設定
      swiperInstance = new Swiper(".equipment__swiper", {
        // Optional parameters

        loop: true,

        // If we need pagination
        pagination: {
          el: ".equipment__pagination",
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".equipment__next",
          prevEl: ".equipment__prev",
        },
      });
    }
  }
  // 初回実行
  initSwiper();
  // ウィンドウサイズ変更時に再適用
  jQuery(window).on("resize", function () {
    initSwiper();
  });
});

// アコーディオン
jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();
  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});
