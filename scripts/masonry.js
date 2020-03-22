$(function() {
  $("#WS-LiSli").WS_lightbox_free({
    enable: ["close", "arrows"],

    buttons: {
      size: 40,
      style: "square", // ( default, square, circle, rounded )
      color: "transparent",
      color_icon: "white",
      border_width: 12,
      border_color: "white",
      opacity: 1,
      hover_opacity: 1
    },
    arrows: {
      position: "outside", // ( inside, outside, attached )
      style: "svelt", // (default, square, circle, rounded, svelt)
      icon_style: "angle", // (default, caret, angle, chevron)
      icon_size: 65,
      opacity: 0.8,
      hover_effect: "shrink", // (zoom, shrink, translate)
      hover_opacity: 0.8
    },
    image: {
      border_radius: 0,
      border_color: "",
      border_width: 0,
      bg: "none"
    },
    background: {
      filter: "image",
      opacity: 0.5
    },
    display_velocity: "normal",
    slide_velocity: "fast"
  });
});
