var wms_layers = [];

var format_borgate_0 = new ol.format.GeoJSON();
var features_borgate_0 = format_borgate_0.readFeatures(json_borgate_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_borgate_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_borgate_0.addFeatures(features_borgate_0);
var lyr_borgate_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_borgate_0, 
                style: style_borgate_0,
                interactive: true,
                title: '<img src="styles/legend/borgate_0.png" /> borgate'
            });
var format_fermata_bus_1 = new ol.format.GeoJSON();
var features_fermata_bus_1 = format_fermata_bus_1.readFeatures(json_fermata_bus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fermata_bus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fermata_bus_1.addFeatures(features_fermata_bus_1);
var lyr_fermata_bus_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fermata_bus_1, 
                style: style_fermata_bus_1,
                interactive: true,
                title: '<img src="styles/legend/fermata_bus_1.png" /> fermata_bus'
            });
var format_percorso_facile_2 = new ol.format.GeoJSON();
var features_percorso_facile_2 = format_percorso_facile_2.readFeatures(json_percorso_facile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_percorso_facile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_percorso_facile_2.addFeatures(features_percorso_facile_2);
var lyr_percorso_facile_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_percorso_facile_2, 
                style: style_percorso_facile_2,
                interactive: true,
                title: '<img src="styles/legend/percorso_facile_2.png" /> percorso_facile'
            });

lyr_borgate_0.setVisible(true);lyr_fermata_bus_1.setVisible(true);lyr_percorso_facile_2.setVisible(true);
var layersList = [lyr_borgate_0,lyr_fermata_bus_1,lyr_percorso_facile_2];
lyr_borgate_0.set('fieldAliases', {'Nome': 'Nome', 'S. pubbl.': 'S. pubbl.', });
lyr_fermata_bus_1.set('fieldAliases', {'NUM': 'NUM', 'DESCRIZION': 'DESCRIZION', });
lyr_percorso_facile_2.set('fieldAliases', {'Nome': 'Nome', 'Beni': 'Beni', 'Classe': 'Classe', 'Cl.se IGM2': 'Cl.se IGM2', 'Tracciato': 'Tracciato', 'Pend_max': 'Pend_max', 'Carrabilit': 'Carrabilit', 'Sosta': 'Sosta', 'Riparo': 'Riparo', 'Carat_terr': 'Carat_terr', 'Sep_strada': 'Sep_strada', 'Illuminaz': 'Illuminaz', 'Visibilita': 'Visibilita', 'Lunghez_km': 'Lunghez_km', 'Incroci': 'Incroci', 'Sorgenti': 'Sorgenti', 'Tempo h': 'Tempo h', 'Quota_in': 'Quota_in', 'Quota_fine': 'Quota_fine', 'Quota_min': 'Quota_min', 'Quota_max': 'Quota_max', 'disl_salit': 'disl_salit', 'disl_disc': 'disl_disc', });
lyr_borgate_0.set('fieldImages', {'Nome': '', 'S. pubbl.': '', });
lyr_fermata_bus_1.set('fieldImages', {'NUM': '', 'DESCRIZION': '', });
lyr_percorso_facile_2.set('fieldImages', {'Nome': '', 'Beni': '', 'Classe': '', 'Cl.se IGM2': '', 'Tracciato': '', 'Pend_max': '', 'Carrabilit': '', 'Sosta': '', 'Riparo': '', 'Carat_terr': '', 'Sep_strada': '', 'Illuminaz': '', 'Visibilita': '', 'Lunghez_km': '', 'Incroci': '', 'Sorgenti': '', 'Tempo h': '', 'Quota_in': '', 'Quota_fine': '', 'Quota_min': '', 'Quota_max': '', 'disl_salit': '', 'disl_disc': '', });
lyr_borgate_0.set('fieldLabels', {'Nome': 'no label', 'S. pubbl.': 'no label', });
lyr_fermata_bus_1.set('fieldLabels', {'NUM': 'no label', 'DESCRIZION': 'no label', });
lyr_percorso_facile_2.set('fieldLabels', {'Nome': 'no label', 'Beni': 'no label', 'Classe': 'no label', 'Cl.se IGM2': 'no label', 'Tracciato': 'no label', 'Pend_max': 'no label', 'Carrabilit': 'no label', 'Sosta': 'no label', 'Riparo': 'no label', 'Carat_terr': 'no label', 'Sep_strada': 'no label', 'Illuminaz': 'no label', 'Visibilita': 'no label', 'Lunghez_km': 'no label', 'Incroci': 'no label', 'Sorgenti': 'no label', 'Tempo h': 'no label', 'Quota_in': 'no label', 'Quota_fine': 'no label', 'Quota_min': 'no label', 'Quota_max': 'no label', 'disl_salit': 'no label', 'disl_disc': 'no label', });
lyr_percorso_facile_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});