## Aplicacion de consulta de clima (Parte Front End)

### Consigna

Desarrollar una app full client-side que permita visualizar el pronostico climatico actual y de los proximos 5 dias en la ubicacion actual y que permita visualizar el pronostico de otras 5 ciudades seleccionables.

Se debe diseñar el UI que se considere mas acorde (No se valoran habilidades de diseño, sino de uso de componentes). Los datos deben ser consumidos de la API externa.

Ademas del desarrollo especifico de las funcionalidades, se requieren identificar y generar los casos de test que se consideren necesarios.

### Dependencias y librerias utilizadas

* **Fetch:** Axios/Fetch API
* **Date parsing:** Moment
* **Testing:** Jest/Enzyme
* **Location:** IP-API

### Como utilizar

1) Descargar o clonar este repositorio
2) Ingresar en la carpeta del proyecto `cd weather-app`
3) Instalar dependencias `npm i`
4) Abrir ejecutando `npm run`
5) Testear ejecutando `npm test`

#### Aclaraciones y/o cosas para arreglar:

**App.js** Pude pasar como props las distintas ciudades en los Forecast. En el componente `Cities.js` las props pasan directamente y actualizan el query en base a esto, pero el problema se me genero con la ciudad actual `CurrentCity.js` ya que las props pasarian inversamente respecto al otro. En este caso, la ciudad actual queda guardada en el state pero no supe como traerla para que `Forecast.js` la tome.

**CurrentCity.js** La consola tira un bad request al ejecutar este componente, pero no entiendo por que ya que la informacion llega perfecta. Revisar hooks city y currentCity para actualizar el link del query. Tal vez puedo utilizar uno solo ya que los dos, al fin y al cabo, devuelven la misma informacion.

**General** Tuve que hacer `<Redirect from="/" to="/main" />` cuando apenas se abre la app, por que si iniciaba en "Ciudad Actual", al hacer click en otra ciudad se superpone el contenido pero nunca desaparece el primero.
So optaba por dejarlo como estaba pero poniendo el path de "Ciudad Actual" como /main, al iniciar el contenedor se encontraba sin informacion, quedando esteticamente feo.

