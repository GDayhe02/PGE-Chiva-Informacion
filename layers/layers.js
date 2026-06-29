ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25830").setExtent([666874.624906, 4358549.752689, 730632.447583, 4391773.329334]);
var wms_layers = [];

// Basemaps
var lyr_GoogleSatellite_0 = new ol.layer.Tile({
    'title': 'Google Satellite',
    'opacity': 0.600000,
    source: new ol.source.XYZ({
        attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});

var lyr_Catastro_1 = new ol.layer.Tile({
    'title': 'Catastro',
    'opacity': 1.000000,
    source: new ol.source.TileWMS({
        url: "https://ovc.catastro.meh.es/cartografia/wms/servidorwms.aspx",
        attributions: ' ',
        params: {
            "LAYERS": "Catastro",
            "TILED": "true",
            "VERSION": "1.1.1"
        }
    })
});

var lyr_OpenStreetMap_2 = new ol.layer.Tile({
    'title': 'OpenStreetMap',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

var format_EstadoActual_Clasificacion_0 = new ol.format.GeoJSON();
var features_EstadoActual_Clasificacion_0 = format_EstadoActual_Clasificacion_0.readFeatures(json_EstadoActual_Clasificacion_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_EstadoActual_Clasificacion_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadoActual_Clasificacion_0.addFeatures(features_EstadoActual_Clasificacion_0);
var lyr_EstadoActual_Clasificacion_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstadoActual_Clasificacion_0, 
                style: style_EstadoActual_Clasificacion_0,
                popuplayertitle: 'Estado Actual_Clasificacion',
                interactive: true,
    title: 'Estado Actual_Clasificacion<br />\
    <img src="styles/legend/EstadoActual_Clasificacion_0_0.png" /> 1<br />\
    <img src="styles/legend/EstadoActual_Clasificacion_0_1.png" /> SNU-C<br />\
    <img src="styles/legend/EstadoActual_Clasificacion_0_2.png" /> SNU-P<br />\
    <img src="styles/legend/EstadoActual_Clasificacion_0_3.png" /> SU<br />\
    <img src="styles/legend/EstadoActual_Clasificacion_0_4.png" /> SUZ<br />\
    <img src="styles/legend/EstadoActual_Clasificacion_0_5.png" /> <br />' });
var format_PlaneamVigente_GradoConsolidacion_1 = new ol.format.GeoJSON();
var features_PlaneamVigente_GradoConsolidacion_1 = format_PlaneamVigente_GradoConsolidacion_1.readFeatures(json_PlaneamVigente_GradoConsolidacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_PlaneamVigente_GradoConsolidacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlaneamVigente_GradoConsolidacion_1.addFeatures(features_PlaneamVigente_GradoConsolidacion_1);
var lyr_PlaneamVigente_GradoConsolidacion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlaneamVigente_GradoConsolidacion_1, 
                style: style_PlaneamVigente_GradoConsolidacion_1,
                popuplayertitle: 'PlaneamVigente_GradoConsolidacion',
                interactive: true,
    title: 'PlaneamVigente_GradoConsolidacion<br />\
    <img src="styles/legend/PlaneamVigente_GradoConsolidacion_1_0.png" /> APROBADO CONSOLIDADO<br />\
    <img src="styles/legend/PlaneamVigente_GradoConsolidacion_1_1.png" /> APROBADO NO CONSOLIDADO<br />\
    <img src="styles/legend/PlaneamVigente_GradoConsolidacion_1_2.png" /> NO APROBADO CONSOLIDADO<br />\
    <img src="styles/legend/PlaneamVigente_GradoConsolidacion_1_3.png" /> NO APROBADO NO CONSOLIDADO<br />\
    <img src="styles/legend/PlaneamVigente_GradoConsolidacion_1_4.png" /> NUCLEO URB IRREGULAR<br />\
    <img src="styles/legend/PlaneamVigente_GradoConsolidacion_1_5.png" /> <br />' });
var format_fore_montes_gestionados_descarga0_2 = new ol.format.GeoJSON();
var features_fore_montes_gestionados_descarga0_2 = format_fore_montes_gestionados_descarga0_2.readFeatures(json_fore_montes_gestionados_descarga0_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_fore_montes_gestionados_descarga0_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fore_montes_gestionados_descarga0_2.addFeatures(features_fore_montes_gestionados_descarga0_2);
var lyr_fore_montes_gestionados_descarga0_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fore_montes_gestionados_descarga0_2, 
                style: style_fore_montes_gestionados_descarga0_2,
                popuplayertitle: 'fore_montes_gestionados_descarga0',
                interactive: true,
                title: '<img src="styles/legend/fore_montes_gestionados_descarga0_2.png" /> fore_montes_gestionados_descarga0'
            });
var format_Habitatsprotegidos_3 = new ol.format.GeoJSON();
var features_Habitatsprotegidos_3 = format_Habitatsprotegidos_3.readFeatures(json_Habitatsprotegidos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Habitatsprotegidos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Habitatsprotegidos_3.addFeatures(features_Habitatsprotegidos_3);
var lyr_Habitatsprotegidos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Habitatsprotegidos_3, 
                style: style_Habitatsprotegidos_3,
                popuplayertitle: 'Habitats protegidos',
                interactive: true,
                title: '<img src="styles/legend/Habitatsprotegidos_3.png" /> Habitats protegidos'
            });
var format_Microreservas_4 = new ol.format.GeoJSON();
var features_Microreservas_4 = format_Microreservas_4.readFeatures(json_Microreservas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Microreservas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Microreservas_4.addFeatures(features_Microreservas_4);
var lyr_Microreservas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Microreservas_4, 
                style: style_Microreservas_4,
                popuplayertitle: 'Microreservas',
                interactive: true,
                title: '<img src="styles/legend/Microreservas_4.png" /> Microreservas'
            });
var format_MontesCatalogados_5 = new ol.format.GeoJSON();
var features_MontesCatalogados_5 = format_MontesCatalogados_5.readFeatures(json_MontesCatalogados_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_MontesCatalogados_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontesCatalogados_5.addFeatures(features_MontesCatalogados_5);
var lyr_MontesCatalogados_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontesCatalogados_5, 
                style: style_MontesCatalogados_5,
                popuplayertitle: 'Montes Catalogados',
                interactive: true,
                title: '<img src="styles/legend/MontesCatalogados_5.png" /> Montes Catalogados'
            });
var format_ParajesMunicipales_6 = new ol.format.GeoJSON();
var features_ParajesMunicipales_6 = format_ParajesMunicipales_6.readFeatures(json_ParajesMunicipales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ParajesMunicipales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParajesMunicipales_6.addFeatures(features_ParajesMunicipales_6);
var lyr_ParajesMunicipales_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParajesMunicipales_6, 
                style: style_ParajesMunicipales_6,
                popuplayertitle: 'Parajes Municipales',
                interactive: true,
                title: '<img src="styles/legend/ParajesMunicipales_6.png" /> Parajes Municipales'
            });
var format_TerrenoForestal_7 = new ol.format.GeoJSON();
var features_TerrenoForestal_7 = format_TerrenoForestal_7.readFeatures(json_TerrenoForestal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_TerrenoForestal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrenoForestal_7.addFeatures(features_TerrenoForestal_7);
var lyr_TerrenoForestal_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrenoForestal_7, 
                style: style_TerrenoForestal_7,
                popuplayertitle: 'TerrenoForestal',
                interactive: true,
                title: '<img src="styles/legend/TerrenoForestal_7.png" /> TerrenoForestal'
            });
var format_PRRPaisajesRelevanciaRegional_8 = new ol.format.GeoJSON();
var features_PRRPaisajesRelevanciaRegional_8 = format_PRRPaisajesRelevanciaRegional_8.readFeatures(json_PRRPaisajesRelevanciaRegional_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_PRRPaisajesRelevanciaRegional_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRRPaisajesRelevanciaRegional_8.addFeatures(features_PRRPaisajesRelevanciaRegional_8);
var lyr_PRRPaisajesRelevanciaRegional_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRRPaisajesRelevanciaRegional_8, 
                style: style_PRRPaisajesRelevanciaRegional_8,
                popuplayertitle: 'PRR PaisajesRelevanciaRegional',
                interactive: true,
                title: '<img src="styles/legend/PRRPaisajesRelevanciaRegional_8.png" /> PRR PaisajesRelevanciaRegional'
            });
