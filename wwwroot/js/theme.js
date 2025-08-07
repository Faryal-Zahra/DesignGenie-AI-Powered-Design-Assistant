window.applyTheme = function (theme) {
    console.log("Applying theme:", theme); // Debugging log
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
};
