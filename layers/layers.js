var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_cell_1 = new ol.format.GeoJSON();
var features_cell_1 = format_cell_1.readFeatures(json_cell_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cell_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cell_1.addFeatures(features_cell_1);
var lyr_cell_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cell_1, 
                style: style_cell_1,
                popuplayertitle: "cell ",
                interactive: true,
                title: '<img src="styles/legend/cell_1.png" /> cell '
            });
var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);
var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffered'
            });
var format_buildings_3 = new ol.format.GeoJSON();
var features_buildings_3 = format_buildings_3.readFeatures(json_buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_3.addFeatures(features_buildings_3);
var lyr_buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_3, 
                style: style_buildings_3,
                popuplayertitle: "buildings",
                interactive: true,
                title: '<img src="styles/legend/buildings_3.png" /> buildings'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_cell_1.setVisible(true);lyr_Buffered_2.setVisible(true);lyr_buildings_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_cell_1,lyr_Buffered_2,lyr_buildings_3];
lyr_cell_1.set('fieldAliases', {'id': 'id', });
lyr_Buffered_2.set('fieldAliases', {'id': 'id', });
lyr_buildings_3.set('fieldAliases', {'id': 'id', });
lyr_cell_1.set('fieldImages', {'id': '', });
lyr_Buffered_2.set('fieldImages', {'id': '', });
lyr_buildings_3.set('fieldImages', {'id': 'TextEdit', });
lyr_cell_1.set('fieldLabels', {'id': 'no label', });
lyr_Buffered_2.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_buildings_3.set('fieldLabels', {'id': 'no label', });
lyr_buildings_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});