var lyr_SNCZIzonasinundacion_9;
if (typeof json_SNCZIzonasinundacion_9 !== 'undefined') {
    var format_SNCZIzonasinundacion_9 = new ol.format.GeoJSON();
    var features_SNCZIzonasinundacion_9 = format_SNCZIzonasinundacion_9.readFeatures(json_SNCZIzonasinundacion_9, 
                {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
    var jsonSource_SNCZIzonasinundacion_9 = new ol.source.Vector({
        attributions: ' ',
    });
    jsonSource_SNCZIzonasinundacion_9.addFeatures(features_SNCZIzonasinundacion_9);
    lyr_SNCZIzonasinundacion_9 = new ol.layer.Vector({
                    declutter: false,
                    source:jsonSource_SNCZIzonasinundacion_9, 
                    style: style_SNCZIzonasinundacion_9,
                    popuplayertitle: 'SNCZI zonas inundacion',
                    interactive: true,
        title: 'SNCZI zonas inundacion<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_0.png" /> Q Periodo de retorno T10<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_1.png" /> Q Periodo de retorno T100<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_2.png" /> Q Periodo de retorno T500<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_3.png" /> Z.I. FRECUENTE (50 AÑOS)<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_4.png" /> Z.I. PROBABILIDAD ALTA (10 AÑOS)<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_5.png" /> <br />' });
} else {
    lyr_SNCZIzonasinundacion_9 = new ol.layer.Vector({
                    declutter: false,
                    source:new ol.source.Vector(),
                    style: style_SNCZIzonasinundacion_9,
                    popuplayertitle: 'SNCZI zonas inundacion',
                    interactive: false,
                    visible: false,
        title: 'SNCZI zonas inundacion<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_0.png" /> Q Periodo de retorno T10<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_1.png" /> Q Periodo de retorno T100<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_2.png" /> Q Periodo de retorno T500<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_3.png" /> Z.I. FRECUENTE (50 AÑOS)<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_4.png" /> Z.I. PROBABILIDAD ALTA (10 AÑOS)<br />\
        <img src="styles/legend/SNCZIzonasinundacion_9_5.png" /> <br />' });
}
var format_PatricovaenChiva_10 = new ol.format.GeoJSON();
var features_PatricovaenChiva_10 = format_PatricovaenChiva_10.readFeatures(json_PatricovaenChiva_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_PatricovaenChiva_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PatricovaenChiva_10.addFeatures(features_PatricovaenChiva_10);
var lyr_PatricovaenChiva_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PatricovaenChiva_10, 
                style: style_PatricovaenChiva_10,
                popuplayertitle: 'Patricova en Chiva',
                interactive: true,
    title: 'Patricova en Chiva<br />\
    <img src="styles/legend/PatricovaenChiva_10_0.png" /> Peligrosidad 1. Frecuencia alta (25 aÃ±os) y calado Alto (>0.8 m)<br />\
    <img src="styles/legend/PatricovaenChiva_10_1.png" /> Peligrosidad 1. Frecuencia alta (25 años) y calado Alto (>0.8 m)<br />\
    <img src="styles/legend/PatricovaenChiva_10_2.png" /> Peligrosidad 3. Frecuencia alta (25 aÃ±os) y calado bajo (<0.8 m)<br />\
    <img src="styles/legend/PatricovaenChiva_10_3.png" /> Peligrosidad 4. Frecuencia media (100 aÃ±os) y calado bajo (<0.8 m)<br />\
    <img src="styles/legend/PatricovaenChiva_10_4.png" /> Peligrosidad 5. Frecuencia baja (500 aÃ±os) y calado alto (>0.8 m)<br />\
    <img src="styles/legend/PatricovaenChiva_10_5.png" /> Peligrosidad 6. Frecuencia baja (500 aÃ±os) y calado bajo (<0.8 m)<br />\
    <img src="styles/legend/PatricovaenChiva_10_6.png" /> Peligrosidad GeomorfolÃ³gica: Abanico aluvial<br />\
    <img src="styles/legend/PatricovaenChiva_10_7.png" /> Peligrosidad GeomorfolÃ³gica: Abanicos torrenciales<br />\
    <img src="styles/legend/PatricovaenChiva_10_8.png" /> Peligrosidad GeomorfolÃ³gica: Cauces<br />\
    <img src="styles/legend/PatricovaenChiva_10_9.png" /> Peligrosidad GeomorfolÃ³gica: Derrames<br />\
    <img src="styles/legend/PatricovaenChiva_10_10.png" /> Peligrosidad GeomorfolÃ³gica: Llanura aluvial<br />\
    <img src="styles/legend/PatricovaenChiva_10_11.png" /> Peligrosidad GeomorfolÃ³gica: Vaguadas y barrancos de fondo plano<br />\
    <img src="styles/legend/PatricovaenChiva_10_12.png" /> <br />' });
var format_DPHDeslindado2022_11 = new ol.format.GeoJSON();
var features_DPHDeslindado2022_11 = format_DPHDeslindado2022_11.readFeatures(json_DPHDeslindado2022_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_DPHDeslindado2022_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPHDeslindado2022_11.addFeatures(features_DPHDeslindado2022_11);
var lyr_DPHDeslindado2022_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPHDeslindado2022_11, 
                style: style_DPHDeslindado2022_11,
                popuplayertitle: 'DPH Deslindado2022',
                interactive: true,
    title: 'DPH Deslindado2022<br />\
    <img src="styles/legend/DPHDeslindado2022_11_0.png" /> DPH Deslindado<br />\
    <img src="styles/legend/DPHDeslindado2022_11_1.png" /> Zona de Policía<br />\
    <img src="styles/legend/DPHDeslindado2022_11_2.png" /> Zona de Servidumbre<br />\
    <img src="styles/legend/DPHDeslindado2022_11_3.png" /> <br />' });
var format_CorredorTerritorialFluvial_12 = new ol.format.GeoJSON();
var features_CorredorTerritorialFluvial_12 = format_CorredorTerritorialFluvial_12.readFeatures(json_CorredorTerritorialFluvial_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CorredorTerritorialFluvial_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorTerritorialFluvial_12.addFeatures(features_CorredorTerritorialFluvial_12);
var lyr_CorredorTerritorialFluvial_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorTerritorialFluvial_12, 
                style: style_CorredorTerritorialFluvial_12,
                popuplayertitle: 'CorredorTerritorialFluvial',
                interactive: true,
                title: '<img src="styles/legend/CorredorTerritorialFluvial_12.png" /> CorredorTerritorialFluvial'
            });
var format_CaucesCartografiados_13 = new ol.format.GeoJSON();
var features_CaucesCartografiados_13 = format_CaucesCartografiados_13.readFeatures(json_CaucesCartografiados_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CaucesCartografiados_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaucesCartografiados_13.addFeatures(features_CaucesCartografiados_13);
var lyr_CaucesCartografiados_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaucesCartografiados_13, 
                style: style_CaucesCartografiados_13,
                popuplayertitle: 'CaucesCartografiados',
                interactive: true,
    title: 'CaucesCartografiados<br />\
    <img src="styles/legend/CaucesCartografiados_13_0.png" /> DPH Cartográfico<br />\
    <img src="styles/legend/CaucesCartografiados_13_1.png" /> DPH CARTOGRÁFICO<br />\
    <img src="styles/legend/CaucesCartografiados_13_2.png" /> Tramo soterrado<br />\
    <img src="styles/legend/CaucesCartografiados_13_3.png" /> Zona de Policía<br />\
    <img src="styles/legend/CaucesCartografiados_13_4.png" /> ZONA DE POLICÍA<br />\
    <img src="styles/legend/CaucesCartografiados_13_5.png" /> Zona de Servidumbre<br />\
    <img src="styles/legend/CaucesCartografiados_13_6.png" /> ZONA DE SERVIDUMBRE<br />\
    <img src="styles/legend/CaucesCartografiados_13_7.png" /> <br />' });
var format_Ferrocarriles_14 = new ol.format.GeoJSON();
var features_Ferrocarriles_14 = format_Ferrocarriles_14.readFeatures(json_Ferrocarriles_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Ferrocarriles_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferrocarriles_14.addFeatures(features_Ferrocarriles_14);
var lyr_Ferrocarriles_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferrocarriles_14, 
                style: style_Ferrocarriles_14,
                popuplayertitle: 'Ferrocarriles',
                interactive: true,
                title: '<img src="styles/legend/Ferrocarriles_14.png" /> Ferrocarriles'
            });
var format_AfeccionesConselleria_15 = new ol.format.GeoJSON();
var features_AfeccionesConselleria_15 = format_AfeccionesConselleria_15.readFeatures(json_AfeccionesConselleria_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AfeccionesConselleria_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AfeccionesConselleria_15.addFeatures(features_AfeccionesConselleria_15);
var lyr_AfeccionesConselleria_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AfeccionesConselleria_15, 
                style: style_AfeccionesConselleria_15,
                popuplayertitle: 'Afecciones Conselleria',
                interactive: true,
                title: '<img src="styles/legend/AfeccionesConselleria_15.png" /> Afecciones Conselleria'
            });
