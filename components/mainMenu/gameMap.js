// Загружаем данные карты
d3.json("DANIA.json").then(function(data) {
    // Выбираем элемент SVG
    const svg = d3.select("#map");

    // Определяем размеры SVG
    const width = 960;
    const height = 500;
    svg.attr("width", width)
       .attr("height", height);

    // Создаем проекцию карты (например, Mercator)
    const projection = d3.geoMercator()
        .scale(150)
        .center([12, 56])
        .translate([width / 2, height / 2]);

    // Создаем геопаथ для рисования карты
    const path = d3.geoPath()
        .projection(projection);

    // Рисуем карту
    svg.append("path")
        .datum(topojson.feature(data, data.objects.danmark))
        .attr("d", path)
        .attr("fill", "lightblue")
        .attr("stroke", "black")
        .attr("stroke-width", 0.5);
});
