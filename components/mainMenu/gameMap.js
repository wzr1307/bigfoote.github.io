// gameMap.js
const svg = d3.select("#map");

// Загрузка данных
d3.json("DANIA.json").then(function(data) {
  // Преобразование топологических данных в геометрические
  const danishRegions = topojson.feature(data, data.objects.danmark);

  // Создание SVG элементов для каждого региона
  svg.selectAll("path")
    .data(danishRegions.features)
    .enter()
    .append("path")
    .attr("d", d3.geoPath());
});