var format_AfeccionesDiputacion_16 = new ol.format.GeoJSON();
var features_AfeccionesDiputacion_16 = format_AfeccionesDiputacion_16.readFeatures(json_AfeccionesDiputacion_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AfeccionesDiputacion_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AfeccionesDiputacion_16.addFeatures(features_AfeccionesDiputacion_16);
var lyr_AfeccionesDiputacion_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AfeccionesDiputacion_16, 
                style: style_AfeccionesDiputacion_16,
                popuplayertitle: 'Afecciones Diputacion',
                interactive: true,
                title: '<img src="styles/legend/AfeccionesDiputacion_16.png" /> Afecciones Diputacion'
            });
var format_Afeccionesferrocarriles_17 = new ol.format.GeoJSON();
var features_Afeccionesferrocarriles_17 = format_Afeccionesferrocarriles_17.readFeatures(json_Afeccionesferrocarriles_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Afeccionesferrocarriles_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afeccionesferrocarriles_17.addFeatures(features_Afeccionesferrocarriles_17);
var lyr_Afeccionesferrocarriles_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Afeccionesferrocarriles_17, 
                style: style_Afeccionesferrocarriles_17,
                popuplayertitle: 'Afecciones ferrocarriles',
                interactive: true,
                title: '<img src="styles/legend/Afeccionesferrocarriles_17.png" /> Afecciones ferrocarriles'
            });
var format_AfeccionesMinisterio_18 = new ol.format.GeoJSON();
var features_AfeccionesMinisterio_18 = format_AfeccionesMinisterio_18.readFeatures(json_AfeccionesMinisterio_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AfeccionesMinisterio_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AfeccionesMinisterio_18.addFeatures(features_AfeccionesMinisterio_18);
var lyr_AfeccionesMinisterio_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AfeccionesMinisterio_18, 
                style: style_AfeccionesMinisterio_18,
                popuplayertitle: 'Afecciones Ministerio',
                interactive: true,
                title: '<img src="styles/legend/AfeccionesMinisterio_18.png" /> Afecciones Ministerio'
            });
var format_AreasPrioritAves_19 = new ol.format.GeoJSON();
var features_AreasPrioritAves_19 = format_AreasPrioritAves_19.readFeatures(json_AreasPrioritAves_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AreasPrioritAves_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasPrioritAves_19.addFeatures(features_AreasPrioritAves_19);
var lyr_AreasPrioritAves_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasPrioritAves_19, 
                style: style_AreasPrioritAves_19,
                popuplayertitle: 'AreasPrioritAves',
                interactive: true,
                title: '<img src="styles/legend/AreasPrioritAves_19.png" /> AreasPrioritAves'
            });
var format_RedViariaexistente_20 = new ol.format.GeoJSON();
var features_RedViariaexistente_20 = format_RedViariaexistente_20.readFeatures(json_RedViariaexistente_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_RedViariaexistente_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedViariaexistente_20.addFeatures(features_RedViariaexistente_20);
var lyr_RedViariaexistente_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedViariaexistente_20, 
                style: style_RedViariaexistente_20,
                popuplayertitle: 'Red Viaria existente',
                interactive: true,
    title: 'Red Viaria existente<br />\
    <img src="styles/legend/RedViariaexistente_20_0.png" /> Ministeri<br />\
    <img src="styles/legend/RedViariaexistente_20_1.png" /> Conselleria<br />\
    <img src="styles/legend/RedViariaexistente_20_2.png" /> Diputació<br />\
    <img src="styles/legend/RedViariaexistente_20_3.png" /> Ajuntament<br />\
    <img src="styles/legend/RedViariaexistente_20_4.png" /> Altres<br />\
    <img src="styles/legend/RedViariaexistente_20_5.png" /> Sense definir<br />\
    <img src="styles/legend/RedViariaexistente_20_6.png" /> <br />' });
var format_EquipEnergetico_21 = new ol.format.GeoJSON();
var features_EquipEnergetico_21 = format_EquipEnergetico_21.readFeatures(json_EquipEnergetico_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_EquipEnergetico_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipEnergetico_21.addFeatures(features_EquipEnergetico_21);
var lyr_EquipEnergetico_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipEnergetico_21, 
                style: style_EquipEnergetico_21,
                popuplayertitle: 'Equip Energetico',
                interactive: true,
    title: 'Equip Energetico<br />\
    <img src="styles/legend/EquipEnergetico_21_0.png" /> 400-A-400<br />\
    <img src="styles/legend/EquipEnergetico_21_1.png" /> 132-A-132<br />\
    <img src="styles/legend/EquipEnergetico_21_2.png" /> 066-A-066<br />\
    <img src="styles/legend/EquipEnergetico_21_3.png" /> 66-A-66<br />\
    <img src="styles/legend/EquipEnergetico_21_4.png" /> GASEODUCTO<br />\
    <img src="styles/legend/EquipEnergetico_21_5.png" /> <br />' });
var format_ViasPecuarias_22 = new ol.format.GeoJSON();
var features_ViasPecuarias_22 = format_ViasPecuarias_22.readFeatures(json_ViasPecuarias_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ViasPecuarias_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViasPecuarias_22.addFeatures(features_ViasPecuarias_22);
var lyr_ViasPecuarias_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViasPecuarias_22, 
                style: style_ViasPecuarias_22,
                popuplayertitle: 'ViasPecuarias',
                interactive: true,
                title: '<img src="styles/legend/ViasPecuarias_22.png" /> ViasPecuarias'
            });
var format_ViasPecuarias_elementos_23 = new ol.format.GeoJSON();
var features_ViasPecuarias_elementos_23 = format_ViasPecuarias_elementos_23.readFeatures(json_ViasPecuarias_elementos_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ViasPecuarias_elementos_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViasPecuarias_elementos_23.addFeatures(features_ViasPecuarias_elementos_23);
var lyr_ViasPecuarias_elementos_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViasPecuarias_elementos_23, 
                style: style_ViasPecuarias_elementos_23,
                popuplayertitle: 'ViasPecuarias_elementos',
                interactive: true,
                title: '<img src="styles/legend/ViasPecuarias_elementos_23.png" /> ViasPecuarias_elementos'
            });
var format_Arbolesmonumentales_24 = new ol.format.GeoJSON();
var features_Arbolesmonumentales_24 = format_Arbolesmonumentales_24.readFeatures(json_Arbolesmonumentales_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Arbolesmonumentales_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbolesmonumentales_24.addFeatures(features_Arbolesmonumentales_24);
var lyr_Arbolesmonumentales_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arbolesmonumentales_24, 
                style: style_Arbolesmonumentales_24,
                popuplayertitle: 'Arboles monumentales',
                interactive: true,
                title: '<img src="styles/legend/Arbolesmonumentales_24.png" /> Arboles monumentales'
            });
var format_LimiteTMChiva_25 = new ol.format.GeoJSON();
var features_LimiteTMChiva_25 = format_LimiteTMChiva_25.readFeatures(json_LimiteTMChiva_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_LimiteTMChiva_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteTMChiva_25.addFeatures(features_LimiteTMChiva_25);
var lyr_LimiteTMChiva_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteTMChiva_25, 
                style: style_LimiteTMChiva_25,
                popuplayertitle: 'Limite TM Chiva',
                interactive: true,
                title: '<img src="styles/legend/LimiteTMChiva_25.png" /> Limite TM Chiva'
            });

