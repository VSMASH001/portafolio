var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Vue!'
    }
})
new Vue({
    el: '#demo',
    data: {
        show: true,
        pagina:1,
        listaCapacidades:[
            {
                id:1,
                conocimiento: 'Microsoft Excel',
                nivel: 'Avanzado',
                descripcion: 'Manejo funciones avanzadas y tablas dinamicas'
            },
            {
                id:2,
                conocimiento: 'Macros VBA',
                nivel: 'Intermedio',
                descripcion: 'Manejo codigo VBA y creacion de formularios'
            },
            {
                id:3,
                conocimiento: 'Power BI',
                nivel: 'Intermedio',
                descripcion: 'Manejo extraccion de datos, limpieza y creacion de dashboards'
            },
            {
                id:4,
                conocimiento: 'SQL',
                nivel: 'Intermedio',
                descripcion: 'Manejo creacion, consulta, eliminacion y actualizacion de datos'
            },
            {
                id:5,
                conocimiento: 'BIZAGI',
                nivel: 'Intermedio',
                descripcion: 'Manejo modelamiento de actividades, procesos y subprocesos'
            },
            {
                id:6,
                conocimiento: 'Programacion Web',
                nivel: 'Intermedio',
                descripcion: 'Manejo html, css, javasript y vue.js'
            }
        ]
    }
})