lyr_EstadoActual_Clasificacion_0.setVisible(true);lyr_EstadoActual_Clasificacion_0.setOpacity(0.35);lyr_PlaneamVigente_GradoConsolidacion_1.setVisible(true);lyr_PlaneamVigente_GradoConsolidacion_1.setOpacity(0.35);lyr_fore_montes_gestionados_descarga0_2.setVisible(false);lyr_fore_montes_gestionados_descarga0_2.setOpacity(0.35);lyr_Habitatsprotegidos_3.setVisible(false);lyr_Habitatsprotegidos_3.setOpacity(0.35);lyr_Microreservas_4.setVisible(false);lyr_Microreservas_4.setOpacity(0.35);lyr_MontesCatalogados_5.setVisible(false);lyr_MontesCatalogados_5.setOpacity(0.35);lyr_ParajesMunicipales_6.setVisible(false);lyr_ParajesMunicipales_6.setOpacity(0.35);lyr_TerrenoForestal_7.setVisible(false);lyr_TerrenoForestal_7.setOpacity(0.35);lyr_PRRPaisajesRelevanciaRegional_8.setVisible(false);lyr_PRRPaisajesRelevanciaRegional_8.setOpacity(0.35);lyr_SNCZIzonasinundacion_9.setVisible(false);lyr_SNCZIzonasinundacion_9.setOpacity(0.35);lyr_PatricovaenChiva_10.setVisible(false);lyr_PatricovaenChiva_10.setOpacity(0.35);lyr_DPHDeslindado2022_11.setVisible(false);lyr_DPHDeslindado2022_11.setOpacity(0.35);lyr_CorredorTerritorialFluvial_12.setVisible(false);lyr_CorredorTerritorialFluvial_12.setOpacity(0.35);lyr_CaucesCartografiados_13.setVisible(false);lyr_CaucesCartografiados_13.setOpacity(0.35);lyr_Ferrocarriles_14.setVisible(false);lyr_Ferrocarriles_14.setOpacity(0.35);lyr_AfeccionesConselleria_15.setVisible(false);lyr_AfeccionesConselleria_15.setOpacity(0.35);lyr_AfeccionesDiputacion_16.setVisible(false);lyr_AfeccionesDiputacion_16.setOpacity(0.35);lyr_Afeccionesferrocarriles_17.setVisible(false);lyr_Afeccionesferrocarriles_17.setOpacity(0.35);lyr_AfeccionesMinisterio_18.setVisible(false);lyr_AfeccionesMinisterio_18.setOpacity(0.35);lyr_AreasPrioritAves_19.setVisible(false);lyr_AreasPrioritAves_19.setOpacity(0.35);lyr_RedViariaexistente_20.setVisible(false);lyr_RedViariaexistente_20.setOpacity(0.35);lyr_EquipEnergetico_21.setVisible(false);lyr_EquipEnergetico_21.setOpacity(0.35);lyr_ViasPecuarias_22.setVisible(false);lyr_ViasPecuarias_22.setOpacity(0.35);lyr_ViasPecuarias_elementos_23.setVisible(false);lyr_ViasPecuarias_elementos_23.setOpacity(0.35);lyr_Arbolesmonumentales_24.setVisible(false);lyr_Arbolesmonumentales_24.setOpacity(0.35);lyr_LimiteTMChiva_25.setVisible(false);lyr_LimiteTMChiva_25.setOpacity(0.35);
lyr_GoogleSatellite_0.setVisible(false);
lyr_Catastro_1.setVisible(false);
lyr_OpenStreetMap_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Catastro_1,lyr_OpenStreetMap_2,lyr_EstadoActual_Clasificacion_0,lyr_PlaneamVigente_GradoConsolidacion_1,lyr_fore_montes_gestionados_descarga0_2,lyr_Habitatsprotegidos_3,lyr_Microreservas_4,lyr_MontesCatalogados_5,lyr_ParajesMunicipales_6,lyr_TerrenoForestal_7,lyr_PRRPaisajesRelevanciaRegional_8,lyr_PatricovaenChiva_10,lyr_DPHDeslindado2022_11,lyr_CorredorTerritorialFluvial_12,lyr_CaucesCartografiados_13,lyr_Ferrocarriles_14,lyr_AfeccionesConselleria_15,lyr_AfeccionesDiputacion_16,lyr_Afeccionesferrocarriles_17,lyr_AfeccionesMinisterio_18,lyr_AreasPrioritAves_19,lyr_RedViariaexistente_20,lyr_EquipEnergetico_21,lyr_ViasPecuarias_22,lyr_ViasPecuarias_elementos_23,lyr_Arbolesmonumentales_24,lyr_LimiteTMChiva_25];
lyr_EstadoActual_Clasificacion_0.set('fieldAliases', {'cpm': 'cpm', 'municipio': 'municipio', 'expediente': 'expediente', 'descripcio': 'descripcio', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'contenido': 'contenido', 'text_': 'text_', });
lyr_PlaneamVigente_GradoConsolidacion_1.set('fieldAliases', {'ID': 'ID', 'REGISTRO': 'REGISTRO', 'AUTORES': 'AUTORES', 'APROBACIÓ': 'APROBACIÓ', 'ESTADO': 'ESTADO', 'DESC': 'DESC', 'AREA': 'AREA', });
lyr_fore_montes_gestionados_descarga0_2.set('fieldAliases', {'provincia': 'provincia', 'df': 'df', 'municipio': 'municipio', 'num_up': 'num_up', 'cup': 'cup', 'texto': 'texto', 'etiquetas': 'etiquetas', 'denominaci': 'denominaci', 'tipo': 'tipo', 'area_del_c': 'area_del_c', 'deslinde': 'deslinde', 'denomina_1': 'denomina_1', 'amojonamie': 'amojonamie', 'superficie': 'superficie', 'pertenenci': 'pertenenci', 'pertenen_1': 'pertenen_1', 'perimetro': 'perimetro', 'hectareas': 'hectareas', 'suma_super': 'suma_super', 'comarca_ca': 'comarca_ca', 'comarca_va': 'comarca_va', 'escaneado_': 'escaneado_', 'num_consul': 'num_consul', 'revision_c': 'revision_c', 'revision_1': 'revision_1', 'etiqueta_k': 'etiqueta_k', 'expt_sstt': 'expt_sstt', 'resol_dg': 'resol_dg', 'carpeta': 'carpeta', 'carpetacma': 'carpetacma', 'informe_re': 'informe_re', 'informe__1': 'informe__1', 'proyecto_o': 'proyecto_o', 'resol_orde': 'resol_orde', 'resol_or_1': 'resol_or_1', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_Habitatsprotegidos_3.set('fieldAliases', {'hab_lay': 'hab_lay', 'prov_inb_h': 'prov_inb_h', 'nuts_inb_h': 'nuts_inb_h', 'prov_n_inb': 'prov_n_inb', 'ccaa_inb_h': 'ccaa_inb_h', 'ccaa_n_inb': 'ccaa_n_inb', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_Microreservas_4.set('fieldAliases', {'nombre': 'nombre', 'hect_web': 'hect_web', 'provincia': 'provincia', 'municipio': 'municipio', 'dogv_decla': 'dogv_decla', 'titularita': 'titularita', 'perim_geo': 'perim_geo', 'area_geo': 'area_geo', 'hect_geo': 'hect_geo', 'hect_ofi': 'hect_ofi', 'leg_link': 'leg_link', 'dogv_corre': 'dogv_corre', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_MontesCatalogados_5.set('fieldAliases', {'provincia': 'provincia', 'df': 'df', 'municipio': 'municipio', 'num_up': 'num_up', 'cup': 'cup', 'texto': 'texto', 'etiquetas': 'etiquetas', 'denominaci': 'denominaci', 'tipo': 'tipo', 'area_del_c': 'area_del_c', 'deslinde': 'deslinde', 'denomina_1': 'denomina_1', 'amojonamie': 'amojonamie', 'superficie': 'superficie', 'pertenenci': 'pertenenci', 'pertenen_1': 'pertenen_1', 'perimetro': 'perimetro', 'hectareas': 'hectareas', 'suma_super': 'suma_super', 'comarca_ca': 'comarca_ca', 'comarca_va': 'comarca_va', 'escaneado_': 'escaneado_', 'num_consul': 'num_consul', 'revision_c': 'revision_c', 'revision_1': 'revision_1', 'etiqueta_k': 'etiqueta_k', 'expt_sstt': 'expt_sstt', 'resol_dg': 'resol_dg', 'carpeta': 'carpeta', 'carpetacma': 'carpetacma', 'informe_re': 'informe_re', 'informe__1': 'informe__1', 'proyecto_o': 'proyecto_o', 'resol_orde': 'resol_orde', 'resol_or_1': 'resol_or_1', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_ParajesMunicipales_6.set('fieldAliases', {'nombre': 'nombre', 'provincia': 'provincia', 'municipio': 'municipio', 'cod_ine': 'cod_ine', 'hect_web': 'hect_web', 'dogv': 'dogv', 'fecha': 'fecha', 'comentario': 'comentario', 'perim_geo': 'perim_geo', 'area_geo': 'area_geo', 'hect_geo': 'hect_geo', 'hect_ofi': 'hect_ofi', 'id_dogv': 'id_dogv', 'id_correc': 'id_correc', 'cod_cat': 'cod_cat', 'acuerdo_de': 'acuerdo_de', 'correccion': 'correccion', 'leg_link': 'leg_link', 'shape_leng': 'shape_leng', 'enlace': 'enlace', 'localid': 'localid', 'namespace': 'namespace', 'legfoudate': 'legfoudate', 'titledoc': 'titledoc', 'datedoc': 'datedoc', 'urldoc': 'urldoc', 'designatio': 'designatio', 'percentage': 'percentage', 'language': 'language', 'namestatus': 'namestatus', 'nativeness': 'nativeness', 'pronunciat': 'pronunciat', 'text': 'text', 'script': 'script', 'siteprotec': 'siteprotec', 'desigschem': 'desigschem', 'designat_1': 'designat_1', 'sourcename': 'sourcename', 'datedoc_co': 'datedoc_co', 'datedoc__1': 'datedoc__1', 'desigsch_1': 'desigsch_1', 'versionid': 'versionid', 'shape_Le_1': 'shape_Le_1', 'shape_Area': 'shape_Area', });
lyr_TerrenoForestal_7.set('fieldAliases', {'compatible': 'compatible', 'forestal': 'forestal', 'sup_ha': 'sup_ha', 'prov': 'prov', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_PRRPaisajesRelevanciaRegional_8.set('fieldAliases', {'cod_prr': 'cod_prr', 'nombre_prr': 'nombre_prr', 'prr': 'prr', 'conjuntos': 'conjuntos', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_SNCZIzonasinundacion_9.set('fieldAliases', {'ID_ZONA': 'ID_ZONA', 'ZONA': 'ZONA', 'TIPO_ZONA': 'TIPO_ZONA', 'RIO': 'RIO', 'LONG_KM': 'LONG_KM', 'HIPOTESIS': 'HIPOTESIS', 'HIDROLOGIA': 'HIDROLOGIA', 'PRECISION': 'PRECISION', 'HIDRAUL': 'HIDRAUL', 'ESTUDIO': 'ESTUDIO', 'TIPO_EST': 'TIPO_EST', 'DOCUMENTO': 'DOCUMENTO', 'FECHA_APRO': 'FECHA_APRO', 'FECHA_GEO': 'FECHA_GEO', 'ORGANISMO': 'ORGANISMO', 'CLAVE_EXPE': 'CLAVE_EXPE', 'DEMARCACIO': 'DEMARCACIO', 'ID_DEMAR': 'ID_DEMAR', 'Q_M3_S': 'Q_M3_S', 'ZI_DIRECTI': 'ZI_DIRECTI', 'CICLO': 'CICLO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PatricovaenChiva_10.set('fieldAliases', {'codigo': 'codigo', 'zona': 'zona', 'd_pelig': 'd_pelig', 'n_pelig': 'n_pelig', 'corriente': 'corriente', 'tipo': 'tipo', 'desde': 'desde', 'hasta': 'hasta', 'calado': 'calado', 'retorno': 'retorno', 'ambito': 'ambito', 'hectares': 'hectares', 'area': 'area', 'hyperlink': 'hyperlink', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_DPHDeslindado2022_11.set('fieldAliases', {'ID_ZONA': 'ID_ZONA', 'ZONA': 'ZONA', 'TIPO_ZONA': 'TIPO_ZONA', 'RIO': 'RIO', 'LONG_KM': 'LONG_KM', 'HIPOTESIS': 'HIPOTESIS', 'HIDROLOGIA': 'HIDROLOGIA', 'PRECISION': 'PRECISION', 'HIDRAUL': 'HIDRAUL', 'ESTUDIO': 'ESTUDIO', 'TIPO_EST': 'TIPO_EST', 'ESCALA_REP': 'ESCALA_REP', 'DOCUMENTO': 'DOCUMENTO', 'FECHA': 'FECHA', 'ORGANISMO': 'ORGANISMO', 'CLAVE_EXPE': 'CLAVE_EXPE', 'DEMARCACIO': 'DEMARCACIO', 'ID_DEMAR': 'ID_DEMAR', 'Q_M3_S': 'Q_M3_S', 'FECHA_RESO': 'FECHA_RESO', 'FECHA_PUBL': 'FECHA_PUBL', 'BO_PUBLICA': 'BO_PUBLICA', });
lyr_CorredorTerritorialFluvial_12.set('fieldAliases', {'tipo': 'tipo', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_CaucesCartografiados_13.set('fieldAliases', {'ID_ZONA': 'ID_ZONA', 'ZONA': 'ZONA', 'TIPO_ZONA': 'TIPO_ZONA', 'RIO': 'RIO', 'LONG_KM': 'LONG_KM', 'HIPOTESIS': 'HIPOTESIS', 'HIDROLOGIA': 'HIDROLOGIA', 'PRECISION': 'PRECISION', 'HIDRAUL': 'HIDRAUL', 'ESTUDIO': 'ESTUDIO', 'TIPO_EST': 'TIPO_EST', 'ESCALA_REP': 'ESCALA_REP', 'DOCUMENTO': 'DOCUMENTO', 'FECHA': 'FECHA', 'ORGANISMO': 'ORGANISMO', 'CLAVE_EXPE': 'CLAVE_EXPE', 'DEMARCACIO': 'DEMARCACIO', 'ID_DEMAR': 'ID_DEMAR', 'Q_M3_S': 'Q_M3_S', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Ferrocarriles_14.set('fieldAliases', {'id': 'id', });
lyr_AfeccionesConselleria_15.set('fieldAliases', {'mrb_dist': 'mrb_dist', });
lyr_AfeccionesDiputacion_16.set('fieldAliases', {'mrb_dist': 'mrb_dist', });
lyr_Afeccionesferrocarriles_17.set('fieldAliases', {'mrb_dist': 'mrb_dist', });
lyr_AfeccionesMinisterio_18.set('fieldAliases', {'mrb_dist': 'mrb_dist', });
lyr_AreasPrioritAves_19.set('fieldAliases', {'nombre': 'nombre', 'norma': 'norma', 'fecha': 'fecha', 'docv': 'docv', 'leg_link': 'leg_link', 'resolucion': 'resolucion', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_RedViariaexistente_20.set('fieldAliases', {'modificado': 'modificado', 'n_plat': 'n_plat', 'length': 'length', 'long': 'long', 'nom_ant': 'nom_ant', 'nom_act': 'nom_act', 'nom_fut': 'nom_fut', 'tit_ant': 'tit_ant', 'tit_act': 'tit_act', 'tit_fut': 'tit_fut', 'tipus_ant': 'tipus_ant', 'tipus_act': 'tipus_act', 'tipus_fut': 'tipus_fut', 'lleg_act': 'lleg_act', 'lleg_fut': 'lleg_fut', 'rotonda': 'rotonda', 'sentidos': 'sentidos', 'sec_cons': 'sec_cons', 'tunel': 'tunel', 'id_tunel': 'id_tunel', 'lleg_wms': 'lleg_wms', 'fecha_mod': 'fecha_mod', 'fecha_ent': 'fecha_ent', 'fecha_sal': 'fecha_sal', 'act': 'act', 'gran_cap': 'gran_cap', 'tipus_des': 'tipus_des', 'tit_des': 'tit_des', 'tunel_des': 'tunel_des', 'rotond_des': 'rotond_des', 'shape_Leng': 'shape_Leng', });
lyr_EquipEnergetico_21.set('fieldAliases', {'dxf_layer': 'dxf_layer', 'shape_Leng': 'shape_Leng', });
lyr_ViasPecuarias_22.set('fieldAliases', {'cod1': 'cod1', 'cod2': 'cod2', 'cod3': 'cod3', 'cod4': 'cod4', 'cod_vp': 'cod_vp', 'tipo_vp': 'tipo_vp', 'aproba_1': 'aproba_1', 'aproba_2': 'aproba_2', 'boe_1': 'boe_1', 'boe_2': 'boe_2', 'bop_1': 'bop_1', 'bop_2': 'bop_2', 'dogv_1': 'dogv_1', 'dogv_2': 'dogv_2', 'provincia': 'provincia', 'munic_1': 'munic_1', 'munic_2': 'munic_2', 'deslinde': 'deslinde', 'mojon': 'mojon', 'legal_1': 'legal_1', 'legal_2': 'legal_2', 'neces': 'neces', 'nomb_vp': 'nomb_vp', 'obser_vp': 'obser_vp', 'long_c_1': 'long_c_1', 'long_c_2': 'long_c_2', 'sup_vp_1': 'sup_vp_1', 'sup_vp_2': 'sup_vp_2', 'tipo_leyen': 'tipo_leyen', 'long_desli': 'long_desli', 'revisado': 'revisado', 'hyperlink': 'hyperlink', 'shape_Leng': 'shape_Leng', });
lyr_ViasPecuarias_elementos_23.set('fieldAliases', {'provincia': 'provincia', 'munic_el': 'munic_el', 'cod5': 'cod5', 'nomb_el': 'nomb_el', 'tipo_el': 'tipo_el', 'cod6': 'cod6', 'cod_el': 'cod_el', 'aproba_el': 'aproba_el', 'sup_el': 'sup_el', 'dogv_el': 'dogv_el', 'boe_el': 'boe_el', 'bop_el': 'bop_el', 'clasificad': 'clasificad', 'obser_el': 'obser_el', 'vp_el': 'vp_el', });
lyr_Arbolesmonumentales_24.set('fieldAliases', {'n_ipa': 'n_ipa', 'titularida': 'titularida', 'tipo': 'tipo', 'especie': 'especie', 'n_popular': 'n_popular', 'tronco': 'tronco', 'altura': 'altura', 'copa': 'copa', 'propiedad': 'propiedad', 'entorno_p': 'entorno_p', });
lyr_LimiteTMChiva_25.set('fieldAliases', {'FID': 'FID', 'Superficie': 'Superficie', 'Superf C': 'Superf C', });
lyr_EstadoActual_Clasificacion_0.set('fieldImages', {'cpm': 'TextEdit', 'municipio': 'TextEdit', 'expediente': 'TextEdit', 'descripcio': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'contenido': 'TextEdit', 'text_': 'TextEdit', });
lyr_PlaneamVigente_GradoConsolidacion_1.set('fieldImages', {'ID': 'TextEdit', 'REGISTRO': 'TextEdit', 'AUTORES': 'TextEdit', 'APROBACIÓ': 'TextEdit', 'ESTADO': 'TextEdit', 'DESC': 'TextEdit', 'AREA': 'TextEdit', });
lyr_fore_montes_gestionados_descarga0_2.set('fieldImages', {'provincia': 'TextEdit', 'df': 'TextEdit', 'municipio': 'TextEdit', 'num_up': 'TextEdit', 'cup': 'TextEdit', 'texto': 'TextEdit', 'etiquetas': 'TextEdit', 'denominaci': 'TextEdit', 'tipo': 'TextEdit', 'area_del_c': 'TextEdit', 'deslinde': 'TextEdit', 'denomina_1': 'TextEdit', 'amojonamie': 'TextEdit', 'superficie': 'TextEdit', 'pertenenci': 'TextEdit', 'pertenen_1': 'TextEdit', 'perimetro': 'TextEdit', 'hectareas': 'TextEdit', 'suma_super': 'TextEdit', 'comarca_ca': 'TextEdit', 'comarca_va': 'TextEdit', 'escaneado_': 'TextEdit', 'num_consul': 'TextEdit', 'revision_c': 'TextEdit', 'revision_1': 'TextEdit', 'etiqueta_k': 'TextEdit', 'expt_sstt': 'TextEdit', 'resol_dg': 'TextEdit', 'carpeta': 'TextEdit', 'carpetacma': 'TextEdit', 'informe_re': 'TextEdit', 'informe__1': 'TextEdit', 'proyecto_o': 'TextEdit', 'resol_orde': 'TextEdit', 'resol_or_1': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_Habitatsprotegidos_3.set('fieldImages', {'hab_lay': 'TextEdit', 'prov_inb_h': 'TextEdit', 'nuts_inb_h': 'TextEdit', 'prov_n_inb': 'TextEdit', 'ccaa_inb_h': 'TextEdit', 'ccaa_n_inb': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_Microreservas_4.set('fieldImages', {'nombre': 'TextEdit', 'hect_web': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'dogv_decla': 'TextEdit', 'titularita': 'TextEdit', 'perim_geo': 'TextEdit', 'area_geo': 'TextEdit', 'hect_geo': 'TextEdit', 'hect_ofi': 'TextEdit', 'leg_link': 'TextEdit', 'dogv_corre': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_MontesCatalogados_5.set('fieldImages', {'provincia': 'TextEdit', 'df': 'TextEdit', 'municipio': 'TextEdit', 'num_up': 'TextEdit', 'cup': 'TextEdit', 'texto': 'TextEdit', 'etiquetas': 'TextEdit', 'denominaci': 'TextEdit', 'tipo': 'TextEdit', 'area_del_c': 'TextEdit', 'deslinde': 'TextEdit', 'denomina_1': 'TextEdit', 'amojonamie': 'TextEdit', 'superficie': 'TextEdit', 'pertenenci': 'TextEdit', 'pertenen_1': 'TextEdit', 'perimetro': 'TextEdit', 'hectareas': 'TextEdit', 'suma_super': 'TextEdit', 'comarca_ca': 'TextEdit', 'comarca_va': 'TextEdit', 'escaneado_': 'TextEdit', 'num_consul': 'TextEdit', 'revision_c': 'TextEdit', 'revision_1': 'TextEdit', 'etiqueta_k': 'TextEdit', 'expt_sstt': 'TextEdit', 'resol_dg': 'TextEdit', 'carpeta': 'TextEdit', 'carpetacma': 'TextEdit', 'informe_re': 'TextEdit', 'informe__1': 'TextEdit', 'proyecto_o': 'TextEdit', 'resol_orde': 'TextEdit', 'resol_or_1': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_ParajesMunicipales_6.set('fieldImages', {'nombre': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'cod_ine': 'TextEdit', 'hect_web': 'TextEdit', 'dogv': 'TextEdit', 'fecha': 'TextEdit', 'comentario': 'TextEdit', 'perim_geo': 'TextEdit', 'area_geo': 'TextEdit', 'hect_geo': 'TextEdit', 'hect_ofi': 'TextEdit', 'id_dogv': 'TextEdit', 'id_correc': 'TextEdit', 'cod_cat': 'TextEdit', 'acuerdo_de': 'TextEdit', 'correccion': 'TextEdit', 'leg_link': 'TextEdit', 'shape_leng': 'TextEdit', 'enlace': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'legfoudate': 'TextEdit', 'titledoc': 'TextEdit', 'datedoc': 'TextEdit', 'urldoc': 'TextEdit', 'designatio': 'TextEdit', 'percentage': 'TextEdit', 'language': 'TextEdit', 'namestatus': 'TextEdit', 'nativeness': 'TextEdit', 'pronunciat': 'TextEdit', 'text': 'TextEdit', 'script': 'TextEdit', 'siteprotec': 'TextEdit', 'desigschem': 'TextEdit', 'designat_1': 'TextEdit', 'sourcename': 'TextEdit', 'datedoc_co': 'TextEdit', 'datedoc__1': 'TextEdit', 'desigsch_1': 'TextEdit', 'versionid': 'TextEdit', 'shape_Le_1': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_TerrenoForestal_7.set('fieldImages', {'compatible': 'TextEdit', 'forestal': 'TextEdit', 'sup_ha': 'TextEdit', 'prov': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_PRRPaisajesRelevanciaRegional_8.set('fieldImages', {'cod_prr': 'TextEdit', 'nombre_prr': 'TextEdit', 'prr': 'TextEdit', 'conjuntos': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_SNCZIzonasinundacion_9.set('fieldImages', {'ID_ZONA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_ZONA': 'TextEdit', 'RIO': 'TextEdit', 'LONG_KM': 'TextEdit', 'HIPOTESIS': 'TextEdit', 'HIDROLOGIA': 'TextEdit', 'PRECISION': 'TextEdit', 'HIDRAUL': 'TextEdit', 'ESTUDIO': 'TextEdit', 'TIPO_EST': 'TextEdit', 'DOCUMENTO': 'TextEdit', 'FECHA_APRO': 'DateTime', 'FECHA_GEO': 'TextEdit', 'ORGANISMO': 'TextEdit', 'CLAVE_EXPE': 'TextEdit', 'DEMARCACIO': 'TextEdit', 'ID_DEMAR': 'TextEdit', 'Q_M3_S': 'TextEdit', 'ZI_DIRECTI': 'TextEdit', 'CICLO': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PatricovaenChiva_10.set('fieldImages', {'codigo': 'TextEdit', 'zona': 'TextEdit', 'd_pelig': 'TextEdit', 'n_pelig': 'TextEdit', 'corriente': 'TextEdit', 'tipo': 'TextEdit', 'desde': 'TextEdit', 'hasta': 'TextEdit', 'calado': 'TextEdit', 'retorno': 'TextEdit', 'ambito': 'TextEdit', 'hectares': 'TextEdit', 'area': 'TextEdit', 'hyperlink': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_DPHDeslindado2022_11.set('fieldImages', {'ID_ZONA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_ZONA': 'TextEdit', 'RIO': 'TextEdit', 'LONG_KM': 'TextEdit', 'HIPOTESIS': 'TextEdit', 'HIDROLOGIA': 'TextEdit', 'PRECISION': 'TextEdit', 'HIDRAUL': 'TextEdit', 'ESTUDIO': 'TextEdit', 'TIPO_EST': 'TextEdit', 'ESCALA_REP': 'TextEdit', 'DOCUMENTO': 'TextEdit', 'FECHA': 'DateTime', 'ORGANISMO': 'TextEdit', 'CLAVE_EXPE': 'TextEdit', 'DEMARCACIO': 'TextEdit', 'ID_DEMAR': 'TextEdit', 'Q_M3_S': 'TextEdit', 'FECHA_RESO': 'DateTime', 'FECHA_PUBL': 'DateTime', 'BO_PUBLICA': 'TextEdit', });
lyr_CorredorTerritorialFluvial_12.set('fieldImages', {'tipo': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_CaucesCartografiados_13.set('fieldImages', {'ID_ZONA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_ZONA': 'TextEdit', 'RIO': 'TextEdit', 'LONG_KM': 'TextEdit', 'HIPOTESIS': 'TextEdit', 'HIDROLOGIA': 'TextEdit', 'PRECISION': 'TextEdit', 'HIDRAUL': 'TextEdit', 'ESTUDIO': 'TextEdit', 'TIPO_EST': 'TextEdit', 'ESCALA_REP': 'TextEdit', 'DOCUMENTO': 'TextEdit', 'FECHA': 'DateTime', 'ORGANISMO': 'TextEdit', 'CLAVE_EXPE': 'TextEdit', 'DEMARCACIO': 'TextEdit', 'ID_DEMAR': 'TextEdit', 'Q_M3_S': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ferrocarriles_14.set('fieldImages', {'id': 'TextEdit', });
lyr_AfeccionesConselleria_15.set('fieldImages', {'mrb_dist': 'TextEdit', });
lyr_AfeccionesDiputacion_16.set('fieldImages', {'mrb_dist': 'TextEdit', });
lyr_Afeccionesferrocarriles_17.set('fieldImages', {'mrb_dist': 'TextEdit', });
lyr_AfeccionesMinisterio_18.set('fieldImages', {'mrb_dist': 'TextEdit', });
lyr_AreasPrioritAves_19.set('fieldImages', {'nombre': 'TextEdit', 'norma': 'TextEdit', 'fecha': 'TextEdit', 'docv': 'TextEdit', 'leg_link': 'TextEdit', 'resolucion': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_RedViariaexistente_20.set('fieldImages', {'modificado': 'TextEdit', 'n_plat': 'TextEdit', 'length': 'TextEdit', 'long': 'TextEdit', 'nom_ant': 'TextEdit', 'nom_act': 'TextEdit', 'nom_fut': 'TextEdit', 'tit_ant': 'Range', 'tit_act': 'Range', 'tit_fut': 'Range', 'tipus_ant': 'TextEdit', 'tipus_act': 'TextEdit', 'tipus_fut': 'TextEdit', 'lleg_act': 'TextEdit', 'lleg_fut': 'TextEdit', 'rotonda': 'Range', 'sentidos': 'Range', 'sec_cons': 'TextEdit', 'tunel': 'Range', 'id_tunel': 'TextEdit', 'lleg_wms': 'TextEdit', 'fecha_mod': 'DateTime', 'fecha_ent': 'DateTime', 'fecha_sal': 'DateTime', 'act': 'Range', 'gran_cap': 'Range', 'tipus_des': 'TextEdit', 'tit_des': 'TextEdit', 'tunel_des': 'TextEdit', 'rotond_des': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_EquipEnergetico_21.set('fieldImages', {'dxf_layer': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_ViasPecuarias_22.set('fieldImages', {'cod1': 'TextEdit', 'cod2': 'TextEdit', 'cod3': 'TextEdit', 'cod4': 'TextEdit', 'cod_vp': 'TextEdit', 'tipo_vp': 'TextEdit', 'aproba_1': 'TextEdit', 'aproba_2': 'TextEdit', 'boe_1': 'TextEdit', 'boe_2': 'TextEdit', 'bop_1': 'TextEdit', 'bop_2': 'TextEdit', 'dogv_1': 'TextEdit', 'dogv_2': 'TextEdit', 'provincia': 'TextEdit', 'munic_1': 'TextEdit', 'munic_2': 'TextEdit', 'deslinde': 'TextEdit', 'mojon': 'TextEdit', 'legal_1': 'TextEdit', 'legal_2': 'TextEdit', 'neces': 'TextEdit', 'nomb_vp': 'TextEdit', 'obser_vp': 'TextEdit', 'long_c_1': 'TextEdit', 'long_c_2': 'TextEdit', 'sup_vp_1': 'TextEdit', 'sup_vp_2': 'TextEdit', 'tipo_leyen': 'TextEdit', 'long_desli': 'TextEdit', 'revisado': 'TextEdit', 'hyperlink': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_ViasPecuarias_elementos_23.set('fieldImages', {'provincia': 'TextEdit', 'munic_el': 'TextEdit', 'cod5': 'TextEdit', 'nomb_el': 'TextEdit', 'tipo_el': 'TextEdit', 'cod6': 'TextEdit', 'cod_el': 'TextEdit', 'aproba_el': 'TextEdit', 'sup_el': 'TextEdit', 'dogv_el': 'TextEdit', 'boe_el': 'TextEdit', 'bop_el': 'TextEdit', 'clasificad': 'TextEdit', 'obser_el': 'TextEdit', 'vp_el': 'TextEdit', });
lyr_Arbolesmonumentales_24.set('fieldImages', {'n_ipa': 'TextEdit', 'titularida': 'TextEdit', 'tipo': 'TextEdit', 'especie': 'TextEdit', 'n_popular': 'TextEdit', 'tronco': 'TextEdit', 'altura': 'TextEdit', 'copa': 'TextEdit', 'propiedad': 'TextEdit', 'entorno_p': 'TextEdit', });
lyr_LimiteTMChiva_25.set('fieldImages', {'FID': 'TextEdit', 'Superficie': 'TextEdit', 'Superf C': 'TextEdit', });
lyr_EstadoActual_Clasificacion_0.set('fieldLabels', {'cpm': 'no label', 'municipio': 'no label', 'expediente': 'no label', 'descripcio': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'contenido': 'no label', 'text_': 'no label', });
lyr_PlaneamVigente_GradoConsolidacion_1.set('fieldLabels', {'ID': 'no label', 'REGISTRO': 'no label', 'AUTORES': 'no label', 'APROBACIÓ': 'no label', 'ESTADO': 'no label', 'DESC': 'no label', 'AREA': 'no label', });
lyr_fore_montes_gestionados_descarga0_2.set('fieldLabels', {'provincia': 'no label', 'df': 'no label', 'municipio': 'no label', 'num_up': 'no label', 'cup': 'no label', 'texto': 'no label', 'etiquetas': 'no label', 'denominaci': 'no label', 'tipo': 'no label', 'area_del_c': 'no label', 'deslinde': 'no label', 'denomina_1': 'no label', 'amojonamie': 'no label', 'superficie': 'no label', 'pertenenci': 'no label', 'pertenen_1': 'no label', 'perimetro': 'no label', 'hectareas': 'no label', 'suma_super': 'no label', 'comarca_ca': 'no label', 'comarca_va': 'no label', 'escaneado_': 'no label', 'num_consul': 'no label', 'revision_c': 'no label', 'revision_1': 'no label', 'etiqueta_k': 'no label', 'expt_sstt': 'no label', 'resol_dg': 'no label', 'carpeta': 'no label', 'carpetacma': 'no label', 'informe_re': 'no label', 'informe__1': 'no label', 'proyecto_o': 'no label', 'resol_orde': 'no label', 'resol_or_1': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_Habitatsprotegidos_3.set('fieldLabels', {'hab_lay': 'no label', 'prov_inb_h': 'no label', 'nuts_inb_h': 'no label', 'prov_n_inb': 'no label', 'ccaa_inb_h': 'no label', 'ccaa_n_inb': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_Microreservas_4.set('fieldLabels', {'nombre': 'no label', 'hect_web': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'dogv_decla': 'no label', 'titularita': 'no label', 'perim_geo': 'no label', 'area_geo': 'no label', 'hect_geo': 'no label', 'hect_ofi': 'no label', 'leg_link': 'no label', 'dogv_corre': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_MontesCatalogados_5.set('fieldLabels', {'provincia': 'no label', 'df': 'no label', 'municipio': 'no label', 'num_up': 'no label', 'cup': 'no label', 'texto': 'no label', 'etiquetas': 'no label', 'denominaci': 'no label', 'tipo': 'no label', 'area_del_c': 'no label', 'deslinde': 'no label', 'denomina_1': 'no label', 'amojonamie': 'no label', 'superficie': 'no label', 'pertenenci': 'no label', 'pertenen_1': 'no label', 'perimetro': 'no label', 'hectareas': 'no label', 'suma_super': 'no label', 'comarca_ca': 'no label', 'comarca_va': 'no label', 'escaneado_': 'no label', 'num_consul': 'no label', 'revision_c': 'no label', 'revision_1': 'no label', 'etiqueta_k': 'no label', 'expt_sstt': 'no label', 'resol_dg': 'no label', 'carpeta': 'no label', 'carpetacma': 'no label', 'informe_re': 'no label', 'informe__1': 'no label', 'proyecto_o': 'no label', 'resol_orde': 'no label', 'resol_or_1': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_ParajesMunicipales_6.set('fieldLabels', {'nombre': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'cod_ine': 'no label', 'hect_web': 'no label', 'dogv': 'no label', 'fecha': 'no label', 'comentario': 'no label', 'perim_geo': 'no label', 'area_geo': 'no label', 'hect_geo': 'no label', 'hect_ofi': 'no label', 'id_dogv': 'no label', 'id_correc': 'no label', 'cod_cat': 'no label', 'acuerdo_de': 'no label', 'correccion': 'no label', 'leg_link': 'no label', 'shape_leng': 'no label', 'enlace': 'no label', 'localid': 'no label', 'namespace': 'no label', 'legfoudate': 'no label', 'titledoc': 'no label', 'datedoc': 'no label', 'urldoc': 'no label', 'designatio': 'no label', 'percentage': 'no label', 'language': 'no label', 'namestatus': 'no label', 'nativeness': 'no label', 'pronunciat': 'no label', 'text': 'no label', 'script': 'no label', 'siteprotec': 'no label', 'desigschem': 'no label', 'designat_1': 'no label', 'sourcename': 'no label', 'datedoc_co': 'no label', 'datedoc__1': 'no label', 'desigsch_1': 'no label', 'versionid': 'no label', 'shape_Le_1': 'no label', 'shape_Area': 'no label', });
lyr_TerrenoForestal_7.set('fieldLabels', {'compatible': 'no label', 'forestal': 'no label', 'sup_ha': 'no label', 'prov': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_PRRPaisajesRelevanciaRegional_8.set('fieldLabels', {'cod_prr': 'no label', 'nombre_prr': 'no label', 'prr': 'no label', 'conjuntos': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_SNCZIzonasinundacion_9.set('fieldLabels', {'ID_ZONA': 'no label', 'ZONA': 'no label', 'TIPO_ZONA': 'no label', 'RIO': 'no label', 'LONG_KM': 'no label', 'HIPOTESIS': 'no label', 'HIDROLOGIA': 'no label', 'PRECISION': 'no label', 'HIDRAUL': 'no label', 'ESTUDIO': 'no label', 'TIPO_EST': 'no label', 'DOCUMENTO': 'no label', 'FECHA_APRO': 'no label', 'FECHA_GEO': 'no label', 'ORGANISMO': 'no label', 'CLAVE_EXPE': 'no label', 'DEMARCACIO': 'no label', 'ID_DEMAR': 'no label', 'Q_M3_S': 'no label', 'ZI_DIRECTI': 'no label', 'CICLO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PatricovaenChiva_10.set('fieldLabels', {'codigo': 'no label', 'zona': 'no label', 'd_pelig': 'no label', 'n_pelig': 'no label', 'corriente': 'no label', 'tipo': 'no label', 'desde': 'no label', 'hasta': 'no label', 'calado': 'no label', 'retorno': 'no label', 'ambito': 'no label', 'hectares': 'no label', 'area': 'no label', 'hyperlink': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_DPHDeslindado2022_11.set('fieldLabels', {'ID_ZONA': 'no label', 'ZONA': 'no label', 'TIPO_ZONA': 'no label', 'RIO': 'no label', 'LONG_KM': 'no label', 'HIPOTESIS': 'no label', 'HIDROLOGIA': 'no label', 'PRECISION': 'no label', 'HIDRAUL': 'no label', 'ESTUDIO': 'no label', 'TIPO_EST': 'no label', 'ESCALA_REP': 'no label', 'DOCUMENTO': 'no label', 'FECHA': 'no label', 'ORGANISMO': 'no label', 'CLAVE_EXPE': 'no label', 'DEMARCACIO': 'no label', 'ID_DEMAR': 'no label', 'Q_M3_S': 'no label', 'FECHA_RESO': 'no label', 'FECHA_PUBL': 'no label', 'BO_PUBLICA': 'no label', });
lyr_CorredorTerritorialFluvial_12.set('fieldLabels', {'tipo': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_CaucesCartografiados_13.set('fieldLabels', {'ID_ZONA': 'no label', 'ZONA': 'no label', 'TIPO_ZONA': 'no label', 'RIO': 'no label', 'LONG_KM': 'no label', 'HIPOTESIS': 'no label', 'HIDROLOGIA': 'no label', 'PRECISION': 'no label', 'HIDRAUL': 'no label', 'ESTUDIO': 'no label', 'TIPO_EST': 'no label', 'ESCALA_REP': 'no label', 'DOCUMENTO': 'no label', 'FECHA': 'no label', 'ORGANISMO': 'no label', 'CLAVE_EXPE': 'no label', 'DEMARCACIO': 'no label', 'ID_DEMAR': 'no label', 'Q_M3_S': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Ferrocarriles_14.set('fieldLabels', {'id': 'no label', });
lyr_AfeccionesConselleria_15.set('fieldLabels', {'mrb_dist': 'no label', });
lyr_AfeccionesDiputacion_16.set('fieldLabels', {'mrb_dist': 'no label', });
lyr_Afeccionesferrocarriles_17.set('fieldLabels', {'mrb_dist': 'no label', });
lyr_AfeccionesMinisterio_18.set('fieldLabels', {'mrb_dist': 'no label', });
lyr_AreasPrioritAves_19.set('fieldLabels', {'nombre': 'no label', 'norma': 'no label', 'fecha': 'no label', 'docv': 'no label', 'leg_link': 'no label', 'resolucion': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_RedViariaexistente_20.set('fieldLabels', {'modificado': 'no label', 'n_plat': 'no label', 'length': 'no label', 'long': 'no label', 'nom_ant': 'no label', 'nom_act': 'no label', 'nom_fut': 'no label', 'tit_ant': 'no label', 'tit_act': 'no label', 'tit_fut': 'no label', 'tipus_ant': 'no label', 'tipus_act': 'no label', 'tipus_fut': 'no label', 'lleg_act': 'no label', 'lleg_fut': 'no label', 'rotonda': 'no label', 'sentidos': 'no label', 'sec_cons': 'no label', 'tunel': 'no label', 'id_tunel': 'no label', 'lleg_wms': 'no label', 'fecha_mod': 'no label', 'fecha_ent': 'no label', 'fecha_sal': 'no label', 'act': 'no label', 'gran_cap': 'no label', 'tipus_des': 'no label', 'tit_des': 'no label', 'tunel_des': 'no label', 'rotond_des': 'no label', 'shape_Leng': 'no label', });
lyr_EquipEnergetico_21.set('fieldLabels', {'dxf_layer': 'no label', 'shape_Leng': 'no label', });
lyr_ViasPecuarias_22.set('fieldLabels', {'cod1': 'no label', 'cod2': 'no label', 'cod3': 'no label', 'cod4': 'no label', 'cod_vp': 'no label', 'tipo_vp': 'no label', 'aproba_1': 'no label', 'aproba_2': 'no label', 'boe_1': 'no label', 'boe_2': 'no label', 'bop_1': 'no label', 'bop_2': 'no label', 'dogv_1': 'no label', 'dogv_2': 'no label', 'provincia': 'no label', 'munic_1': 'no label', 'munic_2': 'no label', 'deslinde': 'no label', 'mojon': 'no label', 'legal_1': 'no label', 'legal_2': 'no label', 'neces': 'no label', 'nomb_vp': 'no label', 'obser_vp': 'no label', 'long_c_1': 'no label', 'long_c_2': 'no label', 'sup_vp_1': 'no label', 'sup_vp_2': 'no label', 'tipo_leyen': 'no label', 'long_desli': 'no label', 'revisado': 'no label', 'hyperlink': 'no label', 'shape_Leng': 'no label', });
lyr_ViasPecuarias_elementos_23.set('fieldLabels', {'provincia': 'no label', 'munic_el': 'no label', 'cod5': 'no label', 'nomb_el': 'no label', 'tipo_el': 'no label', 'cod6': 'no label', 'cod_el': 'no label', 'aproba_el': 'no label', 'sup_el': 'no label', 'dogv_el': 'no label', 'boe_el': 'no label', 'bop_el': 'no label', 'clasificad': 'no label', 'obser_el': 'no label', 'vp_el': 'no label', });
lyr_Arbolesmonumentales_24.set('fieldLabels', {'n_ipa': 'no label', 'titularida': 'no label', 'tipo': 'no label', 'especie': 'no label', 'n_popular': 'no label', 'tronco': 'no label', 'altura': 'no label', 'copa': 'no label', 'propiedad': 'no label', 'entorno_p': 'no label', });
lyr_LimiteTMChiva_25.set('fieldLabels', {'FID': 'hidden field', 'Superficie': 'no label', 'Superf C': 'no label', });
lyr_LimiteTMChiva_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});